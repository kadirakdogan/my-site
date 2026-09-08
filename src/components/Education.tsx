"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function Education() {
  const { t } = useLanguage();

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-20 sm:py-28 border-b border-[var(--border-color)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-subtle)]">
              {t.education.sectionNumber} /
            </span>
            <h2
              id="education-heading"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]"
            >
              {t.education.sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {t.education.items.map((item, index) => (
            <ScrollReveal key={item.institution} delay={index * 0.1}>
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] p-6 sm:p-8 transition-colors hover:border-[var(--text-muted)]">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                      {item.institution}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">
                      {item.field}
                    </p>
                  </div>

                  <span className="font-mono text-xs text-[var(--text-subtle)] uppercase tracking-wider">
                    {item.startDate} – {item.endDate}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}