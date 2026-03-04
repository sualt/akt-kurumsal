"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function KosgebDestekleriPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.08]);

  return (
    <div className="space-y-20 overflow-x-hidden">

      {/* ================= PREMIUM PARALLAX BANNER ================= */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <motion.img
          src="/images/kosgeb.png.png"
          alt="KOSGEB Banner"
          style={{ y, scale }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
      </section>

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          KOSGEB Destek Programları
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Bu doküman, <strong>AKT Kurumsal Danışmanlık</strong> tarafından hazırlanmış olup 
          KOSGEB Girişimci Destek Programı ve KOSGEB Kapasite Geliştirme Destek Programı 
          kapsamında sunulan danışmanlık hizmetlerini kapsamlı şekilde açıklamak amacıyla oluşturulmuştur.
        </p>

        <p className="text-sm text-gray-500">
          Doküman tamamen özgün olup üçüncü kişi veya kurum içeriklerinden kopya içermez.
        </p>
      </motion.section>

      {/* ================= 1. GİRİŞİMCİ DESTEK PROGRAMI ================= */}
      <section className="space-y-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          1. KOSGEB Girişimci Destek Programı
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Yeni kurulan ve gelişim aşamasındaki işletmelerin sürdürülebilir bir yapıya kavuşmasını hedefleyen önemli bir destek mekanizmasıdır.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Kimler Yararlanabilir */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Kimler Yararlanabilir?</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• En az %50 ortaklık payına sahip ve münferit imza yetkisi bulunan girişimciler</li>
              <li>• İş Kurma Desteği için kuruluşu 1 yılı geçmemiş işletmeler</li>
              <li>• İş Geliştirme Desteği için kuruluşu 3 yılı geçmemiş işletmeler</li>
            </ul>
          </div>

          {/* Destek Türleri */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Destek Türleri</h3>

            <div className="space-y-4 text-gray-600 text-sm">
              <div>
                <p className="font-semibold text-gray-800">İş Kurma Desteği (Geri Ödemesiz)</p>
                <ul className="space-y-1 mt-2">
                  <li>• Gerçek kişi işletmeler: 10.000 TL</li>
                  <li>• Sermaye şirketleri: 20.000 TL</li>
                  <li>• Kadın, genç, engelli, gazi veya şehit yakını girişimcilere +10.000 TL</li>
                  <li>• 3 yıl boyunca yıllık 360 prim günü şartıyla personel desteği</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800">İş Geliştirme Desteği (Faizsiz – Geri Ödemeli)</p>
                <ul className="space-y-1 mt-2">
                  <li>• Makine, ekipman, yazılım ve personel giderlerinin %80’i</li>
                  <li>• 1.500.000 TL’ye kadar destek</li>
                  <li>• Toplam destek tutarı 2.000.000 TL’ye kadar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Desteklenen Sektörler */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Desteklenen Sektörler</h3>
          <div className="grid md:grid-cols-3 gap-4 text-gray-600 text-sm">
            <p>• İmalat (NACE C)</p>
            <p>• Telekomünikasyon (61)</p>
            <p>• Bilgisayar Programlama (62)</p>
            <p>• Bilişim Altyapısı ve Veri İşleme (63)</p>
            <p>• Bilimsel Araştırma ve Geliştirme (72)</p>
          </div>
        </div>
      </section>

      {/* ================= 2. KAPASİTE GELİŞTİRME ================= */}
      <section className="space-y-10 px-6 max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900">
          2. KOSGEB Kapasite Geliştirme Destek Programı
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Program Detayları</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Kredi Üst Limiti: 20.000.000 TL</li>
              <li>• Kredi Vadesi: 36 aya kadar</li>
              <li>• Faiz / kâr payı giderlerine yıllık 20 puana kadar geri ödemesiz destek</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Kimler Başvurabilir?</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Küçük ve orta ölçekli işletmeler (KOBİ)</li>
              <li>• Limited veya anonim şirketler</li>
              <li>• Mikro işletmeler ve şahıs firmaları başvuramaz</li>
            </ul>
          </div>
        </div>

        {/* Hızlı Büyüyen İşletme */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Hızlı Büyüyen İşletme Kriterleri</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• En az 10 çalışan</li>
            <li>• Son 3 yılda yıllık ortalama %10 büyüme</li>
          </ul>

          <h4 className="font-semibold mt-6 mb-2">Alternatif Uygunluk Kriterleri</h4>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-600 text-sm">
            <li>• KOSGEB / TÜBİTAK destekli Ar-Ge projesi</li>
            <li>• Ar-Ge Merkezi</li>
            <li>• TÜR Belgesi</li>
            <li>• Teknoloji Geliştirme Bölgesi</li>
            <li>• TEKMER</li>
            <li>• Büyük işletme ile sipariş sözleşmesi</li>
          </ul>
        </div>

        {/* Desteklenen Giderler */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Desteklenen Giderler</h3>
          <div className="grid md:grid-cols-3 gap-4 text-gray-600 text-sm">
            <p>• Makine, teçhizat ve kalıp</p>
            <p>• Yazılım</p>
            <p>• Personel giderleri</p>
            <p>• Danışmanlık, eğitim, test-analiz</p>
            <p>• İşletme sermayesi</p>
          </div>
        </div>
      </section>

      {/* ================= 3. AKT HİZMET KAPSAMI ================= */}
      <section className="bg-white border border-gray-200 p-12 rounded-3xl text-center space-y-6 shadow-sm mx-6 mb-20">
        <h2 className="text-3xl font-bold text-gray-900">
          KOSGEB Destek Sürecinizi Profesyonelce Yönetin
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
          AKT Kurumsal Danışmanlık ile KOSGEB başvuru, proje yazımı ve 
          destek süreçlerinizi mevzuata uygun ve stratejik şekilde yönetin.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-sm mt-6">
          <p>• Uygunluk ve risk analizi</p>
          <p>• NACE kodu ve sektör kontrolü</p>
          <p>• İş planı ve proje yazımı</p>
          <p>• Başvuru ve kurul süreci yönetimi</p>
          <p>• Finansman ve ödeme takibi</p>
          <p>• Destek sonrası raporlama ve izleme</p>
        </div>

        <Link
          href="/iletisim"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          Teklif Al
        </Link>
      </section>

    </div>
  );
}