import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EnterpriseContactBody {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: EnterpriseContactBody = await req.json();
    const name = body.name?.trim();
    const company = body.company?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim() ?? "";

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Name, company, and email are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !port || !user || !pass) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user, pass },
    });

    const from = process.env.SMTP_FROM ?? user;
    const text = [
      "New Enterprise contact form submission",
      "",
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      "",
      message ? `Message:\n${message}` : "Message: (none)",
    ].join("\n");

    await transporter.sendMail({
      from,
      to: "hello@leados.tech",
      replyTo: email,
      subject: `LeadOS Enterprise enquiry — ${company}`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enterprise-contact]", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
