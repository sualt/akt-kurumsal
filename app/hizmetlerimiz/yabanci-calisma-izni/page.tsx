import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yabancı Çalışma İzni Danışmanlığı 2026 | Çalışma ve Oturma İzni",
  description:
    "Türkiye'de yabancı çalışma izni nasıl alınır? Şirket başvuru şartları, personel kriterleri, ret nedenleri ve başvuru süreci hakkında detaylı rehber.",
  keywords: [
    "yabancı çalışma izni",
    "çalışma izni başvurusu",
    "yabancı personel istihdamı",
    "çalışma izni danışmanlığı",
    "oturma izni",
    "çalışma ve sosyal güvenlik bakanlığı"
  ],
  alternates: {
    canonical: "https://seninsiten.com/hizmetler/yabanci-calisma-izni",
  },
};

export default function YabanciCalismaIzniPage() {
  return (
    <div >

      <h1 className="text-4xl md:text-5xl font-bold mb-10">
        Yabancı Çalışma İzni Danışmanlığı
      </h1>

      <p className="text-lg text-gray-300 leading-8 mb-12">
        Türkiye’de yabancı uyruklu personel çalıştırmak isteyen şirketlerin,
        Çalışma ve Sosyal Güvenlik Bakanlığı sistemleri üzerinden resmi
        başvuru yapması zorunludur. Sürecin doğru yürütülmemesi halinde
        ret, para cezası ve SGK yaptırımları doğabilir.
      </p>

      {/* ÇALIŞMA İZNİ TÜRLERİ */}
      <h2 className="text-2xl font-semibold mb-6">
        Çalışma İzni Türleri
      </h2>

      <div className="space-y-8 text-gray-300 mb-14">

        <div>
          <h3 className="font-semibold text-white">
            1. Süreli Çalışma İzni
          </h3>
          <p>
            İlk başvuruda genellikle 1 yıl verilir.
            Aynı işyerinde uzatma ile 2 ve 3 yıllık süreler alınabilir.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">
            2. Süresiz Çalışma İzni
          </h3>
          <p>
            Uzun dönem ikamet veya 8 yıl kesintisiz çalışma sonrası alınabilir.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">
            3. Bağımsız Çalışma İzni
          </h3>
          <p>
            Kendi işini kurmak isteyen yabancılar için verilir.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">
            4. Turkuaz Kart
          </h3>
          <p>
            Nitelikli yatırımcı, akademisyen ve yüksek vasıflı yabancılar için özel statüdür.
          </p>
        </div>

      </div>

      {/* ŞİRKET KRİTERLERİ */}
      <h2 className="text-2xl font-semibold mb-6">
        Şirket Başvuru Şartları
      </h2>

      <ul className="space-y-4 text-gray-300 mb-14">
        <li>✔ En az 5 Türk personel istihdamı (her yabancı için)</li>
        <li>✔ Ödenmiş sermaye minimum kriteri</li>
        <li>✔ SGK ve vergi borcu bulunmaması</li>
        <li>✔ Faaliyet alanının uygun olması</li>
      </ul>

      {/* PERSONEL KRİTERLERİ */}
      <h2 className="text-2xl font-semibold mb-6">
        Yabancı Personel Şartları
      </h2>

      <ul className="space-y-4 text-gray-300 mb-14">
        <li>✔ Diploma veya mesleki yeterlilik</li>
        <li>✔ Pasaport geçerlilik süresi</li>
        <li>✔ Maaş kriterine uygunluk (asgari ücretin belirli katı)</li>
      </ul>

      {/* BAŞVURU SÜRECİ */}
      <h2 className="text-2xl font-semibold mb-6">
        Başvuru Süreci
      </h2>

      <ol className="list-decimal pl-6 space-y-4 text-gray-300 mb-14">
        <li>Online sistem üzerinden başvuru</li>
        <li>Belgelerin yüklenmesi</li>
        <li>Şirket evraklarının sunulması</li>
        <li>Bakanlık değerlendirmesi (ortalama 30 gün)</li>
        <li>Onay sonrası SGK kaydı</li>
      </ol>

      {/* RET NEDENLERİ */}
      <h2 className="text-2xl font-semibold mb-6">
        En Sık Ret Nedenleri
      </h2>

      <ul className="space-y-4 text-gray-300 mb-14">
        <li>✖ 5 Türk personel şartının sağlanmaması</li>
        <li>✖ Sermaye yetersizliği</li>
        <li>✖ Maaş kriterine uyulmaması</li>
        <li>✖ Eksik evrak</li>
      </ul>

      {/* RİSK YÖNETİMİ */}
      <h2 className="text-2xl font-semibold mb-6">
        Profesyonel Danışmanlık Neden Önemli?
      </h2>

      <p className="text-gray-300 leading-8 mb-14">
        Ret durumunda 6 ay tekrar başvuru yasağı oluşabilir.
        Yanlış SGK bildirimi ciddi para cezalarına yol açabilir.
        Bu nedenle süreç stratejik planlama gerektirir.
      </p>

      {/* CTA */}
      <div className="bg-blue-900/30 p-10 rounded-2xl border border-blue-700">
        <h3 className="text-xl font-semibold mb-4">
          Ücretsiz Ön Değerlendirme
        </h3>
        <p className="text-gray-300 mb-6">
          Şirketinizin yabancı personel istihdam uygunluğunu analiz edelim.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
          Başvuru Danışmanlığı Al
        </button>
      </div>

    </div>
  );
}