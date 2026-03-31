// 행정사 도메인 타입 정의
export interface AdminServices {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'business' | 'civil' | 'tax' | 'legal';
  processTime: string;
  requirements: string[];
  benefits: string[];
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceType?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  date: string;
}

// Supabase 테이블 행 타입 (src/types/supabase.ts의 Row 타입 재노출)
export type { Database } from './supabase';

export interface Notice {
  id: string;
  title: string;
  content: string;
  published_at: string;
  is_active: boolean;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  display_order: number;
  is_active: boolean;
}

export interface Inquiry {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

