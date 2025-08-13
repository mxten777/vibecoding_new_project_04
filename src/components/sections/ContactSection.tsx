import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { 
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useContactForm } from '../../hooks/useContactForm';

const ContactSection: React.FC = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm
  } = useContactForm();
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: '전화 상담',
      content: '010-1234-5678',
      description: '평일 09:00 - 18:00',
      color: 'primary'
    },
    {
      icon: EnvelopeIcon,
      title: '이메일 상담',
      content: 'admin@shpark.co.kr',
      description: '24시간 접수 가능',
      color: 'success'
    },
    {
      icon: MapPinIcon,
      title: '사무실 위치',
      content: '서울시 강남구 테헤란로 123',
      description: '2호선 역삼역 3번 출구',
      color: 'accent'
    },
    {
      icon: ClockIcon,
      title: '운영 시간',
      content: '평일 09:00 - 18:00',
      description: '토요일 09:00 - 13:00',
      color: 'warning'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-50',
        icon: 'text-primary-600',
        border: 'border-primary-200',
        text: 'text-primary-700'
      },
      success: {
        bg: 'bg-success-50',
        icon: 'text-success-600',
        border: 'border-success-200',
        text: 'text-success-700'
      },
      accent: {
        bg: 'bg-accent-50',
        icon: 'text-accent-600',
        border: 'border-accent-200',
        text: 'text-accent-700'
      },
      warning: {
        bg: 'bg-warning-50',
        icon: 'text-warning-600',
        border: 'border-warning-200',
        text: 'text-warning-700'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              상담 및 문의
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            궁금한 점이나 필요한 서비스가 있으시면 언제든지 연락해주세요. 
            전문가가 친절하게 상담해드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 연락처 정보 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">연락처 정보</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const colorClasses = getColorClasses(info.color);
                const IconComponent = info.icon;
                
                return (
                  <Card key={index} className={`${colorClasses.bg} ${colorClasses.border} border-2 hover-lift`}>
                    <div className="p-6 flex items-start space-x-4">
                      <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${colorClasses.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className={`font-medium ${colorClasses.text} mb-1`}>{info.content}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* 상담 신청 폼 */}
          <div>
            <Card className="bg-white shadow-xl border border-gray-200">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">무료 상담 신청</h3>
                
                {/* 성공 메시지 */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-success-50 border border-success-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-5 h-5 text-success-600" />
                      <p className="text-success-800 font-medium">
                        상담 신청이 성공적으로 전송되었습니다!
                      </p>
                    </div>
                    <p className="text-success-600 text-sm mt-2">
                      빠른 시일 내에 연락드리겠습니다.
                    </p>
                    <button
                      onClick={resetForm}
                      className="mt-3 text-sm text-success-600 hover:text-success-800 underline"
                    >
                      새로운 상담 신청하기
                    </button>
                  </div>
                )}

                {/* 에러 메시지 */}
                {errors.length > 0 && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <ExclamationTriangleIcon className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <p className="text-red-800 font-medium mb-2">다음 사항을 확인해주세요:</p>
                        <ul className="text-sm text-red-600 space-y-1">
                          {errors.map((error, index) => (
                            <li key={index} className="list-disc list-inside">
                              {error}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="010-1234-5678"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      상담 유형 *
                    </label>
                    <select 
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      required
                    >
                      <option value="">상담 유형을 선택해주세요</option>
                      <option value="인허가 업무">인허가 업무</option>
                      <option value="사업자 등록">사업자 등록</option>
                      <option value="법무 업무">법무 업무</option>
                      <option value="서류 대행">서류 대행</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      상담 내용 *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="상담받고 싶은 내용을 자세히 적어주세요..."
                      required
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      개인정보 수집 및 이용에 동의합니다. 
                      <a href="#" className="text-primary-600 hover:text-primary-700 underline ml-1">
                        자세히 보기
                      </a>
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '전송 중...' : '상담 신청하기'}
                  </Button>
                </form>
              </div>
            </Card>

            {/* 빠른 연락 */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">급하신 업무가 있으시면 바로 전화주세요</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>010-1234-5678</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center justify-center space-x-2"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>이메일 보내기</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
