"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 sm:py-28 border-b border-[var(--border-color)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-subtle)]">
              {t.skills.sectionNumber} /
            </span>
            <h2
              id="skills-heading"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]"
            >
              {t.skills.sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-column or 3-column grid of categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.categories.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 0.05}>
              <div className="h-full rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] p-6 transition-colors hover:border-[var(--text-muted)]">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[var(--border-color)] bg-[var(--tag-bg)] px-2.5 py-1 font-mono text-xs text-[var(--text-primary)] transition-colors hover:border-[var(--text-subtle)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}