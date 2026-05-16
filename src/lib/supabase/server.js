import { createClient } from '@supabase/supabase-js';
import { assertSupabaseConfig } from './config';

export function createSupabaseServerClient() {
  const { url, key } = assertSupabaseConfig();
  return createClient(url, key);
}
