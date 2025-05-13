'use client';

import { AnimatedTitle } from '../components/AnimatedTitle';
import { PartyForm } from '../components/PartyForm';
import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-12">
        <AnimatedTitle />
        <PartyForm />
      </div>
    </main>
  );
}