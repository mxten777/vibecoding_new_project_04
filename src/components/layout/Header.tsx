import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: '홈', href: '#home' },
    { name: '소개', href: '#about' },
    { name: '서비스', href: '#services' },
    { name: '경력', href: '#experience' },
    { name: '고객후기', href: '#testimonials' },
    { name: '문의', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/30 transition-all duration-300">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 flex items-center gap-2">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent drop-shadow-md">박신환</span>
                <span className="text-primary-700 font-bold">행정사</span>
              </h1>
            </div>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-7">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-700 hover:text-primary-700 px-2 py-1 text-base font-semibold transition-colors duration-200 group"
              >
                <span>{item.name}</span>
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* 상담 문의 버튼 */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="primary"
              size="md"
              className="text-base px-6 py-2 rounded-full shadow-md bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 transition-all duration-300"
            >
              무료 상담 문의
            </Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary-700 hover:bg-primary-100/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400 transition-all duration-200 shadow-sm"
            >
              <span className="sr-only">메뉴 열기</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 border-t border-white/30 shadow-xl rounded-b-2xl">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-primary-700 block px-3 py-2 text-lg font-semibold w-full text-left transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  variant="primary"
                  size="md"
                  className="w-full rounded-full shadow-md bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700"
                >
                  무료 상담 문의
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
