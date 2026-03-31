import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import {
  PhoneIcon as PhoneSolid,
  EnvelopeIcon as EnvelopeSolid,
  MapPinIcon as MapSolid,
} from '@heroicons/react/24/solid';
import { UserGroupIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: '전문가 소개', href: '#about' },
    { name: '서비스 안내', href: '#services' },
    { name: '처리 실적', href: '#about' },
    { name: '고객 후기', href: '#about' },
    { name: '상담 문의', href: '#contact' },
    { name: '자주 묻는 질문', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // SNS 링크 설정 — 실제 계정 URL로 교체하세요
  const snsLinks = [
    {
      name: '카카오채널',
      href: 'https://pf.kakao.com/_your_channel_id', // 카카오 비즈니스 채널 ID 입력
      bg: '#FEE500',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#3C1E1E">
          <path d="M12 3C7.03 3 3 6.36 3 10.5c0 2.64 1.6 4.96 4.03 6.36L6.1 20.2a.37.37 0 00.54.42l4.1-2.7c.41.05.82.08 1.26.08 4.97 0 9-3.36 9-7.5S16.97 3 12 3z" />
        </svg>
      ),
    },
    {
      name: '네이버블로그',
      href: 'https://blog.naver.com/your_blog_id', // 네이버 블로그 ID 입력
      bg: '#03C75A',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
          <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
        </svg>
      ),
    },
    {
      name: '유튜브',
      href: 'https://youtube.com/@your_channel', // 유튜브 채널 ID 입력
      bg: '#FF0000',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
          <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.52V8.48L15.84 12l-6.09 3.52z" />
        </svg>
      ),
    },
    {
      name: '인스타그램',
      href: 'https://instagram.com/your_account', // 인스타그램 계정 입력
      bg: '#E1306C',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: '페이스북',
      href: 'https://facebook.com/your_page', // 페이스북 페이지 입력
      bg: '#1877F2',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #1e3a5f 50%, #1e2a4a 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* 회사 소개 */}
          <div>
            {/* 로고 */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">박</span>
              </div>
              <div>
                <div className="text-xl font-extrabold text-white tracking-tight leading-none">PARK.S.H 행정사</div>
                <div className="text-xs text-slate-400 mt-0.5">신뢰할 수 있는 행정 전문가</div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              26년간의 고위공무원 경험을 바탕으로 <span className="text-white font-semibold">정확하고 신속한 행정 서비스</span>를 제공합니다. 대통령 표창을 받은 검증된 전문성으로 고객의 행정업무를 완벽하게 처리해드립니다.
            </p>

            {/* 통계 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/10 rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserGroupIcon className="h-5 w-5 text-slate-300" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">1,247+</div>
                  <div className="text-xs text-slate-400">처리 건수</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">98.5%</div>
                  <div className="text-xs text-slate-400">만족도</div>
                </div>
              </div>
            </div>

            {/* SNS */}
            <div>
              <p className="text-slate-500 text-xs mb-2.5 font-medium tracking-wide uppercase">소셜 미디어</p>
              <div className="flex gap-2 flex-wrap">
                {snsLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className="w-9 h-9 rounded-lg flex items-center justify-center hover:opacity-90 hover:scale-110 transition-all duration-200"
                    style={{ backgroundColor: s.bg }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 tracking-wide">빠른 링크</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-colors group"
                  >
                    <ChevronRightIcon className="h-3.5 w-3.5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 & 뉴스레터 */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 tracking-wide">연락처</h3>
            <div className="space-y-3 mb-8">
              <a href="tel:031-123-4567" className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600/50 transition-colors">
                  <PhoneSolid className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm group-hover:text-indigo-300 transition-colors">031-123-4567</div>
                  <div className="text-slate-400 text-xs">평일 09:00 - 18:00</div>
                </div>
              </a>
              <a href="mailto:admin@parksinhwan.com" className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600/50 transition-colors">
                  <EnvelopeSolid className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm group-hover:text-indigo-300 transition-colors">admin@parksinhwan.com</div>
                  <div className="text-slate-400 text-xs">24시간 문의 접수</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapSolid className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">경기도 남양주시</div>
                  <div className="text-slate-400 text-xs">방문 상담 가능</div>
                </div>
              </div>
            </div>

            {/* 뉴스레터 */}
            <div className="bg-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📰</span>
                <h4 className="text-white font-bold text-sm">뉴스레터 구독</h4>
              </div>
              <p className="text-slate-400 text-xs mb-4 leading-relaxed">행정업무 팁과 법령 변경사항을 받아보세요</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소 입력"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-400 mb-3"
              />
              <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-colors">
                구독하기
              </button>
            </div>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© {currentYear} PARK.S.H 행정사 사무소. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">서비스 이용약관</a>
            <a href="#" className="hover:text-white transition-colors">사이트맵</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;