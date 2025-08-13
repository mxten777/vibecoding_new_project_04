// Google Forms 연동 서비스
export interface GoogleFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export class GoogleFormsService {
  private formId: string;
  private formUrl: string;

  constructor(formId?: string) {
    this.formId = formId || import.meta.env.VITE_GOOGLE_FORM_ID || '';
    this.formUrl = `https://docs.google.com/forms/d/${this.formId}/formResponse`;
  }

  /**
   * Google Forms에 데이터 전송
   */
  async submitForm(data: GoogleFormData): Promise<boolean> {
    try {
      // Google Forms의 실제 필드 ID는 폼을 만든 후 확인 필요
      const formData = new FormData();
      
      // 예시 필드 ID들 (실제 폼 생성 후 교체 필요)
      formData.append('entry.1234567890', data.name);      // 이름 필드
      formData.append('entry.0987654321', data.email);     // 이메일 필드
      formData.append('entry.1122334455', data.phone);     // 전화번호 필드
      formData.append('entry.5566778899', data.service);   // 서비스 유형 필드
      formData.append('entry.9988776655', data.message);   // 메시지 필드

      await fetch(this.formUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Google Forms는 CORS 제한이 있어 no-cors 모드 사용
      });

      // no-cors 모드에서는 응답 상태를 확인할 수 없으므로 성공으로 간주
      return true;
    } catch (error) {
      console.error('Google Forms 전송 오류:', error);
      return false;
    }
  }

  /**
   * 폼 검증
   */
  validateForm(data: GoogleFormData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.name.trim()) {
      errors.push('이름을 입력해주세요.');
    }

    if (!data.phone.trim()) {
      errors.push('연락처를 입력해주세요.');
    } else if (!/^010-\d{4}-\d{4}$/.test(data.phone)) {
      errors.push('연락처 형식이 올바르지 않습니다. (010-0000-0000)');
    }

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('이메일 형식이 올바르지 않습니다.');
    }

    if (!data.service) {
      errors.push('상담 유형을 선택해주세요.');
    }

    if (!data.message.trim()) {
      errors.push('상담 내용을 입력해주세요.');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// 싱글톤 인스턴스 생성
export const googleFormsService = new GoogleFormsService();
