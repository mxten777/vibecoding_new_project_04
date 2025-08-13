import React from 'react';

const TestColors: React.FC = () => {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">색상 테스트</h2>
      
      {/* 기본 색상 테스트 */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded">기본 블루</div>
        <div className="bg-red-500 text-white p-4 rounded">기본 레드</div>
        <div className="bg-green-500 text-white p-4 rounded">기본 그린</div>
        <div className="bg-yellow-500 text-black p-4 rounded">기본 옐로우</div>
      </div>
      
      {/* 커스텀 색상 테스트 */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary-500 text-white p-4 rounded">Primary 500</div>
        <div className="bg-secondary-500 text-white p-4 rounded">Secondary 500</div>
        <div className="bg-accent-500 text-white p-4 rounded">Accent 500</div>
        <div className="bg-success-500 text-white p-4 rounded">Success 500</div>
      </div>
      
      {/* 그라데이션 테스트 */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded">
        기본 그라데이션
      </div>
      <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded">
        커스텀 그라데이션
      </div>
    </div>
  );
};

export default TestColors;
