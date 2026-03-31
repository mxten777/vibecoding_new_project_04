import React from 'react';
import SEOMeta from '../components/ui/SEOMeta';

const ServiceLicensePage: React.FC = () => (
  <>
    <SEOMeta
      title="인허가 서비스"
      description="각종 영업 인허가 신청 대행. 경기도 남양주 박신환 행정사가 복잡한 인허가 절차를 빠르게 처리합니다."
      path="/service/license"
    />
    <main className="container-custom py-12 min-h-[60vh]">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          인허가 서비스
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          각종 인허가 절차, 필요서류, 진행 단계, 자주 묻는 질문(FAQ) 등 인허가 서비스의 상세 안내입니다.
        </p>
        <div className="text-left space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">서비스 개요</h3>
            <p className="text-gray-600">인허가 서비스는 식품, 건설, 운수 등 다양한 분야의 영업 허가를 신속하게 처리합니다.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">진행 단계</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li>상담을 통한 필요 인허가 확인</li>
              <li>서류 준비 및 작성</li>
              <li>행정기관 제출</li>
              <li>심사 및 보완</li>
              <li>결과 안내</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">필요서류</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>신청인 신분증</li>
              <li>사업자등록증 사본</li>
              <li>시설 도면 및 서류</li>
              <li>기타 관련 서류</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default ServiceLicensePage;