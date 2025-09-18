import React from 'react';

const ServiceCivilPage: React.FC = () => (
  <main className="container-custom py-12 min-h-[60vh]">
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">민원대행 서비스</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        각종 민원서류 작성, 제출, 진행상황 안내 등 민원대행 서비스의 상세 내용을 확인하세요.
      </p>
      <div className="text-left space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2 text-primary-700">서비스 개요</h3>
          <p className="text-gray-600">민원대행은 복잡한 행정 민원 절차를 전문가가 대신 처리해 드리는 서비스입니다.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-primary-700">진행 절차</h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-1">
            <li>상담 및 의뢰 접수</li>
            <li>필요서류 안내 및 수집</li>
            <li>민원서류 작성 및 제출</li>
            <li>진행상황 안내</li>
            <li>결과 통보</li>
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-primary-700">필요서류</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>위임장</li>
            <li>신분증 사본</li>
            <li>관련 민원서류</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-primary-700">자주 묻는 질문(FAQ)</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Q. 어떤 민원까지 대행 가능한가요?</li>
            <li>Q. 처리 기간은 얼마나 걸리나요?</li>
            <li>Q. 수수료는 어떻게 되나요?</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
);

export default ServiceCivilPage;
