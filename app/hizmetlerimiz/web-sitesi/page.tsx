"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, CheckCircle, ArrowRight, Phone, Zap, ShieldCheck, TrendingUp, Smartphone } from "lucide-react";

const scope = [
  "Kurumsal web sitesi tasarımı",
  "E-ticaret sitesi kurulumu",
  "SEO uyumlu altyapı",
  "Mobil ve tablet uyumlu tasarım",
  "Güvenlik ve SSL kurulumu",
  "Alan adı ve hosting danışmanlığı",
];

const whyUs = [
  { icon: Zap, title: "Hızlı Açılış", desc: "Google Core Web Vitals'a uygun optimize edilmiş sayfalar." },
  { icon: TrendingUp, title: "SEO Odaklı", desc: "Arama motorlarında üst sıralara çıkmanıza destek olacak teknik altyapı." },
  { icon: Smartphone, title: "Mobil Uyumlu", desc: "Tüm cihazlarda kusursuz görünen responsive tasarım." },
  { icon: ShieldCheck, title: "Güvenli Altyapı", desc: "SSL sertifikası, güvenlik güncellemeleri ve hosting yönetimi." },
];

const digital = [
  { label: "e-İmza Hizmetleri", href: "/hizmetlerimiz/e-imza-satisi" },
  { label: "e-Fatura & e-Dönüşüm", href: "/hizmetlerimiz/e-imza-satisi" },
  { label: "Kurumsal Web Tasarım", href: "/hizmetlerimiz/web-sitesi" },
];

export default function WebTasarimPage() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif]">

      {/* ── BANNER ───────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <Image src="/images/webtasarim.png" alt="Web Tasarım" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2463]/65 via-[#0a2463]/45 to-[#0a2463]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5">
            Dijital Çözümler
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg">
            Kurumsal Web Tasarım
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            Markanızı dijital dünyada güçlü şekilde temsil eden, mobil uyumlu ve SEO odaklı web siteleri.
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
          <span className="text-[#0a2463] font-medium">Web Sitesi Çözümleri</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-8 pt-8">

        {/* ── NEDEN BİZ — 4 KART ───────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all text-center">
                <div className="w-11 h-11 rounded-xl bg-[#0a2463]/6 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0a2463] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#0a2463] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-[#0a2463] mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ── HİZMET KAPSAMI ───────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5 flex items-center gap-2">
              <Globe className="w-4 h-4" /> Hizmet Kapsamı
            </h3>
            <div className="space-y-3">
              {scope.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8fc] hover:bg-[#e8b923]/8 transition-colors">
                  <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                  <span className="text-sm text-gray-600">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── DİJİTAL DÖNÜŞÜM ─────────────────────────────────────────── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-[#0a2463] rounded-2xl p-7 flex flex-col">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Çözümix Kurumsal ile Dijital Dönüşüm</h3>
            <p className="text-white/60 text-xs leading-relaxed mb-6">İşletmenizin dijital süreçlerini tek noktadan yönetiyoruz.</p>
            <div className="space-y-3 flex-1">
              {digital.map((item) => (
                <Link key={item.label} href={item.href}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/8 border border-white/10 hover:border-[#e8b923]/40 hover:bg-white/12 transition-all group">
                  <span className="text-white/80 text-sm font-medium">{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#e8b923] group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-[#e8b923]/10 border border-[#e8b923]/20">
              <p className="text-white/70 text-xs leading-relaxed">
                Kurumsal kimliğinize uygun, ölçeklenebilir yazılım mimarisiyle inşa edilen web siteleri.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <span className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Hemen Başlayın</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">Web Sitenizi Profesyonelce Oluşturalım</h3>
            <p className="text-white/65 text-sm leading-relaxed">Çözümix Kurumsal ile markanızı dijital dünyada güçlü ve güvenilir şekilde temsil edin.</p>
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