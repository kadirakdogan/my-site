"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";

export default function CvPage() {
  const { t } = useLanguage();
  const cvPath = "/cv/kadir-akdogan-cv.pdf";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-24 sm:pt-32 sm:pb-32 min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-4 border-b border-[var(--border-color)] no-print">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-2"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>{t.cvPage.backHome}</span>
            </Link>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.cvPage.title} — Kadir Akdoğan
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Direct plain download button - works without JS */}
            <Button
              href={cvPath}
              download="kadir-akdogan-cv.pdf"
              variant="primary"
              size="sm"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12" />
              </svg>
              <span>{t.cvPage.downloadPdf}</span>
            </Button>

            {/* Print button */}
            <Button
              type="button"
              onClick={handlePrint}
              variant="outline"
              size="sm"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>{t.cvPage.printCv}</span>
            </Button>

            {/* Open Raw PDF in New Tab */}
            <Button
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              title="Open raw PDF in new tab"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Inline PDF Viewer with Object tag + Mobile Fallback */}
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] overflow-hidden shadow-sm h-[800px] w-full relative print-page">
          <object
            data={cvPath}
            type="application/pdf"
            width="100%"
            height="800px"
            className="w-full h-full"
            aria-label="Kadir Akdoğan CV PDF"
          >
            {/* Fallback for browsers or mobile operating systems that do not embed PDFs */}
            <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-[var(--surface-color)]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-subtle)] mb-4">
                <svg className="h-8 w-8 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">
                {t.cvPage.title}
              </h2>
              <p className="max-w-md text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                {t.cvPage.fallbackNotice}
              </p>
              <Button
                href={cvPath}
                download="kadir-akdogan-cv.pdf"
                variant="primary"
                size="md"
              >
                <span>{t.cvPage.downloadPdf}</span>
              </Button>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
