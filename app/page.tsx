import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100">

      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-32">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl text-gray-900">
          Yatırım Teşvik, KOSGEB ve Dijital Çözümlerde
          <span className="block text-gray-500 mt-2">
            Profesyonel ve Güvenilir Destek
          </span>
        </h1>

        <p className="mt-8 text-lg text-gray-600 max-w-2xl">
          AKT Kurumsal & Dijital Hizmetler olarak yatırım teşvik belgesi,
          KOSGEB destekleri, marka tescil ve dijital çözümler alanında
          uçtan uca profesyonel danışmanlık sunuyoruz.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link
            href="/iletisim"
            className="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Ücretsiz Danışmanlık
          </Link>

          <Link
            href="/hizmetlerimiz"
            className="px-8 py-4 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-200 transition"
          >
            Hizmetlerimiz
          </Link>
        </div>
      </section>


      {/* GÜVEN İSTATİSTİK */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-4xl font-semibold text-gray-900">500+</h3>
          <p className="text-gray-600 mt-2">Başarılı Başvuru</p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold text-gray-900">10+</h3>
          <p className="text-gray-600 mt-2">Yıllık Deneyim</p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold text-gray-900">%98</h3>
          <p className="text-gray-600 mt-2">Müşteri Memnuniyeti</p>
        </div>
      </section>


      {/* HİZMETLER */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-16 text-gray-900">
          Hizmet Alanlarımız
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Yatırım Teşvik Belgesi
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Devlet desteklerinden maksimum fayda sağlayarak yatırım süreçlerinizi
              stratejik ve profesyonel şekilde yönetiyoruz.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              KOSGEB Destekleri
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              KOSGEB hibe ve destek programlarına başvuru, proje yazımı ve
              süreç takibi danışmanlığı.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Marka Tescil & Patent
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Markanızı hukuki olarak güvence altına alıyor, ulusal ve
              uluslararası tescil süreçlerini eksiksiz yürütüyoruz.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="py-24 text-center bg-white border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Projeniz İçin Hemen İletişime Geçin
        </h2>

        <p className="text-gray-600 mt-4">
          Uzman ekibimiz en kısa sürede sizinle iletişime geçsin.
        </p>

        <Link
          href="/iletisim"
          className="inline-block mt-10 px-10 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
        >
          Teklif Al
        </Link>
      </section>

    </main>
  );
}