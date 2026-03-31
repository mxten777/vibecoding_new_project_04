import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { Faq } from '../types';

const STATIC_FAQS: Faq[] = [
  {
    id: '1',
    question: '상담은 어떻게 신청하나요?',
    answer: '홈페이지 내 문의 폼 또는 전화, 이메일로 언제든 상담 신청이 가능합니다.',
    display_order: 1,
    is_active: true,
  },
  {
    id: '2',
    question: '상담 및 서비스 비용은?',
    answer: '상담은 무료이며, 서비스별 비용은 사전 안내 후 진행됩니다.',
    display_order: 2,
    is_active: true,
  },
  {
    id: '3',
    question: '행정심판 처리 기간은?',
    answer: '일반적으로 60~90일 이내 결정됩니다. 사안에 따라 다를 수 있습니다.',
    display_order: 3,
    is_active: true,
  },
  {
    id: '4',
    question: '직접 방문해야 하나요?',
    answer: '방문 상담이 가능하며, 전화나 이메일로도 서비스 진행이 가능합니다.',
    display_order: 4,
    is_active: true,
  },
  {
    id: '5',
    question: '서비스 가능 지역은?',
    answer: '경기도 전 지역 및 수도권 업무 처리가 가능합니다.',
    display_order: 5,
    is_active: true,
  },
];

export const useFaqs = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setFaqs(STATIC_FAQS);
      setIsLoading(false);
      return;
    }

    const fetchFaqs = async () => {
      const { data, error: fetchError } = await supabase
        .from('faqs')
        .select('id, question, answer, display_order, is_active')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (fetchError) {
        setFaqs(STATIC_FAQS);
        setError(null);
      } else {
        setFaqs((data as Faq[]) ?? STATIC_FAQS);
      }
      setIsLoading(false);
    };

    fetchFaqs();
  }, []);

  return { faqs, isLoading, error };
};
