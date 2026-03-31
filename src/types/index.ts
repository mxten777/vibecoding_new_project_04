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

export interface NotionData {
  services: AdminServices[];
  experiences: Experience[];
  certifications: Certification[];
  testimonials: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  date: string;
}

export interface GoogleFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceType: string;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}
