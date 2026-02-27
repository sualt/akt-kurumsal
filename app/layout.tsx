import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import {Inter , Poppins} from "next/font/google";
import "./globals.css";

const inter =Inter({
  subsets:["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins =Poppins({
  subsets:["latin"],
  weight: ["600","700"],
  variable: "--font-poppins",
  display:"swap",
});

export const metadata = {
  title: "AKT Kurumsal & Dijital Hizmetler",
  description: "Yatırım teşvik, KOSGEB destekleri ve dijital hizmetler",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={'${inter.variable} ${poppins.variable}'}>
      <body className="bg-gray-100 text-gray-800 antialiased min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
           <div className="max-w-6xl mx-auto px-6 py-16">
            {children}
          </div>
          
        </main>

        <Footer />
      </body>
    </html>
  );
}