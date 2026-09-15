import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
// @ts-expect-error CSS imports are handled by Next.js
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
  title: {
    default: "Kadir Akdoğan — BT Destek Uzmanı / IT Specialist",
    template: "%s | Kadir Akdoğan",
  },
  description:
    "Kadir Akdoğan — BT Destek Uzmanı, Ağ ve Sistem Yöneticisi profesyonel portfolyo ve kariyer profili. MikroTik, Ubiquiti, CCTV, Windows Server ve Akınsoft altyapı yönetimi.",
  metadataBase: new URL("https://kadirakdogan.vercel.app"),
  openGraph: {
    title: "Kadir Akdoğan — IT Specialist & Network Administrator",
    description:
      "Professional profile of Kadir Akdoğan: technical support, network & systems administration, and enterprise IT infrastructure.",
    url: "https://kadirakdogan.vercel.app",
    siteName: "Kadir Akdoğan",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Kadir AKDOĞAN",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadir AKDOĞAN — IT Specialist & Network Administrator",
    description: "Professional profile of Kadir AKDOĞAN : technical support, network & systems administration.",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kadir AKDOĞAN",
    jobTitle: "IT Support Specialist / Network & Systems Administrator",
    url: "https://kadirakdogan.vercel.app",
    email: "akdogankadir07@icloud.com",
    telephone: "+905525326270",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kepez",
      addressRegion: "Antalya",
      addressCountry: "TR",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Finike Cumhuriyet Mesleki ve Teknik Anadolu Lisesi",
    },
    worksFor: {
      "@type": "Organization",
      name: "Akınsoft Başer Bilişim",
    },
    knowsAbout: [
      "Network Administration",
      "Systems Administration",
      "MikroTik RouterOS",
      "Ubiquiti Networks",
      "CCTV Security Systems",
      "Windows Server",
      "Akınsoft ERP",
    ],
  };

  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-color)] text-[var(--text-primary)] font-body antialiased transition-colors">
        <Providers>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}