import React from 'react';
import SEOMeta from '../components/ui/SEOMeta';

const AboutPage: React.FC = () => {
  return (
    <main className="container-custom py-12 min-h-[60vh]">
      <SEOMeta
        title="전문가 소개"
        description="경기도 남양주시 부시장 출신, 26년 고위공무원 경력의 박신환 행정사. 대통령 표창 수상 검증된 행정 전문가입니다."
        path="/about"
      />
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          전문가 소개
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Park S.H. 행정사는 다양한 행정 경험과 전문성을 바탕으로 고객의 권익을 최우선으로 생각합니다.
          신뢰와 책임, 그리고 정확한 법률 서비스로 여러분의 든든한 동반자가 되겠습니다.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">주요 경력</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>경기도 남양주시 부시장 역임</li>
              <li>26년 고위공무원 근무</li>
              <li>대통령 표창 수상</li>
              <li>행정심판 전문 행정사 등록</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">전문 분야</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>행정심판 및 행정소송</li>
              <li>민원대행 서비스</li>
              <li>영업 인허가 처리</li>
              <li>각종 행정 서류 작성</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 p-6 bg-primary-50 rounded-2xl">
          <p className="text-primary-800 font-semibold text-lg">
            "26년간의 공직 경험으로 쌓은 전문성과 신뢰를 바탕으로 최선의 결과를 이끌어드리겠습니다."
          </p>
          <p className="text-primary-600 mt-2">— 박신환 행정사</p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;