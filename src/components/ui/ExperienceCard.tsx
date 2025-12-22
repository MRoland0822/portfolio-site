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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const typeColors = {
  work: 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100',
  learning: 'bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100',
  project: 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100',
};

export default function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot and line */}
      <div className="absolute -left-8 top-0 w-6 h-6 bg-gray-900 dark:bg-white rounded-full border-4 border-white dark:border-gray-950 flex items-center justify-center">
        <div className="w-2 h-2 bg-white dark:bg-gray-950 rounded-full" />
      </div>

      <div className="ml-6 pb-8">
        {/* Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {item.company}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${typeColors[item.type]}`}
            >
              {item.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}