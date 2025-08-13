# 행정사 랜딩페이지 웹앱 - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## 프로젝트 개요
이 프로젝트는 행정사 전문가를 위한 랜딩페이지 웹앱입니다.

## 기술 스택
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Styling**: Tailwind CSS + Headless UI
- **Animation**: Framer Motion
- **Icons**: Heroicons + Lucide React
- **Routing**: React Router DOM
- **API Integration**: Notion API, Google Forms
- **Deployment**: Vercel

## 프로젝트 구조
```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/             # 기본 UI 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   └── sections/       # 섹션별 컴포넌트
├── pages/              # 페이지 컴포넌트
├── services/           # API 서비스
├── utils/              # 유틸리티 함수
├── types/              # TypeScript 타입 정의
├── hooks/              # 커스텀 훅
└── lib/                # 설정 파일
```

## 1단계 기능
- ✅ React + Firebase + Vercel 배포
- ✅ Notion DB 연동
- ✅ Google Forms 연동
- 📱 반응형 디자인
- 🎨 모던 UI/UX

## 2단계 기능 (향후 계획)
- 🤖 AI FAQ 챗봇 + Zapier/RPA 자동화
- 🗺️ 지도/검색 + 공공데이터 활용
- 📄 전자문서 + PDF 템플릿 모듈

## 코딩 가이드라인
- TypeScript 사용 (any 타입 금지)
- 컴포넌트는 함수형으로 작성
- 커스텀 훅으로 로직 분리
- Tailwind CSS 클래스 우선 사용
- 반응형 디자인 필수 (mobile-first)
- 접근성 고려 (ARIA 속성)
- 성능 최적화 (React.memo, useMemo, useCallback)

## 행정사 도메인 특화 요구사항
- 전문성과 신뢰성 강조
- 법적 서비스 관련 용어 정확성
- 개인정보보호 중요성
- 정부 기관 연동 고려
- 전자문서 보안 강화
