"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface-color)] py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-subtle)] font-mono">
        <p>
          © {year} Kadir Akdoğan. {t.footer.rightsReserved}
        </p>
        <p>
          {t.footer.builtWith}{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] hover:underline"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}