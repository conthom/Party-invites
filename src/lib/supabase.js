import { createBrowserClient } from '@supabase/ssr';
import { getSupabaseUrl, getSupabasePublicKey } from './supabase/config';

let browserClient;

/** Lazy client so `next build` does not require env vars at module load time. */
export function getSupabase() {
  const url = getSupabaseUrl();
  const key = getSupabasePublicKey();
  if (!url || !key) {
    throw new Error(
      'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY).'
    );
  }
  if (!browserClient) {
    browserClient = createBrowserClient(url, key);
  }
  return browserClient;
}
