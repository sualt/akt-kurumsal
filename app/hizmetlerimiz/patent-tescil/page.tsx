"use client";

import Link from "next/link";
import Image from "next/image";
import { Award } from "lucide-react";

export default function MarkaTescilPage() {
  return (
    <div className="w-full">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[420px] flex items-center justify-center text-white">

        {/* Banner Image */}
        <Image
          src="/images/markatescil.png"
          alt="Marka Tescil Danışmanlığı"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="flex justify-center mb-6">
            <Award className="w-14 h-14 text-blue-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Marka Tescil Danışmanlığı
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-8">
            Markanızı hukuki koruma altına alın, ticari değerini artırın ve
            geleceğe güvenle taşıyun.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">

        {/* MARKA NEDİR */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Marka Nedir?</h2>
          <p className="text-gray-700 leading-8">
            Marka; bir işletmenin mal veya hizmetlerini diğerlerinden ayırt
            etmeye yarayan isim, logo, slogan, şekil veya kombinasyonlardan
            oluşur. Tescil edilmemiş markalar hukuki koruma açısından zayıftır.
          </p>
        </section>

        {/* NEDEN TESCİL */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Neden Marka Tescili Yaptırmalısınız?
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Hukuki koruma sağlar</li>
            <li>✔ Taklit ve izinsiz kullanımın önüne geçer</li>
            <li>✔ Franchise ve lisans hakkı doğurur</li>
            <li>✔ Şirket değerini artırır</li>
            <li>✔ Yatırımcı güveni sağlar</li>
          </ul>
        </section>

        {/* BAŞVURU SÜRECİ */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Marka Tescil Süreci</h2>

          <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-7">
            <li>Marka ön araştırması (benzerlik analizi)</li>
            <li>Nice sınıf seçimi</li>
            <li>Türk Patent başvurusu</li>
            <li>Şekli inceleme</li>
            <li>Resmi bültende yayın (2 ay)</li>
            <li>İtiraz süreci</li>
            <li>Tescil belgesi düzenlenmesi</li>
          </ol>
        </section>

        {/* SINIF SEÇİMİ */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Nice Sınıflandırması Nedir?
          </h2>

          <p className="text-gray-700 leading-8">
            Marka başvuruları 45 farklı sınıfta yapılır. Yanlış sınıf seçimi
            markanın koruma alanını daraltabilir. Doğru sınıf seçimi stratejik
            önem taşır.
          </p>
        </section>

        {/* RED NEDENLERİ */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            En Sık Red Nedenleri
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✖ Ayırt edici olmama</li>
            <li>✖ Önceden tescilli markaya benzerlik</li>
            <li>✖ Yanıltıcı ifade</li>
            <li>✖ Kamu düzenine aykırılık</li>
          </ul>
        </section>

        {/* KORUMA SÜRESİ */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Koruma Süresi
          </h2>

          <p className="text-gray-700 leading-8">
            Marka tescili 10 yıl süreyle geçerlidir ve süre sonunda
            yenilenebilir.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-900 p-10 rounded-2xl text-white flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Ücretsiz Marka Ön Araştırması
            </h3>
            <p className="text-gray-200">
              Markanızın tescile uygunluğunu analiz edelim ve süreci birlikte
              planlayalım.
            </p>
          </div>

          <Link
            href="/iletisim"
            className="bg-white text-blue-900 hover:bg-gray-200 px-8 py-4 rounded-xl font-semibold text-center"
          >
            Marka Sorgula
          </Link>
        </section>

      </div>
    </div>
  );
}