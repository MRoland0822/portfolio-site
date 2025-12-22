'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Contact() {
  const t = useTranslations('contact');

  const contactLinks = [
    {
      id: 'email',
      label: t('emailLabel'),
      href: `mailto:${t('email')}`,
      icon: '✉️',
      value: t('email'),
    },
    {
      id: 'linkedin',
      label: t('linkedin'),
      href: 'https://linkedin.com/in/yourprofile',
      icon: '💼',
      value: 'linkedin.com/in/yourprofile',
    },
    {
      id: 'github',
      label: t('github'),
      href: 'https://github.com/yourusername',
      icon: '💻',
      value: 'github.com/yourusername',
    },
    {
      id: 'twitter',
      label: t('twitter'),
      href: 'https://twitter.com/yourhandle',
      icon: '𝕏',
      value: '@yourhandle',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle={t('subtitle')}>
          {t('title')}
        </SectionTitle>

        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            {t('description')}
          </motion.p>

          {/* Contact Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.id !== 'email' ? '_blank' : undefined}
                rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center hover:border-gray-900 dark:hover:border-white">
                  <div className="text-4xl mb-3">{link.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Button
            href={`mailto:${t('email')}`}
            variant="primary"
            size="lg"
            className="mb-4"
          >
            Start a Conversation →
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-500">
              {"I'll get back to you within 24 hours"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}