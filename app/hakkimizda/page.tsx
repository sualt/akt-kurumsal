"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Flag, Target, Award, Globe, Heart, ArrowRight, Phone } from "lucide-react";

const values = [
  "Şeffaflık ve güvenilirlik",
  "Müşteri odaklı yaklaşım",
  "Yenilikçi ve sürdürülebilir çözümler",
  "İş birliği ve ekip ruhu",
  "Kalite ve mükemmeliyetçilik",
];

const achievements = [
  { value: "25+", label: "Marka & Patent Tescili" },
  { value: "50+", label: "KOSGEB Danışmanlığı" },
  { value: "%100", label: "Müşteri Memnuniyeti" },
  { value: "2025", label: "Kuruluş Yılı" },
];

const sections = [
  {
    icon: Flag,
    title: "Misyonumuz",
    text: "İşletmelerin ve girişimcilerin büyümesini desteklemek için yenilikçi, güvenilir ve kişiye özel çözümler sunuyoruz. Her projede kaliteyi ve müşteri memnuniyetini ön planda tutuyoruz.",
  },
  {
    icon: Target,
    title: "Vizyonumuz",
    text: "Türkiye ve uluslararası pazarlarda güvenilir ve yenilikçi bir danışmanlık firması olarak tanınmak. Müşterilerimizin iş süreçlerini daha verimli, hızlı ve güvenli hâle getirmek önceliğimizdir.",
  },
  {
    icon: Globe,
    title: "Global Hizmet",
    text: "Sadece Türkiye'de değil, yurtdışında da danışmanlık hizmetleri sunuyoruz. Uluslararası iş süreçlerini yönetiyor, tescil ve başvuru aşamalarında global standartları uyguluyoruz.",
  },
  {
    icon: Users,
    title: "Ekibimiz",
    text: "Alanında uzman danışmanlarımız, sektör tecrübeleri ve kişisel ilgileri ile her projeyi başarıya taşır. Her ekip üyesi müşteri memnuniyetini öncelikli hedef olarak benimser.",
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif]">

      {/* ── BANNER ───────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[60vh] overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2463]/65 via-[#0a2463]/45 to-[#0a2463]/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5"
          >
            Biz Kimiz?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg"
          >
            Hakkımızda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed"
          >
            2025 yılından bu yana kurumsal danışmanlık ve tescil hizmetlerinde
            güvenilir çözüm ortağınız olarak faaliyet gösteriyoruz.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f8fc] to-transparent" />
      </section>

      {/* ── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#0a2463] transition-colors">Anasayfa</Link>
          <span>/</span>
          <span className="text-[#0a2463] font-medium">Hakkımızda</span>
        </div>
      </div>

      {/* ── ACHIEVEMENTS STRIP ───────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100 py-14 px-6 mt-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="text-4xl font-black text-[#0a2463] mb-1 group-hover:text-[#e8b923] transition-colors duration-300">
                {item.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MISSION / VISION / TEAM / GLOBAL ────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-8 overflow-hidden relative"
              >
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#0a2463]/4 group-hover:bg-[#e8b923]/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#0a2463]/6 flex items-center justify-center mb-5 group-hover:bg-[#0a2463] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#0a2463] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0a2463] mb-3">{s.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── VALUES ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0a2463] rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#e8b923] flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#0a2463]" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">Değerlerimiz</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-white/8 rounded-xl px-5 py-4 border border-white/10 hover:border-[#e8b923]/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#e8b923] flex-shrink-0" />
                <span className="text-white/85 text-sm font-medium">{v}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── ACHIEVEMENTS LIST ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#0a2463]/6 flex items-center justify-center">
              <Award className="w-6 h-6 text-[#0a2463]" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0a2463]">Başarılarımız</h2>
          </div>
          <div className="space-y-4">
            {[
              "500+ başarılı marka ve patent tescili",
              "1000+ KOSGEB ve devlet destek danışmanlığı",
              "Ulusal ve uluslararası projelerde yüksek başarı oranı",
              "Sürdürülebilir kurumsal müşteri portföyü",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#f7f8fc] border border-gray-100 hover:border-[#e8b923]/40 hover:bg-[#e8b923]/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-[#e8b923] flex items-center justify-center flex-shrink-0 text-[#0a2463] font-black text-xs">
                  {i + 1}
                </div>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#e8b923] font-bold text-xs uppercase tracking-[0.25em] mb-4">
              İletişime Geçin
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2463] mb-4 leading-tight">
              Profesyonel Danışmanlık Alın
            </h2>
            <p className="text-gray-500 mb-10 text-sm leading-relaxed max-w-xl mx-auto">
              Hakkımızda daha fazla bilgi almak ve size özel çözümlerimizi
              keşfetmek için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-[#0a2463] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0d2d7a] transition-all hover:scale-105 shadow-lg shadow-[#0a2463]/20"
              >
                Bize Ulaşın
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+90553 077 74 88"
                className="inline-flex items-center gap-2 text-[#0a2463] font-semibold hover:text-[#e8b923] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Hemen Ara
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}