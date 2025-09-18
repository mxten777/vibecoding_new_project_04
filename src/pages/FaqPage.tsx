import React from 'react';

const FaqPage: React.FC = () => (
  <main className="container-custom py-12 min-h-[60vh]">
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">자주 묻는 질문(FAQ)</h2>
      <div className="text-left mt-8 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-primary-700 mb-1">Q. 상담은 어떻게 신청하나요?</h3>
          <p className="text-gray-700">홈페이지 내 문의 폼 또는 전화, 이메일로 언제든 상담 신청이 가능합니다.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary-700 mb-1">Q. 상담 및 서비스 비용은?</h3>
          <p className="text-gray-700">상담은 무료이며, 서비스별 비용은 사전 안내 후 진행됩니다.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary-700 mb-1">Q. 개인정보는 안전하게 보호되나요?</h3>
          <p className="text-gray-700">모든 개인정보는 관련 법령에 따라 안전하게 관리됩니다.</p>
        </div>
      </div>
    </section>
  </main>
);

export default FaqPage;
