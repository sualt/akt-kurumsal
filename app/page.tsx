"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Globe,
  Building,
  ClipboardCheck,
  Users,
  Key,
  Award,
  FileText,
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "KOSGEB Destekleri",
    desc: "KOSGEB hibe ve proje başvuru danışmanlığı, uygunluk analizi ve destek süreci yönetimi.",
    link: "/hizmetlerimiz/kosgeb-destekleri",
    icon: ClipboardCheck,
    image: "/images/kosgeb foto.png.jpeg",
    tag: "Hibe & Destek",
  },
  {
    title: "Yatırım Teşvik Belgesi",
    desc: "Bölgesel teşvikler, vergi indirimi, SGK desteği ve yatırım danışmanlığı.",
    link: "/hizmetlerimiz/yatirim-tesvik-belgesi",
    icon: Award,
    image: "/images/tesvik belgesi foto.png.jpeg",
    tag: "Teşvik",
  },
  {
    title: "Yabancı Çalışma İzni",
    desc: "Yabancı personel istihdamı, çalışma izni başvurusu ve bakanlık süreç yönetimi.",
    link: "/hizmetlerimiz/yabanci-calisma-izni",
    icon: Users,
    image: "/images/calisma izni foto.png.jpeg",
    tag: "İstihdam",
  },
  {
    title: "Marka-Patent Tescil",
    desc: "Türk Patent marka başvurusu, sınıf seçimi, itiraz süreci ve hukuki koruma danışmanlığı.",
    link: "/hizmetlerimiz/marka-tescil",
    icon: FileText,
    image: "/images/marka tescil + patent.png.jpeg",
    tag: "Fikri Mülkiyet",
  },  
  {
    title: "E-İmza Satışı",
    desc: "5070 sayılı kanuna uygun elektronik imza başvurusu, teslim ve teknik kurulum hizmeti.",
    link: "/hizmetlerimiz/e-imza-satisi",
    icon: Key,
    image: "/images/e imza.png.jpeg",
    tag: "Dijital",
  },
  {
    title: "E-Fatura",
    desc: "Gelir İdaresi Başkanlığı onaylı e-Fatura, e-Defter ve e-Arşiv başvuru, entegrasyon ve teknik destek hizmeti.",
    link: "/hizmetlerimiz/e-fatura",
    icon: Key,
    image: "/images/e fatura.png.jpeg",
    tag: "Dijital",
  },
  
];

const webService = {
  title: "Web Sitesi Çözümleri",
  desc: "Mobil uyumlu, SEO odaklı ve kurumsal kimliğe uygun modern web tasarım hizmetleri.",
  link: "/hizmetlerimiz/web-sitesi",
  icon: Globe,
  image: "/images/website.png",
  tag: "Dijital",
};

const banners = [
  {
    title: "Kurumsal Danışmanlıkta Güvenilir Çözüm Ortağınız",
    subtitle: "Resmi süreçlerde profesyonel destek",
    accent: "Güvenilir",
  },
  {
    title: "Teşvik, Marka, Patent ve Daha Fazlası",
    subtitle: "Tüm süreçleri sizin için yönetiyoruz",
    accent: "Daha Fazlası",
  },
];

const counters = [
  { label: "Müşteri Memnuniyeti", value: 100, suffix: "%" },
  { label: "Başarılı Müşteri", value: 50, suffix: "+" },
  { label: "Proje Tamamlandı", value: 120, suffix: "+" },
];

// ─── COUNTER HOOK ─────────────────────────────────────────────────────────────

function useCounter(target: number, inView: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    setValue(0);
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);
  return value;
}

// ─── COUNTER ITEM ─────────────────────────────────────────────────────────────

