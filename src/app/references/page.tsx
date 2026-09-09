"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { professionalReferences } from "@/data/references";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ReferencesPage() {
  const { t } = useLanguage();
  // Set of reference IDs currently unmasked
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            badge={t.nav.references}
            title={t.referencesPage.title}
            description={t.referencesPage.description}
            className="mb-8"
          />
        </ScrollReveal>

        {/* Privacy Note Banner */}
        <ScrollReveal delay={0.05}>
          <div className="mb-12 rounded-xl border border-[var(--border-color)] bg-[var(--surface-subtle)]/60 p-5 text-sm text-[var(--text-muted)] flex items-start gap-3">
            <svg className="h-5 w-5 shrink-0 text-[var(--text-primary)] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="leading-relaxed">
              {t.referencesPage.privacyNote}
            </p>
          </div>
        </ScrollReveal>

        {/* References List */}
        <div className="space-y-6">
          {professionalReferences.map((ref, index) => {
            const isRevealed = revealedIds.has(ref.id);
            return (
              <ScrollReveal key={ref.id} delay={index * 0.1}>
                <Card hoverable className="transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                        {ref.name}
                      </h2>
                      <p className="mt-0.5 text-sm font-medium text-[var(--text-muted)]">
                        {ref.company}
                      </p>
                      <p className="mt-0.5 font-mono text-xs text-[var(--text-subtle)]">
                        {ref.role}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="font-mono text-sm font-medium">
                        {isRevealed ? (
                          <div className="flex flex-col sm:items-end gap-1 text-[var(--text-primary)] animate-fadeIn">
                            <a href={`tel:${ref.phone.replace(/\s+/g, "")}`} className="hover:underline flex items-center gap-1.5">
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span>{ref.phone}</span>
                            </a>
                            {ref.email && (
                              <a href={`mailto:${ref.email}`} className="text-xs text-[var(--text-muted)] hover:underline">
                                {ref.email}
                              </a>
                            )}
                          </div>
                        ) : (
                          <span className="text-[var(--text-subtle)] tracking-wider">
                            +90 (5XX) ••• •• ••
                          </span>
                        )}
                      </div>

                      <Button
                        type="button"
                        onClick={() => toggleReveal(ref.id)}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                      >
                        {isRevealed ? t.referencesPage.hideContactInfo : t.referencesPage.showContactInfo}
                      </Button>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
