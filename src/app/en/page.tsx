'use client';

import PageTransition from '@/components/common/PageTransition';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <PageTransition>
    <main className="flex-1">
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </main>
    </PageTransition>
  );
}