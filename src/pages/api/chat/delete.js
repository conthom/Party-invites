import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const adminSecret = process.env.CHAT_ADMIN_SECRET;
  if (!adminSecret) {
    return res.status(500).json({ error: 'CHAT_ADMIN_SECRET is not configured' });
  }

  const { id, secret } = req.body || {};
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' });
  }
  if (secret !== adminSecret) {
    return res.status(401).json({ error: 'Invalid admin secret' });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SECRET_KEY;
  if (!url || !serviceKey) {
    return res.status(500).json({
      error: 'Server missing SUPABASE_SERVICE_ROLE_KEY for admin deletes.',
    });
  }

  const supabase = createClient(url, serviceKey);
  const { error } = await supabase.from('party_chat').delete().eq('id', id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ ok: true });
}
