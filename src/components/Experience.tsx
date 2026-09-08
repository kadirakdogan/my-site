"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 sm:py-28 border-b border-[var(--border-color)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-subtle)]">
              {t.experience.sectionNumber} /
            </span>
            <h2
              id="experience-heading"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]"
            >
              {t.experience.sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* Clean Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-[var(--border-color)] space-y-12">
          {t.experience.items.map((item, index) => (
            <ScrollReveal key={`${item.company}-${item.role}-${item.endDate}`} delay={index * 0.08}>
              <div className="relative group">
                {/* Timeline node dot */}
                <span
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--border-color)] bg-[var(--bg-color)] transition-colors group-hover:border-[var(--text-primary)]"
                  aria-hidden="true"
                />

                {/* Role, Company, and Date */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 font-medium text-sm text-[var(--text-muted)]">
                      {item.company}
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-xs text-[var(--text-subtle)] uppercase tracking-wider">
                    {item.startDate ? `${item.startDate} – ${item.endDate}` : item.endDate}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-muted)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-subtle)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}