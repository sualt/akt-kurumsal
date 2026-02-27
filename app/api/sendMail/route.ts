import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: `Yeni Teşvik Analizi Formu - ${data.firmName}`,
      html: `
        <h2>Teşvik Analizi Formu</h2>
        <p><strong>Firma Adı:</strong> ${data.firmName}</p>
        <p><strong>Yatırım Konusu:</strong> ${data.investmentTopic}</p>
        <p><strong>Tahmini Yatırım Tutarı:</strong> ₺${data.estimatedAmount}</p>
        <p><strong>Kısa Açıklama:</strong> ${data.shortDescription}</p>
        <p><strong>İl / İlçe:</strong> ${data.city} / ${data.district}</p>
        <p><strong>Seçilen Teşvik:</strong> ${data.desiredIncentive}</p>
        <p><strong>Ad Soyad:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
  console.error(error);
  return NextResponse.json({
    success: false,
    error: error?.message || "Bir hata oluştu",
  });
  }
}