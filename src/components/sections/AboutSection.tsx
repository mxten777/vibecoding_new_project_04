import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, BriefcaseIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView();

  const career = [
    { year: '2019', role: '경기도 남양주시 부시장', org: '남양주시청' },
    { year: '2018', role: '경기도 경제노동실장', org: '경기도청' },
    { year: '2018', role: '경기도 정책실장', org: '경기도청' },
    { year: '2017', role: '경기도 균형발전기획실장', org: '경기도청' },
    { year: '2017', role: '경기도의회 사무처장', org: '경기도의회' },
  ];

  const awards = [
    '대통령 표창 — 지방행정 발전 기여 (2018)',
    '국무총리 표창 — 정책혁신 우수사례 (2017)',
    '경기도지사 표창 — 도정발전 기여 (2016)',
    '행정안전부 경제정책 우수사례 선정 (2018)',
  ];

  const expertise = [
    '인허가 · 개발행위허가 · 건축허가',
    '행정심판 · 행정소송 대리',
    '사업자등록 · 각종 신고 대행',
    '경제정책 · 일자리 창출',
    '도시계획 · 지역개발',
    '민원행정 · 규제개혁',
  ];

  const highlights = [
    { icon: BriefcaseIcon, label: '공무원 경력', value: '26년', color: 'blue' },
    { icon: TrophyIcon, label: '정부 포상', value: '7건', color: 'amber' },
    { icon: AcademicCapIcon, label: '행정고시', value: '37회', color: 'emerald' },
    { icon: StarIcon, label: '처리 실적', value: '1,247건', color: 'violet' },
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    violet: 'bg-violet-50 text-violet-700 border-violet-100',
  };
  const iconColorMap: Record<string, string> = {
    blue: 'text-blue-500',
    amber: 'text-amber-500',
    emerald: 'text-emerald-500',
    violet: 'text-violet-500',
  };

  return (
    <section id="about" className="py-24 bg-slate-50">
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
            전문가 소개
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            검증된 26년의 경력
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            행정고시 37회 합격, 경기도 부시장 출신의 최고위급 행정 전문가가 직접 처리합니다.
          </p>
        </motion.div>

        {/* 하이라이트 지표 */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={itemVariants}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl border ${colorMap[h.color]}`}
            >
              <h.icon className={`h-7 w-7 ${iconColorMap[h.color]}`} />
              <div className="text-center">
                <div className="text-2xl font-extrabold tabular-nums">{h.value}</div>
                <div className="text-sm font-medium opacity-80 mt-0.5">{h.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3열 그리드 */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* 주요 경력 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <BriefcaseIcon className="h-5 w-5 text-slate-600" />
              주요 경력
            </h3>
            <div className="relative pl-4 border-l-2 border-slate-100 space-y-5">
              {career.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 ring-2 ring-white" />
                  <span className="text-xs font-semibold text-slate-400 uppercase">{c.year}</span>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">{c.role}</p>
                  <p className="text-xs text-slate-400">{c.org}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 수상 실적 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <TrophyIcon className="h-5 w-5 text-amber-500" />
              수상 및 표창
            </h3>
            <div className="space-y-3">
              {awards.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckBadgeIcon className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 leading-snug">{award}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <p className="text-xs text-amber-700 font-medium text-center">
                대통령 표창 포함 총 7건의 정부 포상 수훈
              </p>
            </div>
          </motion.div>

          {/* 전문 분야 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AcademicCapIcon className="h-5 w-5 text-blue-500" />
              전문 분야
            </h3>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="inline-flex items-center px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 font-medium"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 p-4 bg-slate-900 rounded-2xl">
              <p className="text-xs text-slate-300 font-medium text-center">
                행정고시 37회 합격 · 정책학 석사
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;