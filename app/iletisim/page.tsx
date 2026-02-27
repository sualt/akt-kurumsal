"use client";

import { useState } from "react";

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
    <main >
      <h1 className="text-4xl font-bold mb-2 text-center">Bize Ulaşın</h1>
      <p className="text-center mb-8 max-w-xl">
        Sorularınızı veya taleplerinizi aşağıdaki form aracılığıyla bize iletebilirsiniz.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white text-gray-900 p-6 rounded-2xl shadow-xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Ad Soyad"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefon"
          value={form.phone}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          name="message"
          placeholder="Mesajınız"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        />

        <button
          type="submit"
          className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          {status === "sending" ? "Gönderiliyor..." : "Gönder"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-2 text-center">Mesajınız başarıyla gönderildi!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2 text-center">Bir hata oluştu, lütfen tekrar deneyin.</p>
        )}
      </form>
    </main>
  );
}