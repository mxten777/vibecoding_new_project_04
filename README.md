# PARK.S.H 행정사 웹사이트

경기도 남양주시 부시장 출신, 26년 고위공무원 경력의 박신환 행정사 공식 홈페이지.  
행정고시 37회 합격 · 대통령 표창 수상 · 누적 처리 1,247건+

---

## 기술 스택

| 분류 | 패키지 | 버전 |
|------|--------|------|
| UI 프레임워크 | React + TypeScript | 19.x / 5.x |
| 빌드 도구 | Vite | 7.x |
| 스타일 | Tailwind CSS | 3.4 |
| 애니메이션 | Framer Motion | 12.x |
| 라우팅 | React Router DOM | v6 |
| 백엔드/DB | Supabase | 2.x |
| 이메일 전송 | Web3Forms | — |
| 아이콘 | Heroicons + Headless UI | 24 / 2.x |
| SEO | React Helmet Async | 3.x |
| 배포 | Vercel | — |

---

## 환경 변수

`.env` 파일을 프로젝트 루트에 생성하고 아래 값을 설정합니다.  
Vercel 배포 시 동일한 키를 **Settings → Environment Variables** 에 추가해야 합니다.

```env
# Web3Forms — 이메일 전송 (https://web3forms.com)
VITE_WEB3FORMS_KEY=your_web3forms_access_key_here

# Supabase (https://supabase.com)
VITE_SUPABASE_URL=https://<project-id>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-public-key>
```

---

## 로컬 개발

```bash
npm install
npm run dev
```

`http://localhost:5173` (사용 중이면 5174) 에서 확인

## 빌드 & 미리보기

```bash
npm run build      # dist/ 생성
npm run preview    # 빌드 결과 로컬 확인
```

## 배포

```bash
vercel --prod      # Vercel CLI 직접 배포
# 또는 main 브랜치 push 시 자동 배포 (Vercel Git 연동 시)
```

---

## 프로젝트 구조

```
src/
├── App.router.tsx              # 라우터 진입점
├── main.tsx                    # React 진입점
├── index.css                   # 전역 스타일 (Pretendard 폰트, smooth scroll)
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # 글래스모피즘 헤더 (스크롤 감지 + 모바일 메뉴)
│   │   └── Footer.tsx          # 4열 그리드 푸터 (slate-950 + 앰버 액센트)
│   ├── sections/
│   │   ├── HeroSection.tsx     # 다크 히어로 (카운터 애니메이션 + 신뢰 배지)
│   │   ├── AboutSection.tsx    # 경력 타임라인 + 수상 + 태그 클라우드
│   │   ├── ServicesSection.tsx # 6개 서비스 카드 (호버 그라디언트)
│   │   └── ContactSection.tsx  # 다크 폼 레이아웃 (연락처 + 신청 폼)
│   └── ui/
│       ├── Button.tsx, Card.tsx, Input.tsx
│       ├── Toast.tsx, ToastContainer.tsx
│       └── ErrorBoundary.tsx, LoadingSkeleton.tsx
├── pages/
│   ├── AboutPage.tsx
│   ├── FaqPage.tsx             # Supabase faqs 테이블 연동 (아코디언 UI)
│   ├── NoticePage.tsx          # Supabase notices 테이블 연동 (스켈레톤 로딩)
│   ├── ResourcesPage.tsx
│   ├── ServiceAppealPage.tsx   # 행정심판·소송
│   ├── ServiceCivilPage.tsx    # 민원대행
│   └── ServiceLicensePage.tsx  # 인허가
├── hooks/
│   ├── useContactForm.ts       # Web3Forms + Supabase inquiries 동시 저장
│   ├── useFaqs.ts              # Supabase 조회 + 정적 폴백
│   └── useNotices.ts           # Supabase 조회 + 정적 폴백
├── lib/
│   └── supabase.ts             # Supabase 클라이언트 + isSupabaseConfigured
├── types/
│   ├── index.ts                # 공통 타입 (Notice, Faq, Inquiry 등)
│   └── supabase.ts             # DB 스키마 타입 (자동완성 지원)
└── utils/
    └── cn.ts                   # clsx + tailwind-merge 유틸
```

---

## Supabase 테이블 구성

Supabase SQL Editor 에서 아래 3개 테이블을 생성해야 합니다.  
DDL은 `src/lib/supabase.ts` 파일 상단 주석에 포함되어 있습니다.

| 테이블 | 용도 | RLS |
|--------|------|-----|
| `inquiries` | 상담 신청 폼 데이터 저장 | anon INSERT 허용 |
| `notices` | 공지사항 목록 | anon SELECT 허용 |
| `faqs` | 자주 묻는 질문 목록 | anon SELECT 허용 |

---

## 페이지 구성

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | 메인 | Hero + About + Services + Contact |
| `/about` | 전문가 소개 | 상세 경력 소개 |
| `/service/appeal` | 행정심판·소송 | 서비스 상세 |
| `/service/civil` | 민원대행 | 서비스 상세 |
| `/service/license` | 인허가 | 서비스 상세 |
| `/faq` | 자주 묻는 질문 | 아코디언 FAQ |
| `/notice` | 공지사항 | 게시판 목록 |
| `/resources` | 자료실 | 행정 자료 |

