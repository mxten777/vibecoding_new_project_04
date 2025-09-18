import React from 'react';

const ResourcesPage: React.FC = () => (
  <main className="container-custom py-12 min-h-[60vh]">
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">자료실</h2>
      <div className="text-left mt-8 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-primary-700 mb-1">행정심판 청구서 양식</h3>
          <p className="text-gray-700">다운로드: <a href="#" className="text-accent-600 underline">행정심판청구서.pdf</a></p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary-700 mb-1">위임장 양식</h3>
          <p className="text-gray-700">다운로드: <a href="#" className="text-accent-600 underline">위임장.pdf</a></p>
        </div>
      </div>
    </section>
  </main>
);

export default ResourcesPage;
