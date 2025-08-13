
import React from 'react';
import { DocumentTextIcon, BuildingOfficeIcon, ScaleIcon, ClipboardDocumentCheckIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'permit',
      icon: DocumentTextIcon,
      title: '인허가 업무',
      description: '건축, 개발, 사업 관련 각종 인허가 신청 및 처리',
      features: ['건축허가', '개발행위허가', '사업계획승인', '용도변경'],
      color: 'primary'
    },
    {
      id: 'business',
      icon: BuildingOfficeIcon,
      title: '사업자 등록',
      description: '개인사업자 및 법인사업자 등록 관련 업무',
      features: ['사업자등록', '휴업신고', '폐업신고', '변경신고'],
      color: 'success'
    },
    {
      id: 'legal',
      icon: ScaleIcon,
      title: '법무 업무',
      description: '각종 법적 서류 작성 및 신고 업무',
      features: ['계약서작성', '내용증명', '고발장', '진정서'],
      color: 'accent'
    },
    {
      id: 'document',
      icon: ClipboardDocumentCheckIcon,
      title: '서류 대행',
      description: '공공기관 제출 서류 작성 및 대행',
      features: ['각종신고서', '신청서작성', '서류접수', '진행상황관리'],
      color: 'warning'
    },
    {
      id: 'consulting',
      icon: UserGroupIcon,
      title: '상담 서비스',
      description: '행정업무 관련 전문 상담 및 컨설팅',
      features: ['사전상담', '절차안내', '비용산정', '맞춤상담'],
      color: 'secondary'
    },
    {
      id: 'management',
      icon: CogIcon,
      title: '업무 관리',
      description: '진행 중인 업무의 체계적 관리 및 추진',
      features: ['진행관리', '일정조율', '결과보고', '사후관리'],
      color: 'neutral'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-50',
        icon: 'text-primary-600',
        border: 'border-primary-200',
        badge: 'bg-primary-100 text-primary-700'
      },
      success: {
        bg: 'bg-success-50',
        icon: 'text-success-600',
        border: 'border-success-200',
        badge: 'bg-success-100 text-success-700'
      },
      accent: {
        bg: 'bg-accent-50',
        icon: 'text-accent-600',
        border: 'border-accent-200',
        badge: 'bg-accent-100 text-accent-700'
      },
      warning: {
        bg: 'bg-warning-50',
        icon: 'text-warning-600',
        border: 'border-warning-200',
        badge: 'bg-warning-100 text-warning-700'
      },
      secondary: {
        bg: 'bg-secondary-50',
        icon: 'text-secondary-600',
        border: 'border-secondary-200',
        badge: 'bg-secondary-100 text-secondary-700'
      },
      neutral: {
        bg: 'bg-neutral-50',
        icon: 'text-neutral-600',
        border: 'border-neutral-200',
        badge: 'bg-neutral-100 text-neutral-700'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/30 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-accent-200/30 to-transparent rounded-full blur-3xl opacity-50" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">전문 서비스</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            20년+ 공무원 경력을 바탕으로 한 전문적이고 신뢰할 수 있는 행정 서비스를 제공합니다.
          </p>
        </motion.div>

        {/* 서비스 그리드 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service) => {
            const colorClasses = getColorClasses(service.color);
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(80,80,180,0.10)' }}
              >
                <Card
                  className={`${colorClasses.bg} ${colorClasses.border} border-0 shadow-xl group transition-all duration-300 cursor-pointer hover:shadow-2xl hover:border-primary-400`}
                >
                  <div className="p-10">
                    {/* 아이콘 */}
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <IconComponent className={`w-8 h-8 ${colorClasses.icon}`} />
                    </div>

                    {/* 제목 및 설명 */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-7 leading-relaxed font-medium">
                      {service.description}
                    </p>

                    {/* 세부 서비스 */}
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold text-gray-700 mb-2">주요 서비스</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClasses.badge}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/90 rounded-3xl p-12 shadow-2xl border-0 flex flex-col items-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">어떤 서비스가 필요하신가요?</h3>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto font-medium">
              복잡한 행정업무, 더 이상 혼자 고민하지 마세요.<br />
              전문가의 도움으로 빠르고 정확하게 처리해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-10 py-4 rounded-full font-semibold hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-md text-lg">
                무료 상담 신청
              </button>
              <button className="border-2 border-primary-600 text-primary-700 px-10 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300 text-lg">
                서비스 문의
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
