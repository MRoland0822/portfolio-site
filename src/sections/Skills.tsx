'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import Badge from '@/components/ui/Badge';
import { skills, type Skill } from '@/data/skills';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const groupVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface SkillsGroupProps {
  title: string;
  skillsList: Skill[];
}

const SkillsGroup = ({ title, skillsList }: SkillsGroupProps) => (
  <motion.div variants={groupVariants}>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      {title}
    </h3>

    <motion.div className="flex flex-wrap gap-3" variants={containerVariants}>
      {skillsList.map((skill) => (
        <motion.div key={skill.name} variants={itemVariants}>
          <Badge
            variant={skill.category === 'core' ? 'default' : 'outline'}
            className="hover:scale-105 transition-transform duration-200 cursor-default"
          >
            {skill.name}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default function Skills() {
  const t = useTranslations('skills');

  const coreSkills = skills.filter((skill) => skill.category === 'core');
  const learningSkills = skills.filter((skill) => skill.category === 'learning');

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{t('title')}</SectionTitle>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SkillsGroup title={t('core')} skillsList={coreSkills} />
          <SkillsGroup title={t('learning')} skillsList={learningSkills} />
        </motion.div>
      </div>
    </section>
  );
}