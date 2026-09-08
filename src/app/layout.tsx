import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

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
  title: "Kadir Akdoğan — BT Destek Uzmanı / IT Specialist",
  description:
    "Kadir Akdoğan — BT Destek Uzmanı, Ağ ve Sistem Yöneticisi profesyonel portfolyo ve özgeçmiş sayfası.",
  metadataBase: new URL("https://kadirakdogan.vercel.app"),
  openGraph: {
    title: "Kadir Akdoğan — IT Specialist & Network Administrator",
    description:
      "Professional profile of Kadir Akdoğan: technical support, network & systems administration, and IT infrastructure.",
    url: "https://kadirakdogan.vercel.app",
    siteName: "Kadir Akdoğan",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Kadir Akdoğan",
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
      lang="tr"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)] font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}