"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, CheckCircle, ArrowRight, Phone, Users, TrendingUp, Building2, Zap } from "lucide-react";

const program1Who = [
  "En az %50 ortaklık payına sahip ve münferit imza yetkisi bulunan girişimciler",
  "İş Kurma Desteği için kuruluşu 1 yılı geçmemiş işletmeler",
  "İş Geliştirme Desteği için kuruluşu 3 yılı geçmemiş işletmeler",
];

const sectors = [
  "İmalat (NACE C)",
  "Telekomünikasyon (61)",
  "Bilgisayar Programlama (62)",
  "Bilişim Altyapısı ve Veri İşleme (63)",
  "Bilimsel Araştırma ve Geliştirme (72)",
];

const kapasite = [
  "Makine, teçhizat ve kalıp",
  "Yazılım",
  "Personel giderleri",
  "Danışmanlık, eğitim, test-analiz",
  "İşletme sermayesi",
];

const aktServices = [
  "Uygunluk ve risk analizi",
  "NACE kodu ve sektör kontrolü",
  "İş planı ve proje yazımı",
  "Başvuru ve kurul süreci yönetimi",
  "Finansman ve ödeme takibi",
  "Destek sonrası raporlama ve izleme",
];

const alternatif = [
  "KOSGEB / TÜBİTAK destekli Ar-Ge projesi",
  "Ar-Ge Merkezi",
  "TÜR Belgesi",
  "Teknoloji Geliştirme Bölgesi",
  "TEKMER",
  "Büyük işletme ile sipariş sözleşmesi",
];

