# PARK.S.H 행정사 웹사이트

경기도 남양주시 부시장 출신, 26년 고위공무원 경력의 박신환 행정사 공식 홈페이지.

## 기술 스택
zQC0K7sLjhQ9lcdL#####
- **React** 19.1.0 + TypeScript
- **Vite** 7.3.1
- **Tailwind CSS** 3.4
- **Framer Motion** (애니메이션)
- **React Router** v6 (라우팅)
- **Firebase** (백엔드)

## 로컬 개발

```bash
npm install
npm run dev
```

http://localhost:5173 에서 확인

## 빌드

```bash
npm run build
npm run preview
```

## 프로젝트 구조

```
src/
├── App.router.tsx          # 라우터 진입점
├── main.tsx                # React 진입점
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # 상단 헤더 (연락처 바 + 네비)
│   │   └── Footer.tsx      # 하단 푸터 (다크 네이비)
│   ├── sections/
│   │   ├── HeroSection.tsx     # 메인 히어로 (오렌지 그라디언트)
│   │   ├── AboutSection.tsx    # 소개 섹션
│   │   ├── ServicesSection.tsx # 서비스 목록
│   │   └── ContactSection.tsx  # 문의 폼
│   └── ui/
│       ├── Button.tsx, Card.tsx, Input.tsx
│       ├── Toast.tsx, ToastContainer.tsx
│       ├── ErrorBoundary.tsx, LoadingSkeleton.tsx
├── pages/
│   ├── AboutPage.tsx
│   ├── FaqPage.tsx
│   ├── NoticePage.tsx
│   ├── ResourcesPage.tsx
│   ├── ServiceAppealPage.tsx   # 행정심판
│   ├── ServiceCivilPage.tsx    # 민원대행
│   └── ServiceLicensePage.tsx  # 인허가
├── hooks/
│   └── useContactForm.ts
└── utils/
    └── cn.ts
```

## 페이지 구성

| 경로 | 페이지 |
|------|--------|
| `/` | 메인 (Hero + About + Services + Contact) |
| `/about` | 전문가 소개 |
| `/service/appeal` | 행정심판 |
| `/service/civil` | 민원대행 |
| `/service/license` | 인허가 |
| `/faq` | 자주 묻는 질문 |
| `/notice` | 공지사항 |
| `/resources` | 자료실 |

## 연락처

- 전화: 031-123-4567
- 이메일: admin@parksinhwan.com
- 주소: 경기도 남양주시
