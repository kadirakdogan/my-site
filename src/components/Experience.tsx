"use client";

import { experience } from "@/data/content";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 sm:py-32"
      aria-labelledby="experience-heading"
    >
      {/* Subtle top border */}
      <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent sm:inset-x-8 lg:inset-x-12" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-light">
            02 / Experience
          </p>
          <h2
            id="experience-heading"
            className="font-display text-3xl font-bold tracking-tight text-content-primary sm:text-4xl"
          >
            Work History
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Timeline track — only on md+ */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-[2px] bg-border md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-accent to-accent-light"
              style={{ height: shouldReduceMotion ? "100%" : lineHeight }}
            />
          </div>

          {/* Entries */}
          <div className="space-y-12 md:space-y-16">
            {experience.map((item, index) => (
              <ScrollReveal key={`${item.company}-${item.role}-${item.endDate}`} delay={index * 0.1}>
                <div className="group relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-[12px] top-1 hidden h-[18px] w-[18px] items-center justify-center md:flex">
                    <div className="h-3 w-3 rounded-full border-2 border-border bg-surface-primary transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/20" />
                  </div>

                  {/* Card */}
                  <div className="rounded-xl border border-border bg-surface-secondary/50 p-6 transition-all duration-300 hover:border-border-hover hover:bg-surface-secondary sm:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="font-display text-lg font-bold text-content-primary sm:text-xl">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-accent-light">
                          {item.company}
                        </p>
                      </div>
                      <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-content-tertiary">
                        {item.startDate
                          ? `${item.startDate} – ${item.endDate}`
                          : item.endDate}
                      </p>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm leading-relaxed text-content-secondary"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}