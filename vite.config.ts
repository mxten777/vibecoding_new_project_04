import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/components'),
      '@/hooks': resolve(__dirname, './src/hooks'),
      '@/utils': resolve(__dirname, './src/utils'),
      '@/services': resolve(__dirname, './src/services'),
      '@/types': resolve(__dirname, './src/types'),
    }
  },
  build: {
    // 청크 크기 경고 제한 증가
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ui: ['@headlessui/react'],
          supabase: ['@supabase/supabase-js'],
        },
      },
    },
    // 소스맵 생성 (프로덕션에서는 false)
    sourcemap: false,
    // 최소화 활성화
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // console.log 제거
        drop_debugger: true, // debugger 제거
      },
    },
  },
  // 개발 서버 최적화
  server: {
    port: 5173,
    host: true,
    hmr: {
      overlay: false, // 오류 오버레이 비활성화
    },
  },
  // 프리뷰 서버 설정
  preview: {
    port: 4173,
    host: true,
  },
  // 의존성 최적화
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      '@heroicons/react/24/outline',
      '@heroicons/react/24/solid',
      '@headlessui/react',
      '@supabase/supabase-js',
    ],
    exclude: [
      'chart.js',
      'react-chartjs-2'
    ],
  },
  // 환경 변수 설정
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
})
