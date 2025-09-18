import InquiryPage from './pages/InquiryPage';
            <Route path="/inquiry" element={<InquiryPage />} />
// import React from 'react'; (React 18+ JSX 자동 변환)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <ServicesSection />
                  <ContactSection />
                </>
              }
            />
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
    </BrowserRouter>
  );
}

export default App;
