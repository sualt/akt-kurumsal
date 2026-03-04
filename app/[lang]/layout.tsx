import "../globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import type { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";

// Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// JSON import (client compatible)
import tr from "../../locales/tr.json";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";

const locales = { tr, en, ar };

type RootLayoutProps = {
  children: ReactNode;
  params: { lang: "tr" | "en" | "ar" };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  // Dil parametresi
  const lang = params.lang || "tr";
  const localeData = locales[lang] || locales.tr;

  return (
    <html lang={lang} className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-gray-100 text-gray-800 antialiased flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar locale={localeData} lang={lang} />

        {/* Sayfa içeriği */}
        <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
          {children}
        </main>

        {/* Footer */}
        <Footer locale={localeData} lang={lang} />

        {/* WhatsApp */}
        <WhatsAppButton
          text={localeData.whatsapp?.text || "Bize WhatsApp'tan ulaşın"}
          phoneNumber={localeData.whatsapp?.phone || "905xxxxxxxxx"}
        />
      </body>
    </html>
  );
}