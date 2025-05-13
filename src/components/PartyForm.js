'use client';

import { useState } from 'react';
import React from 'react';
import { supabase } from '../lib/supabase';

export function PartyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('party_invites')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            guests: formData.guests,
            message: formData.message,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', guests: 1, message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-gray-900/50">
      {status === 'success' && (
        <div className="bg-green-500/10 text-green-500 p-3 sm:p-4 rounded-xl text-sm sm:text-base">
          Thank you for your RSVP!
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-500/10 text-red-500 p-3 sm:p-4 rounded-xl text-sm sm:text-base">
          There was an error submitting your RSVP. Please try again.
        </div>
      )}
      
      <div className="space-y-1 sm:space-y-2">
        <label htmlFor="name" className="block text-base sm:text-lg font-medium text-white">Name</label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-gray-900 text-white border border-gray-700 
                   focus:ring-2 focus:ring-red-500/50 focus:border-transparent 
                   placeholder-gray-400 transition-all duration-200 text-sm sm:text-base"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-1 sm:space-y-2">
        <label htmlFor="email" className="block text-base sm:text-lg font-medium text-white">Email (Optional)</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-gray-900 text-white border border-gray-700 
                   focus:ring-2 focus:ring-red-500/50 focus:border-transparent 
                   placeholder-gray-400 transition-all duration-200 text-sm sm:text-base"
          placeholder="Your email"
        />
      </div>

      <div className="space-y-1 sm:space-y-2">
        <label htmlFor="guests" className="block text-base sm:text-lg font-medium text-white">
          Number of Guests: {formData.guests}
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            id="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-700/50 rounded-lg appearance-none cursor-pointer 
                     accent-red-600 hover:accent-red-500 transition-colors duration-200"
          />
          <span className="text-white font-medium min-w-[2rem] text-center text-base sm:text-lg">
            {formData.guests}
          </span>
        </div>
      </div>

      <div className="space-y-1 sm:space-y-2">
        <label htmlFor="message" className="block text-base sm:text-lg font-medium text-white">Message (Optional)</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-gray-900 text-white border border-gray-700 
                   focus:ring-2 focus:ring-red-500/50 focus:border-transparent 
                   placeholder-gray-400 transition-all duration-200 h-32 resize-none text-sm sm:text-base"
          placeholder="Any additional information..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl bg-red-600 hover:bg-red-500 
                 text-white font-medium text-base sm:text-lg transition-colors duration-200
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit RSVP'}
      </button>
    </form>
  );
}