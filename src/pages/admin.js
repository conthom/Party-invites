'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
export default function AdminPage() {
  const [invites, setInvites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInvites();
  }, []);

  async function fetchInvites() {
    try {
      const { data, error } = await supabase
        .from('party_invites')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInvites(data || []);
    } catch (error) {
      console.error('Error fetching invites:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-2xl mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-2xl mb-4">Party RSVP Submissions</h1>
        <div className="bg-gray-900/50 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Guests</th>
                  <th className="px-6 py-3 text-left">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {invites.map((invite) => (
                  <tr key={invite.id} className="hover:bg-gray-800/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(invite.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">{invite.name}</td>
                    <td className="px-6 py-4">{invite.email || '-'}</td>
                    <td className="px-6 py-4">{invite.guests}</td>
                    <td className="px-6 py-4">{invite.message || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-700 text-white">
            Total RSVPs: {invites.length} | 
            Total Guests: {invites.reduce((sum, invite) => sum + invite.guests, 0)}
          </div>
        </div>
      </div>
    </div>
  );
}