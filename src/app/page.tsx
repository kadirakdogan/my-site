"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 sm:pt-28">
      {/* ─── Hero Section ─── */}
      <section className="border-b border-[var(--border-color)] pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-center gap-10 md:gap-16">
            {/* Left: Text & Actions */}
            <div className="order-2 md:order-1">
              <ScrollReveal delay={0.05}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-color)] px-3 py-1 font-mono text-xs text-[var(--text-muted)] mb-6 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t.hero.availableForWork}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05]">
                  {t.hero.name}
                </h1>
                <p className="mt-3 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {t.hero.title}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <p className="mt-6 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
                  {t.hero.statement}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  {/* Download CV - Direct plain download link */}
                  <Button
                    href="/cv/kadir-akdogan-cv.pdf"
                    download="kadir-akdogan-cv.pdf"
                    variant="primary"
                    size="md"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12" />
                    </svg>
                    <span>{t.hero.downloadCv}</span>
                  </Button>

                  {/* Contact Page Link */}
                  <Button href="/contact" variant="secondary" size="md">
                    <span>{t.hero.contactBtn}</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>

                  {/* Experience Page Link */}
                  <Button href="/experience" variant="ghost" size="md">
                    <span>{t.hero.viewExperience}</span>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Headshot Photo */}
            <div className="order-1 md:order-2 flex justify-start md:justify-end">
              <ScrollReveal delay={0.2}>
                <div className="relative h-36 w-36 sm:h-48 sm:w-48 md:h-56 md:w-56 shrink-0 overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface-color)] shadow-sm">
                  <Image
                    src="/images/profile.jpg"
                    alt="Kadir Akdoğan"
                    width={450}
                    height={450}
                    priority
                    className="h-full w-full object-cover object-center grayscale contrast-[1.05]"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Highlights / Proven Metrics ─── */}
      <section className="border-b border-[var(--border-color)] py-16 sm:py-24 bg-[var(--surface-subtle)]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              badge={t.home.aboutBadge}
              title={t.home.highlightsTitle}
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.home.highlights.map((item, idx) => (
              <ScrollReveal key={item.label} delay={idx * 0.1}>
                <Card hoverable className="h-full flex flex-col justify-between">
                  <div>
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                      {item.value}
                    </p>
                    <p className="mt-2 font-display text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                      {item.label}
                    </p>
                  </div>
                  <p className="mt-4 font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-color)] pt-3">
                    {item.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Summary & Languages ─── */}
      <section className="border-b border-[var(--border-color)] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <SectionHeading
                badge={t.home.aboutBadge}
                title={t.home.aboutTitle}
              />
              <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
                {t.home.aboutSummary}
              </p>
            </ScrollReveal>

            {/* Languages card */}
            <ScrollReveal delay={0.15}>
              <Card>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4">
                  {t.home.languagesTitle}
                </h3>
                <div className="space-y-4">
                  {t.home.languages.map((lang, i) => (
                    <div
                      key={lang.name}
                      className={`flex items-center justify-between pb-3 ${
                        i !== t.home.languages.length - 1 ? "border-b border-[var(--border-color)]" : ""
                      }`}
                    >
                      <span className="font-display text-sm font-semibold text-[var(--text-primary)]">
                        {lang.name}
                      </span>
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Experience Preview ─── */}
      <section className="border-b border-[var(--border-color)] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <ScrollReveal>
              <SectionHeading
                badge={t.home.experienceBadge}
                title={t.home.experienceTitle}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Button href="/experience" variant="secondary" size="sm">
                <span>{t.home.viewAllExperience}</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            {t.experiencePage.items.slice(0, 2).map((item, idx) => (
              <ScrollReveal key={`${item.company}-${item.role}`} delay={idx * 0.1}>
                <Card hoverable className="transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                        {item.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-[var(--text-muted)]">
                        {item.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                      {item.startDate ? `${item.startDate} – ${item.endDate}` : item.endDate}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {item.bullets.slice(0, 2).map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-subtle)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Capabilities Preview ─── */}
      <section className="border-b border-[var(--border-color)] py-20 sm:py-28 bg-[var(--surface-subtle)]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <ScrollReveal>
              <SectionHeading
                badge={t.home.skillsBadge}
                title={t.home.skillsTitle}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Button href="/skills" variant="secondary" size="sm">
                <span>{t.home.viewAllSkills}</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.skillsPage.categories.slice(0, 3).map((cat, idx) => (
              <ScrollReveal key={cat.category} delay={idx * 0.08}>
                <Card hoverable className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4">
                      {cat.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Call To Action Footer Banner ─── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.nav.contact}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[var(--text-muted)]">
              {t.contactPage.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <span>{t.hero.contactBtn}</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
              <Button href="/cv" variant="outline" size="lg">
                <span>{t.nav.viewCv}</span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}