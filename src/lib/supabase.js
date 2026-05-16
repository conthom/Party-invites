import { createBrowserClient } from '@supabase/ssr';
import { getSupabaseUrl, getSupabasePublicKey } from './supabase/config';

export const supabase = createBrowserClient(
  getSupabaseUrl(),
  getSupabasePublicKey()
);
