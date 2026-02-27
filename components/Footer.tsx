import Link from "next/link";

export default function Footer() {
  const menu = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "Teşvik Hesaplama", href: "/tesvik-hesaplama" },
    { name: "Referanslar", href: "/referanslar" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-10 py-16 grid md:grid-cols-3 gap-12">
        
        {/* Marka */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            AKT Kurumsal & Dijital Hizmetler
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Şirket kuruluşu, teşvik danışmanlığı, marka ve patent tescil 
            süreçlerinde profesyonel çözüm ortağınız.
          </p>

          <div className="space-y-2 text-sm">
            <a
              href="mailto:info@aktkurumsal.com"
              className="block text-gray-600 hover:text-gray-900 transition"
            >
              info@aktkurumsal.com
            </a>
            <a
              href="tel:+905555555555"
              className="block text-gray-600 hover:text-gray-900 transition"
            >
              +90 555 555 55 55
            </a>
          </div>
        </div>

        {/* Menü */}
        <div>
          <h4 className="text-md font-semibold text-gray-900 mb-4">
            Kurumsal
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {menu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-gray-900 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Harita */}
        <div>
          <h4 className="text-md font-semibold text-gray-900 mb-4">
            Ofis Konumu
          </h4>

          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=Istanbul&output=embed"
              width="100%"
              height="200"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Alt Bar */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © 2026 AKT Kurumsal & Dijital Hizmetler. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}