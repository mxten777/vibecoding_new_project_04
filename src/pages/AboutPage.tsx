import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main className="container-custom py-12 min-h-[60vh]">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">회사/전문가 소개</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          박신환 행정사는 다양한 행정 경험과 전문성을 바탕으로 고객의 권익을 최우선으로 생각합니다.<br />
          신뢰와 책임, 그리고 정확한 법률 서비스로 여러분의 든든한 동반자가 되겠습니다.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">주요 연혁</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>2020~현재: 박신환 행정사 사무소 대표</li>
              <li>2015~2020: ○○기관 행정심판 담당</li>
              <li>2010~2015: ○○대학교 법학과 졸업</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">비전 & 미션</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>고객 신뢰 기반의 맞춤형 행정 서비스 제공</li>
              <li>최신 법률/행정 정보 제공 및 상담</li>
              <li>사회적 책임과 윤리 실천</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-2 text-primary-700">오시는 길</h3>
          <p className="text-gray-600">서울특별시 ○○구 ○○로 123, 3층 (○○빌딩)</p>
          {/* 지도/약도 삽입 가능 */}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
