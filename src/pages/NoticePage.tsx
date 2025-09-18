import React from 'react';

const NoticePage: React.FC = () => (
  <main className="container-custom py-12 min-h-[60vh]">
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">공지사항</h2>
      <div className="text-left mt-8 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-primary-700 mb-1">[2025-09-18] 홈페이지 리뉴얼 오픈</h3>
          <p className="text-gray-700">신뢰와 전문성을 바탕으로 한 새로운 홈페이지가 오픈되었습니다.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary-700 mb-1">[2025-08-01] 여름 휴가 안내</h3>
          <p className="text-gray-700">8월 10~15일은 휴무입니다. 문의는 이메일로 남겨주세요.</p>
        </div>
      </div>
    </section>
  </main>
);

export default NoticePage;
