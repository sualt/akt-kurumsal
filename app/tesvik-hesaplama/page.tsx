"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Award, MapPin, Building2, TrendingUp, FileText, CheckCircle, ArrowRight } from "lucide-react";
import cities from "@/data/turkeyCities.json";

const incentives = [
  "Yatırım Teşviki",
  "SGK Desteği",
  "KDV Muafiyeti",
  "Gümrük Muafiyeti",
];

const infoCards = [
  { icon: TrendingUp, title: "Vergi İndirimi", desc: "Bölgeye göre %50'ye varan kurumlar vergisi indirimi." },
  { icon: Building2, title: "SGK Desteği", desc: "İşveren SGK primlerinde devlet katkısı ve muafiyetler." },
  { icon: FileText, title: "KDV Muafiyeti", desc: "Makine ve teçhizat alımlarında KDV'den muafiyet." },
  { icon: Award, title: "Gümrük Muafiyeti", desc: "Yatırım malları ithalatında gümrük vergisi muafiyeti." },
];

export default function TesvikPage() {
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState<string[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [desiredIncentive, setDesiredIncentive] = useState("");
  const [firmName, setFirmName] = useState("");
  const [investmentTopic, setInvestmentTopic] = useState("");
  const [estimatedAmount, setEstimatedAmount] = useState<number | "">("");
  const [shortDescription, setShortDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      const cityObj = (cities as any[]).find((c) => c.name === selectedCity);
      setDistricts(cityObj?.districts.map((d: any) => d.name) || []);
      setSelectedDistrict("");
    } else {
      setDistricts([]);
      setSelectedDistrict("");
    }
  }, [selectedCity]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      city: selectedCity, district: selectedDistrict, desiredIncentive,
      firmName, investmentTopic, estimatedAmount, shortDescription,
      name, email, phone,
    };
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSent(true);
        setTimeout(() => setSent(false), 6000);
        setSelectedCity(""); setSelectedDistrict(""); setDesiredIncentive("");
        setFirmName(""); setInvestmentTopic(""); setEstimatedAmount("");
        setShortDescription(""); setName(""); setEmail(""); setPhone("");
      } else {
        alert("Mail gönderilemedi: " + result.error);
      }
    } catch (error) {
      alert("Hata oluştu: " + error);
    } finally {
      setLoading(false);
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
            Devlet Desteği
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg"
          >
            Yatırım Teşvik Belgesi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Hemen bilgi alın, yatırımınızı planlayın!
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f8fc] to-transparent" />
      </section>

      {/* ── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#0a2463] transition-colors">Anasayfa</Link>
          <span>/</span>
          <Link href="/hizmetlerimiz" className="hover:text-[#0a2463] transition-colors">Hizmetlerimiz</Link>
          <span>/</span>
          <span className="text-[#0a2463] font-medium">Yatırım Teşvik Belgesi</span>
        </div>
      </div>

      {/* ── INFO CARDS ───────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0a2463]/6 flex items-center justify-center mb-3 group-hover:bg-[#0a2463] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#0a2463] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-[#0a2463] mb-1">{card.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── FORM SECTION ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden"
        >
          {/* Form header */}
          <div className="bg-[#0a2463] px-8 md:px-12 py-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-[#0a2463]" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Teşvik Başvuru Formu</h2>
              <p className="text-white/60 text-sm mt-0.5">Bilgilerinizi doldurun, uzmanlarımız sizi arasın.</p>
            </div>
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">

              {/* ── SOL KOLON — Yatırım Bilgileri ──────────────────────── */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Yatırım Bilgileri
                </h3>

                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className={inputClass}
                  required
                >
                  <option value="">İl Seçiniz</option>
                  {(cities as any[]).map((city) => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                  ))}
                </select>

                <AnimatePresence>
                  {districts.length > 0 && (
                    <motion.select
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className={inputClass}
                      required
                    >
                      <option value="">İlçe Seçiniz</option>
                      {districts.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </motion.select>
                  )}
                </AnimatePresence>

                <select
                  value={desiredIncentive}
                  onChange={(e) => setDesiredIncentive(e.target.value)}
                  className={inputClass}
                  required
                >
                  <option value="">İstenen Teşvik Türü</option>
                  {incentives.map((inc) => (
                    <option key={inc} value={inc}>{inc}</option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Firma Adı"
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                  className={inputClass}
                  required
                />

                <input
                  type="text"
                  placeholder="Yatırım Konusu"
                  value={investmentTopic}
                  onChange={(e) => setInvestmentTopic(e.target.value)}
                  className={inputClass}
                  required
                />

                <input
                  type="number"
                  placeholder="Tahmini Yatırım Tutarı (₺)"
                  value={estimatedAmount}
                  onChange={(e) => setEstimatedAmount(Number(e.target.value))}
                  className={inputClass}
                  required
                />

                <textarea
                  placeholder="Kısa Açıklama"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  className={`${inputClass} resize-none h-28`}
                  required
                />
              </div>

              {/* ── SAĞ KOLON — Kişisel Bilgiler ───────────────────────── */}
              <div className="space-y-4 flex flex-col">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Building2 className="w-4 h-4" /> İletişim Bilgileri
                </h3>

                <input
                  type="text"
                  placeholder="Ad Soyad"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  required
                />

                <input
                  type="email"
                  placeholder="E-posta Adresi"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  required
                />

                <input
                  type="tel"
                  placeholder="Telefon Numarası"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                  required
                />

                {/* Info box */}
                <div className="flex-1 bg-[#0a2463]/4 rounded-2xl p-6 border border-[#0a2463]/10 mt-2">
                  <h4 className="text-sm font-bold text-[#0a2463] mb-4">Neden Biz?</h4>
                  <div className="space-y-3">
                    {[
                      "Ücretsiz ön değerlendirme",
                      "Uzman kadro ile hızlı süreç",
                      "Başvurudan sonuçlanmaya tam destek",
                      "Başarıya dayalı çalışma modeli",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                        <span className="text-xs text-gray-600 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#0a2463] text-white font-bold py-4 rounded-xl hover:bg-[#0d2d7a] transition-all hover:scale-[1.02] shadow-lg shadow-[#0a2463]/20 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Gönderiliyor...
                    </span>
                  ) : (
                    <>
                      Başvuruyu Gönder
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-4 text-sm font-medium"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      Başvurunuz alındı! En kısa sürede sizi arayacağız.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </form>
        </motion.div>
      </section>

    </div>
  );
}