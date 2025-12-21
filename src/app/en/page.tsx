'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex-1">
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl text-gray-600">{t('hero.subtitle')}</p>
        </div>
      </section>
    </main>
  );
}