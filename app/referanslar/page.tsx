"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";

export default function ReferanslarPage() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif] flex flex-col items-center justify-center px-6">

      {/* Dekoratif arka plan daireleri */}
      <div className="fixed -top-40 -right-40 w-96 h-96 rounded-full bg-[#0a2463]/5 pointer-events-none" />
      <div className="fixed -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#e8b923]/8 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-xl relative z-10"
      >
        {/* İkon */}
        <motion.div
          animate={{ rotate: [0, -8, 8, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-20 h-20 rounded-2xl bg-[#0a2463] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#0a2463]/20"
        >
          <Wrench className="w-9 h-9 text-[#e8b923]" />
        </motion.div>

        {/* Badge */}
        <span className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
          Çok Yakında
        </span>

        {/* Başlık */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a2463] mb-5 leading-tight">
          Yapılanıyoruz 🚀
        </h1>

        <p className="text-gray-500 text-base leading-relaxed mb-10">
          Referanslar sayfamız üzerinde çalışmalar devam ediyor.
          Çok yakında müşteri deneyimlerimizi sizlerle paylaşacağız.
        </p>

        {/* Spinner */}
        <div className="flex justify-center mb-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-10 h-10 rounded-full"
            style={{ borderWidth: "3px", borderStyle: "solid", borderColor: "rgba(10,36,99,0.15)", borderTopColor: "#0a2463" }}
          />
        </div>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#0a2463] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#0d2d7a] transition-all hover:scale-105 shadow-lg shadow-[#0a2463]/20 text-sm"
          >
            Anasayfaya Dön
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0a2463] font-bold px-7 py-3.5 rounded-xl border border-gray-200 hover:border-[#0a2463]/30 hover:bg-[#0a2463]/4 transition-all text-sm"
          >
            Bize Ulaşın
          </Link>
        </div>
      </motion.div>

    </div>
  );
}