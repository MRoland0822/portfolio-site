"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { Variants } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          {t("description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            href="#projects"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {t("cta_projects")} →
          </Button>
          <Button
            href="/cv.pdf"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            {t("cta_cv")} ↓
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
            Scroll to explore
          </p>
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
