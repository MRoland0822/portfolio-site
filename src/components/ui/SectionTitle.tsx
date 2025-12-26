import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  children,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${className ?? ''}`}
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </motion.div>
  );
}