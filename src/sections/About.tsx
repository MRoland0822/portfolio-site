"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import type { Variants } from "framer-motion";

export default function About() {
  const t = useTranslations("about");

  const paragraphs = [
    t("paragraph1"),
    t("paragraph2"),
    t("paragraph3"),
    t("paragraph4"),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{t("title")}</SectionTitle>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Fun Facts / Highlights */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { number: "1.5+", label: "Years Experience" },
            { number: "5+", label: "Projects Built" },
            { number: "3", label: "Languages" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg text-center"
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
