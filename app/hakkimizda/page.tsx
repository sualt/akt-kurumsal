"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Flag, Target, Award, Globe, Heart } from "lucide-react";

export default function HakkimizdaPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-700">

      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[420px] flex items-center justify-center text-white">
        <img
          src="/images/hakkımızda.png"
          alt="Hakkımızda"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hakkımızda
            </h1>
            <p className="text-lg leading-8 max-w-3xl mx-auto text-gray-200">
              2010 yılından bu yana kurumsal danışmanlık ve tescil hizmetlerinde
              güvenilir çözüm ortağınız olarak faaliyet gösteriyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= İÇERİK ================= */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-28">

        {/* MİSYON */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold flex items-center gap-3 text-gray-900">
            <Flag className="text-blue-600" /> Misyonumuz
          </h2>
          <p className="leading-8">
            İşletmelerin ve girişimcilerin büyümesini desteklemek için yenilikçi,
            güvenilir ve kişiye özel çözümler sunuyoruz. Her projede kaliteyi ve
            müşteri memnuniyetini ön planda tutuyoruz.
          </p>
        </section>

        {/* VİZYON */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold flex items-center gap-3 text-gray-900">
            <Target className="text-blue-600" /> Vizyonumuz
          </h2>
          <p className="leading-8">
            Türkiye ve uluslararası pazarlarda güvenilir ve yenilikçi bir
            danışmanlık firması olarak tanınmak. Müşterilerimizin iş süreçlerini
            daha verimli, hızlı ve güvenli hâle getirmek önceliğimizdir.
          </p>
        </section>

        {/* DEĞERLER */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold flex items-center gap-3 text-gray-900">
            <Heart className="text-blue-600" /> Değerlerimiz
          </h2>
          <ul className="space-y-3 pl-6 list-disc leading-8">
            <li>Şeffaflık ve güvenilirlik</li>
            <li>Müşteri odaklı yaklaşım</li>
            <li>Yenilikçi ve sürdürülebilir çözümler</li>
            <li>İş birliği ve ekip ruhu</li>
            <li>Kalite ve mükemmeliyetçilik</li>
          </ul>
        </section>

        {/* EKİP */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold flex items-center gap-3 text-gray-900">
            <Users className="text-blue-600" /> Ekibimiz
          </h2>
          <p className="leading-8">
            Alanında uzman danışmanlarımız, sektör tecrübeleri ve kişisel
            ilgileri ile her projeyi başarıya taşır. Her ekip üyesi müşteri
            memnuniyetini öncelikli hedef olarak benimser.
          </p>
        </section>

        {/* BAŞARILAR */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold flex items-center gap-3 text-gray-900">
            <Award className="text-blue-600" /> Başarılarımız
          </h2>
          <ul className="space-y-3 pl-6 list-disc leading-8">
            <li>500+ başarılı marka ve patent tescili</li>
            <li>1000+ KOSGEB ve devlet destek danışmanlığı</li>
            <li>Ulusal ve uluslararası projelerde yüksek başarı oranı</li>
            <li>Sürdürülebilir kurumsal müşteri portföyü</li>
          </ul>
        </section>

        {/* GLOBAL */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold flex items-center gap-3 text-gray-900">
            <Globe className="text-blue-600" /> Global Hizmet
          </h2>
          <p className="leading-8">
            Sadece Türkiye’de değil, yurtdışında da danışmanlık hizmetleri
            sunuyoruz. Uluslararası iş süreçlerini yönetiyor, tescil ve başvuru
            aşamalarında global standartları uyguluyoruz.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Profesyonel Danışmanlık Alın
          </h3>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Hakkımızda daha fazla bilgi almak ve size özel çözümlerimizi
            keşfetmek için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition"
          >
            Bize Ulaşın
          </Link>
        </section>

      </div>
    </div>
  );
}