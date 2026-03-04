"use client";

import { useEffect, useState } from "react";
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
} from "lucide-react";

const services = [
  {
    title: "Patent Tescil",
    desc: "Limited ve anonim şirket kuruluş işlemleri ve resmi süreç danışmanlığı.",
    link: "/hizmetlerimiz/patent-tescil",
    icon: Building,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "KOSGEB Destekleri",
    desc: "KOSGEB hibe ve proje başvuru danışmanlığı.",
    link: "/hizmetlerimiz/kosgeb-destekleri",
    icon: ClipboardCheck,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Yabancı Çalışma İzni",
    desc: "Çalışma izni başvurusu ve süreç yönetimi.",
    link: "/hizmetlerimiz/yabanci-calisma-izni",
    icon: Users,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "E-İmza Satışı",
    desc: "Elektronik imza başvuru ve kurulum hizmeti.",
    link: "/hizmetlerimiz/e-imza-satisi",
    icon: Key,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Marka Tescil",
    desc: "Marka başvurusu ve hukuki koruma danışmanlığı.",
    link: "/hizmetlerimiz/marka-tescil",
    icon: FileText,
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "Yatırım Teşvik Belgesi",
    desc: "Vergi indirimi ve yatırım danışmanlığı.",
    link: "/hizmetlerimiz/yatirim-tesvik-belgesi",
    icon: Award,
    color: "from-red-400 to-red-600",
  },
];

const webService = {
  title: "Web Sitesi Çözümleri",
  desc: "SEO uyumlu modern kurumsal web tasarım hizmetleri.",
  link: "/hizmetlerimiz/web-sitesi",
  icon: Globe,
  color: "from-indigo-400 to-indigo-600",
};

export default function HizmetlerPage() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.08]);

  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      
      {/* ================= PREMIUM PARALLAX BANNER ================= */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <motion.img
          src="/images/hizmetlerbanner.png"
          alt="Hizmetler Banner"
          style={{ y, scale }}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group relative rounded-2xl bg-white border border-gray-200 shadow-lg p-8 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]"></div>

                {/* Gradient Blur */}
                <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${service.color}`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <Icon className="w-8 h-8 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 mb-8 leading-7">
                    {service.desc}
                  </p>

                  <Link
                    href={service.link}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
                  >
                    Detayları Gör
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= WEB SITESI KART ================= */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl bg-white border border-gray-200 shadow-lg p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 w-full md:w-[32%]"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]"></div>

            <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${webService.color}`}></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <webService.icon className="w-8 h-8 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {webService.title}
                </h2>
              </div>

              <p className="text-gray-600 mb-8 leading-7">
                {webService.desc}
              </p>

              <Link
                href={webService.link}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                Detayları Gör
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-white border-t border-gray-200 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-900 mb-6"
        >
          İşinizi Güvence Altına Alın
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-10"
        >
          Profesyonel danışmanlık ile süreci hızlandırın ve riskleri minimize edin.
        </motion.p>

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