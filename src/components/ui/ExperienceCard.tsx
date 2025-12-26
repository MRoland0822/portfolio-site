'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Badge from './Badge';
import { Experience } from '@/data/experience';

interface ExperienceCardProps {
  item: Experience;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const typeStyle = {
  work: {
    glow: 'bg-blue-400',
    text: 'text-blue-600 dark:text-blue-400',
    icon: '💼',
  },
  learning: {
    glow: 'bg-purple-400',
    text: 'text-purple-600 dark:text-purple-400',
    icon: '📚',
  },
};

export default function ExperienceCard({ item, index }: ExperienceCardProps) {
const style = typeStyle[item.type as 'work' | 'learning'];


  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08 }}
      className="relative group"
    >
      {/* Hover Glow */}
      <div
        className={`pointer-events-none absolute -inset-8 rounded-3xl blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${style.glow}`}
      />

      {/* Card */}
      <motion.div
        whileHover={{ y: -6 }}
        className="relative flex gap-5 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur border border-gray-200/70 dark:border-gray-800 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300"
      >
        {/* Accent bar */}
        <div className={`w-1.5 rounded-full`} />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{style.icon}</span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
              </div>

              <p className={`text-sm font-medium ${style.text}`}>
                {item.company}
              </p>
            </div>

            <span className="shrink-0 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              {item.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Technologies */}
          {item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs px-3 py-1 bg-gray-50 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
