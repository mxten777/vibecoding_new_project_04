
import React from 'react';
import { AcademicCapIcon, BriefcaseIcon, StarIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const achievements = [
    {
      icon: BriefcaseIcon,
      title: '26년 공무원 경력',
      description: '1993년부터 2019년까지 다양한 행정업무 경험',
      details: [
        '2019.07 경기도 남양주시 부시장',
        '2018.08 경기도청 경제노동실 실장',
        '2018.07 경기도청 정책실 실장',
        '2017.11 경기도청 균형발전기획실 실장',
        '2017.05 경기도청 일자리노동정책실 실장',
      ],
      bgColor: 'bg-primary-100',
      iconColor: 'text-primary-600',
      borderColor: 'border-primary-200/50',
    },
    {
      icon: TrophyIcon,
      title: '주요 직책 경력',
      description: '고위 공무원 및 정책 수립 경험',
      details: [
        '2017.03 경기도의회 사무처장',
        '2016.07 경기도청 정책실 실장',
        '2000.11 경기도청 도시환경국 국장',
        '1993 제37회 행정고시 합격',
        '행정사 자격증 보유',
      ],
      bgColor: 'bg-warning-100',
      iconColor: 'text-warning-600',
      borderColor: 'border-warning-200/50',
    },
    {
      icon: StarIcon,
      title: '전문 분야',
      description: '정책 수립 및 행정업무 전문성',
      details: [
        '경제정책 및 일자리 정책',
        '균형발전 및 지역개발',
        '의회 운영 및 행정관리',
        '도시환경 및 개발 행정',
        '노동정책 및 사회정책',
      ],
      bgColor: 'bg-success-100',
      iconColor: 'text-success-600',
      borderColor: 'border-success-200/50',
    },
    {
      icon: AcademicCapIcon,
      title: '행정 전문성',
      description: '고위 공무원으로서의 폭넓은 경험',
      details: [
        '시·도 단위 행정업무 경험',
        '정책 기획 및 실행 전문성',
        '의회 관계 및 대민업무',
        '균형발전 및 경제정책 전문',
        '최신 행정 시스템 이해',
      ],
      bgColor: 'bg-accent-100',
      iconColor: 'text-accent-600',
      borderColor: 'border-accent-200/50',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-neutral-50 via-primary-50/40 to-accent-50/40 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-accent-200/30 to-transparent rounded-full blur-3xl opacity-50" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            26년 고위 공무원 경력을 바탕으로 한
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent ml-2">박신환 행정사 서비스</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            1993년 행정고시 합격부터 2019년 경기도 남양주시 부시장까지,<br />
            26년간의 풍부한 공무원 경력과 고위직 경험을 바탕으로 전문적인 행정서비스를 제공합니다.
          </p>
        </motion.div>

        {/* 개인 소개 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-14"
        >
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-primary-100/60 via-white/80 to-accent-100/60">
            <div className="lg:flex">
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-primary-500 via-accent-500 to-success-500 h-48 lg:h-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  <div className="text-center text-white relative z-10">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl border-4 border-primary-200/60">
                      <span className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">박</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-1 drop-shadow">박신환 행정사</h3>
                    <p className="text-white/90 text-base">행정사 전문가</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 p-7 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5">
                  안녕하세요, 행정사 박신환입니다.
                </h3>
                <div className="space-y-4 text-gray-700 text-base lg:text-lg">
                  <p>
                    1993년 제37회 행정고시에 합격하여 26년간 공무원으로 재직하며,<br />
                    경기도 남양주시 부시장을 마지막으로 공직생활을 마쳤습니다.
                  </p>
                  <p>
                    경기도청에서 정책실장, 경제노동실장, 균형발전기획실장, 일자리노동정책실장을 역임하며<br />
                    정책 수립과 실행에 관한 풍부한 경험을 쌓았습니다.
                  </p>
                  <p>
                    또한 경기도의회 사무처장과 도시환경국장을 거치며 의회 운영과 도시개발 행정에도<br />
                    전문성을 갖추었습니다. 이제 그 경험을 바탕으로 고객님들의 행정업무를 도와드리겠습니다.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs border border-primary-200 font-semibold">#26년공무원경력</span>
                  <span className="px-3 py-1 bg-success-100 text-success-800 rounded-full text-xs border border-success-200 font-semibold">#경기도부시장</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-xs border border-accent-200 font-semibold">#정책전문가</span>
                  <span className="px-3 py-1 bg-warning-100 text-warning-800 rounded-full text-xs border border-warning-200 font-semibold">#행정고시37회</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 핵심 역량 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-14"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80,80,180,0.10)' }}
            >
              <Card className={`bg-white/90 backdrop-blur-lg border-0 shadow-xl transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:border-primary-400 ${achievement.borderColor}`}>
                <div className="flex items-start gap-5">
                  <div className={`${achievement.bgColor} rounded-xl p-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className={`h-6 w-6 ${achievement.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 mb-3 text-base">
                      {achievement.description}
                    </p>
                    <ul className="space-y-1">
                      {achievement.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-base text-gray-500 flex items-center">
                          <span className={`w-2 h-2 ${achievement.iconColor.replace('text-', 'bg-')} rounded-full mr-2`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 미션 & 비전 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white via-primary-50/60 to-accent-50/60 rounded-2xl shadow-xl p-8 lg:p-12 border-0"
        >
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">저의 미션과 비전</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border-0 shadow-md">
                <h4 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">미션 (Mission)</h4>
                <p className="text-gray-700 text-base lg:text-lg">
                  26년간의 고위 공무원 경험과 정책 전문성을 바탕으로<br />
                  복잡한 행정업무를 체계적으로 해결하여 고객의 성공을 돕겠습니다.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border-0 shadow-md">
                <h4 className="text-lg font-bold bg-gradient-to-r from-success-600 to-primary-600 bg-clip-text text-transparent mb-4">비전 (Vision)</h4>
                <p className="text-gray-700 text-base lg:text-lg">
                  정책 수립부터 실행까지의 경험을 활용하여<br />
                  고객과 지역사회 발전에 기여하는 최고 수준의 행정 전문가가 되겠습니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
