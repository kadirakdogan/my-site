"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { t, locale, toggleLocale } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.experience, href: "/experience" },
    { label: t.nav.skills, href: "/skills" },
    { label: t.nav.certifications, href: "/certifications" },
    { label: t.nav.references, href: "/references" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const toggleTheme = () => {
    const current = resolvedTheme || theme;
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-color)]/80 backdrop-blur-md border-b border-[var(--border-color)] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between">
        {/* Name / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-inherit transition-opacity hover:opacity-85 select-none"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded border border-[var(--border-color)] bg-[var(--surface-color)] font-mono text-xs font-bold tracking-tight text-[var(--text-primary)]">
            KA
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-[var(--text-primary)]">
            Kadir AKDOĞAN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Desktop primary navigation"
          className="hidden lg:flex items-center gap-6 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "font-semibold text-[var(--text-primary)] border-b border-[var(--text-primary)]"
                    : "hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Language + Theme + View CV */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={`Switch language. Current: ${locale.toUpperCase()}`}
            className="flex items-center gap-1 rounded-md border border-[var(--border-color)] bg-[var(--surface-color)] px-2.5 py-1.5 font-mono text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)]"
          >
            <span className={locale === "tr" ? "font-bold text-[var(--text-primary)]" : "text-[var(--text-subtle)]"}>
              TR
            </span>
            <span className="text-[var(--text-subtle)]">/</span>
            <span className={locale === "en" ? "font-bold text-[var(--text-primary)]" : "text-[var(--text-subtle)]"}>
              EN
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-color)] bg-[var(--surface-color)] text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)]"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )
            ) : (
              <span className="h-4 w-4 block" />
            )}
          </button>

          {/* View CV Button */}
          <Link
            href="/cv"
            className="rounded-md border border-[var(--text-primary)] bg-[var(--text-primary)] px-3 py-1.5 font-display text-xs font-semibold text-[var(--bg-color)] transition-opacity hover:opacity-90 shadow-sm"
          >
            {t.nav.viewCv}
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Quick Language Toggle on Mobile */}
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded border border-[var(--border-color)] bg-[var(--surface-color)] px-2 py-1 font-mono text-xs font-semibold text-[var(--text-primary)]"
          >
            {locale.toUpperCase()}
          </button>

          {/* Theme toggle mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center rounded border border-[var(--border-color)] bg-[var(--surface-color)] text-[var(--text-primary)]"
          >
            {mounted && resolvedTheme === "dark" ? (
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-center rounded border border-[var(--border-color)] bg-[var(--surface-color)] text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-color)] bg-[var(--surface-color)] px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive ? "font-bold text-[var(--text-primary)]" : "hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-[var(--border-color)] flex items-center justify-between">
            <Link
              href="/cv"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-md border border-[var(--text-primary)] bg-[var(--text-primary)] py-2.5 font-display text-xs font-semibold text-[var(--bg-color)]"
            >
              {t.nav.viewCv}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}