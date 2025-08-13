import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  UserGroupIcon 
} from '@heroicons/react/24/solid';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const features = [
    {
      icon: CheckCircleIcon,
      title: '26년 공무원 경력',
      description: '경기도 부시장 출신 전문가',
      bgColor: 'bg-primary-100',
      iconColor: 'text-primary-600',
      borderColor: 'border-primary-200/50',
    },
    {
      icon: ClockIcon,
      title: '신속한 처리',
      description: '최단 시간 내 업무 완료',
      bgColor: 'bg-success-100',
      iconColor: 'text-success-600',
      borderColor: 'border-success-200/50',
    },
    {
      icon: ShieldCheckIcon,
      title: '100% 신뢰성',
      description: '정확하고 안전한 업무',
      bgColor: 'bg-accent-100',
      iconColor: 'text-accent-600',
      borderColor: 'border-accent-200/50',
    },
    {
      icon: UserGroupIcon,
      title: '1:1 맞춤 상담',
      description: '개별 맞춤형 서비스',
      bgColor: 'bg-warning-100',
      iconColor: 'text-warning-600',
      borderColor: 'border-warning-200/50',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden py-14 lg:py-20 bg-gradient-to-br from-primary-50 via-accent-50 to-success-100">
      {/* 입체적 배경 그라데이션 & 애니메이션 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-100/40 via-accent-100/30 to-success-100/40" />
        <div className="absolute top-[-6rem] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-2xl bg-gradient-to-br from-primary-200/40 via-accent-200/30 to-success-200/40 rounded-full blur-3xl opacity-60 animate-pulse-slow" />
        <div className="absolute bottom-[-8rem] right-0 w-[40vw] h-[40vw] max-w-xl bg-gradient-to-tr from-accent-200/30 to-transparent rounded-full blur-3xl opacity-50 animate-pulse-slow" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* 메인 헤드라인 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-7 leading-tight tracking-tight drop-shadow-xl">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-success-600 bg-clip-text text-transparent animate-gradient-x">26년 고위 공무원 경력</span>의<br />
              <span className="text-primary-700 drop-shadow-md">박신환 행정사</span>가<br />
              여러분의 성공을 돕겠습니다
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              경기도 부시장 출신, 1993년 행정고시 합격부터 2019년까지의 풍부한 경험으로<br />
              복잡한 행정업무와 정책 관련 업무를 전문적으로 처리해드립니다.
            </p>
          </motion.div>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="px-10 py-4 text-lg font-semibold shadow-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 transition-all duration-300 rounded-full flex items-center gap-2 scale-100 hover:scale-105 focus:ring-4 focus:ring-primary-200"
            >
              무료 상담 신청하기
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#services')}
              className="px-10 py-4 text-lg font-semibold border-2 border-primary-600 text-primary-700 hover:bg-primary-50 rounded-full transition-all duration-300 scale-100 hover:scale-105"
            >
              서비스 둘러보기
            </Button>
          </motion.div>

          {/* 특징 카드들 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
            }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-14"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(80,80,180,0.10)' }}
                className={`bg-white/90 backdrop-blur-lg rounded-2xl p-5 lg:p-7 shadow-lg border ${feature.borderColor} transition-all duration-300 cursor-pointer group hover:border-primary-400 hover:shadow-2xl`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${feature.bgColor} rounded-full p-3 lg:p-4 mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 lg:h-7 lg:w-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 통계 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 lg:p-12 border border-white/30 flex flex-col md:flex-row justify-center items-center gap-8"
          >
            <div className="flex-1 text-center">
              <div className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2 tracking-tight">1,000+</div>
              <div className="text-base lg:text-lg text-gray-600 font-medium">성공 프로젝트</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-success-600 to-primary-600 bg-clip-text text-transparent mb-2 tracking-tight">20+</div>
              <div className="text-base lg:text-lg text-gray-600 font-medium">년간 경력</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-warning-600 to-success-600 bg-clip-text text-transparent mb-2 tracking-tight">99%</div>
              <div className="text-base lg:text-lg text-gray-600 font-medium">만족도</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
