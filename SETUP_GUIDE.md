# 행정사 랜딩페이지 웹앱 설정 가이드

## 📋 프로젝트 개요
이 가이드는 다른 행정사들이 동일한 환경으로 전문 랜딩페이지를 제작할 수 있도록 도와드립니다.

## 🛠️ 기술 스택
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Styling**: Tailwind CSS v3 + Headless UI
- **Animation**: Framer Motion
- **Icons**: Heroicons + Lucide React
- **Routing**: React Router DOM
- **API Integration**: Notion API, Google Forms
- **Deployment**: Vercel

## 🚀 프로젝트 초기 설정

### 1. 프로젝트 생성
```bash
npx create-vite@latest your-project-name --template react-ts
cd your-project-name
npm install
```

### 2. 핵심 의존성 설치
```bash
# 스타일링 및 UI
npm install -D tailwindcss@3 autoprefixer postcss
npm install @headlessui/react @heroicons/react lucide-react

# 애니메이션
npm install framer-motion

# 유틸리티
npm install clsx tailwind-merge

# 라우팅
npm install react-router-dom
npm install -D @types/react-router-dom

# Firebase
npm install firebase

# API 연동
npm install @notionhq/client
```

### 3. Tailwind CSS 설정

#### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

#### `postcss.config.js`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 4. CSS 설정

#### `src/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-height: 100vh;
  background-color: #ffffff;
  color: #1f2937;
}

/* 커스텀 컨테이너 스타일 */
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* 글래스모피즘 효과 */
.glass-effect {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* 호버 효과 */
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* 스크롤 부드럽게 */
html {
  scroll-behavior: smooth;
}

/* 포커스 스타일 개선 */
:focus {
  outline: 2px solid #0ea5e9;
  outline-offset: 2px;
}

/* 이미지 최적화 */
img {
  max-width: 100%;
  height: auto;
}

/* 접근성 개선 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### 5. 폴더 구조 생성
```
src/
├── components/
│   ├── ui/                 # 기본 UI 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── layout/             # 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/           # 섹션별 컴포넌트
│       ├── HeroSection.tsx
│       └── AboutSection.tsx
├── pages/                  # 페이지 컴포넌트
├── services/               # API 서비스
│   ├── notion.ts
│   ├── googleForms.ts
│   └── firebase.ts
├── utils/                  # 유틸리티 함수
│   └── cn.ts
├── types/                  # TypeScript 타입 정의
│   └── index.ts
├── hooks/                  # 커스텀 훅
│   └── index.ts
└── lib/                    # 설정 파일
    └── firebase.ts
```

### 6. 유틸리티 함수 - `src/utils/cn.ts`
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 7. 타입 정의 - `src/types/index.ts`
```typescript
// 공통 타입 정의
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  category: string;
  price?: string;
  duration?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export interface NotionPage {
  id: string;
  title: string;
  content: string;
  created_time: string;
  last_edited_time: string;
  properties: Record<string, any>;
}

export interface FirebaseUser {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}
```

### 8. 환경 변수 설정 - `.env.example`
```env
# Firebase 설정
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Notion API 설정
VITE_NOTION_API_KEY=your_notion_integration_key
VITE_NOTION_DATABASE_ID=your_database_id

# Google Forms 설정
VITE_GOOGLE_FORM_ID=your_google_form_id
```

### 9. 기본 컴포넌트 템플릿

#### `src/components/ui/Button.tsx`
```typescript
import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:ring-gray-500',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

### 10. 개발 스크립트 설정 - `package.json`
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
```

## 🎨 커스터마이징 가이드

### 1. 행정사 정보 변경
각 컴포넌트에서 다음 정보들을 수정하세요:

```typescript
// 변경할 정보들
const adminInfo = {
  name: "홍길동",           // 행정사 이름
  experience: "15년+",      // 경력
  specialty: "건축 인허가", // 전문 분야
  contact: {
    phone: "010-1234-5678",
    email: "admin@example.com",
    address: "서울시 강남구"
  }
};
```

### 2. 색상 팔레트 변경
`tailwind.config.js`에서 primary, secondary, accent 색상을 변경하세요:

```javascript
colors: {
  primary: {
    // 메인 브랜드 색상 (파란색 계열)
    500: '#3b82f6', // 원하는 색상으로 변경
    600: '#2563eb',
    // ... 기타 색상값들
  }
}
```

### 3. 로고 및 브랜딩
- `public/` 폴더에 로고 파일 추가
- Header 컴포넌트에서 로고 경로 수정
- 파비콘 교체 (`public/favicon.ico`)

## 🚀 실행 방법

### 개발 서버 실행
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
npm run preview
```

## 📦 배포 (Vercel)

### 1. Vercel 설치
```bash
npm install -g vercel
```

### 2. 배포 실행
```bash
vercel
```

### 3. 환경 변수 설정
Vercel 대시보드에서 환경 변수들을 설정하세요.

## 🔧 트러블슈팅

### 색상이 표시되지 않는 경우
```bash
# Tailwind CSS v3 재설치
npm uninstall tailwindcss
npm install -D tailwindcss@3 autoprefixer
npm run dev
```

### 개발 서버가 시작되지 않는 경우
```bash
# 캐시 삭제
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📚 추가 기능 구현

### 1. 2단계 기능 (향후 확장)
- 🤖 AI FAQ 챗봇
- 🗺️ 지도/검색 기능
- 📄 전자문서 및 PDF 템플릿
- 🔐 관리자 대시보드

### 2. SEO 최적화
- React Helmet 설치
- 메타 태그 설정
- 사이트맵 생성

### 3. 성능 최적화
- 이미지 최적화 (next/image 대안)
- 코드 스플리팅
- 지연 로딩 구현

## 📞 지원 및 문의

이 가이드를 따라하시면 전문적인 행정사 랜딩페이지를 제작하실 수 있습니다. 
추가 질문이나 커스터마이징 요청이 있으시면 언제든지 문의해 주세요!

---

**Created by**: 바이브코딩 스타일  
**Version**: 1.0.0  
**Last Updated**: 2025년 7월 4일
