"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const menu = [
  { name: "Anasayfa", href: "/" },
  { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Teşvik Hesaplama", href: "/tesvik-hesaplama" },
  { name: "Referanslar", href: "/referanslar" },
  { name: "İletişim", href: "/iletisim" },
];

const services = [
  { name: "KOSGEB Destekleri", href: "/hizmetlerimiz/kosgeb-destekleri" },
  { name: "Yatırım Teşvik", href: "/hizmetlerimiz/yatirim-tesvik-belgesi" },
  { name: "Yabancı Çalışma İzni", href: "/hizmetlerimiz/yabanci-calisma-izni" },
  { name: "Marka Patent Tescil", href: "/hizmetlerimiz/marka-tescil" },
  { name: "E-İmza Satışı", href: "/hizmetlerimiz/e-imza-satisi" },
  { name: "E-Fatura ", href: "/hizmetlerimiz/e-fatura" },
  { name: "Web Sitesi Çözümleri", href: "/hizmetlerimiz/web-sitesi" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a2463] font-['Outfit',sans-serif]">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-4">
            <img
              src="/images/cozumixlogo.png"
              alt="ÇÖZÜMX Kurumsal Logo"
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Şirket kuruluşu, teşvik danışmanlığı, marka ve patent tescil süreçlerinde profesyonel çözüm ortağınız.
          </p>
          <div className="space-y-3">
            <a href="mailto:info@cozumix.co" className="flex items-center gap-3 text-white/60 hover:text-[#e8b923] transition-colors text-sm group">
              <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-[#e8b923]/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              info@cozumix.co
            </a>
            <a href="tel:+905530777488" className="flex items-center gap-3 text-white/60 hover:text-[#e8b923] transition-colors text-sm group">
              <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-[#e8b923]/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              +90 553 077 7488
            </a>
            <div className="flex items-center gap-3 text-white/60 text-sm">
              <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              İstanbul, Türkiye
            </div>
          </div>
        </div>

        {/* Kurumsal */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Kurumsal</h4>
          <ul className="space-y-2.5">
            {menu.map((item) => (
              <li key={item.href}>
                <Link href={item.href}
                  className="flex items-center gap-2 text-white/60 hover:text-[#e8b923] transition-colors text-sm group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hizmetler */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Hizmetlerimiz</h4>
          <ul className="space-y-2.5">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href}
                  className="flex items-center gap-2 text-white/60 hover:text-[#e8b923] transition-colors text-sm group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Harita */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Ofis Konumu</h4>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Hatay+Antakya&output=embed"
              width="100%"
              height="180"
              loading="lazy"
              className="w-full"
              title="Ofis Konumu"
            />
          </div>
          <Link href="/iletisim"
            className="mt-3 flex items-center justify-center gap-2 bg-[#e8b923] text-[#0a2463] font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-yellow-400 transition-colors w-full">
            Bize Ulaşın
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <span>© 2026 ÇözümX Kurumsal Çözümler& Danışmanlık. Tüm hakları saklıdır.</span>
         
        </div>
      </div>
    </footer>
  );
}