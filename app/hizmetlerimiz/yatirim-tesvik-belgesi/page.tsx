"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: "spring" as const,
      stiffness: 120,
    },
  }),
};

export default function YatirimTesvikPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[420px] flex items-center justify-center text-white">

        <Image
          src="/images/yatırım.png"
          alt="Yatırım Teşvik Belgesi Danışmanlığı"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Yatırım Teşvik Belgesi Danışmanlık Hizmetleri
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-8">
            Devlet desteklerinden maksimum fayda sağlayın, yatırımınızı güvenle büyütün.
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="text-center py-28 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
        >
          AKT Kurumsal - Yatırım Teşvik Belgesi Danışmanlık Hizmetleri
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="text-gray-600 max-w-3xl mx-auto leading-8"
        >
          Yeni Yatırım Teşvik Sistemi | Yatırım Teşvik Belgesi Başvurusu | KDV İstisnası | Vergi İndirimi | SGK Prim Desteği | Stratejik Yatırım Teşvikleri
        </motion.p>
      </section>

      {/* HAKKIMIZDA */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-700 space-y-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-2xl font-semibold text-gray-900"
        >
          Hakkımızda
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="space-y-4"
        >
          <p>
            Yeni Yatırım Teşvik Sistemi kapsamında bölgesel, stratejik, teknoloji ve öncelikli yatırımlar için sağlanan desteklerin doğru analiz edilmesi ve başvurunun mevzuata uygun hazırlanması büyük önem taşımaktadır. AKT Kurumsal olarak tüm süreci titizlikle yürütmekteyiz.
          </p>
          <p>
            Yatırım Teşvik Belgesi, yatırımcıların KDV istisnası, gümrük vergisi muafiyeti, vergi indirimi, sigorta primi işveren hissesi desteği ve faiz/kâr payı desteği gibi devlet teşviklerinden yararlanmasını sağlayan resmi bir belgedir. Belge olmadan yatırım harcamaları teşvik kapsamına alınamaz. Bu nedenle yatırım başlamadan önce başvuru yapılması gerekmektedir.
          </p>
        </motion.div>
      </section>

      {/* 1. ve 2. Resim */}
      <section className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="w-full relative aspect-[16/9]">
            <Image
              src="/images/tesviksistemkurgusu.png"
              alt="Teşvik Sistemi Kurgu"
              fill
              className="object-contain rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="w-full relative aspect-[16/9]">
            <Image
              src="/images/bolgeler.png"
              alt="Bölgeler"
              fill
              className="object-contain rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* TEŞVİK SİSTEMİ */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-700 space-y-6">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-2xl font-semibold text-gray-900">
          Yeni Yatırım Teşvik Sistemi Yapısı
        </motion.h2>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="space-y-2">
          <p>Yeni teşvik sistemi iki ana yapıdan oluşmaktadır:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Türkiye Yüzyılı Kalkınma Programları (Teknoloji, Stratejik ve Yerel Kalkınma yatırımları)</li>
            <li>Bölgesel ve Öncelikli Yatırımlar Teşvik Sistemi</li>
          </ul>
        </motion.div>
      </section>

      {/* 3. Büyük Resim */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full relative aspect-[21/9] mb-12 px-6">
        <Image
          src="/images/sektoreltesvik.png"
          alt="Sektörel Teşvik"
          fill
          className="object-contain rounded-2xl shadow-lg"
        />
      </motion.section>

      {/* TEŞVİK KAPSAMINDAKİ DESTEKLER */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-700 space-y-6">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-2xl font-semibold text-gray-900">
          Teşvik Kapsamındaki Destekler
        </motion.h2>

        <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="list-disc list-inside space-y-1">
          <li>KDV İstisnası (Makine ve teçhizat alımlarında KDV muafiyeti)</li>
          <li>Gümrük Vergisi Muafiyeti</li>
          <li>Vergi İndirimi (Gelir/Kurumlar Vergisi avantajı)</li>
          <li>Sigorta Primi İşveren Hissesi Desteği</li>
          <li>Sigorta Primi İşçi Hissesi Desteği (6. Bölge)</li>
          <li>Faiz veya Kâr Payı Desteği</li>
          <li>Yatırım Yeri Tahsisi</li>
          <li>Stratejik yatırımlarda makine hibesi</li>
        </motion.ul>
      </section>

      {/* HİZMETLERİMİZ */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-700 space-y-6">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-2xl font-semibold text-gray-900">
          Hizmetlerimiz
        </motion.h2>

        <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="list-disc list-inside space-y-1">
          <li>Yatırım Teşvik Belgesi Başvuru Danışmanlığı</li>
          <li>Revize İşlemleri (Makine listesi, yatırım tutarı, süre uzatımı vb.)</li>
          <li>Tamamlama Vizesi İşlemleri</li>
        </motion.ul>
      </section>

      {/* NEDEN AKT KURUMSAL */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-700 space-y-6">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-2xl font-semibold text-gray-900">
          Neden AKT Kurumsal?
        </motion.h2>

        <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="list-disc list-inside space-y-1">
          <li>Güncel mevzuata hakim uzman kadro</li>
          <li>Maksimum teşvik avantajı için stratejik analiz</li>
          <li>Hızlı ve eksiksiz başvuru süreci</li>
          <li>Türkiye genelinde danışmanlık hizmeti</li>
          <li>Şeffaf ve sürekli bilgilendirme</li>
        </motion.ul>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-200 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-gray-900 mb-6"
        >
          Profesyonel Danışmanlık Alın
        </motion.h3>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring" as const,
            stiffness: 120,
          }}
        >
          <Link
            href="/iletisim"
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Teklif Al
          </Link>
        </motion.div>
      </section>

    </div>
  );
}