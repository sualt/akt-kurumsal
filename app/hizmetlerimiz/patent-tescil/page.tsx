"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, CheckCircle, ArrowRight, Phone, ShieldCheck, TrendingUp, Clock, Globe } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, text: "Buluşunuzu yasal olarak koruma altına alır" },
  { icon: TrendingUp, text: "Şirket değerini ve marka gücünü artırır" },
  { icon: Globe, text: "Lisans ve franchising hakkı doğurur" },
  { icon: CheckCircle, text: "Rakiplerin taklit etmesini önler" },
  { icon: Building2, text: "Yatırımcı güveni ve itibarı sağlar" },
];

const steps = [
  "Buluş ön araştırması",
  "Teknik rapor hazırlama",
  "Türk Patent başvurusu",
  "Şekli ve teknik inceleme",
  "Resmi bültende yayın",
  "İtiraz süreci",
  "Patent belgesi düzenlenmesi",
];

const services = [
  "Patent başvurusu hazırlama ve sunma",
  "Buluş yeniliği ve teknik uygunluk analizi",
  "Türk Patent ve Marka Kurumu süreç takibi",
  "İtiraz ve cevap dilekçesi yazımı",
  "Uluslararası patent (PCT) danışmanlığı",
  "Patent yenileme ve süre uzatım işlemleri",
];

export default function PatentTescilPage() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif]">

      {/* ── BANNER ───────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <Image src="/images/patenttescil.png" alt="Patent Tescil" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2463]/65 via-[#0a2463]/45 to-[#0a2463]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5">
            Fikri Mülkiyet
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg">
            Patent Tescil Danışmanlığı
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            Buluşunuzu ve yenilikçi ürünlerinizi hukuki güvence altına alın.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f8fc] to-transparent" />
      </section>

      {/* ── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#0a2463] transition-colors">Anasayfa</Link>
          <span>/</span>
          <Link href="/hizmetlerimiz" className="hover:text-[#0a2463] transition-colors">Hizmetlerimiz</Link>
          <span>/</span>
          <span className="text-[#0a2463] font-medium">Patent Tescil</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-8 pt-8">

        {/* ── PATENT NEDİR ─────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex gap-5 items-start">
          <div className="w-12 h-12 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0 mt-1">
            <Building2 className="w-6 h-6 text-[#0a2463]" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white mb-2">Patent Nedir?</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Patent; yeni ve sanayiye uygulanabilir buluşlar için devlet tarafından verilen, belirli bir süre için münhasır kullanım hakkı tanıyan resmi belgedir. Patent sahibi, buluşunu izinsiz kullananları yasal yollarla durdurabilir.
            </p>
          </div>
        </motion.div>

        {/* ── NEDEN PATENT + SÜREÇ ─────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5">Neden Patent Almalısınız?</h3>
            <div className="space-y-3">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8fc] hover:bg-[#e8b923]/8 transition-colors">
                    <Icon className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                    <span className="text-sm text-gray-600">{r.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-6">Patent Tescil Süreci</h3>
            <div className="space-y-2">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8fc]">
                  <div className="w-6 h-6 rounded-full bg-[#0a2463] flex items-center justify-center text-white text-xs font-black flex-shrink-0">{i + 1}</div>
                  <span className="text-sm text-gray-600">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── HİZMETLERİMİZ ────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#0a2463] px-8 py-6 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 text-[#0a2463]" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">AKT Patent Hizmetleri</h2>
              <p className="text-white/60 text-xs mt-0.5">Başvurudan belgeye kadar tam destek.</p>
            </div>
          </div>
          <div className="p-7 grid sm:grid-cols-2 gap-3">
            {services.map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8fc] hover:bg-[#e8b923]/8 transition-colors">
                <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                <span className="text-sm text-gray-600">{s}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── KORUMA SÜRESİ ────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-[#0a2463]/6 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-[#0a2463]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0a2463] mb-2">Koruma Süresi</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Patent koruması <strong>20 yıl</strong>, faydalı model koruması ise <strong>10 yıl</strong> süreyle geçerlidir. Süre içinde yıllık ücretlerin ödenmesi gerekmektedir.
            </p>
          </div>
        </motion.div>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <span className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Ücretsiz Analiz</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">Buluşunuzu Koruma Altına Alın</h3>
            <p className="text-white/65 text-sm leading-relaxed">Patent başvurusuna uygunluğunuzu analiz edelim, süreci birlikte planlayalım.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 bg-[#e8b923] text-[#0a2463] font-bold px-7 py-4 rounded-xl hover:bg-yellow-400 transition-all hover:scale-105 whitespace-nowrap">
              Teklif Al <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+90XXXXXXXXXX" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all text-sm whitespace-nowrap">
              <Phone className="w-4 h-4" /> Ara
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}