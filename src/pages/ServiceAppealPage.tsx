import React from 'react';
import SEOMeta from '../components/ui/SEOMeta';

const ServiceAppealPage: React.FC = () => (
  <>
    <SEOMeta
      title="행정심판 서비스"
      description="위법·부당한 행정처분에 대한 행정심판 전문. 경기도 남양주 박신환 행정사가 신속하게 권리를 구제해드립니다."
      path="/service/appeal"
    />
    <main className="container-custom py-12 min-h-[60vh]">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          행정심판 서비스
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          각종 행정심판 절차, 필요서류, 진행 단계, 자주 묻는 질문(FAQ) 등 상세 안내를 제공합니다.
        </p>
        <div className="text-left space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">서비스 개요</h3>
            <p className="text-gray-600">행정심판은 행정청의 위법·부당한 처분에 대해 구제를 요청하는 절차입니다.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">진행 단계</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li>상담 및 사건 접수</li>
              <li>서류 검토 및 작성</li>
              <li>행정심판 청구서 제출</li>
              <li>심리 및 결정</li>
              <li>결과 수령 및 후속 업무 처리</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">필요서류</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>처분서 사본</li>
              <li>이의 사유 관련 서류</li>
              <li>신분증 사본</li>
              <li>기타 참고 자료</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default ServiceAppealPage;