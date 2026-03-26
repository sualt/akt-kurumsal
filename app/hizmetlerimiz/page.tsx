"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe, Building, ClipboardCheck, Users, Key, Award, FileText, ArrowRight, Phone,
} from "lucide-react";

const services = [
  { title: "KOSGEB Destekleri", desc: "KOSGEB hibe ve proje başvuru danışmanlığı, uygunluk analizi ve destek süreci yönetimi.", link: "/hizmetlerimiz/kosgeb-destekleri", icon: ClipboardCheck, tag: "Hibe & Destek", badge1: "Hibe", badge2: "Danışmanlık", emoji: "💰" },
  { title: "Yatırım Teşvik Belgesi", desc: "Bölgesel teşvikler, vergi indirimi, SGK desteği ve yatırım danışmanlığı.", link: "/hizmetlerimiz/yatirim-tesvik-belgesi", icon: Award, tag: "Teşvik", badge1: "Vergi İndirimi", badge2: "SGK", emoji: "📋" },
  { title: "Yabancı Çalışma İzni", desc: "Yabancı personel istihdamı, çalışma izni başvurusu ve bakanlık süreç yönetimi.", link: "/hizmetlerimiz/yabanci-calisma-izni", icon: Users, tag: "İstihdam", badge1: "Bakanlık", badge2: "Resmi", emoji: "🌍" },
  { title: "Marka Patent Tescil", desc: "Türk Patent marka başvurusu, sınıf seçimi, itiraz süreci ve hukuki koruma danışmanlığı.", link: "/hizmetlerimiz/marka-tescil", icon: FileText, tag: "Fikri Mülkiyet", badge1: "Koruma", badge2: "TPE", emoji: "™️" }, 
  { title: "E-İmza Satışı", desc: "5070 sayılı kanuna uygun elektronik imza başvurusu, teslim ve teknik kurulum hizmeti.", link: "/hizmetlerimiz/e-imza-satisi", icon: Key, tag: "Dijital", badge1: "Yasal", badge2: "Hızlı Teslim", emoji: "🔏" },
  { title: "E-Fatura", desc: "Gelir İdaresi Başkanlığı onaylı e-Fatura, e-Defter ve e-Arşiv başvuru, entegrasyon ve teknik destek hizmeti.", link: "/hizmetlerimiz/e-fatura", icon: Key, tag: "Dijital", badge1: "Yasal", badge2: "Hızlı Teslim", emoji: "🔏" },
  
 
  
  
  
];

const webService = {
  title: "Web Sitesi Çözümleri",
  desc: "Mobil uyumlu, SEO odaklı ve kurumsal kimliğe uygun modern web tasarım hizmetleri. İşletmenizin dijital yüzünü profesyonelce tasarlıyoruz.",
  link: "/hizmetlerimiz/web-sitesi",
  icon: Globe,
  emoji: "💻",
};

const stats = [
  { value: "%100", label: "Müşteri Memnuniyeti" },
  { value: "500+", label: "Başarılı Müşteri" },
  { value: "1200+", label: "Tamamlanan Proje" },
  { value: "7+", label: "Hizmet Kategorisi" },
];

