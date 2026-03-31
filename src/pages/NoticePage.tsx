import React from 'react';
import SEOMeta from '../components/ui/SEOMeta';

const NoticePage: React.FC = () => (
  <>
    <SEOMeta
      title="공지사항"
      description="PARK.S.H 행정사 공지사항. 영업 안내, 법령 변경사항, 이벤트 등 최신 소식을 확인하세요."
      path="/notice"
    />
    <main className="container-custom py-12 min-h-[60vh]">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          공지사항
        </h2>
        <div className="text-left mt-8 space-y-6">
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-primary-700 mb-1">행정사 사무소 이전 안내</h3>
            <p className="text-gray-500 text-sm mb-2">2025-09-18</p>
            <p className="text-gray-700">사무소 이전에 따른 주소 및 연락처 변경 안내입니다.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-primary-700 mb-1">추석 연휴 휴무 안내</h3>
            <p className="text-gray-500 text-sm mb-2">2025-09-10</p>
            <p className="text-gray-700">추석 연휴 기간 동안 사무소 휴무 안내입니다. 긴급 문의는 이메일로 접수해주세요.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-primary-700 mb-1">행정심판 상담 무료 이벤트</h3>
            <p className="text-gray-500 text-sm mb-2">2025-08-01</p>
            <p className="text-gray-700">8월 한 달간 행정심판 첫 상담 무료 진행 안내입니다.</p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default NoticePage;