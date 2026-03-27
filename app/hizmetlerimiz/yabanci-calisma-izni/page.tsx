"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, CheckCircle, ArrowRight, Phone, RefreshCw, Building2, ShieldCheck, FileText } from "lucide-react";

const services = [
  { icon: Users, title: "Yabancı Çalışma İzni Başvurusu", desc: "Türkiye'de çalışacak yabancı personel için ilk başvuru işlemlerinin hazırlanması ve online sistem üzerinden başvuru takibi." },
  { icon: RefreshCw, title: "Çalışma İzni Uzatma İşlemleri", desc: "Süresi dolmak üzere olan çalışma izinlerinin mevzuata uygun şekilde uzatılması." },
  { icon: Building2, title: "Şirketler Arası Transfer İşlemleri", desc: "Yabancı personelin işveren değişikliği süreçlerinin yürütülmesi." },
  { icon: ShieldCheck, title: "Geçici Koruma Altındaki Yabancılar", desc: "Geçici koruma statüsündeki yabancıların çalışma izni başvurularının yapılması." },
  { icon: FileText, title: "Yabancı Personel Kota Danışmanlığı", desc: "İşverenlerin yabancı personel çalıştırma şartları ve kota hesaplamaları konusunda bilgilendirilmesi." },
];

const whyUs = [
  "Güncel mevzuata uygun başvuru yönetimi",
  "Eksiksiz ve doğru evrak hazırlama süreci",
  "Hızlı başvuru ve etkin takip sistemi",
  "Türkiye genelinde danışmanlık hizmeti",
  "Sürekli iletişim ve profesyonel destek",
];

export default function YabanciCalismaIzniPage() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif]">

      {/* ── BANNER ───────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <img src="/images/yabancı.png" alt="Yabancı Çalışma İzni" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2463]/65 via-[#0a2463]/45 to-[#0a2463]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5">
            İstihdam
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg">
            Yabancı Çalışma İzni
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            Türkiye'de yabancı personel istihdamında başvurudan sonuçlanmaya tam destek.
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
          <span className="text-[#0a2463] font-medium">Yabancı Çalışma İzni</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-8 pt-8">

        {/* ── HAKKIMIZDA ───────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex gap-5 items-start">
          <div className="w-12 h-12 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0 mt-1">
            <Users className="w-6 h-6 text-[#0a2463]" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white mb-2">Çözümix Kurumsal Çalışma İzni Danışmanlığı</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-2">
              Çözümix Kurumsal, Türkiye'de faaliyet gösteren işletmelere yabancı çalışma izni danışmanlığı alanında profesyonel hizmet sunan kurumsal bir danışmanlık firmasıdır.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              İşletmelerin zaman ve maliyet kaybı yaşamaması için başvuru ön analizinden sonuçlanma aşamasına kadar tüm süreci titizlikle takip ediyoruz.
            </p>
          </div>
        </motion.div>

        {/* ── HİZMETLER ────────────────────────────────────────────────── */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
            <span className="inline-block text-[#e8b923] font-bold text-xs uppercase tracking-[0.25em] mb-2">Ne Yapıyoruz?</span>
            <h2 className="text-2xl font-extrabold text-[#0a2463]">Hizmetlerimiz</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.08 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 overflow-hidden relative">
                  <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#0a2463]/4 group-hover:bg-[#e8b923]/10 transition-colors duration-500" />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[#0a2463]/6 flex items-center justify-center mb-4 group-hover:bg-[#0a2463] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#0a2463] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0a2463] mb-2 leading-snug">{s.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── NEDEN ÇÖZÜMX ────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
          <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5">Neden Çözümix Kurumsal?</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {whyUs.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8fc] hover:bg-[#e8b923]/8 transition-colors">
                <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <span className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Hemen Başlayın</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">Profesyonel Destek ile Zaman ve Maliyeti Azaltın</h3>
            <p className="text-white/65 text-sm leading-relaxed">Yabancı personel çalışma izni süreçlerinizi hızlı, güvenli ve mevzuata uygun şekilde yönetin.</p>
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