"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
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
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "KOSGEB Destekleri",
    desc: "KOSGEB hibe ve proje başvuru danışmanlığı, uygunluk analizi ve destek süreci yönetimi.",
    link: "/hizmetlerimiz/kosgeb-destekleri",
    icon: ClipboardCheck,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Yabancı Çalışma İzni",
    desc: "Yabancı personel istihdamı, çalışma izni başvurusu ve bakanlık süreç yönetimi.",
    link: "/hizmetlerimiz/yabanci-calisma-izni",
    icon: Users,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "E-İmza Satışı",
    desc: "5070 sayılı kanuna uygun elektronik imza başvurusu, teslim ve teknik kurulum hizmeti.",
    link: "/hizmetlerimiz/e-imza-satisi",
    icon: Key,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Marka Tescil",
    desc: "Türk Patent marka başvurusu, sınıf seçimi, itiraz süreci ve hukuki koruma danışmanlığı.",
    link: "/hizmetlerimiz/marka-tescil",
    icon: FileText,
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "Yatırım Teşvik Belgesi",
    desc: "Bölgesel teşvikler, vergi indirimi, SGK desteği ve yatırım danışmanlığı.",
    link: "/hizmetlerimiz/yatirim-tesvik-belgesi",
    icon: Award,
    color: "from-red-400 to-red-600",
  },
];

export default function HizmetlerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="text-center py-28 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Profesyonel Danışmanlık Hizmetlerimiz
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-8">
          Şirket kuruluşundan marka ve patent tesciline kadar tüm resmi süreçlerde uçtan uca profesyonel destek sağlıyoruz.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5, type: "spring", stiffness: 120 }}
                className={`relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300`}
              >
                {/* Gradient Circle */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${service.color}`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-7 mb-8">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Detayları Gör
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-200 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-gray-900 mb-6"
        >
          İşinizi Güvence Altına Alın
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-600 mb-10"
        >
          Profesyonel danışmanlık ile süreci hızlandırın ve riskleri minimize edin.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 }}
        >
          <Link
            href="/iletisim"
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Ücretsiz Danışmanlık Al
          </Link>
        </motion.div>
      </section>
    </div>
  );
}