"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Building,
  ClipboardCheck,
  Users,
  Key,
  Award,
  FileText,
} from "lucide-react";

const services = [
  {
    title: "Patent Tescil",
    desc: "Limited ve anonim şirket kuruluş işlemleri, MERSİS başvuru süreci ve resmi prosedür danışmanlığı.",
    link: "/hizmetlerimiz/patent-tescil",
    icon: Building,
    image: "/images/patenttescil.png",
  },
  {
    title: "KOSGEB Destekleri",
    desc: "KOSGEB hibe ve proje başvuru danışmanlığı, uygunluk analizi ve destek süreci yönetimi.",
    link: "/hizmetlerimiz/kosgeb-destekleri",
    icon: ClipboardCheck,
    image: "/images/kosgeb.png",
  },
  {
    title: "Yabancı Çalışma İzni",
    desc: "Yabancı personel istihdamı, çalışma izni başvurusu ve bakanlık süreç yönetimi.",
    link: "/hizmetlerimiz/yabanci-calisma-izni",
    icon: Users,
    image: "/images/calismaizni.png",
  },
  {
    title: "E-İmza Satışı",
    desc: "5070 sayılı kanuna uygun elektronik imza başvurusu, teslim ve teknik kurulum hizmeti.",
    link: "/hizmetlerimiz/e-imza-satisi",
    icon: Key,
    image: "/images/e-imza.png",
  },
  {
    title: "Marka Tescil",
    desc: "Türk Patent marka başvurusu, sınıf seçimi, itiraz süreci ve hukuki koruma danışmanlığı.",
    link: "/hizmetlerimiz/marka-tescil",
    icon: FileText,
    image: "/images/marka-tescili.png",
  },
  {
    title: "Yatırım Teşvik Belgesi",
    desc: "Bölgesel teşvikler, vergi indirimi, SGK desteği ve yatırım danışmanlığı.",
    link: "/hizmetlerimiz/yatirim-tesvik-belgesi",
    icon: Award,
    image: "/images/yatirimtesvik.png",
  },
];

const webService = {
  title: "Web Sitesi Çözümleri",
  desc: "Mobil uyumlu, SEO odaklı ve kurumsal kimliğe uygun modern web tasarım hizmetleri.",
  link: "/hizmetlerimiz/web-sitesi",
  icon: Globe,
  image: "/images/website.png",
};

const banners = [
  {
    title: "Kurumsal Danışmanlıkta Güvenilir Çözüm Ortağınız",
    subtitle: "Resmi süreçlerde profesyonel destek",
  },
  {
    title: "Teşvik, Marka, Patent ve Daha Fazlası",
    subtitle: "Tüm süreçleri sizin için yönetiyoruz",
  },
];

const counters = [
  { label: "%100 Müşteri Memnuniyeti", value: 100 },
  { label: "500+ Başarılı Müşteri", value: 500 },
  { label: "1200+ Proje Tamamlandı", value: 1200 },
];

export default function HizmetlerPage() {
  const [index, setIndex] = useState(0);
  const [counterValues, setCounterValues] = useState(
    counters.map(() => 0)
  );

  // Banner Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Sayaç animasyonu
  useEffect(() => {
    const interval = setInterval(() => {
      setCounterValues((prev) =>
        prev.map((val, i) =>
          val < counters[i].value ? val + Math.ceil(counters[i].value / 100) : counters[i].value
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden">

      {/* FULLSCREEN BANNER IMAGE ONLY */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/banner.jpeg"
              alt="Kurumsal Banner"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* BANNER TEXT BELOW IMAGE */}
      <section className="bg-white py-20 px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {banners[index].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-8">
              {banners[index].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* COUNTERS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <h2 className="text-4xl font-bold text-blue-600 mb-2">
                {counterValues[i]}{c.label.includes("%") ? "%" : "+"}
              </h2>
              <p className="text-gray-600">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-gray-200 shadow-lg bg-white overflow-hidden hover:shadow-2xl transition-transform hover:-translate-y-2"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 flex-1">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition"
                  >
                    Detayları Gör
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* WEB SİTESİ ORTADA */}
        <div className="flex justify-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:scale-[1.02] transition-transform"
          >
            <div className="relative w-full h-72">
              <Image
                src={webService.image}
                alt={webService.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                {webService.title}
              </h2>
              <p className="text-gray-600 mb-6">{webService.desc}</p>
              <Link
                href={webService.link}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Detayları Gör
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t text-center">
        <h3 className="text-3xl font-semibold mb-6 text-gray-900">
          İşinizi Güvence Altına Alın
        </h3>
        <p className="text-gray-600 mb-10">
          Profesyonel danışmanlık ile süreci hızlandırın ve riskleri minimize edin.
        </p>
        <Link
          href="/iletisim"
          className="bg-blue-600 text-white px-10 py-4 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Ücretsiz Danışmanlık Al
        </Link>
      </section>

    </div>
  );
}