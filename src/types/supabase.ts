// Supabase 데이터베이스 타입 정의
// npx supabase gen types typescript 으로 자동 생성 가능
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          service: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone: string;
          service: string;
          message: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['inquiries']['Insert']>;
      };
      notices: {
        Row: {
          id: string;
          title: string;
          content: string;
          published_at: string;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          published_at?: string;
          is_active?: boolean;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['notices']['Insert']>;
      };
      faqs: {
        Row: {
          id: string;
          question: string;
          answer: string;
          display_order: number;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          question: string;
          answer: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['faqs']['Insert']>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
