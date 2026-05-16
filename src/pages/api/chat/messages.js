import { createSupabaseServerClient } from '../../../lib/supabase/server';

function friendlyError(error) {
  const msg = error?.message || String(error);
  if (msg.includes('Failed to fetch') || msg.includes('fetch failed')) {
    return 'Could not reach the database. Check your connection or Supabase project status.';
  }
  if (msg.includes('party_chat') && (msg.includes('schema cache') || msg.includes('does not exist'))) {
    return 'Chat table missing. Run supabase-party-chat.sql in your Supabase SQL editor.';
  }
  return msg;
}

export default async function handler(req, res) {
  try {
    const supabase = createSupabaseServerClient();

    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('party_chat')
        .select('id, author_name, body, created_at')
        .order('created_at', { ascending: true });

      if (error) {
        return res.status(500).json({ error: friendlyError(error) });
      }
      return res.status(200).json({ messages: data || [] });
    }

    if (req.method === 'POST') {
      const { author_name, body } = req.body || {};
      const name = typeof author_name === 'string' ? author_name.trim() : '';
      const text = typeof body === 'string' ? body.trim() : '';

      if (!name || !text) {
        return res.status(400).json({ error: 'Name and message are required.' });
      }
      if (name.length > 40) {
        return res.status(400).json({ error: 'Name is too long.' });
      }
      if (text.length > 2000) {
        return res.status(400).json({ error: 'Message is too long.' });
      }

      const { data, error } = await supabase
        .from('party_chat')
        .insert({ author_name: name, body: text })
        .select('id, author_name, body, created_at')
        .single();

      if (error) {
        return res.status(500).json({ error: friendlyError(error) });
      }
      return res.status(201).json({ message: data });
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    return res.status(500).json({ error: friendlyError(err) });
  }
}
