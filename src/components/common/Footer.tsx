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

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/yourusername', icon: '💻' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: '💼' },
    { label: 'Twitter', href: 'https://twitter.com/yourhandle', icon: '𝕏' },
    { label: 'Email', href: 'mailto:your.email@example.com', icon: '✉️' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-20">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-2">Dev</h3>
            <p className="text-gray-400 text-sm">
              Junior developer passionate about building beautiful web
              experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['hero', 'about', 'projects', 'contact'].map((id) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className="hover:text-white transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-lg transition-colors"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

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
