"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function SkillsPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            badge={t.nav.skills}
            title={t.skillsPage.title}
            description={t.skillsPage.description}
            className="mb-14"
          />
        </ScrollReveal>

        {/* 2-column or 3-column categorized grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.skillsPage.categories.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 0.05}>
              <Card hoverable className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-color)]">
                    <h2 className="font-display text-base font-bold uppercase tracking-wider text-[var(--text-primary)]">
                      {group.category}
                    </h2>
                    <span className="font-mono text-xs text-[var(--text-subtle)]">
                      {group.items.length} {t.skillsPage.title.includes("Yetenekler") ? "Yetkinlik" : "Skills"}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((skill) => (
                      <Badge key={skill} variant="default" className="text-xs py-1.5 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
