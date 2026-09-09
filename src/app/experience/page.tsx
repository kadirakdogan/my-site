"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            badge={t.nav.experience}
            title={t.experiencePage.title}
            description={t.experiencePage.description}
            className="mb-14"
          />
        </ScrollReveal>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-[var(--border-color)] space-y-12">
          {t.experiencePage.items.map((item, index) => (
            <ScrollReveal key={`${item.company}-${item.role}-${item.endDate}`} delay={index * 0.08}>
              <div className="relative group">
                {/* Timeline node */}
                <span
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--border-color)] bg-[var(--bg-color)] transition-colors group-hover:border-[var(--text-primary)]"
                  aria-hidden="true"
                />

                <Card hoverable className="transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 pb-4 border-b border-[var(--border-color)]">
                    <div>
                      <h2 className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)]">
                        {item.role}
                      </h2>
                      <p className="mt-0.5 font-medium text-sm text-[var(--text-muted)]">
                        {item.company}
                      </p>
                    </div>

                    <span className="shrink-0 font-mono text-xs text-[var(--text-subtle)] uppercase tracking-wider">
                      {item.startDate ? `${item.startDate} – ${item.endDate}` : item.endDate}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-5 space-y-2.5">
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

                  {/* Technology Tags */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
