"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[85vh] pt-32 pb-20 flex flex-col justify-center border-b border-[var(--border-color)]"
    >
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-center gap-10 md:gap-16">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <ScrollReveal delay={0.05}>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-primary)]" />
                <span>{t.hero.title}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05]">
                {t.hero.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
                {t.hero.statement}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {/* Download CV - direct plain link for maximum reliability */}
                <a
                  href="/cv/kadir-akdogan-cv.pdf"
                  download="kadir-akdogan-cv.pdf"
                  className="inline-flex items-center gap-2 rounded border border-[var(--text-primary)] bg-[var(--text-primary)] px-6 py-3 font-display text-sm font-semibold text-[var(--bg-color)] transition-opacity hover:opacity-90"
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
                  <span>{t.hero.downloadCv}</span>
                </a>

                {/* Contact Anchor Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded border border-[var(--border-color)] bg-[var(--surface-color)] px-6 py-3 font-display text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
                >
                  <span>{t.hero.contactBtn}</span>
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Profile Photo - Professional headshot treatment */}
          <div className="order-1 md:order-2 flex justify-start md:justify-end">
            <ScrollReveal delay={0.2}>
              <div className="relative h-32 w-32 sm:h-44 sm:w-44 md:h-52 md:w-52 shrink-0 overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface-color)] shadow-sm">
                <Image
                  src="/images/profile.jpg"
                  alt="Kadir Akdoğan"
                  width={400}
                  height={400}
                  priority
                  className="h-full w-full object-cover object-center grayscale contrast-[1.05]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
