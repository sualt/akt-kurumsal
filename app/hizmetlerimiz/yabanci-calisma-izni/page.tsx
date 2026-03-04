"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const services = [
  {
    title: "Yabancı Çalışma İzni Başvurusu",
    desc: "Türkiye’de çalışacak yabancı personel için ilk başvuru işlemlerinin hazırlanması ve online sistem üzerinden başvuru takibi.",
    icon: Users,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Çalışma İzni Uzatma İşlemleri",
    desc: "Süresi dolmak üzere olan çalışma izinlerinin mevzuata uygun şekilde uzatılması.",
    icon: Users,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Şirketler Arası Transfer İşlemleri",
    desc: "Yabancı personelin işveren değişikliği süreçlerinin yürütülmesi.",
    icon: Users,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Geçici Koruma Altındaki Yabancılar İçin Çalışma İzni",
    desc: "Geçici koruma statüsündeki yabancıların çalışma izni başvurularının yapılması.",
    icon: Users,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Yabancı Personel Kota Danışmanlığı",
    desc: "İşverenlerin yabancı personel çalıştırma şartları ve kota hesaplamaları konusunda bilgilendirilmesi.",
    icon: Users,
    color: "from-purple-400 to-purple-600",
  },
];

export default function YabanciCalismaIzniPage() {
  return (
    <div className="w-full bg-gray-50 min-h-screen">

      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[420px] flex items-center justify-center text-white">
        <img
          src="/images/yabancı.png"
          alt="Yabancı Çalışma İzni"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AKT Kurumsal - Yabancı Çalışma İzni Danışmanlık Hizmetleri
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto leading-8">
            Türkiye Yabancı Çalışma İzni Danışmanlığı | Çalışma İzni Başvurusu | Çalışma İzni Uzatma | Şirketler Arası Transfer | Geçici Koruma Çalışma İzni
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Hakkımızda */}
        <section className="max-w-4xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Hakkımızda</h2>
            <p className="text-gray-600 leading-8">
              AKT Kurumsal, Türkiye’de faaliyet gösteren işletmelere yabancı çalışma izni danışmanlığı alanında profesyonel hizmet sunan kurumsal bir danışmanlık firmasıdır. Yabancı personel çalışma izni başvurusu, çalışma izni uzatma işlemleri, şirketler arası transfer başvuruları ve geçici koruma kapsamındaki yabancıların çalışma izni süreçlerini mevzuata uygun şekilde yönetiyoruz.
            </p>
            <p className="text-gray-600 leading-8 mt-4">
              İşletmelerin zaman ve maliyet kaybı yaşamaması için başvuru ön analizinden sonuçlanma aşamasına kadar tüm süreci titizlikle takip ediyoruz. Güncel mevzuata hakim uzman danışman kadromuz ile Türkiye genelinde hizmet vermekteyiz.
            </p>
          </motion.div>
        </section>

        {/* Hizmetler */}
        <section className="py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-gray-900 mb-12 text-center"
          >
            Hizmetlerimiz
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5, type: "spring", stiffness: 120 }}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${service.color}`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-8 h-8 text-purple-600" />
                      <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-7 mb-8">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Neden AKT Kurumsal */}
        <section className="max-w-4xl mx-auto py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-gray-900 mb-6"
          >
            Neden AKT Kurumsal?
          </motion.h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Güncel mevzuata uygun başvuru yönetimi</li>
            <li>Eksiksiz ve doğru evrak hazırlama süreci</li>
            <li>Hızlı başvuru ve etkin takip sistemi</li>
            <li>Türkiye genelinde danışmanlık hizmeti</li>
            <li>Sürekli iletişim ve profesyonel destek</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white border-t border-gray-200 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-gray-900 mb-6"
          >
            Profesyonel Destek ile Zaman ve Maliyeti Azaltın
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            AKT Kurumsal ile yabancı personel çalışma izni süreçlerinizi hızlı, güvenli ve mevzuata uygun şekilde yönetin.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 }}
          >
            <Link
              href="/iletisim"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Teklif Al
            </Link>
          </motion.div>
        </section>

      </div>
    </div>
  );
}