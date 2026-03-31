import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navigation = [
    { name: '홈', href: '#home', id: 'home' },
    { name: '전문가 소개', href: '#about', id: 'about' },
    { name: '서비스', href: '#services', id: 'services' },
    { name: '상담 문의', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* 로고 */}
          <motion.button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl shadow-lg group-hover:shadow-slate-700/30 transition-shadow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-lg leading-none">박</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-extrabold tracking-tight leading-none transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                PARK.S.H 행정사
              </span>
              <span className={`text-xs mt-0.5 leading-none transition-colors ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>
                경기도 남양주 · 행정 전문가
              </span>
            </div>
          </motion.button>

          {/* 데스크탑 내비 */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? scrolled
                      ? 'text-slate-900'
                      : 'text-white'
                    : scrolled
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full ${scrolled ? 'bg-slate-900' : 'bg-white'}`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA 버튼 */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:031-123-4567"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
              }`}
            >
              <PhoneIcon className="h-4 w-4" />
              031-123-4567
            </a>
            <motion.button
              onClick={() => scrollTo('#contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl shadow-md hover:bg-slate-800 hover:shadow-lg transition-all"
            >
              무료 상담
            </motion.button>
          </div>

          {/* 모바일 버거 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    activeSection === item.id
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:031-123-4567"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-xl"
                >
                  <PhoneIcon className="h-4 w-4 text-slate-500" />
                  031-123-4567
                </a>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full px-4 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl"
                >
                  무료 상담 신청
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;