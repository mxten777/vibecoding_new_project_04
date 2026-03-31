import React, { useState } from 'react';
import SEOMeta from '../components/ui/SEOMeta';
import { useFaqs } from '../hooks/useFaqs';

const FaqPage: React.FC = () => {
  const { faqs, isLoading } = useFaqs();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      <SEOMeta
        title="자주 묻는 질문"
        description="행정사 상담 방법, 서비스 비용, 처리 기간 등 자주 묻는 질문 안내. 궁금한 점은 무료 상담으로 문의하세요."
        path="/faq"
      />
      <main className="container-custom py-12 min-h-[60vh]">
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            자주 묻는 질문 (FAQ)
          </h2>

          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border rounded-lg p-4 animate-pulse">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : faqs.length === 0 ? (
            <p className="text-center text-gray-500 py-12">등록된 FAQ가 없습니다.</p>
          ) : (
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    aria-expanded={openId === faq.id}
                  >
                    <span className="font-semibold text-primary-700">Q. {faq.question}</span>
                    <span className="ml-4 text-gray-400 text-xl leading-none">
                      {openId === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  {openId === faq.id && (
                    <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default FaqPage;