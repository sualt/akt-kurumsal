"use client";

import Link from "next/link";
import { ClipboardCheck } from "lucide-react";

export default function KosgebDestekleriPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">

      {/* HERO */}
      <div className="flex items-center gap-4 mb-6">
        <ClipboardCheck className="w-12 h-12 text-green-600" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          KOSGEB Destekleri Danışmanlığı
        </h1>
      </div>

      <p className="text-lg text-gray-700 leading-8">
        KOSGEB destekleri, küçük ve orta ölçekli işletmelerin (KOBİ) rekabet gücünü artırmak amacıyla sunulan hibe ve geri ödemeli finansman programlarını kapsar. Uygunluk analizi ve proje yönetimi ile süreci kolaylaştırıyoruz.
      </p>

      {/* KOSGEB NEDİR */}
      <h2 className="text-2xl font-semibold mb-4">KOSGEB Nedir?</h2>
      <p className="text-gray-700 leading-7">
        Küçük ve Orta Ölçekli İşletmeleri Geliştirme ve Destekleme İdaresi Başkanlığı (KOSGEB), girişimcilik, üretim, ihracat ve dijitalleşme alanlarında devlet destekleri sunar. Destekler proje bazlıdır ve belirli kriterlere bağlıdır.
      </p>

      {/* DESTEK PROGRAMLARI */}
      <h2 className="text-2xl font-semibold mb-4">Güncel KOSGEB Destek Programları</h2>
      <div className="space-y-6 text-gray-700">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-green-500 transition">
          <h3 className="font-semibold text-white mb-2">1. Girişimci Destek Programı</h3>
          <p>Yeni kurulan işletmelere kuruluş ve makine desteği sağlar.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-green-500 transition">
          <h3 className="font-semibold text-white mb-2">2. İş Geliştirme Desteği</h3>
          <p>Mevcut işletmelerin kapasite artırımı ve büyüme yatırımlarını destekler.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-green-500 transition">
          <h3 className="font-semibold text-white mb-2">3. Ar-Ge ve İnovasyon Desteği</h3>
          <p>Yeni ürün geliştirme ve teknolojik yatırımlar için proje bazlı destek sağlar.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-green-500 transition">
          <h3 className="font-semibold text-white mb-2">4. Dijitalleşme Desteği</h3>
          <p>Yazılım, otomasyon ve dijital dönüşüm yatırımlarına katkı sunar.</p>
        </div>
      </div>

      {/* BAŞVURU ŞARTLARI */}
      <h2 className="text-2xl font-semibold mb-4">KOSGEB Başvuru Şartları</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>KOBİ statüsünde olmak</li>
        <li>KOSGEB veri tabanına kayıtlı olmak</li>
        <li>Desteklenen NACE koduna sahip olmak</li>
        <li>Proje bazlı başvuru yapmak</li>
      </ul>

      {/* PROJE HAZIRLAMA */}
      <h2 className="text-2xl font-semibold mb-4">Proje Hazırlama Süreci</h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700">
        <li>Uygun programın belirlenmesi</li>
        <li>Proje bütçesinin hazırlanması</li>
        <li>Teknik açıklamaların yazılması</li>
        <li>Online başvuru</li>
        <li>Kurul değerlendirmesi</li>
      </ol>

      {/* RİSKLER */}
      <h2 className="text-2xl font-semibold mb-4">En Sık Red Nedenleri</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Eksik proje dosyası</li>
        <li>Yetersiz teknik açıklama</li>
        <li>Uygun olmayan gider kalemleri</li>
        <li>NACE kodu uyumsuzluğu</li>
      </ul>

      {/* CTA */}
      <div className="bg-green-900/30 p-10 rounded-2xl border border-green-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Ücretsiz KOSGEB Uygunluk Analizi</h3>
          <p className="text-gray-300">
            İşletmenizin hangi destek programına uygun olduğunu analiz edelim.
          </p>
        </div>
        <Link
          href="/iletisim"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-center"
        >
          Analiz Talep Et
        </Link>
      </div>

    </div>
  );
}