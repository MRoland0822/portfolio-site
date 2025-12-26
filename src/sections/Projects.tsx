'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

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

export default function Projects() {
  const t = useTranslations('projects');

  const displayProjects =
    projects.filter((p) => p.featured).length > 0
      ? projects.filter((p) => p.featured)
      : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative py-32 px-6">
    
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

      <div className="mx-auto">
        <SectionTitle subtitle={t('subtitle')} className="mb-12">
          {t('title')}
        </SectionTitle>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ProjectCard
                project={project}
                index={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
