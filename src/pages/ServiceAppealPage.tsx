import React from 'react';

const ServiceAppealPage: React.FC = () => (
  <main className="container-custom py-12 min-h-[60vh]">
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">행정심판 서비스</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        각종 행정심판 절차, 필요서류, 진행 단계, 자주 묻는 질문(FAQ) 등 상세 안내를 제공합니다.
      </p>
      <div className="text-left space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2 text-primary-700">서비스 개요</h3>
          <p className="text-gray-600">행정심판은 행정청의 위법·부당한 처분에 대해 구제를 요청하는 절차입니다.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-primary-700">진행 절차</h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-1">
            <li>상담 및 사건 접수</li>
            <li>서류 준비 및 작성</li>
            <li>행정심판 청구</li>
            <li>심리 및 결정</li>
            <li>결과 통지 및 후속 조치</li>
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-primary-700">필요서류</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>신청서(행정심판청구서)</li>
            <li>관련 처분서 사본</li>
            <li>신분증 사본</li>
            <li>기타 증빙자료</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-primary-700">자주 묻는 질문(FAQ)</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Q. 심판 청구 기간은 어떻게 되나요?</li>
            <li>Q. 대리 신청이 가능한가요?</li>
            <li>Q. 비용 및 소요 기간은?</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
);

export default ServiceAppealPage;
