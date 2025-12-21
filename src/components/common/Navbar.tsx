'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const navItems = [
    { label: t('about'), href: '#about' },
    { label: t('projects'), href: '#projects' },
    { label: t('experience'), href: '#experience' },
    { label: t('contact'), href: '#contact' },
  ];

  const redirectedPathname =
    locale === 'en'
      ? pathname.replace('/en', '/hu')
      : pathname.replace('/hu', '/en');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-xl font-bold text-gray-900 dark:text-white">
          Dev
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href={redirectedPathname}
            className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {locale === 'en' ? 'HU' : 'EN'}
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
