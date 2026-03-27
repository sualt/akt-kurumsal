"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, CheckCircle, ArrowRight, Phone, TrendingUp, ShieldCheck, Zap, FileText } from "lucide-react";

const supports = [
  "KDV İstisnası — Makine ve teçhizat alımlarında KDV muafiyeti",
  "Gümrük Vergisi Muafiyeti",
  "Vergi İndirimi — Gelir/Kurumlar Vergisi avantajı",
  "Sigorta Primi İşveren Hissesi Desteği",
  "Sigorta Primi İşçi Hissesi Desteği (6. Bölge)",
  "Faiz veya Kâr Payı Desteği",
  "Yatırım Yeri Tahsisi",
  "Stratejik yatırımlarda makine hibesi",
];

const aktServices = [
  "Yatırım Teşvik Belgesi Başvuru Danışmanlığı",
  "Revize İşlemleri (Makine listesi, yatırım tutarı, süre uzatımı vb.)",
  "Tamamlama Vizesi İşlemleri",
];

const whyUs = [
  "Güncel mevzuata hakim uzman kadro",
  "Maksimum teşvik avantajı için stratejik analiz",
  "Hızlı ve eksiksiz başvuru süreci",
  "Türkiye genelinde danışmanlık hizmeti",
  "Şeffaf ve sürekli bilgilendirme",
];

const highlights = [
  { icon: Zap, title: "Hızlı Başvuru", desc: "Başvuru öncesi kapsamlı analiz ve eksiksiz evrak hazırlığı." },
  { icon: TrendingUp, title: "Maksimum Avantaj", desc: "Bölge ve sektörünüze göre en yüksek teşvik oranını hesaplıyoruz." },
  { icon: ShieldCheck, title: "Mevzuata Uygunluk", desc: "Güncel yatırım teşvik mevzuatına tam uyumlu süreç." },
  { icon: FileText, title: "Tam Destek", desc: "Başvurudan tamamlama vizesine kadar tüm adımlarda yanınızdayız." },
];

export default function YatirimTesvikPage() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif]">

      {/* ── BANNER ───────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <Image src="/images/yatırım.png" alt="Yatırım Teşvik" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2463]/65 via-[#0a2463]/45 to-[#0a2463]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5">
            Devlet Desteği
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg">
            Yatırım Teşvik Belgesi
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            Devlet desteklerinden maksimum fayda sağlayın, yatırımınızı güvenle büyütün.
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
          <span className="text-[#0a2463] font-medium">Yatırım Teşvik Belgesi</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-8 pt-8">

        {/* ── NE NEDEN ─────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex gap-5 items-start">
          <div className="w-12 h-12 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0 mt-1">
            <Award className="w-6 h-6 text-[#0a2463]" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white mb-2">Yatırım Teşvik Belgesi Nedir?</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-2">
              Yatırım Teşvik Belgesi, yatırımcıların KDV istisnası, gümrük vergisi muafiyeti, vergi indirimi, sigorta primi desteği ve faiz desteği gibi devlet teşviklerinden yararlanmasını sağlayan resmi bir belgedir.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Belge olmadan yatırım harcamaları teşvik kapsamına alınamaz. Bu nedenle yatırım başlamadan önce başvuru yapılması zorunludur.
            </p>
          </div>
        </motion.div>

        {/* ── 4 HIGHLIGHT KART ─────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all text-center">
                <div className="w-11 h-11 rounded-xl bg-[#0a2463]/6 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0a2463] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#0a2463] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-[#0a2463] mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ── SİSTEM GÖRSELLERİ ───────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <Image src="/images/tesviksistemkurgusu.png" alt="Teşvik Sistemi Kurgu" fill className="object-contain p-4" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <Image src="/images/bolgeler.png" alt="Bölgeler" fill className="object-contain p-4" />
            </div>
          </motion.div>
        </div>

        {/* ── TEŞVİK SİSTEMİ ───────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="relative w-full aspect-[21/9]">
            <Image src="/images/sektoreltesvik.png" alt="Sektörel Teşvik" fill className="object-contain p-4" />
          </div>
        </motion.div>

        {/* ── DESTEKLER + HİZMETLER + NEDEN ÇÖZÜMİX ──────────────────────── */}
        <div className="grid md:grid-cols-3 gap-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5">Teşvik Kapsamındaki Destekler</h3>
            <div className="space-y-2">
              {supports.map((s, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#f7f8fc]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#e8b923] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5">ÇÖZÜMİX Hizmetlerimiz</h3>
            <div className="space-y-3">
              {aktServices.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f8fc]">
                  <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5">Neden Çözümix Kurumsal?</h3>
            <div className="space-y-3">
              {whyUs.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8fc] hover:bg-[#e8b923]/8 transition-colors">
                  <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <span className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Hemen Başlayın</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">Profesyonel Danışmanlık Alın</h3>
            <p className="text-white/65 text-sm leading-relaxed">Yatırım teşvik belgesi sürecinizi stratejik ve mevzuata uygun şekilde yönetelim.</p>
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