"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 border-b border-[var(--border-color)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-subtle)]">
              {t.about.sectionNumber} /
            </span>
            <h2
              id="about-heading"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]"
            >
              {t.about.sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Summary Text and Core Focus Tags */}
          <ScrollReveal delay={0.1}>
            <p className="font-body text-base sm:text-lg leading-relaxed text-[var(--text-primary)]">
              {t.about.summary}
            </p>

            <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)] mb-3">
                {t.about.sectionTitle === "Hakkımda" ? "Odak Alanları" : "Focus Areas"}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.about.coreAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded border border-[var(--border-color)] bg-[var(--surface-color)] px-3 py-1 font-mono text-xs text-[var(--text-muted)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Key Highlights / Stats */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-6 rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] p-6 sm:p-8">
              {t.about.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`${
                    idx !== 0 ? "pt-6 border-t border-[var(--border-color)]" : ""
                  }`}
                >
                  <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}