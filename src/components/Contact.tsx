"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-subtle)]">
              {t.contact.sectionNumber} /
            </span>
            <h2
              id="contact-heading"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]"
            >
              {t.contact.sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                {t.contact.headline}{" "}
                <span className="underline decoration-1 underline-offset-8">
                  {t.contact.headlineHighlight}
                </span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
                {t.contact.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="inline-flex items-center gap-3 rounded border border-[var(--text-primary)] bg-[var(--text-primary)] px-7 py-3.5 font-display text-sm font-semibold text-[var(--bg-color)] transition-opacity hover:opacity-90"
                >
                  <span>{t.contact.ctaButton}</span>
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Details List */}
          <ScrollReveal delay={0.25}>
            <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] p-6 sm:p-8 space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)] mb-1">
                  {t.contact.emailLabel}
                </p>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="font-display text-base sm:text-lg font-semibold text-[var(--text-primary)] hover:underline"
                >
                  {t.contact.email}
                </a>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)] mb-1">
                  {t.contact.phoneLabel}
                </p>
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                  className="font-display text-base sm:text-lg font-semibold text-[var(--text-primary)] hover:underline"
                >
                  {t.contact.phone}
                </a>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)] mb-1">
                  {t.contact.locationLabel}
                </p>
                <p className="font-display text-base sm:text-lg font-semibold text-[var(--text-primary)]">
                  {t.contact.location}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}