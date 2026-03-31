import React from 'react';
import SEOMeta from '../components/ui/SEOMeta';

const FaqPage: React.FC = () => (
  <>
    <SEOMeta
      title="자주 묻는 질문"
      description="행정사 상담 방법, 서비스 비용, 처리 기간 등 자주 묻는 질문 안내. 궁금한 점은 무료 상담으로 문의하세요."
      path="/faq"
    />
    <main className="container-custom py-12 min-h-[60vh]">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          자주 묻는 질문 (FAQ)
        </h2>
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
            <h3 className="text-lg font-bold text-primary-700 mb-1">Q. 행정심판 처리 기간은?</h3>
            <p className="text-gray-700">일반적으로 60~90일 이내 결정됩니다. 사안에 따라 다를 수 있습니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-700 mb-1">Q. 직접 방문해야 하나요?</h3>
            <p className="text-gray-700">방문 상담이 가능하며, 전화나 이메일로도 서비스 진행이 가능합니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-700 mb-1">Q. 서비스 가능 지역은?</h3>
            <p className="text-gray-700">경기도 전 지역 및 수도권 업무 처리가 가능합니다.</p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default FaqPage;