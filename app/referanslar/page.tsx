"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Award,
  CheckCircle2,
  Briefcase,
  FileSignature,
  ShieldCheck,
} from "lucide-react";

/* ── DATA ──────────────────────────────────────────────────────────────── */

const stats = [
  { value: "3+", label: "Büyük KOSGEB Projesi" },
  { value: "1M₺+", label: "Sağlanan Destek" },
  { value: "10+", label: "E-İmza Kullanıcısı" },
  { value: "7+", label: "Çalışma İzni Referansı" },
];

const projects = [
  {
    company: "AYMAX BOYA LTD. ŞTİ.",
    type: "KOSGEB İş Geliştirme Desteği",
    badge: "KOSGEB",
    items: [
      "1.020.000 TL destek onayı",
      "340.000 TL erken ödeme",
      "Makine ve ekipman yatırımları gerçekleştirildi",
      "Personel giderleri destek kapsamına alındı",
    ],
    result:
      "Proje başarıyla tamamlanmış ve işletmenin üretim kapasitesi artırılmıştır.",
  },
  {
    company: "ALİ ÖKSÜZ – LAVAŞ İMALATI",
    type: "KOSGEB İş Geliştirme Desteği",
    badge: "KOSGEB",
    items: [
      "1.449.600 TL destek onayı",
      "Makine ve ekipman yatırımları desteklendi",
      "İşletme büyüme süreci finanse edildi",
    ],
    result:
      "İşletmenin üretim kapasitesi artırılmış ve büyüme süreci desteklenmiştir.",
  },
  {
    company: "ALİ ÖKSÜZ – LAVAŞ İMALATI",
    type: "Yatırım Teşvik Belgesi",
    badge: "TEŞVİK",
    items: [
      "KDV istisnası sağlandı",
      "Vergi indirimi (%90'a kadar avantaj)",
      "SGK İşveren Hissesi Desteği (10 yıl)",
      "Gelir Vergisi Stopaj Desteği (10 yıl)",
      "Faiz / Finansman desteği",
    ],
    result:
      "Yatırım maliyetleri düşürülmüş ve uzun vadeli mali avantaj sağlanmıştır.",
  },
];

const esimza = [
  "10+ aktif kullanıcı yönetimi",
  "Sertifika başvuru ve kurulum işlemleri",
  "Süre takibi ve yenileme hizmetleri",
  "Teknik destek ve aktif kullanım yönetimi",
];

const calismaIzni = [
  { name: "Cengiz Doğan", sector: "Restoran" },
  { name: "Samar Ltd. Şti.", sector: "Toptan Ticaret" },
  { name: "Dahan Vinç Ltd. Şti.", sector: "Operatörlük" },
  { name: "Özkar A.Ş.", sector: "Taşımacılık" },
  { name: "Burçin Sönmez", sector: "Kuyumculuk" },
  { name: "Tufan Göktepe", sector: "Pastane" },
  { name: "Ahmet Küçük Ltd. Şti.", sector: "İnşaat" },
];

const badgeColors: Record<string, string> = {
  KOSGEB: "bg-[#0a2463] text-white",
  TEŞVİK: "bg-[#e8b923] text-[#0a2463]",
};

/* ── PAGE ──────────────────────────────────────────────────────────────── */

export default function ReferanslarPage() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif]">

      {/* ── BANNER ─────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2463]/65 via-[#0a2463]/45 to-[#0a2463]/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5"
          >
            Başarı Hikayelerimiz
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg"
          >
            Referanslar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Kurumsal danışmanlık hizmetlerimiz kapsamında yönetilen projeler
            mevzuata uygun ve sonuç odaklı olarak tamamlanmaktadır.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f8fc] to-transparent" />
      </section>

      {/* ── BREADCRUMB ─────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#0a2463] transition-colors">Anasayfa</Link>
          <span>/</span>
          <span className="text-[#0a2463] font-medium">Referanslar</span>
        </div>
      </div>

      {/* ── STATS STRIP ────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100 py-14 px-6 mt-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, i) => (
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
              <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        {/* ── ÖNE ÇIKAN PROJELER ─────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#0a2463]/6 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#0a2463]" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0a2463]">Öne Çıkan Projeler</h2>
              <p className="text-xs text-gray-400 mt-0.5">KOSGEB & Yatırım Teşvik Referansları</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-7 overflow-hidden relative flex flex-col"
              >
                {/* deco circle */}
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#0a2463]/4 group-hover:bg-[#e8b923]/10 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col flex-1">
                  <span
                    className={`self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${badgeColors[p.badge]}`}
                  >
                    {p.badge}
                  </span>
                  <h3 className="text-base font-extrabold text-[#0a2463] mb-1 leading-snug">
                    {p.company}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mb-5">{p.type}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#e8b923] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <span className="font-semibold text-[#0a2463]">Sonuç: </span>
                      {p.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── E-İMZA ─────────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0a2463] rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#e8b923] flex items-center justify-center">
              <FileSignature className="w-6 h-6 text-[#0a2463]" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">E-İmza Hizmetleri</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {esimza.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-white/8 rounded-xl px-5 py-4 border border-white/10 hover:border-[#e8b923]/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#e8b923] flex-shrink-0" />
                <span className="text-white/85 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── ÇALIŞMA İZNİ ───────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#0a2463]/6 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#0a2463]" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0a2463]">Çalışma İzni Referansları</h2>
              <p className="text-xs text-gray-400 mt-0.5">Farklı sektörlerde başarıyla tamamlanan süreçler</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {calismaIzni.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#f7f8fc] border border-gray-100 hover:border-[#e8b923]/40 hover:bg-[#e8b923]/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-[#e8b923] flex items-center justify-center flex-shrink-0 text-[#0a2463] font-black text-xs">
                  {i + 1}
                </div>
                <div>
                  <p className="text-gray-800 text-sm font-semibold leading-tight">{item.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.sector}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── GENEL BAŞARILAR ────────────────────────────────────────── */}
        <motion.section
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
            <h2 className="text-2xl font-extrabold text-[#0a2463]">Genel Başarılarımız</h2>
          </div>
          <div className="space-y-4">
            {[
              "KOSGEB ve devlet destekli projelerde yüksek onay oranı",
              "Ulusal ve uluslararası projelerde sonuç odaklı yönetim",
              "Sürdürülebilir kurumsal müşteri portföyü",
              "Tüm projeler mevzuata uygun ve zamanında tamamlanmıştır",
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
        </motion.section>
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
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
              Projenizi Birlikte Başaralım
            </h2>
            <p className="text-gray-500 mb-10 text-sm leading-relaxed max-w-xl mx-auto">
              KOSGEB, yatırım teşvik, çalışma izni ve diğer danışmanlık
              hizmetlerimiz hakkında bilgi almak için bize ulaşın.
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