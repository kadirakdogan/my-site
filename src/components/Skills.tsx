"use client";

import { skills } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

/* Icon paths by category — subtle SVG icons for each skill group */
const categoryIcons: Record<string, string> = {
  Systems: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
  Networking: "M4 6h16M4 12h8m-8 6h16",
  "Security Systems": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  Infrastructure: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  Software: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  Support: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32"
      aria-labelledby="skills-heading"
    >
      {/* Subtle top border */}
      <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent sm:inset-x-8 lg:inset-x-12" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-light">
            03 / Skills
          </p>
          <h2
            id="skills-heading"
            className="font-display text-3xl font-bold tracking-tight text-content-primary sm:text-4xl"
          >
            Technical Capabilities
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 0.08}>
              <div className="group h-full rounded-xl border border-border bg-surface-secondary/30 p-6 transition-all duration-300 hover:border-border-hover hover:bg-surface-secondary/60 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                {/* Category header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-primary transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5">
                    <svg
                      className="h-4 w-4 text-content-tertiary transition-colors duration-300 group-hover:text-accent-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={categoryIcons[group.category] || categoryIcons.Systems}
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-content-primary">
                    {group.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-surface-primary/50 px-3 py-1.5 font-mono text-[11px] text-content-secondary transition-colors duration-200 hover:border-border-hover hover:text-content-primary"
                    >
                      {item}
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