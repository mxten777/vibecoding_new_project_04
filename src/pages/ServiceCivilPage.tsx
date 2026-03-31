import React from 'react';
import SEOMeta from '../components/ui/SEOMeta';

const ServiceCivilPage: React.FC = () => (
  <>
    <SEOMeta
      title="민원대행 서비스"
      description="복잡한 민원 서류 작성·제출 대행. 경기도 남양주 박신환 행정사의 정확하고 신속한 민원 처리 서비스."
      path="/service/civil"
    />
    <main className="container-custom py-12 min-h-[60vh]">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          민원대행 서비스
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          각종 민원서류 작성, 제출, 진행사항 안내 등 민원대행 서비스의 상세 안내입니다.
        </p>
        <div className="text-left space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">서비스 개요</h3>
            <p className="text-gray-600">민원대행 서비스는 복잡한 행정 절차를 대신 처리해드리는 서비스입니다.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">주요 업무</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>각종 증명서 발급 대행</li>
              <li>신고·등록·신청서 작성 및 제출</li>
              <li>허가·인가 민원 처리</li>
              <li>행정기관 이의신청 대행</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">진행 절차</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li>무료 상담을 통한 민원 내용 파악</li>
              <li>필요 서류 안내 및 준비</li>
              <li>서류 작성 및 제출 대행</li>
              <li>진행 상황 모니터링</li>
              <li>결과 수령 및 안내</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default ServiceCivilPage;