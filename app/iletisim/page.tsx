"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, MessageSquare
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+90 553 077 74 88",
    sub: "Hafta içi 09:00 – 18:00",
    href: "tel:+905530777488",
  },
  {
    icon: Mail,
    title: "E-posta",
    value: "info@cozumix.co",
    sub: "24 saat içinde yanıt",
    href: "mailto:info@cozumix.co",
  },
  {
    icon: MapPin,
    title: "Adres",
    value: "İstanbul, Türkiye",
    sub: "Merkez ofis",
    href: "#",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    value: "Pzt – Cum: 09:00 – 18:00",
    sub: "Cumartesi randevulu",
    href: "#",
  },
];

export default function IletisimPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f7f8fc] text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0a2463]/30 focus:border-[#0a2463] transition-all";

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
            7 Hizmet Kategorisi
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg"
          >
            Bize Ulaşın
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Sorularınızı veya taleplerinizi bize iletin, uzmanlarımız en kısa sürede dönüş yapsın.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f8fc] to-transparent" />
      </section>

      {/* ── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#0a2463] transition-colors">Anasayfa</Link>
          <span>/</span>
          <span className="text-[#0a2463] font-medium">İletişim</span>
        </div>
      </div>

      {/* ── CONTACT INFO CARDS ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0a2463]/6 flex items-center justify-center mb-3 group-hover:bg-[#0a2463] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#0a2463] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{item.title}</h3>
                <p className="text-sm font-semibold text-[#0a2463] leading-snug">{item.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* ── MAIN CONTENT: FORM + MAP ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-5 gap-6">

          {/* ── FORM (3/5) ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden"
          >
            {/* Form header */}
            <div className="bg-[#0a2463] px-8 py-7 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-[#0a2463]" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">İletişim Formu</h2>
                <p className="text-white/60 text-xs mt-0.5">Tüm alanları doldurun, sizi arayalım.</p>
              </div>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ad Soyad"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon Numarası"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="E-posta Adresi"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />

              <textarea
                name="message"
                placeholder="Mesajınız — size nasıl yardımcı olabiliriz?"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-[#0a2463] text-white font-bold py-4 rounded-xl hover:bg-[#0d2d7a] transition-all hover:scale-[1.02] shadow-lg shadow-[#0a2463]/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Gönderiliyor...
                  </span>
                ) : (
                  <>
                    Mesajı Gönder
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-4 text-sm font-medium"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    Mesajınız alındı! En kısa sürede size dönüş yapacağız.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm font-medium"
                  >
                    Bir hata oluştu, lütfen tekrar deneyin.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* ── SAĞ PANEL (2/5) ──────────────────────────────────────────── */}
          <div className="md:col-span-2 flex flex-col gap-5">

            {/* Why contact us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="bg-[#0a2463] rounded-3xl p-7 flex-1"
            >
              <h3 className="text-base font-extrabold text-white mb-5">Neden Bizi Tercih Etmelisiniz?</h3>
              <div className="space-y-4">
                {[
                  "İlk görüşme tamamen ücretsiz",
                  "Uzman kadro, hızlı süreç",
                  "500+ başarılı müşteri deneyimi",
                  "Başvurudan sonuçlanmaya tam destek",
                  "Şeffaf fiyat, sürpriz maliyet yok",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7"
            >
              <h3 className="text-sm font-bold text-[#0a2463] mb-4">Hızlı Erişim</h3>
              <div className="space-y-2">
                {[
                  { label: "Patent Tescil", href: "/hizmetlerimiz/patent-tescil" },
                  { label: "KOSGEB Destekleri", href: "/hizmetlerimiz/kosgeb-destekleri" },
                  { label: "Marka Tescil", href: "/hizmetlerimiz/marka-tescil" },
                  { label: "Yatırım Teşvik", href: "/hizmetlerimiz/yatirim-tesvik-belgesi" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#f7f8fc] hover:bg-[#e8b923]/10 hover:border-[#e8b923]/30 border border-transparent transition-all group text-sm"
                  >
                    <span className="text-gray-700 font-medium group-hover:text-[#0a2463]">{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0a2463] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}