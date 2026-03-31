import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DocumentTextIcon,
  BuildingOfficeIcon,
  ScaleIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  CogIcon,
  ArrowRightIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge: string;
  badgeColor: string;
  accentColor: string;
}

const services: Service[] = [
  {
    id: 'permit',
    icon: DocumentTextIcon,
    title: '인허가 업무',
    subtitle: '건축 · 개발 · 사업',
    description: '건축허가부터 개발행위허가까지. 복잡한 인허가 절차를 원스톱으로 처리합니다.',
    features: ['건축허가 · 신고', '개발행위허가', '사업계획승인', '용도변경'],
    badge: '전문특화',
    badgeColor: 'bg-blue-100 text-blue-700',
    accentColor: 'from-blue-500 to-blue-700',
  },
  {
    id: 'appeal',
    icon: ScaleIcon,
    title: '행정심판 · 소송',
    subtitle: '권리구제 전문',
    description: '부당한 행정처분에 대해 전문적으로 대응합니다. 높은 승소율로 권리를 지킵니다.',
    features: ['행정심판 청구', '행정소송 대리', '이의신청', '집행정지'],
    badge: '고승소율',
    badgeColor: 'bg-red-100 text-red-700',
    accentColor: 'from-red-500 to-rose-700',
  },
  {
    id: 'business',
    icon: BuildingOfficeIcon,
    title: '사업자 등록',
    subtitle: '개인 · 법인',
    description: '신속하고 정확한 사업자 등록 대행. 사업 시작의 첫 단추를 함께합니다.',
    features: ['사업자등록', '휴·폐업 신고', '변경신고', '법인설립'],
    badge: '당일처리',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    accentColor: 'from-emerald-500 to-teal-700',
  },
  {
    id: 'document',
    icon: ClipboardDocumentCheckIcon,
    title: '서류 대행',
    subtitle: '공공기관 · 행정',
    description: '각종 공공기관 제출 서류를 정확하게 작성·접수합니다. 진행 상황을 실시간 안내합니다.',
    features: ['각종 신고서 작성', '신청서 대리접수', '서류 번역·공증', '진행상황 관리'],
    badge: '원스톱',
    badgeColor: 'bg-violet-100 text-violet-700',
    accentColor: 'from-violet-500 to-purple-700',
  },
  {
    id: 'consulting',
    icon: UserGroupIcon,
    title: '행정 컨설팅',
    subtitle: '맞춤 전문 상담',
    description: '사전 상담부터 절차 안내, 비용 산정까지. 고객 맞춤형 행정 솔루션을 제공합니다.',
    features: ['무료 사전 상담', '절차 · 비용 안내', '맞춤 전략 수립', '전문가 직접 상담'],
    badge: '무료상담',
    badgeColor: 'bg-amber-100 text-amber-700',
    accentColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'management',
    icon: CogIcon,
    title: '업무 관리',
    subtitle: '지속 관리 서비스',
    description: '허가 이후 지속적인 의무 관리까지. 행정 업무의 전 과정을 책임집니다.',
    features: ['갱신 · 재허가', '정기 신고 대행', '법령 변경 모니터링', '사후 관리'],
    badge: '지속관리',
    badgeColor: 'bg-slate-100 text-slate-700',
    accentColor: 'from-slate-500 to-slate-700',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const ServicesSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-slate-900 text-slate-100 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
            서비스 안내
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            필요한 모든 행정업무
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            인허가부터 행정심판까지. 26년 고위공무원 출신 전문가가 직접 처리하는 맞춤 서비스.
          </p>
        </motion.div>

        {/* 서비스 카드 그리드 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredId(service.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-white border border-slate-200 rounded-3xl p-7 cursor-pointer overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/8 hover:-translate-y-1"
            >
              {/* 배경 그라데이션 (hover) */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-3xl pointer-events-none`}
              />

              {/* 배지 */}
              <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-lg mb-4 ${service.badgeColor}`}>
                {service.badge}
              </span>

              {/* 아이콘 + 제목 */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br ${service.accentColor} flex items-center justify-center shadow-lg`}>
                  <service.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-400">{service.subtitle}</p>
                </div>
              </div>

              {/* 설명 */}
              <p className="text-sm text-slate-600 leading-relaxed mb-5">{service.description}</p>

              {/* 기능 목록 */}
              <ul className="space-y-1.5 mb-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckIcon className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* 상담 링크 */}
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-1 text-sm font-semibold text-slate-400 group-hover:text-slate-900 transition-colors"
              >
                상담 신청하기
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* 하단 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">원하시는 서비스가 없으신가요?</p>
          <motion.button
            onClick={() => scrollTo('#contact')}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-slate-800 transition-all"
          >
            무료 상담으로 문의하기
            <ArrowRightIcon className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;