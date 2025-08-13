# 행정사 랜딩페이지 웹앱 프로젝트 정리

## 프로젝트 개요
- **목적**: 행정사 전문가를 위한 신뢰성 높은 상담 랜딩페이지 제공
- **주요 기능**: 전화/서면/방문 상담, 신뢰도 지표, 프리미엄 CTA, 반응형 UI

## 기술 스택
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Headless UI, Framer Motion, Heroicons
- **Backend**: Firebase (Auth, Firestore, Storage)
- **API 연동**: Notion API, Google Forms
- **배포**: Vercel

## 폴더 구조
```
src/
├── components/
│   ├── ui/           # 버튼, 카드 등 기본 UI
│   ├── layout/       # Header, Footer 등 레이아웃
│   └── sections/     # Hero, About, Services, Consultation, Contact 등 섹션별 컴포넌트
├── pages/            # 라우팅 페이지
├── services/         # API 서비스
├── hooks/            # 커스텀 훅
├── lib/              # 설정 파일 (firebase 등)
├── types/            # 타입 정의
├── utils/            # 유틸리티 함수
```

## 주요 UI/UX 특징
- Glassmorphism 카드, gradient glow, floating light 등 최신 디자인
- 배지/버튼/신뢰도 지표에 아이콘 및 컬러 강조
- 모든 섹션에 부드러운 애니메이션 적용 (framer-motion)
- 모바일/PC 반응형, 접근성 고려

## 주요 섹션 설명
- **HeroSection**: 메인 타이틀, CTA, 배경 애니메이션
- **AboutSection**: 전문가 소개, 신뢰 강조
- **ServicesSection**: 제공 서비스 카드
- **ConsultationSection**: 전화/서면/방문 상담 카드, 신뢰도 지표, 프리미엄 CTA
- **ContactSection**: 문의 폼, 연락처 정보

## 커스텀 컴포넌트
- `Card`, `Button`, `Input`, `Chatbot`, `PerformanceDashboard` 등

## 성능/코딩 가이드
- TypeScript strict, any 금지
- 함수형 컴포넌트, 커스텀 훅 분리
- Tailwind CSS 우선, 불필요한 스타일 최소화
- React.memo, useMemo, useCallback 등 성능 최적화

## 도메인 특화 요구
- 전문성/신뢰성 강조, 법적 용어 정확성
- 개인정보보호, 전자문서 보안, 정부기관 연동 고려

## 배포 및 운영
- Vercel로 CI/CD, Firebase 연동
- Notion/Google Forms API 활용

---

> 최신 UI/UX와 신뢰성, 반응형, 접근성, 성능까지 모두 고려한 행정사 랜딩페이지 프로젝트입니다.
