import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Kadir Akdoğan — IT Support Specialist & Network Administrator",
  description:
    "Professional profile of Kadir Akdoğan: IT support, network & systems administration, infrastructure management, and cybersecurity.",
  metadataBase: new URL("https://kadirakdogan.vercel.app"),
  openGraph: {
    title: "Kadir Akdoğan — IT Support Specialist & Network Administrator",
    description:
      "IT support, network and systems administration, infrastructure management, and cybersecurity.",
    url: "https://kadirakdogan.vercel.app",
    siteName: "Kadir Akdoğan",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kadir Akdoğan — IT Professional",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}