"use client";

import Link from "next/link";
import { Award } from "lucide-react";

export default function MarkaTescilPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">

      {/* HERO */}
      <div className="flex items-center gap-4 mb-6">
        <Award className="w-12 h-12 text-blue-500" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Marka Tescil Danışmanlığı
        </h1>
      </div>

      <p className="text-lg text-gray-700 leading-8 mb-12">
        Marka tescili, işletmenizin ismini, logosunu ve ticari kimliğini hukuki olarak koruma altına alır. Türkiye’de marka koruması Türk Patent ve Marka Kurumu nezdinde yapılan başvuru ile sağlanır.
      </p>

      {/* MARKA NEDİR */}
      <h2 className="text-2xl font-semibold mb-4">Marka Nedir?</h2>
      <p className="text-gray-700 leading-7 mb-12">
        Marka; bir işletmenin mal veya hizmetlerini diğerlerinden ayırt etmeye yarayan isim, logo, slogan, şekil veya kombinasyonlardan oluşur. Tescil edilmemiş markalar hukuki koruma açısından zayıftır.
      </p>

      {/* NEDEN TESCİL */}
      <h2 className="text-2xl font-semibold mb-4">Neden Marka Tescili Yaptırmalısınız?</h2>
      <ul className="space-y-3 text-gray-700 mb-12">
        <li>✔ Hukuki koruma sağlar</li>
        <li>✔ Taklit ve izinsiz kullanımın önüne geçer</li>
        <li>✔ Franchise ve lisans hakkı doğurur</li>
        <li>✔ Şirket değerini artırır</li>
        <li>✔ Yatırımcı güveni sağlar</li>
      </ul>

      {/* BAŞVURU SÜRECİ */}
      <h2 className="text-2xl font-semibold mb-4">Marka Tescil Süreci</h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-12">
        <li>Marka ön araştırması (benzerlik analizi)</li>
        <li>Nice sınıf seçimi</li>
        <li>Türk Patent başvurusu</li>
        <li>Şekli inceleme</li>
        <li>Resmi bültende yayın (2 ay)</li>
        <li>İtiraz süreci</li>
        <li>Tescil belgesi düzenlenmesi</li>
      </ol>

      {/* SINIF SEÇİMİ */}
      <h2 className="text-2xl font-semibold mb-4">Nice Sınıflandırması Nedir?</h2>
      <p className="text-gray-700 leading-7 mb-12">
        Marka başvuruları 45 farklı sınıfta yapılır. Yanlış sınıf seçimi markanın koruma alanını daraltabilir. Doğru sınıf stratejik önem taşır.
      </p>

      {/* RED NEDENLERİ */}
      <h2 className="text-2xl font-semibold mb-4">En Sık Red Nedenleri</h2>
      <ul className="space-y-3 text-gray-700 mb-12">
        <li>✖ Ayırt edici olmama</li>
        <li>✖ Önceden tescilli markaya benzerlik</li>
        <li>✖ Yanıltıcı ifade</li>
        <li>✖ Kamu düzenine aykırılık</li>
      </ul>

      {/* GEÇERLİLİK */}
      <h2 className="text-2xl font-semibold mb-4">Koruma Süresi</h2>
      <p className="text-gray-700 leading-7 mb-12">
        Marka tescili 10 yıl süreyle geçerlidir. Süre sonunda yenilenebilir.
      </p>

      {/* CTA */}
      <div className="bg-blue-900/30 p-10 rounded-2xl border border-blue-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Ücretsiz Marka Ön Araştırması</h3>
          <p className="text-gray-300">Markanızın tescile uygunluğunu analiz edelim.</p>
        </div>
        <Link
          href="/iletisim"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-center"
        >
          Marka Sorgula
        </Link>
      </div>

    </div>
  );
}