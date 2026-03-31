import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { Notice } from '../types';

// Supabase 미설정 시 사용하는 정적 fallback 데이터
const STATIC_NOTICES: Notice[] = [
  {
    id: '1',
    title: '행정사 사무소 이전 안내',
    content: '사무소 이전에 따른 주소 및 연락처 변경 안내입니다.',
    published_at: '2025-09-18',
    is_active: true,
  },
  {
    id: '2',
    title: '추석 연휴 휴무 안내',
    content: '추석 연휴 기간 동안 사무소 휴무 안내입니다. 긴급 문의는 이메일로 접수해주세요.',
    published_at: '2025-09-10',
    is_active: true,
  },
  {
    id: '3',
    title: '행정심판 상담 무료 이벤트',
    content: '8월 한 달간 행정심판 첫 상담 무료 진행 안내입니다.',
    published_at: '2025-08-01',
    is_active: true,
  },
];

export const useNotices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setNotices(STATIC_NOTICES);
      setIsLoading(false);
      return;
    }

    const fetchNotices = async () => {
      const { data, error: fetchError } = await supabase
        .from('notices')
        .select('id, title, content, published_at, is_active')
        .eq('is_active', true)
        .order('published_at', { ascending: false });

      if (fetchError) {
        // DB 오류 시 fallback으로 정적 데이터 사용
        setNotices(STATIC_NOTICES);
        setError(null); // 사용자에게 오류 노출 안 함
      } else {
        setNotices((data as Notice[]) ?? STATIC_NOTICES);
      }
      setIsLoading(false);
    };

    fetchNotices();
  }, []);

  return { notices, isLoading, error };
};
