import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yatırım Teşvik Belgesi Danışmanlığı 2026 | Devlet Teşvikleri",
  description:
    "Yatırım teşvik belgesi nasıl alınır? Bölgesel teşvikler, vergi indirimi, SGK desteği, KDV istisnası ve başvuru süreci hakkında detaylı rehber.",
  keywords: [
    "yatırım teşvik belgesi",
    "devlet teşvikleri",
    "vergi indirimi teşvik",
    "sgk primi desteği",
    "bölgesel teşvik sistemi",
  ],
  alternates: {
    canonical:
      "https://seninsiten.com/hizmetler/yatirim-tesvik-belgesi",
  },
};

export default function YatirimTesvikPage() {
  return (
    <div >

      <h1 className="text-4xl md:text-5xl font-bold mb-10">
        Yatırım Teşvik Belgesi Danışmanlığı
      </h1>

      {/* GİRİŞ */}
      <p className="text-lg text-gray-300 leading-8 mb-10">
        Yatırım Teşvik Belgesi, Türkiye’de yapılacak yatırımların devlet
        tarafından desteklenmesini sağlayan resmi bir belgedir.
        Bu belge sayesinde yatırımcılar vergi avantajları,
        SGK prim destekleri ve finansman kolaylıkları elde eder.
      </p>

      {/* TEŞVİK SİSTEMİNİN TEMELİ */}
      <h2 className="text-2xl font-semibold mb-6">
        Türkiye Teşvik Sisteminin Yapısı
      </h2>

      <p className="text-gray-300 leading-8 mb-6">
        Türkiye’de teşvik sistemi bölgesel kalkınma esasına göre
        6 bölgeye ayrılmıştır. Her bölge için destek oranları farklıdır.
        Amaç, yatırımların gelişmişlik düzeyi düşük bölgelere yönlendirilmesidir.
      </p>

      <ul className="space-y-3 text-gray-300 mb-12">
        <li>✔ Genel Teşvik Uygulamaları</li>
        <li>✔ Bölgesel Teşvik Uygulamaları</li>
        <li>✔ Öncelikli Yatırımlar</li>
        <li>✔ Stratejik Yatırımlar</li>
      </ul>

      {/* SAĞLANAN DESTEKLER */}
      <h2 className="text-2xl font-semibold mb-6">
        Yatırım Teşvik Belgesi Kapsamındaki Destek Unsurları
      </h2>

      <div className="space-y-6 text-gray-300 mb-12">

        <div>
          <h3 className="font-semibold text-white">
            1. KDV İstisnası
          </h3>
          <p>
            Yatırım kapsamında alınan makine ve teçhizat için
            Katma Değer Vergisi ödenmez.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">
            2. Gümrük Vergisi Muafiyeti
          </h3>
          <p>
            Yurt dışından ithal edilen yatırım mallarında
            gümrük vergisi uygulanmaz.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">
            3. Vergi İndirimi
          </h3>
          <p>
            Kurumlar vergisi, yatırım katkı oranına göre
            belirli oranda indirimli uygulanır.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">
            4. SGK Primi İşveren Hissesi Desteği
          </h3>
          <p>
            Devlet, belirli süre boyunca işverenin SGK prim yükünü karşılar.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">
            5. Faiz veya Kar Payı Desteği
          </h3>
          <p>
            Yatırım kredilerinde faiz yükünün bir kısmı devlet tarafından karşılanır.
          </p>
        </div>

      </div>

      {/* BAŞVURU SÜRECİ */}
      <h2 className="text-2xl font-semibold mb-6">
        Başvuru Süreci Adım Adım
      </h2>

      <ol className="list-decimal pl-6 space-y-4 text-gray-300 mb-12">
        <li>Yatırım fizibilite raporunun hazırlanması</li>
        <li>Teşvik türünün doğru belirlenmesi</li>
        <li>E-imza ile elektronik başvuru</li>
        <li>Bakanlık değerlendirme süreci</li>
        <li>Belgenin düzenlenmesi</li>
        <li>Yatırım tamamlama vizesi</li>
      </ol>

      {/* RİSKLER */}
      <h2 className="text-2xl font-semibold mb-6">
        En Sık Yapılan Hatalar
      </h2>

      <ul className="space-y-3 text-gray-300 mb-12">
        <li>✖ Yanlış teşvik türü seçimi</li>
        <li>✖ Eksik makine listesi</li>
        <li>✖ Yanlış kapasite hesabı</li>
        <li>✖ Süre takibinin yapılmaması</li>
      </ul>

      {/* STRATEJİK AVANTAJ */}
      <h2 className="text-2xl font-semibold mb-6">
        Profesyonel Danışmanlığın Önemi
      </h2>

      <p className="text-gray-300 leading-8 mb-16">
        Teşvik sistemi teknik mevzuat içerir. Yanlış yapılan başvurular
        yatırım katkı oranının düşmesine veya destek kaybına neden olabilir.
        Profesyonel danışmanlık ile maksimum destek oranı hedeflenir.
      </p>

      {/* CTA */}
      <div className="bg-blue-900/30 p-10 rounded-2xl border border-blue-700">
        <h3 className="text-xl font-semibold mb-4">
          Ücretsiz Teşvik Analizi
        </h3>
        <p className="text-gray-300 mb-6">
          Yatırımınız için hangi teşvik modelinin uygun olduğunu analiz edelim.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
          Analiz Talep Et
        </button>
      </div>

    </div>
  );
}