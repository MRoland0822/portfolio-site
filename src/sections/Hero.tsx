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
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-linear-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/70 dark:bg-gray-900/70 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-gray-800/60 backdrop-blur">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight"
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-medium"
        >
          {t("subtitle")}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
         className="text-base sm:text-2xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed"
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
            className="w-full sm:w-auto px-8"
          >
            {t("cta_projects")} →
          </Button>

          <Button
          href="/cv.pdf"
          variant="outline"
          size="lg"
          className="w-full sm:w-auto px-8"
          download
        >
          {t("cta_cv")} ↓
        </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          <span className="text-xs tracking-wide uppercase">
            Scroll
          </span>
          <svg
            className="w-5 h-5"
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
