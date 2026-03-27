"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Key, CheckCircle, ArrowRight, Phone, ShieldCheck,
  Clock, FileCheck, Zap, Building2, CreditCard, Globe
} from "lucide-react";

const services = [
  "e-İmza başvuru işlemleri",
  "Sertifika üretim süreci takibi",
  "Kurulum ve aktivasyon desteği",
  "Uzaktan teknik destek",
  "Yenileme ve iptal işlemleri",
];

const usageAreas = [
  { icon: FileCheck, label: "E-Fatura ve E-Defter işlemleri" },
  { icon: Building2, label: "KOSGEB ve teşvik başvuruları" },
  { icon: ShieldCheck, label: "SGK ve kamu kurum işlemleri" },
  { icon: CreditCard, label: "Banka ve finans sözleşmeleri" },
  { icon: Globe, label: "E-Devlet işlemleri" },
];

const advantages = [
  { icon: ShieldCheck, title: "Hukuki Geçerlilik", desc: "Islak imza ile aynı yasal geçerliliğe sahip." },
  { icon: Clock, title: "Zaman Tasarrufu", desc: "Fiziksel imza süreçlerini ortadan kaldırır." },
  { icon: Zap, title: "Uzaktan İşlem", desc: "Bulunduğunuz yerden tüm işlemleri tamamlayın." },
  { icon: FileCheck, title: "Güvenli Kimlik", desc: "Güçlü şifreleme ile kimlik doğrulama." },
];

const edönüşümServices = [
  "e-Fatura başvuru ve aktivasyon",
  "e-Arşiv kurulumu",
  "e-Defter entegrasyonu",
  "Mali mühür ve e-İmza entegrasyonu",
  "Muhasebe programı entegrasyon desteği",
  "Teknik danışmanlık ve destek",
];

const edönüşümAdvantages = [
  "Kağıt ve arşiv maliyetlerinde azalma",
  "Yasal uyumluluk",
  "Hızlı ve güvenli faturalama",
  "Uzaktan erişim imkanı",
];

export default function EImzaPage() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif]">

      {/* ── BANNER ───────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] overflow-hidden">
       
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
            e-İmza Hizmetleri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed"
          >
            5070 Sayılı Elektronik İmza Kanunu'na uyumlu güvenli dijital imza çözümleri.
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
          <span className="text-[#0a2463] font-medium">e-İmza Satışı</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-8 pt-8">

        {/* ── E-İMZA NEDİR ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex gap-6 items-start"
        >
          <div className="w-12 h-12 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0 mt-1">
            <Key className="w-6 h-6 text-[#0a2463]" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white mb-3">e-İmza Nedir?</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Elektronik imza (e-İmza), 5070 Sayılı Elektronik İmza Kanunu kapsamında
              ıslak imza ile aynı hukuki geçerliliğe sahip dijital imzadır.
              Kimliğinizi elektronik ortamda doğrular ve imzalanan belgenin
              değiştirilemezliğini garanti eder.
            </p>
          </div>
        </motion.div>

        {/* ── AVANTAJLAR ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <span className="inline-block text-[#e8b923] font-bold text-xs uppercase tracking-[0.25em] mb-2">Neden e-İmza?</span>
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

        {/* ── HİZMETLER + KULLANIM ALANLARI ────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Hizmetler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#0a2463]/6 flex items-center justify-center">
                <Key className="w-5 h-5 text-[#0a2463]" />
              </div>
              <h3 className="text-base font-bold text-[#0a2463]">Çözümx e-İmza Hizmetleri</h3>
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

          {/* Kullanım Alanları */}
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
              <h3 className="text-base font-bold text-[#0a2463]">Kullanım Alanları</h3>
            </div>
            <div className="space-y-3">
              {usageAreas.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
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

        {/* ── E-DÖNÜŞÜM ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="bg-[#0a2463] px-8 py-6 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-5 h-5 text-[#0a2463]" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">e-Fatura ve e-Dönüşüm Hizmetleri</h2>
              <p className="text-white/60 text-xs mt-0.5">Dijital dönüşüm sürecinizde yanınızdayız.</p>
            </div>
          </div>

          <div className="p-7 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-4">Hizmet Kapsamı</h3>
              <div className="space-y-2.5">
                {edönüşümServices.map((s, i) => (
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
              <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-4">Avantajlar</h3>
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

        {/* ── CTA ──────────────────────────────────────────────────────── */}
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
              Dijital İmza Sürecinizi Profesyonelce Yönetin
            </h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Çözümx Kurumsal Danışmanlık ile e-İmza ve e-Dönüşüm süreçlerinizi
              güvenli, hızlı ve mevzuata uygun şekilde tamamlayın.
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
              href="tel:+90553 077 74 88"
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