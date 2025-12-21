'use client';

import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';


export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About/>
      <Skills/>
    </main>
  );
}