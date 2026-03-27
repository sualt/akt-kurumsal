"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle,
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock,
  Zap,
  Receipt,
  BookOpen,
  Archive,
  Truck,
  Mail,
  FileCheck,
  Building2,
  Layers,
} from "lucide-react";

const services = [
  "e-Fatura başvuru ve aktivasyon",
  "e-Arşiv Fatura kurulumu",
  "e-Defter entegrasyonu",
  "e-İrsaliye kurulum ve destek",
  "Mali mühür ve e-İmza entegrasyonu",
  "Muhasebe programı entegrasyon desteği",
  "Teknik danışmanlık ve süreç takibi",
];

const documentTypes = [
  { icon: Receipt, label: "e-Fatura" },
  { icon: Archive, label: "e-Arşiv Fatura" },
  { icon: Truck, label: "e-İrsaliye" },
  { icon: BookOpen, label: "e-Defter" },
  { icon: FileText, label: "e-SMM" },
  { icon: Building2, label: "e-Müstahsil" },
  { icon: Mail, label: "KEP" },
  { icon: FileCheck, label: "e-İmza" },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Yasal Uyumluluk",
    desc: "GİB mevzuatına tam uygun süreç yönetimi.",
  },
  {
    icon: Clock,
    title: "Zaman Tasarrufu",
    desc: "Kağıt tabanlı işlemleri dijitale taşıyarak süreçleri hızlandırır.",
  },
  {
    icon: Zap,
    title: "Hızlı Entegrasyon",
    desc: "Mevcut muhasebe programınıza kolayca entegre edilir.",
  },
  {
    icon: Layers,
    title: "Maliyet Azaltma",
    desc: "Kağıt, baskı ve arşiv maliyetlerinde ciddi tasarruf sağlar.",
  },
];

const edönüşümAdvantages = [
  "Kağıt ve arşiv maliyetlerinde azalma",
  "Yasal uyumluluk ve ceza riskinin ortadan kalkması",
  "Hızlı ve güvenli faturalama süreci",
  "Uzaktan erişim ve yönetim imkânı",
  "Muhasebe programlarıyla tam entegrasyon",
];

export default function EDonusumPage() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif]">

      {/* ── BANNER ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <Image
          src="/images/edonusum.png"
          alt="e-Dönüşüm Hizmetleri"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2463]/65 via-[#0a2463]/45 to-[#0a2463]/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5"
          >
            Dijital Dönüşüm
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg"
          >
            e-Dönüşüm Hizmetleri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/75 text base md:text-lg max-w-xl leading-relaxed"
          >
            GİB mevzuatına uygun e-Fatura, e-Defter ve e-Dönüşüm çözümleri.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f8fc] to-transparent" />
      </section>

      {/* ── BREADCRUMB ─────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#0a2463] transition-colors">Anasayfa</Link>
          <span>/</span>
          <Link href="/hizmetlerimiz" className="hover:text-[#0a2463] transition-colors">Hizmetlerimiz</Link>
          <span>/</span>
          <span className="text-[#0a2463] font-medium">e-Dönüşüm</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-8 pt-8">

        {/* ── E-DÖNÜŞÜM NEDİR ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex gap-6 items-start"
        >
          <div className="w-12 h-12 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0 mt-1">
            <FileText className="w-6 h-6 text-[#0a2463]" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white mb-3">e-Dönüşüm Nedir?</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              e-Dönüşüm; işletmelerin fatura, defter ve diğer ticari belgelerini
              Gelir İdaresi Başkanlığı'nın belirlediği standartlara uygun şekilde
              elektronik ortamda oluşturma, gönderme, alma ve saklama sürecidir.
              Yasal zorunlulukların yanı sıra operasyonel verimliliği ve maliyet
              tasarrufunu da beraberinde getirir.
            </p>
          </div>
        </motion.div>

        {/* ── AVANTAJLAR ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <span className="inline-block text-[#e8b923] font-bold text-xs uppercase tracking-[0.25em] mb-2">
              Neden e-Dönüşüm?
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a2463]">Avantajları</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {advantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0a2463]/6 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0a2463] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#0a2463] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0a2463] mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── HİZMETLER + e-BELGE TÜRLERİ ───────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Çözümx Hizmetleri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#0a2463]/6 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#0a2463]" />
              </div>
              <h3 className="text-base font-bold text-[#0a2463]">AKT e-Dönüşüm Hizmetleri</h3>
            </div>
            <div className="space-y-3">
              {services.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8fc] hover:bg-[#e8b923]/8 transition-colors group"
                >
                  <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                  <span className="text-sm text-gray-600 font-medium">{s}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* e-Belge Türleri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#0a2463]/6 flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-[#0a2463]" />
              </div>
              <h3 className="text-base font-bold text-[#0a2463]">Kapsanan e-Belge Türleri</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {documentTypes.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8fc] hover:bg-[#e8b923]/8 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#0a2463] flex-shrink-0" />
                    <span className="text-sm text-gray-600 font-medium">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ── SÜREÇ + AVANTAJLAR DETAY ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="bg-[#0a2463] px-8 py-6 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 text-[#0a2463]" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">
                e-Fatura ve e-Dönüşüm Süreciniz
              </h2>
              <p className="text-white/60 text-xs mt-0.5">
                Başvurudan aktivasyona kadar yanınızdayız.
              </p>
            </div>
          </div>

          <div className="p-7 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-4">
                Hizmet Kapsamı
              </h3>
              <div className="space-y-2.5">
                {services.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e8b923] flex-shrink-0" />
                    <span className="text-sm text-gray-600">{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-4">
                Avantajlar
              </h3>
              <div className="space-y-2.5">
                {edönüşümAdvantages.map((a, i) => (
                  <motion.div
                    key={a}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                    <span className="text-sm text-gray-600">{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8"
        >
          <div className="flex-1">
            <span className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              Hemen Başlayın
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
              e-Dönüşüm Sürecinizi Profesyonelce Yönetin
            </h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Çözümx Kurumsal Danışmanlık ile e-Fatura, e-Defter ve tüm
              e-dönüşüm süreçlerinizi güvenli, hızlı ve mevzuata uygun
              şekilde tamamlayın.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 bg-[#e8b923] text-[#0a2463] font-bold px-7 py-4 rounded-xl hover:bg-yellow-400 transition-all hover:scale-105 whitespace-nowrap"
            >
              Teklif Al
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+90XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Ara
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}