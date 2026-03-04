"use client";

import Link from "next/link";
import Image from "next/image";

export default function WebTasarimPage() {
  return (
    <div className="w-full">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[420px] flex items-center justify-center text-white">

        {/* Banner Image */}
        <Image
          src="/images/webtasarim.png"
          alt="Kurumsal Web Tasarım Hizmetleri"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kurumsal Web Tasarım Hizmetleri
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-8">
            Markanızı dijital dünyada güçlü şekilde temsil eden,
            mobil uyumlu ve SEO odaklı web siteleri tasarlıyoruz.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">

        {/* Hizmet Kapsamı */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">
            Hizmet Kapsamı
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <ul className="space-y-3 text-gray-700">
                <li>✔ Kurumsal web sitesi tasarımı</li>
                <li>✔ E-ticaret sitesi kurulumu</li>
                <li>✔ SEO uyumlu altyapı</li>
                <li>✔ Mobil ve tablet uyumlu tasarım</li>
                <li>✔ Güvenlik ve SSL kurulumu</li>
                <li>✔ Alan adı ve hosting danışmanlığı</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Neden AKT Kurumsal Web Tasarım?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Modern ve profesyonel tasarım</li>
                <li>✔ Hızlı açılan optimize edilmiş sayfalar</li>
                <li>✔ Google uyumlu teknik altyapı</li>
                <li>✔ Kurumsal kimliğe uygun tasarım dili</li>
                <li>✔ Ölçeklenebilir yazılım mimarisi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dijital Dönüşüm */}
        <section className="bg-gray-50 p-10 rounded-2xl border border-gray-200 space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-900">
            AKT Kurumsal ile Dijital Dönüşüm
          </h2>

          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-8">
            İşletmenizin dijital süreçlerini tek noktadan yönetiyoruz.
            e-İmza, e-Fatura ve Web Tasarım hizmetlerimiz ile
            kurumsal gücünüzü artırıyoruz.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-gray-700 mt-6 text-center">
            <p>✔ e-İmza Hizmetleri</p>
            <p>✔ e-Fatura & e-Dönüşüm</p>
            <p>✔ Kurumsal Web Tasarım</p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-900 p-10 rounded-2xl text-white flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Web Sitenizi Profesyonelce Oluşturalım
            </h3>
            <p className="text-gray-200">
              AKT Kurumsal ile markanızı dijital dünyada güçlü ve
              güvenilir şekilde temsil edin.
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