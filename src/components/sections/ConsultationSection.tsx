import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, DocumentTextIcon, MapPinIcon, ClockIcon, StarIcon, SparklesIcon, FireIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ConsultationSection: React.FC = () => {
  const consultationTypes = [
    {
      id: 'phone',
      title: '전화상담',
      subtitle: '즉시 전문가 연결',
      description: '26년 경험의 전문가가 직접 상담해드립니다',
      icon: PhoneIcon,
      time: '평일 9:00~18:00',
      contact: '031-123-4567',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-100/60',
      features: ['즉시 연결', '무료 초기 상담', '전문가 직접 응대'],
      badge: { label: '인기', icon: FireIcon, color: 'bg-gradient-to-r from-orange-500 to-pink-500' }
    },
    {
      id: 'document',
      title: '서면상담',
      subtitle: '정확한 법적 검토',
      description: '꼼꼼한 서면 검토로 정확한 답변을 제공합니다',
      icon: DocumentTextIcon,
      time: '1~2일 소요',
      contact: 'admin@parksinhwan.com',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'bg-emerald-100/60',
      features: ['정확한 법적 검토', '서면 답변서 제공', '후속 상담 무료'],
      badge: { label: '추천', icon: SparklesIcon, color: 'bg-gradient-to-r from-teal-500 to-emerald-500' }
    },
    {
      id: 'visit',
      title: '방문상담',
      subtitle: '1:1 맞춤 상담',
      description: '직접 방문하여 상세하고 전문적인 상담을 받으세요',
      icon: MapPinIcon,
      time: '예약 후 진행',
      contact: '경기도 남양주시',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-100/60',
      features: ['1:1 맞춤 상담', '현장 방문 가능', '종합적 솔루션'],
      badge: { label: '프리미엄', icon: TrophyIcon, color: 'bg-gradient-to-r from-purple-500 to-pink-500' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeInOut' as const
      }
    }
  };

  return (
    <section id="consultation" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-transparent rounded-full blur-3xl opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        {/* 헤더 섹션 */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-base font-semibold mb-7">
            <ShieldCheckIcon className="w-5 h-5" />
            전문가 상담 서비스
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-7 leading-tight tracking-tight">
            상담 유형
            <span className="block text-3xl text-blue-600 mt-2 font-bold">전문가와 함께하는 맞춤 솔루션</span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            26년 고위 공무원 경력을 바탕으로 한 <strong>전문적이고 신뢰할 수 있는 상담</strong>을 제공합니다
          </p>
        </motion.div>

        {/* 상담 유형 카드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {consultationTypes.map((type) => (
            <motion.div
              key={type.id}
              variants={itemVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 12px 40px 0 rgba(80,80,180,0.14)' }}
            >
              <Card
                className={`h-full ${type.bgColor} border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden backdrop-blur-2xl bg-clip-padding`}
              >
                {/* 배지 */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1">
                  <span className={`flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full text-white ${type.badge.color} shadow-lg drop-shadow-lg border border-white/20 backdrop-blur-md`}>
                    <type.badge.icon className="w-4 h-4 mr-1" />
                    {type.badge.label}
                  </span>
                </div>
                {/* 배경 그라데이션 + glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-20 group-hover:blur-[2px] transition-all duration-500`} />
                {/* floating light effect */}
                <motion.div
                  className={`absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br ${type.color} rounded-full opacity-30 blur-2xl`}
                  animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="p-10 relative z-10">
                  {/* 아이콘 */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500 shadow-lg border-2 border-white/30`}>
                    <type.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* 제목 */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 nowrap-title drop-shadow-sm">{type.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{type.subtitle}</p>
                  {/* 설명 */}
                  <p className="text-gray-700 mb-7 leading-relaxed font-medium">{type.description}</p>
                  {/* 특징 목록 */}
                  <div className="space-y-2 mb-7">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-base text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* 시간 정보 */}
                  <div className="flex items-center text-base text-gray-500 mb-4 nowrap-time">
                    <ClockIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="font-medium">{type.time}</span>
                  </div>
                  {/* 연락처 정보 */}
                  <div className="text-base font-semibold text-gray-700 bg-white/90 backdrop-blur-lg rounded-xl p-4 mb-7 border border-white/20 shadow-sm">{type.contact}</div>
                  {/* 상담 신청 버튼 */}
                  <Button className={`w-full bg-gradient-to-r ${type.color} hover:shadow-2xl hover:border-white/60 border-2 border-transparent transition-all duration-300 text-white py-4 text-lg font-bold hover:scale-105 rounded-full drop-shadow-md`}>
                    상담 신청하기
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 신뢰도 지표 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: '26년+', label: '고위 공무원 경력', icon: ShieldCheckIcon },
            { number: '1,000+', label: '상담 건수', icon: PhoneIcon },
            { number: '99%', label: '고객 만족도', icon: StarIcon },
            { number: '24시간', label: '신속 응답', icon: ClockIcon }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/90 backdrop-blur-md rounded-xl p-7 shadow-xl border border-white/30 flex flex-col items-center">
              <stat.icon className="w-8 h-8 text-blue-500 mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1 drop-shadow">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* 프리미엄 CTA 섹션 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl border border-blue-300 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <StarIcon className="w-6 h-6 text-yellow-400 fill-current" />
                <StarIcon className="w-6 h-6 text-yellow-400 fill-current" />
                <StarIcon className="w-6 h-6 text-yellow-400 fill-current" />
                <StarIcon className="w-6 h-6 text-yellow-400 fill-current" />
                <StarIcon className="w-6 h-6 text-yellow-400 fill-current" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                지금 바로 전문가 상담을 받아보세요
              </h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                경기도 부시장 출신 전문가가 직접 상담해드립니다. <br />
                <strong>첫 상담은 무료</strong>로 진행됩니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  📞 즉시 전화 상담
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  📝 무료 상담 신청
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationSection;