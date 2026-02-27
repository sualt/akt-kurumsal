"use client";

import { Users, Flag, Target, Award, Globe, Heart } from "lucide-react";

export default function HakkimizdaPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 space-y-28 text-gray-300">

      {/* ================= BAŞLIK ================= */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hakkımızda
        </h1>
        <p className="text-lg leading-8 mb-12">
          2010 yılında kurulan firmamız, kurumsal danışmanlık ve tescil hizmetlerinde Türkiye’nin önde gelen firmalarından biridir.
          Amacımız, müşterilerimizin iş süreçlerini optimize ederek sürdürülebilir başarıya ulaşmalarını sağlamaktır.
        </p>
      </section>

      {/* ================= MİSYON ================= */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold flex items-center gap-3 mb-4">
          <Flag /> Misyonumuz
        </h2>
        <p className="leading-8">
          İşletmelerin ve girişimcilerin büyümesini desteklemek için yenilikçi, güvenilir ve kişiye özel çözümler sunuyoruz.  
          Her projede kaliteyi ve müşteri memnuniyetini ön planda tutuyoruz.
        </p>
      </section>

      {/* ================= VİZYON ================= */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold flex items-center gap-3 mb-4">
          <Target /> Vizyonumuz
        </h2>
        <p className="leading-8">
          Türkiye ve uluslararası pazarlarda güvenilir ve yenilikçi bir danışmanlık firması olarak tanınmak.  
          Müşterilerimizin iş süreçlerini daha verimli, hızlı ve güvenli hâle getirmek önceliğimizdir.
        </p>
      </section>

      {/* ================= DEĞERLERİMİZ ================= */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold flex items-center gap-3 mb-4">
          <Heart /> Değerlerimiz
        </h2>
        <ul className="space-y-3 pl-6 list-disc leading-8">
          <li>✔ Şeffaflık ve güvenilirlik</li>
          <li>✔ Müşteri odaklı yaklaşım</li>
          <li>✔ Yenilikçi ve sürdürülebilir çözümler</li>
          <li>✔ İş birliği ve ekip ruhu</li>
          <li>✔ Kalite ve mükemmeliyetçilik</li>
        </ul>
      </section>

      {/* ================= EKİP ================= */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold flex items-center gap-3 mb-4">
          <Users /> Ekibimiz
        </h2>
        <p className="leading-8">
          Alanında uzman danışmanlarımız, sektör tecrübeleri ve kişisel ilgileri ile her projeyi başarıya taşır.  
          Her ekip üyesi, müşteri memnuniyetini öncelikli hedef olarak benimser.
        </p>
      </section>

      {/* ================= BAŞARILAR ================= */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold flex items-center gap-3 mb-4">
          <Award /> Başarılarımız
        </h2>
        <ul className="space-y-3 pl-6 list-disc leading-8">
          <li>✔ 500+ başarılı marka ve patent tescili</li>
          <li>✔ KOSGEB ve devlet desteklerinde 1000+ danışmanlık hizmeti</li>
          <li>✔ Ulusal ve uluslararası danışmanlık projelerinde yüksek başarı oranı</li>
          <li>✔ Kurumsal müşteri portföyünde sürdürülebilir iş ilişkileri</li>
        </ul>
      </section>

      {/* ================= GLOBAL HİZMET ================= */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold flex items-center gap-3 mb-4">
          <Globe /> Global Hizmet
        </h2>
        <p className="leading-8">
          Sadece Türkiye’de değil, yurtdışında da müşterilerimize danışmanlık hizmetleri sunuyoruz.  
          Uluslararası iş süreçlerini yönetiyor, tescil ve başvuru süreçlerinde global standartları uyguluyoruz.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-900/30 p-10 rounded-2xl border border-blue-700 text-center">
        <h3 className="text-xl font-semibold mb-4">
          Profesyonel Danışmanlık Alın
        </h3>
        <p className="mb-6">
          Hakkımızda daha fazla bilgi almak, danışmanlık hizmetlerimizi keşfetmek ve size özel çözümlerimizden faydalanmak için hemen iletişime geçin.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
          Bize Ulaşın
        </button>
      </section>

    </div>
  );
}