"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cities from "@/data/turkeyCities.json";

export default function Tesvik() {
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState<string[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [desiredIncentive, setDesiredIncentive] = useState("");
  const [firmName, setFirmName] = useState("");
  const [investmentTopic, setInvestmentTopic] = useState("");
  const [estimatedAmount, setEstimatedAmount] = useState<number | "">("");
  const [shortDescription, setShortDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const incentives = ["Yatırım Teşviki", "SGK Desteği", "KDV Muafiyeti", "Gümrük Muafiyeti"];

  useEffect(() => {
    if (selectedCity) {
      const cityObj = cities.find((c: any) => c.name === selectedCity);
      setDistricts(cityObj?.districts.map((d: any) => d.name) || []);
      setSelectedDistrict("");
    } else {
      setDistricts([]);
      setSelectedDistrict("");
    }
  }, [selectedCity]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      city: selectedCity,
      district: selectedDistrict,
      desiredIncentive,
      firmName,
      investmentTopic,
      estimatedAmount,
      shortDescription,
      name,
      email,
      phone,
    };

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setSent(true);
        setTimeout(() => setSent(false), 5000);
        setSelectedCity("");
        setSelectedDistrict("");
        setDesiredIncentive("");
        setFirmName("");
        setInvestmentTopic("");
        setEstimatedAmount("");
        setShortDescription("");
        setName("");
        setEmail("");
        setPhone("");
      } else {
        alert("Mail gönderilemedi: " + result.error);
      }
    } catch (error) {
      alert("Hata oluştu: " + error);
    }
  };

  return (
    <main className="min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl font-bold text-white">
          Hangi Teşviklerden Yararlanabilirsiniz? <br />
          Hemen Bilgi Alın, Yatırımınızı Planlayın!
        </h2>
      </motion.div>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white bg-opacity-20 p-6 rounded-2xl shadow-2xl"
      >
        {/* Sol Panel */}
        <div className="space-y-4 p-4 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm">
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="w-full p-3 border rounded" required>
            <option value="">İl Seçiniz</option>
            {cities.map((city: any) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>

          {districts.length > 0 && (
            <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="w-full p-3 border rounded" required>
              <option value="">İlçe Seçiniz</option>
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          )}

          <select value={desiredIncentive} onChange={(e) => setDesiredIncentive(e.target.value)} className="w-full p-3 border rounded" required>
            <option value="">İstenen Teşvik</option>
            {incentives.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>

          <input type="text" placeholder="Firma Adı" value={firmName} onChange={(e) => setFirmName(e.target.value)} className="w-full p-3 border rounded" required />
          <input type="text" placeholder="Yatırım Konusu" value={investmentTopic} onChange={(e) => setInvestmentTopic(e.target.value)} className="w-full p-3 border rounded" required />
          <input type="number" placeholder="Tahmini Yatırım Tutarı" value={estimatedAmount} onChange={(e) => setEstimatedAmount(Number(e.target.value))} className="w-full p-3 border rounded" required />
          <textarea placeholder="Kısa Açıklama" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} className="w-full p-3 border rounded" required />
        </div>

        {/* Sağ Panel */}
        <div className="space-y-4 p-4 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm">
          <input type="text" placeholder="Ad Soyad" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded" required />
          <input type="tel" placeholder="Telefon" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 border rounded" required />

          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg shadow-lg hover:scale-105 transition-all">
            Gönder
          </button>

          {sent && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 font-bold mt-3 text-center"
            >
              Mesajınız gönderildi!
            </motion.p>
          )}
        </div>
      </form>
    </main>
  );
}