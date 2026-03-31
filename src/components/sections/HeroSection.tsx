import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { ShieldCheckIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const useCounter = (target: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const HeroSection: React.FC = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cases = useCounter(1247, 2200, countersStarted);
  const years = useCounter(26, 1500, countersStarted);
  const rate = useCounter(99, 1800, countersStarted);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const trustBadges = [
    { icon: TrophyIcon, text: '대통령 표창 수상' },
    { icon: ShieldCheckIcon, text: '행정고시 37회 합격' },
    { icon: UserGroupIcon, text: '경기도 부시장 역임' },
  ];

  const stats = [
    { value: cases, suffix: '건+', label: '누적 처리 실적' },
    { value: years, suffix: '년', label: '고위공무원 경력' },
    { value: rate, suffix: '%', label: '고객 만족도' },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-blue-600/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent" />
        {/* 격자 패턴 */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* 왼쪽 텍스트 */}
          <div className="flex-1 text-center lg:text-left">
            {/* 신뢰 배지들 */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {trustBadges.map((badge, i) => (
                <motion.span
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/8 border border-white/15 rounded-full text-xs text-slate-300 font-medium backdrop-blur-sm"
                >
                  <badge.icon className="h-3.5 w-3.5 text-amber-400" />
                  {badge.text}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            >
              복잡한 행정,
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                전문가에게
              </span>
              <br />
              맡기세요
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              경기도 남양주시 부시장을 역임한{' '}
              <span className="text-slate-200 font-semibold">26년 고위공무원 출신</span>
              이 직접 처리합니다.
              인허가·행정심판·민원 업무를 정확하고 빠르게.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollTo('#contact')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-base rounded-2xl shadow-xl shadow-amber-400/20 transition-all"
              >
                무료 상담 신청하기
              </motion.button>
              <motion.a
                href="tel:031-123-4567"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 hover:bg-white/15 border border-white/20 text-white font-semibold text-base rounded-2xl backdrop-blur-sm transition-all"
              >
                <PhoneIcon className="h-4 w-4" />
                즉시 전화 상담
              </motion.a>
            </motion.div>
          </div>

          {/* 오른쪽 통계 카드 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0 w-full max-w-sm lg:max-w-xs xl:max-w-sm"
          >
            <div className="bg-white/6 backdrop-blur-xl border border-white/12 rounded-3xl p-8 shadow-2xl">
              <p className="text-slate-400 text-sm font-medium mb-6 text-center">검증된 실적</p>
              <div className="space-y-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-slate-400 text-sm">{stat.label}</span>
                    <span className="text-2xl font-extrabold text-white tabular-nums">
                      {stat.value.toLocaleString()}{stat.suffix}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-center text-slate-500 text-xs mb-3">무료 상담 가능 시간</p>
                <div className="text-center">
                  <p className="text-slate-200 text-sm font-semibold">평일 09:00 — 18:00</p>
                  <p className="text-slate-400 text-xs mt-1">토요일 09:00 — 13:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 스크롤 유도 */}
      <motion.button
        onClick={() => scrollTo('#about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
      >
        <ChevronDownIcon className="h-7 w-7" />
      </motion.button>
    </section>
  );
};

export default HeroSection;