---

## 변경 이력

### v2.0.0 — 2026-03-31 (현재)
- **UI/UX 전면 리뉴얼**: 다크 slate-900/950 + 앰버 골드 디자인 시스템 적용
  - Header: 글래스모피즘 스크롤 효과, IntersectionObserver 활성 섹션 추적
  - HeroSection: 카운터 애니메이션, 신뢰 배지, 다크 배경
  - AboutSection: 경력 타임라인, 수상 내역, 전문 분야 태그 클라우드
  - ServicesSection: 6카드 그리드, 호버 그라디언트 오버레이
  - ContactSection: 다크 프리미엄 폼 레이아웃
  - Footer: 4열 그리드, 앰버 액센트 통일
- **Firebase → Supabase 마이그레이션**
  - `@supabase/supabase-js` 설치, `firebase` 패키지 제거
  - 3개 테이블(inquiries, notices, faqs) + RLS 정책 설정
  - `useNotices`, `useFaqs` 훅 추가 (정적 폴백 포함)
  - `useContactForm`: 이메일(Web3Forms) + DB(Supabase) 동시 저장
  - `NoticePage`, `FaqPage` 동적 데이터 연동
- **기술 부채 정리**
  - 미사용 패키지 6개 제거 (firebase, axios, lucide-react 등)
  - 사용하지 않는 파일 삭제 (firebase.ts, fileUtils.ts)
  - ESLint 오류 0건으로 정리
  - 빌드 경고 제거 (빈 청크, 불필요한 chunkSizeWarningLimit)
- **index.css**: Pretendard 기본 폰트, smooth scroll, 헤더 오프셋(80px)

### v1.0.0 — 2026-03 (이전)
- React 19 + TypeScript + Vite 7 + Tailwind CSS 3.4 초기 구축
- SNS 링크, SEO, Web3Forms 연락처 폼 구현

---

## 추후 작업 (TODO)

### 🔴 긴급 / 필수

- [ ] **실제 연락처 정보 입력**: `031-123-4567`, `admin@parksinhwan.com`, 주소를 실제 값으로 교체
- [ ] **SNS 링크 실제 URL 입력**: Footer의 카카오채널 / 네이버블로그 / 유튜브 / 인스타그램 / 페이스북 URL 교체
- [ ] **Web3Forms 키 설정**: `.env`의 `VITE_WEB3FORMS_KEY` 실제 키 입력 후 이메일 수신 테스트
- [ ] **Vercel 환경변수 확인**: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` 배포 환경에 설정

### 🟡 콘텐츠 보강

- [ ] **행정사 등록번호 입력**: Footer 하단 `행정사 등록번호: 제0000호` 실제 번호로 교체
- [ ] **카운터 숫자 검토**: HeroSection의 1,247건 / 26년 / 99% 수치 실제 데이터로 조정
- [ ] **수상 이력 검토**: AboutSection의 대통령 표창 / 행정고시 37회 / 경기도 부시장 내용 확인
- [ ] **서비스 페이지 콘텐츠**: `/service/appeal`, `/service/civil`, `/service/license` 상세 내용 작성
- [ ] **자료실(ResourcesPage)**: 실제 행정 자료 파일 업로드 또는 외부 링크 연결
- [ ] **Supabase notices/faqs 데이터 입력**: 공지사항 및 FAQ 실 데이터 DB에 등록

### 🟢 기능 개선

- [ ] **Google Analytics / Naver Analytics 연동**: 방문자 분석 추적 코드 삽입
- [ ] **카카오맵 지도 삽입**: ContactSection 또는 AboutPage에 사무소 위치 지도 추가
- [ ] **채팅 상담 위젯**: 카카오 채널 채팅 버튼 플로팅 추가 (우하단 고정)
- [ ] **Supabase Storage**: 자료실 파일 업로드 기능 구현 (PDF, HWP 등)
- [ ] **관리자 페이지**: Supabase Auth 기반 로그인 → 공지사항 / FAQ CRUD 관리 UI
- [ ] **다크모드**: 현재 다크 섹션과 라이트 섹션이 혼재 — 전체 다크모드 토글 옵션 고려

### 🔵 성능 / SEO

- [ ] **OG 이미지 생성**: `public/og-image.jpg` 소셜 공유용 이미지 제작 및 메타태그 등록
- [ ] **sitemap.xml 갱신**: 현재 `public/sitemap.xml` 실제 URL로 업데이트
- [ ] **robots.txt 확인**: `public/robots.txt` 크롤링 허용 범위 검토
- [ ] **이미지 최적화**: 사진 자료 추가 시 WebP 변환 + lazy loading 적용
- [ ] **Lighthouse 점수 측정**: 배포 후 성능 / 접근성 / SEO 점수 확인 및 개선

---

## 연락처

- 전화: 031-123-4567
- 이메일: admin@parksinhwan.com
- 주소: 경기도 남양주시
