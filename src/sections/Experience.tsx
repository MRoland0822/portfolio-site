'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import ExperienceCard from '@/components/ui/ExperienceCard';
import { experience } from '@/data/experience';
import type { Experience } from '@/data/experience';

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

interface ExperienceGroupProps {
  title: string;
  items: Experience[];
}

function ExperienceGroup({ title, items }: ExperienceGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        {title}
      </h3>

      <motion.div
        className="relative pl-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Timeline line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-900 to-gray-300 dark:from-white dark:to-gray-700" />

        {/* Experience items */}
        <div className="space-y-0">
          {items.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const t = useTranslations('experience');

  const workExp = experience.filter((e) => e.type === 'work');
  const learningExp = experience.filter((e) => e.type === 'learning');
  const projectExp = experience.filter((e) => e.type === 'project');

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle={t('subtitle')}>
          {t('title')}
        </SectionTitle>

        <div className="space-y-20">
          {workExp.length > 0 && (
            <ExperienceGroup title={t('work')} items={workExp} />
          )}
          {learningExp.length > 0 && (
            <ExperienceGroup title={t('learning')} items={learningExp} />
          )}
          {projectExp.length > 0 && (
            <ExperienceGroup title={t('project')} items={projectExp} />
          )}
        </div>
      </div>
    </section>
  );
}