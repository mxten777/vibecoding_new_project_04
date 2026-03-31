import { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Web3Forms (https://web3forms.com) — 무료 플랜 250건/월
// 1. https://web3forms.com 에서 이메일로 Access Key 발급
// 2. .env 파일에 VITE_WEB3FORMS_KEY=발급받은키 설정
// 3. 수신 이메일이 없으면 콘솔 로그로만 동작 (개발 모드)
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors: string[] = [];
    if (!formData.name.trim()) validationErrors.push('이름을 입력해주세요.');
    if (!formData.email.trim()) validationErrors.push('이메일을 입력해주세요.');
    if (!formData.phone.trim()) validationErrors.push('전화번호를 입력해주세요.');
    if (!formData.service.trim()) validationErrors.push('서비스를 선택해주세요.');
    if (!formData.message.trim()) validationErrors.push('문의내용을 입력해주세요.');

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors([]);

    try {
      if (WEB3FORMS_KEY) {
        // 실제 이메일 전송 (Web3Forms)
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `[PARK.S.H 행정사] ${formData.service} 상담 문의 — ${formData.name}`,
            from_name: `${formData.name} (${formData.phone})`,
            reply_to: formData.email,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            botcheck: '',
          }),
        });

        const result = await response.json() as { success: boolean; message?: string };

        if (!result.success) {
          throw new Error(result.message ?? '전송 실패');
        }
      } else {
        // DEV MODE: API 키 없을 때 콘솔 출력만
        console.info('[DEV] 문의 제출 (Web3Forms 키 없음):', formData);
        await new Promise((res) => setTimeout(res, 800));
      }

      // Supabase에 문의 내용 저장 (설정된 경우) — Web3Forms 성공 여부와 독립적으로 동작
      if (isSupabaseConfigured) {
        const { error: dbError } = await supabase.from('inquiries').insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        });
        if (dbError) {
          // DB 저장 실패는 사용자에게 노출하지 않음 (이메일은 이미 전송됨)
          console.error('[Supabase] 문의 저장 오류:', dbError.message);
        }
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('폼 전송 오류:', error);
      setErrors(['전송 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 전화로 문의해주세요. (031-123-4567)']);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setErrors([]);
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm
  };
};
