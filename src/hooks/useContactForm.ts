import { useState } from 'react';
import type { GoogleFormData } from '../services/googleForms';
import { googleFormsService } from '../services/googleForms';
import { createInquiry } from '../services/notion';

export const useContactForm = () => {
  const [formData, setFormData] = useState<GoogleFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof GoogleFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // 입력 시 해당 필드 에러 클리어
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 폼 검증
    const validation = googleFormsService.validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors([]);

    try {
      // Google Forms와 Notion 동시 저장
      const [googleResult, notionResult] = await Promise.allSettled([
        googleFormsService.submitForm(formData),
        createInquiry(formData),
      ]);

      // 하나라도 성공하면 성공으로 처리
      const isSuccess = 
        (googleResult.status === 'fulfilled' && googleResult.value) ||
        (notionResult.status === 'fulfilled' && notionResult.value.success);

      if (isSuccess) {
        setIsSubmitted(true);
        // 폼 초기화
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setErrors(['전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.']);
      }
    } catch (error) {
      console.error('폼 전송 오류:', error);
      setErrors(['전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
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
