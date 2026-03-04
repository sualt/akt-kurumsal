"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "Teşvik Hesaplama", href: "/tesvik-hesaplama" },
    { name: "Referanslar", href: "/referanslar" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center h-20">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          AKT Kurumsal
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition duration-200 ${
                pathname === link.href ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/iletisim"
          className="hidden md:inline-block bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
        >
          Teklif Al
        </Link>
      </div>
    </header>
  );
}