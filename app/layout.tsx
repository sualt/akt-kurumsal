import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ÇÖZÜMİX Kurumsal | Patent, Marka, KOSGEB ve Teşvik Danışmanlığı",
  description: "Patent tescil, marka tescil, KOSGEB destekleri, yatırım teşvik belgesi ve e-imza hizmetlerinde profesyonel kurumsal danışmanlık.",
  keywords: "patent tescil, marka tescil, KOSGEB, yatırım teşvik, e-imza, kurumsal danışmanlık",
  openGraph: {
    title: "ÇÖZÜMİX Kurumsal | Kurumsal Çözüm Ortağınız",
    description: "Patent, marka, KOSGEB ve teşvik danışmanlığında profesyonel çözüm ortağınız.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#f7f8fc] text-gray-800 antialiased font-['Outfit',sans-serif]">
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}