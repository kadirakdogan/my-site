import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact Form Submission API Route
 *
 * Environment Variable:
 * Set RESEND_API_KEY in your Vercel Dashboard (Project Settings > Environment Variables)
 * or in .env.local for local testing:
 * RESEND_API_KEY=re_xxxxxxxxxxxx
 *
 * Recipient Email: akdogankadir07@gmail.com
 */

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot spam check: if filled, quietly return success without sending
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Spam detected." }, { status: 200 });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Valid email address is required." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // If Resend API key is configured, send the real email
    if (resend) {
      const { data, error } = await resend.emails.send({
        from: "Kadir Akdoğan Portfolio <onboarding@resend.dev>",
        to: ["akdogankadir07@gmail.com"],
        replyTo: email,
        subject: `[Portfolio Inquiry] ${subject || "New Contact Message"} - ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
            <h2 style="border-bottom: 1px solid #eee; padding-bottom: 8px;">New Contact Message</h2>
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Subject:</strong> ${subject || "N/A"}</p>
            <div style="margin-top: 16px; padding: 12px; background: #f9f9f9; border-radius: 6px;">
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend API error:", error);
        return NextResponse.json(
          { error: "Failed to deliver email through Resend." },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, data }, { status: 200 });
    } else {
      // In development or when RESEND_API_KEY is not yet added to Vercel:
      // Log the payload and return a 200 success response with a developer notice.
      console.log("----------------------------------------");
      console.log("Notice: RESEND_API_KEY environment variable is not set.");
      console.log("Mock contact message received:");
      console.log({ name, email, subject, message });
      console.log("----------------------------------------");

      return NextResponse.json(
        {
          success: true,
          mock: true,
          message: "Message received in development mode (add RESEND_API_KEY to send real emails).",
        },
        { status: 200 }
      );
    }
  } catch (err) {
    console.error("Contact API handler error:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
