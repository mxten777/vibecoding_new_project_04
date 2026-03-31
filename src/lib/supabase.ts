import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// anon key — 프론트엔드 공개 노출 안전 (RLS 정책으로 보호)
// service_role key는 절대 프론트엔드에 노출하지 않을 것
export const supabase = createClient<Database>(supabaseUrl ?? '', supabaseAnonKey ?? '');

export const isSupabaseConfigured =
  Boolean(supabaseUrl) &&
  !supabaseUrl?.includes('your_supabase') &&
  Boolean(supabaseAnonKey) &&
  !supabaseAnonKey?.includes('your_supabase');

/*
 * ─────────────────────────────────────────────────────────────
 * Supabase 초기 설정 SQL (대시보드 SQL Editor에서 실행)
 * https://supabase.com/dashboard → 프로젝트 → SQL Editor
 * ─────────────────────────────────────────────────────────────
 *
 * -- 1. 문의 테이블
 * CREATE TABLE IF NOT EXISTS inquiries (
 *   id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   name        TEXT NOT NULL,
 *   email       TEXT NOT NULL,
 *   phone       TEXT NOT NULL,
 *   service     TEXT NOT NULL,
 *   message     TEXT NOT NULL,
 *   created_at  TIMESTAMPTZ DEFAULT NOW()
 * );
 * ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
 * -- anon: INSERT 허용, SELECT 불가 (관리자만 읽기)
 * CREATE POLICY "anon_insert_inquiry" ON inquiries
 *   FOR INSERT TO anon WITH CHECK (true);
 *
 * -- 2. 공지사항 테이블
 * CREATE TABLE IF NOT EXISTS notices (
 *   id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   title         TEXT NOT NULL,
 *   content       TEXT NOT NULL,
 *   published_at  DATE NOT NULL DEFAULT CURRENT_DATE,
 *   is_active     BOOLEAN NOT NULL DEFAULT true,
 *   created_at    TIMESTAMPTZ DEFAULT NOW()
 * );
 * ALTER TABLE notices ENABLE ROW LEVEL SECURITY;
 * -- anon: is_active인 행만 SELECT 허용
 * CREATE POLICY "public_read_notices" ON notices
 *   FOR SELECT TO anon USING (is_active = true);
 *
 * -- 3. FAQ 테이블
 * CREATE TABLE IF NOT EXISTS faqs (
 *   id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   question      TEXT NOT NULL,
 *   answer        TEXT NOT NULL,
 *   display_order INT NOT NULL DEFAULT 0,
 *   is_active     BOOLEAN NOT NULL DEFAULT true,
 *   created_at    TIMESTAMPTZ DEFAULT NOW()
 * );
 * ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
 * CREATE POLICY "public_read_faqs" ON faqs
 *   FOR SELECT TO anon USING (is_active = true);
 * ─────────────────────────────────────────────────────────────
 */
