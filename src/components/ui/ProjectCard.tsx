'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Badge from './Badge';
import Button from './Button';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
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

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Placeholder for image */}
        <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg
              className="w-16 h-16 mx-auto mb-2 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Project Image</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {project.description}
          </p>

          {/* Long Description */}
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-6 line-clamp-2">
            {project.longDescription}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 flex-wrap">
            <Button
              href={project.githubUrl}
              variant="outline"
              size="sm"
              className="text-sm"
            >
              GitHub →
            </Button>
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="primary"
                size="sm"
                className="text-sm"
              >
                Live Demo →
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}