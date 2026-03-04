"use client";

import { motion } from "framer-motion";

export default function YapilaniyoruzPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-24 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Yapılanıyoruz 🚀
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Bu bölüm üzerinde çalışmalar devam ediyor. Çok yakında sizlerle olacak!
        </p>

        <div className="relative w-24 h-24 mx-auto">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-24 h-24 border-4 border-gray-900 border-t-transparent rounded-full mx-auto"
          ></motion.div>
        </div>
      </motion.div>
    </main>
  );
}