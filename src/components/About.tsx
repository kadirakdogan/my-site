"use client";

import { personalInfo } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { value: "4+", label: "Companies" },
  { value: "2+", label: "Years Experience" },
  { value: "3", label: "Specializations" },
];

const specialties = ["Network & Infrastructure", "Security Systems", "Systems Administration"];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-light">
            01 / About
          </p>
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold tracking-tight text-content-primary sm:text-4xl"
          >
            Professional Summary
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* Left — summary text */}
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-[1.8] text-content-secondary">
              {personalInfo.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {specialties.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-4 py-1.5 font-mono text-xs text-content-tertiary transition-colors duration-300 hover:border-border-hover hover:text-content-secondary"
                >
                  {s}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — stats */}
          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group border-l-2 border-border pl-6 transition-colors duration-300 hover:border-accent ${
                    i < stats.length - 1 ? "lg:pb-2" : ""
                  }`}
                >
                  <p className="font-display text-4xl font-bold text-content-primary transition-colors duration-300 group-hover:text-accent-light lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-content-tertiary">
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