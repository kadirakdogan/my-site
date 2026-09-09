"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface-color)] pt-16 pb-12 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--border-color)]">
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded border border-[var(--border-color)] bg-[var(--surface-subtle)] font-mono text-xs font-bold text-[var(--text-primary)]">
                KA
              </span>
              <span className="font-display text-base font-bold tracking-tight text-[var(--text-primary)]">
                Kadir Akdoğan
              </span>
            </div>
            <p className="max-w-md font-body text-sm leading-relaxed text-[var(--text-muted)]">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-subtle)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.hero.availableForWork}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)]">
              {t.footer.quickLinks}
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
              <li>
                <Link href="/" className="transition-colors hover:text-[var(--text-primary)]">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/experience" className="transition-colors hover:text-[var(--text-primary)]">
                  {t.nav.experience}
                </Link>
              </li>
              <li>
                <Link href="/skills" className="transition-colors hover:text-[var(--text-primary)]">
                  {t.nav.skills}
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="transition-colors hover:text-[var(--text-primary)]">
                  {t.nav.certifications}
                </Link>
              </li>
              <li>
                <Link href="/references" className="transition-colors hover:text-[var(--text-primary)]">
                  {t.nav.references}
                </Link>
              </li>
              <li>
                <Link href="/cv" className="transition-colors hover:text-[var(--text-primary)]">
                  {t.nav.viewCv}
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)]">
              {t.footer.contactHeading}
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[var(--text-muted)] font-mono">
              <li>
                <a href="mailto:akdogankadir07@gmail.com" className="transition-colors hover:text-[var(--text-primary)] break-all">
                  akdogankadir07@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+905525326270" className="transition-colors hover:text-[var(--text-primary)]">
                  0 (552) 532 62 70
                </a>
              </li>
              <li className="text-[var(--text-subtle)]">
                Kepez / Antalya, Türkiye
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-subtle)]">
          <p>© {currentYear} Kadir Akdoğan. {t.footer.rightsReserved}</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}