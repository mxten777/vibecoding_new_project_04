
import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-primary-950 to-accent-950 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary-700/30 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-accent-700/30 to-transparent rounded-full blur-3xl opacity-50" />
      </div>
      <div className="container-custom py-10 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-3 tracking-tight bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">박신환 행정사 사무소</h3>
            <p className="text-gray-300 text-base mb-4">
              신뢰할 수 있는 행정 업무 전문가로서, <br />고객의 성공을 위해 최선을 다하겠습니다.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="Github"><GithubIcon className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent-400 transition-colors" aria-label="LinkedIn"><LinkedinIcon className="w-5 h-5" /></a>
            </div>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">주요 서비스</h3>
            <ul className="space-y-1 text-base text-gray-300">
              <li className="hover:text-primary-300 transition-colors cursor-pointer">사업자등록 및 변경</li>
              <li className="hover:text-primary-300 transition-colors cursor-pointer">각종 인허가 신청</li>
              <li className="hover:text-primary-300 transition-colors cursor-pointer">세무 관련 업무</li>
              <li className="hover:text-primary-300 transition-colors cursor-pointer">민원 대행 서비스</li>
              <li className="hover:text-primary-300 transition-colors cursor-pointer">법인 설립 지원</li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">연락처</h3>
            <div className="space-y-3 text-base text-gray-300">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-primary-400" />
                <span>010-1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-accent-400" />
                <span>admin@example.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-5 w-5 mt-0.5 text-success-400" />
                <span>서울특별시 강남구<br />테헤란로 123, 456호</span>
              </div>
            </div>
          </div>

          {/* 운영시간 */}
          <div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">운영시간</h3>
            <div className="space-y-3 text-base text-gray-300">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-warning-400" />
                <span>평일 09:00 - 18:00</span>
              </div>
              <div className="ml-6 text-gray-400 text-xs">
                <p>토요일 09:00 - 13:00</p>
                <p>일요일 및 공휴일 휴무</p>
              </div>
              <div className="mt-3 p-3 bg-primary-900/80 rounded-lg">
                <p className="text-xs text-primary-200">
                  <strong>24시간 온라인 상담</strong><br />
                  언제든지 문의사항을 남겨주세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} 박신환 행정사 사무소. All rights reserved.
          </p>
          <div className="flex space-x-5 text-sm text-gray-400">
            <a href="#" className="hover:text-primary-300 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-primary-300 transition-colors">서비스 이용약관</a>
            <a href="#" className="hover:text-primary-300 transition-colors">사이트맵</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
