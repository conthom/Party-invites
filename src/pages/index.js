'use client';

import dynamic from 'next/dynamic';
import { PartyForm } from '../components/PartyForm';
import React from 'react';

// Dynamically import AnimatedTitle with no SSR
const AnimatedTitle = dynamic(() => import('../components/AnimatedTitle').then(mod => mod.AnimatedTitle), {
  ssr: false
});

export default function HomePage() {
  return (
    <div className="bg-wrapper">
      <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
          <AnimatedTitle />
          <PartyForm />
        </div>
      </main>
    </div>
  );
}