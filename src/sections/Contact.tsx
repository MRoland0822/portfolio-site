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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Contact() {
  const t = useTranslations('contact');

  const contactLinks = [
    {
      id: 'email',
      label: t('emailLabel'),
      href: `mailto:rollimagyar@gmail.com`,
      icon: '✉️',
      value: 'rollimagyar@gmail.com',
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100',
    },
    {
      id: 'linkedin',
      label: t('linkedin'),
      href: 'https://www.linkedin.com/in/magyar-roland-a55953237',
      icon: '💼',
      value: 'linkedin.com/in/magyar-roland',
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100',
    },
    {
      id: 'github',
      label: t('github'),
      href: 'https://github.com/MRoland0822',
      icon: '💻',
      value: 'github.com/MRoland0822',
      color: 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-6 ">
    
      {/* Background floating shapes */}
      <motion.div
        className="absolute top-10 left-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20 blur-3xl pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full opacity-15 blur-3xl pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 150, ease: 'linear' }}
      />

      <div className=" mx-auto">
        <SectionTitle subtitle={t('subtitle')} className="mb-16">
          {t('title')}
        </SectionTitle>

        <motion.p
          className="text-center text-lg sm:text-xl text-gray-600 dark:text-gray-400  mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {t('description')}
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
              <div
                className={`h-full flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 ${link.color}`}
              >
                <div className="text-5xl mb-4">{link.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {link.label}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base break-words">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
        </motion.div>
      </div>
    </section>
  );
}
