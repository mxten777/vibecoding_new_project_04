
import React from 'react';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  StarIcon, 
  TrophyIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  // 전문성 강화된 성과 지표
  const performanceStats = [
    { label: '총 처리건수', value: '1,247건', change: '+15%', period: '2024년' },
    { label: '고객 만족도', value: '98.5%', change: '+2.1%', period: '평균' },
    { label: '성공 처리율', value: '99.2%', change: '0%', period: '지속' },
    { label: '평균 처리시간', value: '3.2일', change: '-1.8일', period: '단축' }
  ];

  const certifications = [
    { title: '행정사 자격증', issuer: '법무부', year: '2020', verified: true },
    { title: '행정고시 37회', issuer: '인사혁신처', year: '1993', verified: true },
    { title: '정책학 석사', issuer: '○○대학원', year: '1998', verified: true },
    { title: '지방자치 전문가', issuer: '행정안전부', year: '2016', verified: true }
  ];

  const achievements = [
    {
      icon: BriefcaseIcon,
      title: '26년 고위직 공무원 경력',
      description: '경기도 부시장 출신 최고위급 행정 전문가',
      details: [
        '🏛️ 2019.07~2019.12 경기도 남양주시 부시장 (최고위직)',
        '📊 2018.08~2019.07 경기도청 경제노동실장 (정책 총괄)',
        '🎯 2018.07~2018.08 경기도청 정책실장 (도정 기획)',
        '⚖️ 2017.11~2018.07 경기도청 균형발전기획실장',
        '💼 2017.05~2017.11 경기도청 일자리노동정책실장',
        '🏢 2017.03~2017.05 경기도의회 사무처장',
      ],
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-700',
      borderColor: 'border-primary-200',
    },
    {
      icon: TrophyIcon,
      title: '핵심 성과 및 수상 경력',
      description: '정부 포상 및 우수 정책 성과 다수',
      details: [
        '🏆 대통령 표창 (지방행정 발전 기여, 2018)',
        '🥇 국무총리 표창 (정책혁신 우수사례, 2017)',
        '🎖️ 경기도지사 표창 (도정발전 기여, 2016)',
        '📈 경제정책 우수사례 선정 (행정안전부, 2018)',
        '🌟 일자리창출 정책 혁신상 (고용노동부, 2017)',
        '⭐ 균형발전 우수 지자체 선정 기여 (국토부, 2018)'
      ],
      bgColor: 'bg-warning-50',
      iconColor: 'text-warning-700',
      borderColor: 'border-warning-200',
    },
    {
      icon: StarIcon,
      title: '전문 분야 및 특화 영역',
      description: '26년간 축적된 행정 전문성과 정책 노하우',
      details: [
        '💰 경제정책 및 일자리 창출 (중소기업 지원, 투자유치)',
        '🌍 균형발전 및 지역개발 (도시계획, 개발사업)',
        '🏛️ 의회 운영 및 행정관리 (조례 제정, 정책 조정)',
        '🏗️ 도시환경 및 건축행정 (인허가, 개발 승인)',
        '👥 노동정책 및 사회정책 (고용정책, 복지행정)',
        '📋 민원행정 및 규제개혁 (원스톱 서비스, 절차 간소화)'
      ],
      bgColor: 'bg-success-50',
      iconColor: 'text-success-700',
      borderColor: 'border-success-200',
    },
    {
      icon: AcademicCapIcon,
      title: '행정 전문성 및 학술 배경',
      description: '고위 공무원으로서의 폭넓은 경험과 지속적 학습',
      details: [
        '🎓 정책학 석사 (○○대학원, 1998)',
        '📚 행정학 학사 (△△대학교, 1992)',
        '🏛️ 시·도 단위 행정업무 경험 (26년)',
        '📊 정책 기획 및 실행 전문성 (다수 성공사례)',
        '⚖️ 의회 관계 및 대민업무 (사무처장 경력)',
        '🌟 균형발전 및 경제정책 전문 (실장급 경력)',
        '💻 최신 행정 시스템 이해 (디지털 정부 구축)',
      ],
      bgColor: 'bg-accent-50',
      iconColor: 'text-accent-700',
      borderColor: 'border-accent-200',
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
          <h2 className="heading-2 text-gray-900 mb-6">
            26년 고위 공무원 경력을 바탕으로 한
            <span className="gradient-text-brand ml-2">Park S.H. 행정사 서비스</span>
          </h2>
          <p className="text-expert text-gray-700 max-w-3xl mx-auto">
            1993년 행정고시 합격부터 2019년 경기도 남양주시 부시장까지,<br />
            26년간의 풍부한 공무원 경력과 고위직 경험을 바탕으로 전문적인 행정서비스를 제공합니다.
          </p>
        </motion.div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {performanceStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all"
            >
              <div className="text-2xl font-bold text-primary-700 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                stat.change.startsWith('+') 
                  ? 'bg-green-100 text-green-700' 
                  : stat.change.startsWith('-') 
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {stat.change} {stat.period}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="heading-3 text-center text-gray-900 mb-8">자격증 및 전문 인증</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="text-sm font-semibold text-gray-900">{cert.title}</div>
                  {cert.verified && (
                    <ShieldCheckIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                  )}
                </div>
                <div className="text-xs text-gray-600">{cert.issuer}</div>
                <div className="text-xs text-gray-500">{cert.year}</div>
              </motion.div>
            ))}
          </div>
        </div>

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
                    <h3 className="text-xl lg:text-2xl font-bold mb-1 drop-shadow">Park S.H. 행정사</h3>
                    <p className="text-white/90 text-base">행정사 전문가</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 p-7 lg:p-10">
                <h3 className="heading-3 text-gray-900 mb-5">
                  안녕하세요, Park S.H. 행정사입니다.
                </h3>
                <div className="space-y-4 text-gray-700 text-body-lg">
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
                    <h3 className="heading-4 text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-body-lg text-gray-700 mb-3">
                      {achievement.description}
                    </p>
                    <ul className="space-y-1">
                      {achievement.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-body-sm text-gray-500 flex items-center">
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
            <h3 className="heading-3 text-gray-900 mb-8">저의 미션과 비전</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border-0 shadow-md">
                <h4 className="heading-5 gradient-text-brand mb-4">미션 (Mission)</h4>
                <p className="text-body-lg text-gray-700">
                  26년간의 고위 공무원 경험과 정책 전문성을 바탕으로<br />
                  복잡한 행정업무를 체계적으로 해결하여 고객의 성공을 돕겠습니다.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border-0 shadow-md">
                <h4 className="heading-5 gradient-text-brand mb-4">비전 (Vision)</h4>
                <p className="text-body-lg text-gray-700">
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
