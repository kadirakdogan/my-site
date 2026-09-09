"use client";

import { useLanguage } from "@/context/LanguageContext";
import { certifications } from "@/data/certifications";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function CertificationsPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            badge={t.nav.certifications}
            title={t.certificationsPage.title}
            description={t.certificationsPage.description}
            className="mb-14"
          />
        </ScrollReveal>

        {/* Certifications Section */}
        <section className="mb-16">
          <ScrollReveal delay={0.05}>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                01 /
              </span>
              <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">
                {t.certificationsPage.title}
              </h2>
            </div>
          </ScrollReveal>

          {certifications.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id} hoverable>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">{cert.issuer}</p>
                    </div>
                    <Badge variant="outline">{cert.issueDate}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <ScrollReveal delay={0.1}>
              <Card className="text-center py-12 px-6 border-dashed">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-subtle)] text-[var(--text-muted)] mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                  {t.certificationsPage.emptyTitle}
                </h3>
                <p className="mt-2 max-w-md mx-auto text-sm text-[var(--text-muted)] leading-relaxed">
                  {t.certificationsPage.emptyDescription}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">MikroTik MTCNA</Badge>
                  <Badge variant="outline">Ubiquiti Network Specialist</Badge>
                  <Badge variant="outline">Cybersecurity Fundamentals</Badge>
                </div>
              </Card>
            </ScrollReveal>
          )}
        </section>

        {/* Formal Education Section */}
        <section>
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                02 /
              </span>
              <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">
                {t.certificationsPage.educationTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {t.certificationsPage.education.map((edu, idx) => (
              <ScrollReveal key={edu.institution} delay={idx * 0.1}>
                <Card hoverable>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-3 border-b border-[var(--border-color)]">
                    <div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                        {edu.institution}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-[var(--text-muted)]">
                        {edu.field}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[var(--text-subtle)] uppercase tracking-wider">
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
