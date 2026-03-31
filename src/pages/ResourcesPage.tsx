import React from 'react';
import SEOMeta from '../components/ui/SEOMeta';

const ResourcesPage: React.FC = () => (
  <>
    <SEOMeta
      title="자료실"
      description="행정 서류 양식, 법령 자료, 행정심판 관련 참고 자료를 무료로 다운로드하세요."
      path="/resources"
    />
    <main className="container-custom py-12 min-h-[60vh]">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          자료실
        </h2>
        <div className="text-left mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-primary-700">행정심판 관련 자료</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>행정심판 청구서 양식 (hwp / pdf)</li>
              <li>행정심판 진행 단계 안내서</li>
              <li>주요 행정심판 판례 모음</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-primary-700">민원 서류 양식</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>각종 신청서 및 신고서 양식</li>
              <li>이의신청서 양식</li>
              <li>위임장 양식</li>
            </ul>
          </div>
          <div className="mt-6 p-4 bg-primary-50 rounded-xl">
            <p className="text-primary-700 font-medium">자료 다운로드 및 추가 문의는 전화(031-123-4567) 또는 이메일로 연락해주세요.</p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default ResourcesPage;