export default function HizmetlerPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.06]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#f8fafc", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── PARALLAX HERO ───────────────────────────────────────────────── */}
      <section style={{ position: "relative", width: "100%", height: "70vh", overflow: "hidden" }}>
        <motion.img
          src="/images/hizmetlerbanner.png"
          alt="Hizmetlerimiz"
          style={{ y, scale, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,22,40,0.75) 0%, rgba(15,32,64,0.6) 50%, rgba(22,42,82,0.8) 100%)" }} />

        {/* Grid pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <motion.div style={{ opacity, position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <motion.span
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 50, background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", color: "#e8a020", fontSize: 12, fontWeight: 700, letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 24 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#e8a020", display: "inline-block" }} />
            Neler Sunuyoruz?
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, color: "#fff", letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20, maxWidth: 700 }}
          >
            Kurumsal <span style={{ color: "#e8a020" }}>Hizmetlerimiz</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 540, fontWeight: 300, marginBottom: 36 }}
          >
            İşletmenizin tüm yasal ve kurumsal süreçlerini uçtan uca yönetiyoruz.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/iletisim" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 32px", borderRadius: 50, background: "#1a56db", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Ücretsiz Danışmanlık Al <ArrowRight size={16} />
            </Link>
            <a href="tel:+90XXXXXXXXXX" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 50, background: "transparent", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              <Phone size={15} /> Hemen Arayın
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, #f8fafc, transparent)" }} />
      </section>

      {/* ── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px 8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#94a3b8" }}>
          <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>Anasayfa</Link>
          <span>›</span>
          <span style={{ color: "#1a56db", fontWeight: 600 }}>Hizmetlerimiz</span>
        </div>
      </div>

      {/* ── SECTION HEADER ───────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 16px", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 50, background: "#eff6ff", color: "#1a56db", fontSize: 12, fontWeight: 700, letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 14 }}>
            Hizmetler
          </div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#0f172a", letterSpacing: -.5, marginBottom: 14, lineHeight: 1.2 }}>
            İşinizi Büyütecek Çözümler
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.75, maxWidth: 560, margin: "0 auto", fontWeight: 300 }}>
            Hangi konuda yardıma ihtiyacınız var? Aşağıdan seçin, size en hızlı şekilde dönelim.
          </p>
        </motion.div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link href={service.link} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className="service-card-hover" style={{ background: "#fff", borderRadius: 24, padding: 32, border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", height: "100%", transition: "all .25s", position: "relative", overflow: "hidden" }}>

                    {/* Icon */}
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20, flexShrink: 0 }}>
                      {service.emoji}
                    </div>

                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{service.title}</h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{service.desc}</p>

                    {/* Badges */}
                    <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
                      <span style={{ padding: "4px 10px", borderRadius: 6, background: "#eff6ff", color: "#1a56db", fontSize: 11, fontWeight: 600 }}>{service.badge1}</span>
                      <span style={{ padding: "4px 10px", borderRadius: 6, background: "#ecfdf5", color: "#059669", fontSize: 11, fontWeight: 600 }}>{service.badge2}</span>
                    </div>

                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#1a56db" }}>
                      Detaylı Bilgi <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── WEB SİTESİ — FEATURED ────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginTop: 24 }}>
          <Link href={webService.link} style={{ textDecoration: "none", display: "block" }}>
            <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2040 50%, #162a52 100%)", borderRadius: 24, overflow: "hidden", padding: "40px 48px", position: "relative" }}>
              {/* Glow */}
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(26,86,219,0.2), transparent 60%)" }} />
              <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: "#e8a020", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0 }}>
                  {webService.emoji}
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 20, background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 10 }}>
                    Dijital
                  </span>
                  <h3 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, color: "#fff", letterSpacing: -.5, marginBottom: 10 }}>
                    {webService.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 480 }}>
                    {webService.desc}
                  </p>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e8a020", color: "#0a1628", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 50 }}>
                    Detaylı Bilgi <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <section style={{ background: "#0a1628", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" }}>
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ padding: "16px 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
            >
              <div style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "#fff", letterSpacing: -1, lineHeight: 1, marginBottom: 6 }}>
                <span style={{ color: "#e8a020" }}>{item.value}</span>
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #0a1628, #162a52)", padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(26,86,219,0.2), transparent)" }} />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: -.5, marginBottom: 14 }}>
            Hangi Hizmete İhtiyacınız Var?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", marginBottom: 36, fontWeight: 300 }}>
            Ücretsiz danışmanlık görüşmesiyle size en uygun çözümü birlikte belirleyelim.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/iletisim" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 36px", borderRadius: 50, background: "#fff", color: "#0a1628", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
              Ücretsiz Danışmanlık Al <ArrowRight size={16} />
            </Link>
            <a href="tel:+90XXXXXXXXXX" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 28px", borderRadius: 50, background: "transparent", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
              <Phone size={15} /> Hemen Arayın
            </a>
          </div>
        </motion.div>
      </section>

      <style>{`
        .service-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 48px rgba(10,22,40,0.14);
          border-color: #bfdbfe !important;
        }
        @media (max-width: 640px) {
          section div[style*="repeat(4, 1fr)"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}