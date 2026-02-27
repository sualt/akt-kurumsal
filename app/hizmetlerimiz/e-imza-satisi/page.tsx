"use client";

import Link from "next/link";
import { Usb } from "lucide-react";

export default function EImzaPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">

      {/* HERO */}
      <div className="flex items-center gap-4 mb-6">
        <Usb className="w-12 h-12 text-blue-500" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          E-İmza Satışı ve Kurulum Hizmeti
        </h1>
      </div>

      <p className="text-lg text-gray-700 leading-8 mb-12">
        Elektronik imza (e-imza), 5070 sayılı Elektronik İmza Kanunu kapsamında ıslak imza ile aynı hukuki geçerliliğe sahip dijital imzadır. Resmi işlemler, e-devlet uygulamaları, UYAP, EKAP, e-fatura ve şirket sözleşmelerinde zorunlu hale gelmiştir.
      </p>

      {/* E-İMZA NEDİR */}
      <h2 className="text-2xl font-semibold mb-4">Elektronik İmza Nedir?</h2>
      <p className="text-gray-700 leading-7 mb-12">
        Kişiye özel oluşturulan USB token veya akıllı kart ile çalışan dijital sertifika sistemi. Kamu Sertifikasyon Merkezi ve yetkili elektronik sertifika sağlayıcıları tarafından üretilir.
      </p>

      {/* NERELERDE KULLANILIR */}
      <h2 className="text-2xl font-semibold mb-4">E-İmza Nerelerde Kullanılır?</h2>
      <ul className="space-y-4 text-gray-700 mb-12">
        <li>✔ E-Fatura ve E-Arşiv işlemleri</li>
        <li>✔ UYAP Avukat ve Arabulucu sistemleri</li>
        <li>✔ EKAP ihale başvuruları</li>
        <li>✔ E-Devlet başvuruları</li>
        <li>✔ MERSİS işlemleri</li>
        <li>✔ KEP sistemi</li>
      </ul>

      {/* BAŞVURU SÜRECİ */}
      <h2 className="text-2xl font-semibold mb-4">E-İmza Başvuru Süreci</h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-12">
        <li>Kimlik doğrulama</li>
        <li>Sözleşme ve başvuru formu</li>
        <li>Ödeme işlemi</li>
        <li>Sertifika üretimi</li>
        <li>USB token teslimi</li>
        <li>Bilgisayara kurulum ve aktivasyon</li>
      </ol>

      {/* KURULUM VE DESTEK */}
      <h2 className="text-2xl font-semibold mb-4">Kurulum ve Teknik Destek</h2>
      <p className="text-gray-700 leading-7 mb-12">
        E-imza cihazı teslim edildikten sonra sürücü kurulumu, Java entegrasyonu ve tarayıcı ayarlarının yapılması gerekir. Hatalı kurulum sistem girişlerinde sorun oluşturabilir. Uzaktan teknik destek sağlanmaktadır.
      </p>

      {/* GEÇERLİLİK */}
      <h2 className="text-2xl font-semibold mb-4">Geçerlilik Süresi</h2>
      <p className="text-gray-700 leading-7 mb-12">
        Elektronik imzalar genellikle 1, 2 veya 3 yıl süreyle verilir. Süre sonunda yenileme yapılmalıdır.
      </p>

      {/* RİSKLER */}
      <h2 className="text-2xl font-semibold mb-4">Sık Karşılaşılan Sorunlar</h2>
      <ul className="space-y-4 text-gray-700 mb-12">
        <li>✖ Token sürücü hatası</li>
        <li>✖ Sertifika süresi dolması</li>
        <li>✖ Java uyumsuzluğu</li>
        <li>✖ Tarayıcı güvenlik engeli</li>
      </ul>

      {/* CTA */}
      <div className="bg-blue-900/30 p-10 rounded-2xl border border-blue-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Hızlı E-İmza Başvurusu</h3>
          <p className="text-gray-300">Aynı gün başvuru, hızlı teslimat ve teknik destek hizmeti.</p>
        </div>
        <Link
          href="/iletisim"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-center"
        >
          Hemen Başvur
        </Link>
      </div>

    </div>
  );
}