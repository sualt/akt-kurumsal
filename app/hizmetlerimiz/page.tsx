"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe,
  Building,
  ClipboardCheck,
  Users,
  Key,
  Award,
  FileText,
  ArrowRight,
  Phone,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Patent Tescil",
    desc: "Limited ve anonim şirket kuruluş işlemleri, MERSİS başvuru süreci ve resmi prosedür danışmanlığı.",
    link: "/hizmetlerimiz/patent-tescil",
    icon: Building,
    tag: "Fikri Mülkiyet",
    highlight: false,
  },
  {
    title: "KOSGEB Destekleri",
    desc: "KOSGEB hibe ve proje başvuru danışmanlığı, uygunluk analizi ve destek süreci yönetimi.",
    link: "/hizmetlerimiz/kosgeb-destekleri",
    icon: ClipboardCheck,
    tag: "Hibe & Destek",
    highlight: false,
  },
  {
    title: "Yabancı Çalışma İzni",
    desc: "Yabancı personel istihdamı, çalışma izni başvurusu ve bakanlık süreç yönetimi.",
    link: "/hizmetlerimiz/yabanci-calisma-izni",
    icon: Users,
    tag: "İstihdam",
    highlight: false,
  },
  {
    title: "E-İmza Satışı",
    desc: "5070 sayılı kanuna uygun elektronik imza başvurusu, teslim ve teknik kurulum hizmeti.",
    link: "/hizmetlerimiz/e-imza-satisi",
    icon: Key,
    tag: "Dijital",
    highlight: false,
  },
  {
    title: "Marka Tescil",
    desc: "Türk Patent marka başvurusu, sınıf seçimi, itiraz süreci ve hukuki koruma danışmanlığı.",
    link: "/hizmetlerimiz/marka-tescil",
    icon: FileText,
    tag: "Fikri Mülkiyet",
    highlight: false,
  },
  {
    title: "Yatırım Teşvik Belgesi",
    desc: "Bölgesel teşvikler, vergi indirimi, SGK desteği ve yatırım danışmanlığı.",
    link: "/hizmetlerimiz/yatirim-tesvik-belgesi",
    icon: Award,
    tag: "Teşvik",
    highlight: false,
  },
];

const webService = {
  title: "Web Sitesi Çözümleri",
  desc: "Mobil uyumlu, SEO odaklı ve kurumsal kimliğe uygun modern web tasarım hizmetleri. İşletmenizin dijital yüzünü profesyonelce tasarlıyoruz.",
  link: "/hizmetlerimiz/web-sitesi",
  icon: Globe,
  tag: "Dijital",
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function HizmetlerPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.06]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  return (
    <div className="bg-[#f7f8fc] min-h-screen overflow-x-hidden font-['Outfit',sans-serif]">

      {/* ── PARALLAX HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        {/* Parallax image */}
        <motion.img
          src="/images/hizmetlerbanner.png"
          alt="Hizmetlerimiz"
          style={{ y, scale }}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2463]/60 via-[#0a2463]/40 to-[#0a2463]/75" />

        {/* Hero text */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5"
          >
            Neler Sunuyoruz?
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg max-w-3xl"
          >
            Kurumsal Hizmetlerimiz
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed"
          >
            İşletmenizin tüm yasal ve kurumsal süreçlerini uçtan uca yönetiyoruz.
          </motion.p>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f7f8fc] to-transparent" />
      </section>

      {/* ── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#0a2463] transition-colors">Anasayfa</Link>
          <span>/</span>
          <span className="text-[#0a2463] font-medium">Hizmetlerimiz</span>
        </div>
      </div>

      {/* ── SECTION HEADER ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2463] mb-3">
            Tüm Hizmetler
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Hangi konuda yardıma ihtiyacınız var? Aşağıdan seçin, size en hızlı şekilde dönelim.
          </p>
        </motion.div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col p-7 overflow-hidden">

                    {/* Subtle bg accent */}
                    <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0a2463]/4 group-hover:bg-[#e8b923]/10 transition-colors duration-500" />

                    {/* Tag */}
                    <span className="inline-block bg-[#e8b923]/15 text-[#0a2463] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-5 w-fit">
                      {service.tag}
                    </span>

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="w-11 h-11 rounded-xl bg-[#0a2463]/6 flex items-center justify-center group-hover:bg-[#0a2463] transition-colors duration-300 flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0a2463] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-base font-bold text-[#0a2463] leading-tight">{service.title}</h3>
                    </div>

                    {/* Desc */}
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6 relative z-10">
                      {service.desc}
                    </p>

                    {/* CTA row */}
                    <div className="flex items-center justify-between relative z-10 pt-4 border-t border-gray-100">
                      <span className="text-[#0a2463] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Detayları Gör
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#0a2463]/5 group-hover:bg-[#e8b923] flex items-center justify-center transition-colors duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0a2463]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── WEB SİTESİ — FEATURED ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <Link href={webService.link} className="group block">
            <div className="relative bg-[#0a2463] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 md:p-12">

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/3 -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#e8b923]/10 translate-y-1/2 -translate-x-1/4" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#e8b923] flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-[#0a2463]" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <span className="inline-block bg-white/10 text-white/70 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                    {webService.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                    {webService.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-lg">
                    {webService.desc}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center gap-2 bg-[#e8b923] text-[#0a2463] font-bold px-7 py-4 rounded-xl group-hover:bg-yellow-400 transition-colors whitespace-nowrap">
                    Detayları Gör
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "%100", label: "Müşteri Memnuniyeti" },
              { value: "500+", label: "Başarılı Müşteri" },
              { value: "1200+", label: "Tamamlanan Proje" },
              { value: "7+", label: "Hizmet Kategorisi" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="text-3xl font-black text-[#0a2463] mb-1 group-hover:text-[#e8b923] transition-colors">
                  {item.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f7f8fc]">
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
            <p className="text-gray-500 mb-10 text-sm leading-relaxed max-w-xl mx-auto">
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
                href="tel:+90XXXXXXXXXX"
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