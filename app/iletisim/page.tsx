"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Iletisim() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-gray-50 overflow-hidden">
      
      {/* TAM EKRAN RESİM */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/iletisim.png"
          alt="İletişim"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* FORM VE BAŞLIK OVERLAY */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Bize Ulaşın
          </h1>
          <p className="text-lg md:text-xl leading-7 drop-shadow-md">
            Sorularınızı veya taleplerinizi aşağıdaki form aracılığıyla bize iletebilirsiniz.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-3xl bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-3xl shadow-2xl flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Ad Soyad"
            value={form.name}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={form.email}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            value={form.phone}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            name="message"
            placeholder="Mesajınız"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />

          <button
            type="submit"
            className="bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            {status === "sending" ? "Gönderiliyor..." : "Gönder"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-2 text-center">Mesajınız başarıyla gönderildi!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-2 text-center">Bir hata oluştu, lütfen tekrar deneyin.</p>
          )}
        </motion.form>
      </div>
    </main>
  );
}