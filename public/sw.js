// Service Worker for PWA functionality
const CACHE_NAME = 'admin-lawyer-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// 캐시할 정적 리소스
const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// 캐시 전략
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cacheFirst',
  NETWORK_FIRST: 'networkFirst', 
  STALE_WHILE_REVALIDATE: 'staleWhileRevalidate'
};

// Install 이벤트
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Pre-caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Pre-cache failed:', error);
      })
  );
  
  // 새로운 Service Worker 즉시 활성화
  self.skipWaiting();
});

// Activate 이벤트
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // 이전 버전의 캐시 삭제
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Service Worker 즉시 제어 시작
  self.clients.claim();
});

// Fetch 이벤트 - 네트워크 요청 인터셉트
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Chrome extension 요청 무시
  if (request.url.startsWith('chrome-extension://')) {
    return;
  }
  
  // GET 요청만 처리
  if (request.method !== 'GET') {
    return;
  }
  
  // 정적 리소스 처리 (Cache First)
  if (STATIC_ASSETS.includes(url.pathname) || 
      request.destination === 'style' || 
      request.destination === 'script' ||
      request.destination === 'image') {
    
    event.respondWith(cacheFirstStrategy(request));
    return;
  }
  
  // HTML 페이지 처리 (Network First with fallback)
  if (request.destination === 'document') {
    event.respondWith(networkFirstStrategy(request));
    return;
  }
  
  // API 요청 처리 (Stale While Revalidate)
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(staleWhileRevalidateStrategy(request));
    return;
  }
  
  // 기본 전략: Network First
  event.respondWith(networkFirstStrategy(request));
});

// Cache First 전략
async function cacheFirstStrategy(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache First strategy failed:', error);
    
    // 오프라인 폴백
    if (request.destination === 'document') {
      return caches.match('/offline.html');
    }
    
    return new Response('Network error', { 
      status: 408, 
      statusText: 'Network timeout' 
    });
  }
}

// Network First 전략
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // 오프라인 폴백
    if (request.destination === 'document') {
      return caches.match('/offline.html');
    }
    
    return new Response('Offline content not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Stale While Revalidate 전략
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch((error) => {
    console.error('Stale while revalidate failed:', error);
    return cachedResponse;
  });
  
  return cachedResponse || fetchPromise;
}

// Background Sync 이벤트
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // 백그라운드에서 실행할 작업들
    console.log('Performing background sync...');
    
    // 예: 오프라인에서 저장된 데이터 동기화
    // await syncOfflineData();
    
    return Promise.resolve();
  } catch (error) {
    console.error('Background sync failed:', error);
    throw error;
  }
}

// Push 알림 이벤트
self.addEventListener('push', (event) => {
  console.log('Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : '새로운 알림이 있습니다.',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: '확인하기',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: '닫기',
        icon: '/icons/xmark.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('행정사 김전문', options)
  );
});

// 알림 클릭 이벤트
self.addEventListener('notificationclick', (event) => {
  console.log('Notification click received.');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    // 특정 페이지로 이동
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // 알림만 닫기
    event.notification.close();
  } else {
    // 기본 동작: 앱 열기
    event.waitUntil(
      clients.matchAll().then((clientList) => {
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
    );
  }
});

// 메시지 이벤트 (클라이언트와 통신)
self.addEventListener('message', (event) => {
  console.log('Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// 에러 이벤트
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  event.preventDefault();
});

console.log('Service Worker loaded');