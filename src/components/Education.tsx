"use client";

import { education } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

export function Education() {
  return (
    <section
      id="education"
      className="relative py-24 sm:py-32"
      aria-labelledby="education-heading"
    >
      {/* Subtle top border */}
      <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent sm:inset-x-8 lg:inset-x-12" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-light">
            04 / Education
          </p>
          <h2
            id="education-heading"
            className="font-display text-3xl font-bold tracking-tight text-content-primary sm:text-4xl"
          >
            Education
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-6">
          {education.map((item, index) => (
            <ScrollReveal key={item.institution} delay={index * 0.1}>
              <div className="group relative rounded-xl border border-border bg-surface-secondary/30 p-6 transition-all duration-300 hover:border-border-hover hover:bg-surface-secondary/60 sm:p-8">
                {/* Accent left bar */}
                <div className="absolute bottom-6 left-0 top-6 w-[2px] rounded-full bg-accent/40 transition-colors duration-300 group-hover:bg-accent sm:bottom-8 sm:top-8" />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div className="pl-4">
                    <h3 className="font-display text-lg font-bold text-content-primary sm:text-xl">
                      {item.institution}
                    </h3>
                    <p className="mt-1.5 text-sm text-content-secondary">
                      {item.field}
                    </p>
                  </div>
                  <p className="shrink-0 pl-4 font-mono text-xs uppercase tracking-wider text-content-tertiary sm:pl-0">
                    {item.startDate} – {item.endDate}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}