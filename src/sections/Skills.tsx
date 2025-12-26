"use client";

import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { skills, type Skill } from "@/data/skills";

// Deterministic pseudo-random generator so results are stable across renders
const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

interface SkillNodeProps {
  skill: Skill;
  x: number;
  y: number;
  delay: number;
  size: number;
}

const SkillNode = ({ skill, x, y, delay, size }: SkillNodeProps) => (
  <motion.div
    className="absolute flex items-center justify-center cursor-pointer select-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{ y: [y, y + 5, y], x: [x, x + 3, x] }}
    transition={{ repeat: Infinity, duration: 6 + delay, ease: "easeInOut" }}
    whileHover={{ scale: 1.15 }}
  >
    <div
      className={`flex items-center justify-center rounded-full font-medium text-center shadow-md ${
        skill.category === "core"
          ? "bg-purple-500 text-white"
          : "bg-purple-100 dark:bg-purple-800 text-purple-900 dark:text-purple-200"
      }`}
      style={{ width: size, height: size, padding: "0.5rem" }}
    >
      {skill.name}
    </div>
  </motion.div>
);

export default function SkillsFloating() {
  const t = useTranslations("skills");
  const nodeSize = 120; // pixels

  // Generate positions and delays deterministically (no Math.random in render)
  const { positions, delays } = useMemo(() => {
    // Helper: generate non-overlapping positions
    const generatePositions = (count: number, size: number) => {
      const positions: { x: number; y: number }[] = [];
      const maxAttempts = 1000;
      let attempts = 0;
      let seed = 1;

      while (positions.length < count && attempts < maxAttempts) {
        attempts++;
        const x = pseudoRandom(seed++) * 80 + 10; // 10% → 90%
        const y = pseudoRandom(seed++) * 70 + 10; // 10% → 80%

        // Check overlap
        const overlapping = positions.some(
          (pos) => Math.abs(pos.x - x) * 10 < size && Math.abs(pos.y - y) * 10 < size
        );

        if (!overlapping) {
          positions.push({ x, y });
        }
      }
      return positions;
    };

    const pos = generatePositions(skills.length, nodeSize);
    const del = skills.map((_, index) => pseudoRandom(1000 + index) * 3);
    return { positions: pos, delays: del };
  }, [nodeSize]);

  return (
    <section className="relative py-32 px-6 border-t border-gray-200/60 dark:border-gray-800/60">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-20">
        {t("title")}
      </h2>

      <div className="relative w-full h-[700px] md:h-[700px] lg:h-[800px] mx-auto">
        {skills.map((skill, idx) => (
          <SkillNode
            key={skill.name}
            skill={skill}
            x={positions[idx].x}
            y={positions[idx].y}
            delay={delays[idx]}
            size={nodeSize}
          />
        ))}

        {/* Background floating shapes */}
        <motion.div
          className="absolute top-10 left-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20 blur-3xl pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full opacity-15 blur-3xl pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        />
      </div>
    </section>
  );
}
