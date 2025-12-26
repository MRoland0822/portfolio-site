"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";

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
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { number: "1.5+", label: "Years Experience" },
    { number: "4+", label: "Projects Built" },
    { number: "3", label: "Languages" },
    { number: "2", label: "Awards Won" },
  ];

  return (
    <section id="about" className="relative py-32 px-6 ">

      {/* Paragraphs: Full Width */}
      <motion.div
        className=" mx-auto space-y-10 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {paragraphs.map((paragraph, idx) => (
          <motion.p
            key={idx}
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-[90%] mx-auto "
          >
            {paragraph.split(" ").map((word, i) => {
              if (i % 6 === 0) {
                return <span key={i} className="text-purple-500 dark:text-purple-400 font-semibold"> {word} </span>;
              }
              return ` ${word} `;
            })}
          </motion.p>
        ))}


      </motion.div>

      {/* Floating Stats / Objects Below */}
      <motion.div
        className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-8 bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl text-center shadow-2xl hover:scale-105 transition-transform duration-300 cursor-default relative overflow-hidden"
          >
            <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl">
              {stat.label}
            </div>
            {/* Subtle Floating Shape */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-200 dark:bg-purple-700 rounded-full opacity-50 blur-2xl pointer-events-none animate-bounce-slow"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Animated Background Shapes */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20 blur-3xl animate-slow-spin pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full opacity-15 blur-3xl animate-slow-spin pointer-events-none"></div>
    </section>
  );
}
