import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {
  PhoneIcon as PhoneSolidIcon,
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: '홈', href: '#home' },
    { name: '전문가 소개', href: '#about' },
    { name: '서비스', href: '#services' },
    { name: '실적', href: '#about' },
    { name: '상담 문의', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* 상단 연락처 바 */}
      <div className="bg-slate-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center py-2 gap-x-4 gap-y-1">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a href="tel:031-123-4567" className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
                <PhoneSolidIcon className="h-3.5 w-3.5 text-blue-400" />
                <span>031-123-4567</span>
              </a>
              <a href="mailto:admin@parksinhwan.com" className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
                <EnvelopeIcon className="h-3.5 w-3.5 text-blue-400" />
                <span>admin@parksinhwan.com</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-slate-300">
              <div className="flex items-center gap-1.5">
                <ClockIcon className="h-3.5 w-3.5 text-blue-400" />
                <span>평일 09:00 - 18:00 / 토요일 09:00 - 13:00</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPinIcon className="h-3.5 w-3.5 text-blue-400" />
                <span>경기도 남양주시 (방문 상담 가능)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center shadow">
                <span className="text-white font-bold text-lg">박</span>
              </div>
              <div>
                <div className="text-xl font-extrabold text-indigo-700 tracking-tight leading-none">PARK.S.H 행정사</div>
                <div className="text-xs text-gray-500 mt-0.5">신뢰할 수 있는 행정 전문가</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-700 rounded-md hover:bg-indigo-50 transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full shadow transition-all duration-200"
              >
                🔥 무료 상담 신청
              </button>
              <a
                href="tel:031-123-4567"
                className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 hover:border-indigo-500 rounded-full text-gray-600 hover:text-indigo-600 transition-all duration-200"
                aria-label="전화하기"
              >
                <PhoneIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
              >
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 pb-1">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full transition-colors"
                >
                  🔥 무료 상담 신청
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;