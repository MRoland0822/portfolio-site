// components/GlobalBackground.tsx
'use client';

import { motion } from 'framer-motion';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      {/* blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-400/20 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 80, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[45rem] h-[45rem] bg-pink-400/20 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 100, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