function CounterItem({ item, delay, inView }: { item: typeof counters[0]; delay: number; inView: boolean }) {
  const value = useCounter(item.value, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="text-center group"
    >
      <div className="relative inline-block">
        <span className="text-5xl md:text-6xl font-bold text-[#0a2463] tabular-nums">
          {value}{item.suffix}
        </span>
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#e8b923] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
      <p className="mt-4 text-gray-500 font-medium text-sm uppercase tracking-widest">{item.label}</p>
    </motion.div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const counterRef = useRef(null);
  const counterInView = useInView(counterRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── SEO Metadata (App Router) ─────────────────────────────────────── */}
      {/* Add this in a separate metadata.ts file for App Router:
          export const metadata = {
            title: "ÇÖZÜMX Danışmanlık | Kurumsal Çözüm Ortağınız",
            description: "Patent tescil, marka tescil, KOSGEB destekleri, yatırım teşvik belgesi ve daha fazlası için profesyonel kurumsal danışmanlık hizmetleri.",
            keywords: "patent tescil, marka tescil, KOSGEB, yatırım teşvik, e-imza, kurumsal danışmanlık",
            openGraph: {
              title: "ÇÖZÜMX Danışmanlık | Kurumsal Çözüm Ortağınız",
              description: "Patent, marka, KOSGEB ve teşvik danışmanlığında profesyonel çözüm ortağınız.",
              type: "website",
              locale: "tr_TR",
              images: [{ url: "/images/banner.jpeg", width: 1200, height: 630, alt: "ÇÖZÜMX Danışmanlık" }],
            },
          };
      */}

      <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif]">

        {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={bannerIndex}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
             
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a2463]/70 via-[#0a2463]/50 to-[#0a2463]/80" />
            </motion.div>
          </AnimatePresence>

          {/* Hero Content — centered on image */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={bannerIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6"
                >
                  Profesyonel Danışmanlık
                </motion.span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                  {banners[bannerIndex].title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {banners[bannerIndex].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 bg-[#e8b923] text-[#0a2463] font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg"
                  >
                    Ücretsiz Danışmanlık Al
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/hizmetlerimiz"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/20 transition-all"
                  >
                    Hizmetlerimiz
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide indicators */}
            <div className="absolute bottom-12 flex gap-3">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setBannerIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === bannerIndex ? "w-8 bg-[#e8b923]" : "w-3 bg-white/40"
                  }`}
                  aria-label={`Banner ${i + 1}`}
                />
              ))}
            </div>

            {/* Scroll hint */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-8 right-8 text-white/50"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
        </section>

        {/* ── COUNTERS ────────────────────────────────────────────────────── */}
        <section ref={counterRef} className="bg-white border-b border-gray-100 py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {counters.map((c, i) => (
                <CounterItem key={c.label} item={c} delay={i * 0.15} inView={counterInView} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES SECTION HEADER ──────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#e8b923] font-bold text-xs uppercase tracking-[0.25em] mb-3">
              Ne Yapıyoruz?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2463] mb-4">
              Kurumsal Hizmetlerimiz
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              İşletmenizin tüm yasal ve kurumsal süreçlerini uçtan uca yönetiyoruz.
            </p>
          </motion.div>
        </section>

        {/* ── SERVICES GRID ────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link href={service.link} className="group block h-full">
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative w-full h-52 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        {/* Tag badge */}
                        <span className="absolute top-4 left-4 bg-[#e8b923] text-[#0a2463] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          {service.tag}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#0a2463]/5 flex items-center justify-center group-hover:bg-[#0a2463] transition-colors duration-300">
                            <Icon className="w-5 h-5 text-[#0a2463] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h3 className="text-base font-bold text-[#0a2463]">{service.title}</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{service.desc}</p>
                        <div className="flex items-center gap-2 text-[#0a2463] font-semibold text-sm group-hover:gap-3 transition-all">
                          Detayları Gör
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Web Sitesi — featured card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <Link href={webService.link} className="group block">
              <div className="bg-[#0a2463] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 h-56 md:h-auto">
                    <Image
                      src={webService.image}
                      alt={webService.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a2463]" />
                  </div>
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 w-fit">
                      {webService.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{webService.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">{webService.desc}</p>
                    <div className="inline-flex items-center gap-2 bg-[#e8b923] text-[#0a2463] font-bold px-6 py-3 rounded-xl w-fit group-hover:bg-yellow-400 transition-colors">
                      Detayları Gör
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>

        {/* ── WHY US ───────────────────────────────────────────────────────── */}
        <section className="bg-[#0a2463] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[#e8b923] font-bold text-xs uppercase tracking-[0.25em] mb-3">
                Neden Biz?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                İşinizi Bize Emanet Etmek İçin 3 Neden
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Uzman Kadro", desc: "Alanında deneyimli danışmanlarımız her süreçte yanınızda." },
                { num: "02", title: "Hızlı Süreç", desc: "Bürokratik engelleri hızla aşarak işlemlerinizi zamanında tamamlıyoruz." },
                { num: "03", title: "Şeffaf Fiyat", desc: "Sürpriz maliyet yok. Baştan net fiyat, net hizmet." },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="border border-white/10 rounded-2xl p-8 hover:border-[#e8b923]/50 transition-colors group"
                >
                  <div className="text-5xl font-black text-[#e8b923]/20 group-hover:text-[#e8b923]/40 transition-colors mb-4">
                    {item.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#e8b923] font-bold text-xs uppercase tracking-[0.25em] mb-4">
                Hemen Başlayın
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2463] mb-4 leading-tight">
                İşinizi Güvence Altına Alın
              </h2>
              <p className="text-gray-500 mb-10 text-base leading-relaxed">
                Profesyonel danışmanlık ile süreci hızlandırın ve riskleri minimize edin.
                İlk görüşme tamamen ücretsiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-[#0a2463] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0d2d7a] transition-all hover:scale-105 shadow-lg shadow-[#0a2463]/20"
                >
                  Ücretsiz Danışmanlık Al
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+90553 077 74 88"
                  className="inline-flex items-center gap-2 text-[#0a2463] font-semibold hover:text-[#e8b923] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
