"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  {
    name: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    children: [
      { name: "Patent Tescil", href: "/hizmetlerimiz/patent-tescil" },
      { name: "Marka Tescil", href: "/hizmetlerimiz/marka-tescil" },
      { name: "KOSGEB Destekleri", href: "/hizmetlerimiz/kosgeb-destekleri" },
      { name: "Yatırım Teşvik", href: "/hizmetlerimiz/yatirim-tesvik-belgesi" },
      { name: "E-İmza Satışı", href: "/hizmetlerimiz/e-imza-satisi" },
      { name: "Yabancı Çalışma İzni", href: "/hizmetlerimiz/yabanci-calisma-izni" },
      { name: "Web Sitesi Çözümleri", href: "/hizmetlerimiz/web-sitesi" },
    ],
  },
  { name: "Teşvik Hesaplama", href: "/tesvik-hesaplama" },
  { name: "Referanslar", href: "/referanslar" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileHizmetlerOpen, setMobileHizmetlerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sayfa değişince mobil menüyü kapat
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md shadow-black/5" : "bg-white/95 backdrop-blur-md"
      } border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-18 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#0a2463] flex items-center justify-center">
              <span className="text-[#e8b923] font-black text-sm">A</span>
            </div>
            <span className="text-base md:text-lg font-extrabold text-[#0a2463]">AKT Kurumsal</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative">
                  <button
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname.startsWith("/hizmetlerimiz")
                        ? "text-[#0a2463] bg-[#0a2463]/6"
                        : "text-gray-600 hover:text-[#0a2463] hover:bg-[#0a2463]/4"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden py-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center px-4 py-2.5 text-sm transition-colors ${
                              pathname === child.href
                                ? "text-[#0a2463] bg-[#0a2463]/6 font-semibold"
                                : "text-gray-600 hover:text-[#0a2463] hover:bg-[#0a2463]/4"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#0a2463] bg-[#0a2463]/6 font-semibold"
                      : "text-gray-600 hover:text-[#0a2463] hover:bg-[#0a2463]/4"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+90XXXXXXXXXX" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[#0a2463] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Ara</span>
            </a>
            <Link href="/iletisim"
              className="bg-[#0a2463] text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-[#0d2d7a] transition-all hover:scale-105 shadow-sm shadow-[#0a2463]/20">
              Teklif Al
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Menü"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-5 h-5 text-[#0a2463]" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-5 h-5 text-[#0a2463]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-xs bg-white z-50 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0a2463] flex items-center justify-center">
                    <span className="text-[#e8b923] font-black text-xs">A</span>
                  </div>
                  <span className="font-extrabold text-[#0a2463] text-sm">AKT Kurumsal</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.href}>
                      <button
                        onClick={() => setMobileHizmetlerOpen(!mobileHizmetlerOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#0a2463] hover:bg-[#0a2463]/6 transition-colors"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileHizmetlerOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileHizmetlerOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-3"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`flex items-center px-4 py-2.5 rounded-xl text-sm transition-colors ${
                                  pathname === child.href
                                    ? "text-[#0a2463] bg-[#0a2463]/6 font-semibold"
                                    : "text-gray-600 hover:text-[#0a2463] hover:bg-[#0a2463]/4"
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? "text-[#0a2463] bg-[#0a2463]/6 font-semibold"
                          : "text-gray-600 hover:text-[#0a2463] hover:bg-[#0a2463]/4"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </nav>

              {/* Drawer footer */}
              <div className="px-4 py-5 border-t border-gray-100 space-y-3">
                <Link href="/iletisim" onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0a2463] text-white font-bold py-3.5 rounded-xl text-sm hover:bg-[#0d2d7a] transition-colors">
                  Teklif Al
                </Link>
                <a href="tel:+90XXXXXXXXXX"
                  className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-700 font-medium py-3 rounded-xl text-sm border border-gray-200">
                  <Phone className="w-4 h-4" />
                  Hemen Ara
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}