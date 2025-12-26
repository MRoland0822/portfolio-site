'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1], // ✅ typed easeOut
    },
  },
};

export default function Footer() {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en'; // ✅ safe fallback
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-20">
      <motion.div
        className=" mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div variants={itemVariants} className="h-px bg-gray-800 my-8" />

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>
            {t('copyright')} {currentYear}
          </p>

          <Link
            href={locale === 'en' ? '/hu' : '/en'}
            className="hover:text-white transition-colors font-medium"
          >
            {locale === 'en' ? '🇭🇺 HU' : '🇬🇧 EN'}
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
}
