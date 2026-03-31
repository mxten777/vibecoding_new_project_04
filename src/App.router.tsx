// import React from 'react'; (React 18+ JSX 자동 변환)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ContactSection from './components/sections/ContactSection';
import AboutPage from './pages/AboutPage';
import ServiceAppealPage from './pages/ServiceAppealPage';
import ServiceCivilPage from './pages/ServiceCivilPage';
import ServiceLicensePage from './pages/ServiceLicensePage';
import FaqPage from './pages/FaqPage';
import NoticePage from './pages/NoticePage';
import ResourcesPage from './pages/ResourcesPage';
import KakaoChannelButton from './components/ui/KakaoChannelButton';
import './App.css';

// LocalBusiness JSON-LD 구조화 데이터 (구글 검색 노출 최적화)
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PARK.S.H 행정사',
  description: '26년 고위공무원 경력, 경기도 남양주시 부시장 출신 박신환 행정사. 행정심판·민원대행·인허가 전문.',
  url: 'https://parksinhwan.com',
  telephone: '031-123-4567',
  email: 'admin@parksinhwan.com',
  image: 'https://parksinhwan.com/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: '남양주시',
    addressRegion: '경기도',
    addressCountry: 'KR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  priceRange: '₩₩',
  areaServed: '경기도 남양주시',
  hasMap: 'https://map.naver.com',
};

function HomePage() {
  return (
    <>
      <Helmet>
        <title>PARK.S.H 행정사 | 경기도 남양주 행정 전문가</title>
        <meta name="description" content="26년 고위공무원 경력, 대통령 표창 수상. 행정심판·민원대행·인허가 전문 행정사. 무료 상담 031-123-4567" />
        <link rel="canonical" href="https://parksinhwan.com/" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service/appeal" element={<ServiceAppealPage />} />
            <Route path="/service/civil" element={<ServiceCivilPage />} />
            <Route path="/service/license" element={<ServiceLicensePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <KakaoChannelButton />
    </BrowserRouter>
  );
}

export default App;