export default function KosgebPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.06]);

  return (
    <div className="bg-[#f7f8fc] min-h-screen font-['Outfit',sans-serif]">

      {/* ── BANNER ───────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <motion.img
          src="/images/kosgeb.png.png"
          alt="KOSGEB Destekleri"
          style={{ y, scale }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2463]/65 via-[#0a2463]/45 to-[#0a2463]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5">
            Hibe & Destek
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg">
            KOSGEB Destekleri
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            Girişimci ve işletme destek programlarında profesyonel danışmanlık.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f8fc] to-transparent" />
      </section>

      {/* ── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#0a2463] transition-colors">Anasayfa</Link>
          <span>/</span>
          <Link href="/hizmetlerimiz" className="hover:text-[#0a2463] transition-colors">Hizmetlerimiz</Link>
          <span>/</span>
          <span className="text-[#0a2463] font-medium">KOSGEB Destekleri</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-8 pt-8">

        {/* ── PROGRAM 1 HEADER ─────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex gap-5 items-start">
          <div className="w-12 h-12 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0 mt-1">
            <Users className="w-6 h-6 text-[#0a2463]" />
          </div>
          <div>
            <span className="inline-block bg-white/10 text-white/70 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">Program 1</span>
            <h2 className="text-xl font-extrabold text-white mb-2">KOSGEB Girişimci Destek Programı</h2>
            <p className="text-white/65 text-sm leading-relaxed">
              Yeni kurulan ve gelişim aşamasındaki işletmelerin sürdürülebilir bir yapıya kavuşmasını hedefleyen önemli bir destek mekanizmasıdır.
            </p>
          </div>
        </motion.div>

        {/* ── KİMLER + DESTEK TÜRLERİ ─────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5 flex items-center gap-2">
              <Users className="w-4 h-4" /> Kimler Yararlanabilir?
            </h3>
            <div className="space-y-3">
              {program1Who.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f8fc]">
                  <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Destek Türleri
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#e8b923]/8 border border-[#e8b923]/20">
                <p className="text-sm font-bold text-[#0a2463] mb-2">İş Kurma Desteği (Geri Ödemesiz)</p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Gerçek kişi işletmeler: <strong>10.000 TL</strong></li>
                  <li>• Sermaye şirketleri: <strong>20.000 TL</strong></li>
                  <li>• Kadın, genç, engelli girişimcilere +10.000 TL</li>
                  <li>• 3 yıl boyunca yıllık 360 prim günü şartıyla personel desteği</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-[#0a2463]/4 border border-[#0a2463]/10">
                <p className="text-sm font-bold text-[#0a2463] mb-2">İş Geliştirme Desteği (Faizsiz)</p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Giderlerin %80'i desteklenir</li>
                  <li>• <strong>1.500.000 TL</strong>'ye kadar destek</li>
                  <li>• Toplam <strong>2.000.000 TL</strong>'ye kadar</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── SEKTÖRLER ────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
          <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5 flex items-center gap-2">
            <Building2 className="w-4 h-4" /> Desteklenen Sektörler
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {sectors.map((s, i) => (
              <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f7f8fc]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e8b923] flex-shrink-0" />
                <span className="text-sm text-gray-600">{s}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── PROGRAM 2 HEADER ─────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex gap-5 items-start">
          <div className="w-12 h-12 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0 mt-1">
            <Zap className="w-6 h-6 text-[#0a2463]" />
          </div>
          <div>
            <span className="inline-block bg-white/10 text-white/70 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">Program 2</span>
            <h2 className="text-xl font-extrabold text-white mb-2">KOSGEB Kapasite Geliştirme Destek Programı</h2>
            <p className="text-white/65 text-sm leading-relaxed">
              Kredi üst limiti 20.000.000 TL — 36 aya kadar vade — yıllık 20 puana kadar faiz desteği.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5">Kimler Başvurabilir?</h3>
            <div className="space-y-2.5">
              {["Küçük ve orta ölçekli işletmeler (KOBİ)", "Limited veya anonim şirketler", "Mikro işletmeler ve şahıs firmaları başvuramaz"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8fc]">
                  <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-4">Hızlı Büyüyen İşletme Kriterleri</h3>
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#e8b923]/8 border border-[#e8b923]/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e8b923]" />
                <span className="text-sm text-gray-700">En az <strong>10 çalışan</strong></span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#e8b923]/8 border border-[#e8b923]/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e8b923]" />
                <span className="text-sm text-gray-700">Son 3 yılda yıllık ortalama <strong>%10 büyüme</strong></span>
              </div>
            </div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Alternatif Kriterler</h4>
            <div className="grid grid-cols-2 gap-2">
              {alternatif.map((a, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-1 h-1 rounded-full bg-[#0a2463]" />
                  {a}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── DESTEKLENECEKLER ─────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
          <h3 className="text-sm font-bold text-[#0a2463] uppercase tracking-wider mb-5">Desteklenen Giderler</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {kapasite.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f7f8fc]">
                <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── AKT HİZMET KAPSAMI ───────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#0a2463] px-8 py-6 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#e8b923] flex items-center justify-center flex-shrink-0">
              <ClipboardCheck className="w-5 h-5 text-[#0a2463]" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">AKT Hizmet Kapsamı</h2>
              <p className="text-white/60 text-xs mt-0.5">Başvurudan sonuçlanmaya tam destek.</p>
            </div>
          </div>
          <div className="p-7 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {aktServices.map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8fc] hover:bg-[#e8b923]/8 transition-colors">
                <CheckCircle className="w-4 h-4 text-[#e8b923] flex-shrink-0" />
                <span className="text-sm text-gray-600">{s}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0a2463] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <span className="inline-block bg-[#e8b923] text-[#0a2463] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Hemen Başlayın</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">KOSGEB Sürecinizi Profesyonelce Yönetin</h3>
            <p className="text-white/65 text-sm leading-relaxed">Başvuru, proje yazımı ve destek süreçlerinizi mevzuata uygun ve stratejik şekilde yönetin.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 bg-[#e8b923] text-[#0a2463] font-bold px-7 py-4 rounded-xl hover:bg-yellow-400 transition-all hover:scale-105 whitespace-nowrap">
              Teklif Al <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+90XXXXXXXXXX" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all text-sm whitespace-nowrap">
              <Phone className="w-4 h-4" /> Ara
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}