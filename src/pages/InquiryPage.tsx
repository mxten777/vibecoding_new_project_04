import React from 'react';

const InquiryPage: React.FC = () => (
  <main className="container-custom py-12 min-h-[60vh]">
    <section className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">온라인 상담/의뢰</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        1:1 문의, 상담 이력 확인, 파일 업로드 등 다양한 온라인 상담 서비스를 제공합니다.
      </p>
      <form className="bg-white/80 rounded-2xl shadow-xl p-8 space-y-6 text-left">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">이름</label>
          <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-400 outline-none" placeholder="이름을 입력하세요" required />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">연락처</label>
          <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-400 outline-none" placeholder="연락처를 입력하세요" required />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">문의 내용</label>
          <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-400 outline-none min-h-[100px]" placeholder="상담 내용을 입력하세요" required />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">첨부파일 (선택)</label>
          <input type="file" className="w-full" />
        </div>
        <button type="submit" className="w-full py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg shadow-md hover:from-primary-700 hover:to-accent-700 transition-all duration-200">상담 신청</button>
      </form>
      <div className="mt-10 text-left">
        <h3 className="text-xl font-bold text-primary-700 mb-2">상담 이력 (예시)</h3>
        <ul className="space-y-2">
          <li className="bg-primary-50 rounded-lg px-4 py-2 text-gray-700">2025-09-18 | 행정심판 문의 | 답변 완료</li>
          <li className="bg-primary-50 rounded-lg px-4 py-2 text-gray-700">2025-09-15 | 인허가 절차 문의 | 답변 대기</li>
        </ul>
      </div>
    </section>
  </main>
);

export default InquiryPage;
