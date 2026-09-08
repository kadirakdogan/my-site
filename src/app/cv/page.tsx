"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CvPage() {
  const { t } = useLanguage();
  const cvPath = "/cv/kadir-akdogan-cv.pdf";

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-color)] text-[var(--text-primary)]">
      <Header />

      <main className="flex-1 pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-[var(--border-color)]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-2"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>{t.cvPage.backHome}</span>
            </Link>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.cvPage.title} — Kadir Akdoğan
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct plain download button - reliable on all devices */}
            <a
              href={cvPath}
              download="kadir-akdogan-cv.pdf"
              className="inline-flex items-center gap-2 rounded border border-[var(--text-primary)] bg-[var(--text-primary)] px-4 py-2 font-display text-xs font-semibold text-[var(--bg-color)] transition-opacity hover:opacity-90"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12"
                />
              </svg>
              <span>{t.cvPage.downloadPdf}</span>
            </a>

            {/* Open in new tab button */}
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded border border-[var(--border-color)] bg-[var(--surface-color)] px-3 py-2 font-display text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--text-muted)]"
              title="Open raw PDF in new tab"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer with Multi-layer Fallback */}
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] overflow-hidden shadow-sm h-[78vh] relative">
          <object
            data={cvPath}
            type="application/pdf"
            className="w-full h-full"
            aria-label="Kadir Akdoğan CV PDF"
          >
            {/* Fallback iframe */}
            <iframe
              src={cvPath}
              className="w-full h-full border-0"
              title="Kadir Akdoğan CV Document"
            >
              {/* Deep fallback if iframes/PDF rendering is disabled on mobile */}
              <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-[var(--surface-color)]">
                <p className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {t.cvPage.title}
                </p>
                <p className="max-w-md text-sm text-[var(--text-muted)] mb-6">
                  {t.cvPage.fallbackNotice}
                </p>
                <a
                  href={cvPath}
                  download="kadir-akdogan-cv.pdf"
                  className="rounded border border-[var(--text-primary)] bg-[var(--text-primary)] px-6 py-2.5 font-display text-sm font-semibold text-[var(--bg-color)]"
                >
                  {t.cvPage.downloadPdf}
                </a>
              </div>
            </iframe>
          </object>
        </div>
      </main>

      <Footer />
    </div>
  );
}
