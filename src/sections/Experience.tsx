'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import ExperienceCard from '@/components/ui/ExperienceCard';
import { experience } from '@/data/experience';
import type { Experience } from '@/data/experience';


interface ExperienceTimelineProps {
  title: string;
  items: Experience[];
}

function ExperienceTimeline({ title, items }: ExperienceTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center sm:text-left">
        {title}
      </h3>

      <div className="relative">
        {/* Center timeline line */}
        <div className="absolute left-1/2 top-0 w-1 -translate-x-1/2 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />

        <div className="space-y-16">
          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                className={`relative flex flex-col sm:flex-row items-center justify-start ${
                  isLeft ? 'sm:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-900 dark:bg-white border-4 border-white dark:border-gray-950 shadow-md flex items-center justify-center">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.type === 'work'
                          ? 'bg-blue-500 dark:bg-blue-400'
                          : item.type === 'learning'
                          ? 'bg-purple-500 dark:bg-purple-400'
                          : 'bg-green-500 dark:bg-green-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Card */}
                <div className={`sm:w-1/2 px-4 ${isLeft ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <ExperienceCard item={item} index={idx} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const t = useTranslations('experience');

  const workExp = experience.filter((e) => e.type === 'work');
  const learningExp = experience.filter((e) => e.type === 'learning');

  return (
    <section
      id="experience"
      className="relative py-32 px-6 ">
    
      {/* Background floating shapes */}
      <motion.div
        className="absolute top-10 left-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20 blur-3xl pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full opacity-15 blur-3xl pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 150, ease: 'linear' }}
      />

      <div className="mx-auto space-y-32">
        <SectionTitle subtitle={t('subtitle')} className="mb-16">
          {t('title')}
        </SectionTitle>

        {workExp.length > 0 && <ExperienceTimeline title={t('work')} items={workExp} />}
        {learningExp.length > 0 && <ExperienceTimeline title={t('learning')} items={learningExp} />}
      </div>
    </section>
  );
}
