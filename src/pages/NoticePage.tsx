import React from 'react';
import SEOMeta from '../components/ui/SEOMeta';
import { useNotices } from '../hooks/useNotices';

const NoticePage: React.FC = () => {
  const { notices, isLoading } = useNotices();

  return (
    <>
      <SEOMeta
        title="공지사항"
        description="PARK.S.H 행정사 공지사항. 영업 안내, 법령 변경사항, 이벤트 등 최신 소식을 확인하세요."
        path="/notice"
      />
      <main className="container-custom py-12 min-h-[60vh]">
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            공지사항
          </h2>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b pb-4 animate-pulse">
                  <div className="h-5 bg-gray-200 rounded w-2/3 mb-2" />
                  <div className="h-4 bg-gray-100 rounded w-1/4 mb-2" />
                  <div className="h-4 bg-gray-100 rounded w-full" />
                </div>
              ))}
            </div>
          ) : notices.length === 0 ? (
            <p className="text-center text-gray-500 py-12">등록된 공지사항이 없습니다.</p>
          ) : (
            <div className="space-y-6">
              {notices.map((notice) => (
                <div key={notice.id} className="border-b pb-4">
                  <h3 className="text-lg font-bold text-primary-700 mb-1">{notice.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{notice.published_at}</p>
                  <p className="text-gray-700">{notice.content}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default NoticePage;