"use client";

import Image from "next/image";
import Link from "next/link";

export default function EImzaPage() {
  return (
    <div className="w-full space-y-16">

      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[420px] flex items-center justify-center text-white">

        <Image
          src="/images/eimza.png"
          alt="e-İmza Hizmetleri"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AKT Kurumsal - e-İmza Hizmetleri
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-8">
            5070 Sayılı Elektronik İmza Kanunu'na Uyumlu Güvenli Dijital İmza Çözümleri
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* e-İmza Nedir */}
        <section className="space-y-8">
          <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              e-İmza Nedir?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Elektronik imza (e-İmza), 5070 Sayılı Elektronik İmza Kanunu kapsamında 
              ıslak imza ile aynı hukuki geçerliliğe sahip dijital imzadır. 
              Kimliğinizi elektronik ortamda doğrular ve imzalanan belgenin 
              değiştirilemezliğini garanti eder.
            </p>
          </div>
        </section>

        {/* AKT e-İmza Hizmetleri */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">
            AKT Kurumsal e-İmza Hizmetleri
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• e-İmza başvuru işlemleri</li>
                <li>• Sertifika üretim süreci takibi</li>
                <li>• Kurulum ve aktivasyon desteği</li>
                <li>• Uzaktan teknik destek</li>
                <li>• Yenileme ve iptal işlemleri</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Kullanım Alanları
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• E-Fatura ve E-Defter işlemleri</li>
                <li>• KOSGEB ve teşvik başvuruları</li>
                <li>• SGK ve kamu kurum işlemleri</li>
                <li>• Banka ve finans sözleşmeleri</li>
                <li>• E-Devlet işlemleri</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Avantajlar */}
        <section className="bg-gray-50 p-10 rounded-2xl border border-gray-200 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            e-İmza Kullanmanın Avantajları
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-600 text-sm">
            <p>• Islak imza ile aynı hukuki geçerlilik</p>
            <p>• Zaman tasarrufu</p>
            <p>• Kağıt ve arşiv maliyetlerinde azalma</p>
            <p>• Uzaktan işlem yapabilme imkanı</p>
            <p>• Güvenli dijital kimlik doğrulama</p>
          </div>
        </section>

        {/* e-Dönüşüm Hizmetleri */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-gray-900">
            e-Fatura ve e-Dönüşüm Hizmetleri
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Hizmet Kapsamı
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• e-Fatura başvuru ve aktivasyon</li>
                <li>• e-Arşiv kurulumu</li>
                <li>• e-Defter entegrasyonu</li>
                <li>• Mali mühür ve e-İmza entegrasyonu</li>
                <li>• Muhasebe programı entegrasyon desteği</li>
                <li>• Teknik danışmanlık ve destek</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">
                Avantajlar
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Kağıt ve arşiv maliyetlerinde azalma</li>
                <li>• Yasal uyumluluk</li>
                <li>• Hızlı ve güvenli faturalama</li>
                <li>• Uzaktan erişim imkanı</li>
              </ul>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-900 p-10 rounded-2xl text-white flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Dijital İmza Sürecinizi Profesyonelce Yönetin
            </h3>
            <p className="text-gray-200">
              AKT Kurumsal Danışmanlık ile e-İmza ve e-Dönüşüm süreçlerinizi
              güvenli, hızlı ve mevzuata uygun şekilde tamamlayın.
            </p>
          </div>

          <Link
            href="/iletisim"
            className="bg-white text-blue-900 hover:bg-gray-200 px-8 py-4 rounded-xl font-semibold text-center"
          >
            Teklif Al
          </Link>

        </section>

      </div>
    </div>
  );
}