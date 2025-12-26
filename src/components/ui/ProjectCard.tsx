'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Badge from './Badge';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

const cardVariants: Variants = {
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

export default function ProjectCard({ project, index, className }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      className="group w-full"
    >
      <div
        className={`relative h-full rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/95 dark:bg-gray-900/95 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
          className ?? ''
        }`}
      >
        {/* Accent gradient border */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-purple-500/20 via-transparent to-blue-500/20" />

        {/* Content */}
        <div className="relative p-6 sm:p-7 flex flex-col h-full gap-3 sm:gap-4">
          {/* Title as GitHub link */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors underline-offset-4 hover:underline">
              {project.title}
            </h3>
          </a>

          {/* Small meta line */}
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
            Featured project
          </p>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Long Description */}
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            {project.longDescription}
          </p>

          {/* Technologies */}
          <div className="mt-1 sm:mt-2">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500 mb-1.5">
              Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-[0.7rem] px-2 py-0.5 border-gray-200/80 dark:border-gray-700/80 bg-gray-50/90 dark:bg-gray-800/80"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 5 && (
                <span className="text-[0.7rem] text-gray-400 dark:text-gray-500 ml-1">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}