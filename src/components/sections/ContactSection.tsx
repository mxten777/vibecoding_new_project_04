import React from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { useContactForm } from '../../hooks/useContactForm';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const contactItems = [
  {
    icon: PhoneIcon,
    label: '전화 상담',
    value: '031-123-4567',
    sub: '평일 09:00 – 18:00',
    href: 'tel:031-123-4567',
    accent: 'from-amber-400 to-amber-600',
  },
  {
    icon: EnvelopeIcon,
    label: '이메일 문의',
    value: 'admin@parksinhwan.com',
    sub: '24시간 접수 가능',
    href: 'mailto:admin@parksinhwan.com',
    accent: 'from-sky-400 to-sky-600',
  },
  {
    icon: MapPinIcon,
    label: '사무실 위치',
    value: '경기도 남양주시',
    sub: '방문 상담 가능',
    href: null,
    accent: 'from-emerald-400 to-emerald-600',
  },
  {
    icon: ClockIcon,
    label: '운영 시간',
    value: '평일 09:00 – 18:00',
    sub: '토요일 09:00 – 13:00',
    href: null,
    accent: 'from-violet-400 to-violet-600',
  },
];

const SERVICES = [
  '상담 유형을 선택해주세요',
  '인허가 업무',
  '행정심판·소송',
  '사업자 등록',
  '서류 대행',
  '행정 컨설팅',
  '기타',
];

const ContactSection: React.FC = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-4">
            FREE CONSULTATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5">
            무료 상담{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              신청하기
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            26년 고위공무원 경력의 전문가가 직접 상담해드립니다.
            <br className="hidden sm:block" />
            궁금한 행정 업무는 무엇이든 물어보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* ── Left: contact info ── */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={fadeUp}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold text-[15px] leading-snug group-hover:text-amber-300 transition-colors">
                      {item.value}
                    </p>
                    <p className="text-slate-400 text-sm mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              );
              return item.href ? (
                <a key={item.label} href={item.href}>
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}

            {/* Quick CTA */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="mt-2 p-5 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20"
            >
              <p className="text-amber-300 text-sm font-semibold mb-1">급한 업무이신가요?</p>
              <p className="text-slate-400 text-sm">지금 바로 전화주시면 즉시 상담해 드립니다.</p>
              <a
                href="tel:031-123-4567"
                className="mt-3 inline-flex items-center gap-2 text-amber-400 font-bold text-lg hover:text-amber-300 transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                031-123-4567
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={1}
            variants={fadeUp}
          >
            <div className="relative rounded-3xl bg-white/[0.04] border border-white/[0.08] p-8 lg:p-10 backdrop-blur-xl">
              {/* Success */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mb-5">
                    <CheckCircleIcon className="w-9 h-9 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">상담 신청 완료!</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    빠른 시일 내에 담당자가 연락드리겠습니다.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium transition-colors"
                  >
                    새 상담 신청
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-extrabold text-white mb-1 tracking-tight">무료 상담 신청</h3>
                  <p className="text-slate-500 text-sm mb-8">* 표시 항목은 필수입니다.</p>

                  {/* Errors */}
                  {errors.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3"
                    >
                      <ExclamationCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <ul className="space-y-0.5">
                        {errors.map((e, i) => (
                          <li key={i} className="text-sm text-red-300">{e}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + phone row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">
                          이름 *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="홍길동"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">
                          연락처 *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="010-1234-5678"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">
                        이메일
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="example@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">
                        상담 유형 *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/[0.1] text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all appearance-none"
                      >
                        {SERVICES.map((s) => (
                          <option key={s} value={s === SERVICES[0] ? '' : s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">
                        상담 내용 *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="상담받고 싶은 내용을 자세히 적어주세요..."
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-0.5 w-4 h-4 accent-amber-500 rounded"
                      />
                      <label htmlFor="privacy" className="text-sm text-slate-400 leading-relaxed">
                        개인정보 수집 및 이용에 동의합니다.{' '}
                        <a href="#" className="text-amber-400 hover:text-amber-300 underline">
                          자세히 보기
                        </a>
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold text-base tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:from-amber-400 hover:to-amber-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                          </svg>
                          전송 중...
                        </span>
                      ) : (
                        '무료 상담 신청하기'
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;