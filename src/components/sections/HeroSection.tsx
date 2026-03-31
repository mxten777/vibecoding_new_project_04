import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/solid';

const HeroSection: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[85vh] flex items-center"
      style={{
        background: 'linear-gradient(135deg, #c2410c 0%, #b45309 25%, #92400e 50%, #7c2d12 75%, #991b1b 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-5 py-2 rounded-full mb-8"
          >
            🏆 대통령 표창 수상 전문가
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-xl">
              🏛️ PARK.S.H 행정사
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 font-semibold mb-8 tracking-wide">
              26년 고위공무원 경력 &middot; 신뢰할 수 있는 행정 전문가
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-orange-50 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            경기도 남양주시 부시장을 역임한{' '}
            <span className="text-yellow-300 font-bold">검증된 전문성</span>
            으로 여러분의 복잡한 행정업무를{' '}
            <span className="text-blue-300 font-bold">정확하고 신속하게</span>
            {' '}처리해드립니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 px-8 py-4 bg-white text-orange-800 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:bg-orange-50 transition-all duration-300 hover:scale-105"
            >
              🔥 무료 상담 신청하기
            </button>
            <a
              href="tel:031-123-4567"
              className="flex items-center gap-2 px-8 py-4 bg-black/25 backdrop-blur-sm border border-white/40 text-white font-bold text-lg rounded-2xl hover:bg-black/35 transition-all duration-300 hover:scale-105"
            >
              <PhoneIcon className="h-5 w-5" />
              즉시 전화상담
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
