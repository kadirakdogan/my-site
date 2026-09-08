"use client";

import { personalInfo } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      {/* Subtle top border */}
      <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent sm:inset-x-8 lg:inset-x-12" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-light">
            05 / Contact
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            id="contact-heading"
            className="font-display text-4xl font-bold tracking-tight text-content-primary sm:text-5xl lg:text-6xl"
          >
            Let&apos;s work
            <br />
            <span className="text-gradient">together.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="mt-6 max-w-lg text-lg text-content-secondary">
            Have a project in mind or need reliable IT support? I&apos;m always
            open to discussing new opportunities.
          </p>
        </ScrollReveal>

        {/* Contact links */}
        <ScrollReveal delay={0.35}>
          <div className="mt-12 space-y-6">
            {/* Email — large, prominent */}
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-content-tertiary">
                Email
              </p>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="group relative inline-block font-display text-xl font-semibold text-content-primary transition-colors duration-300 hover:text-accent-light sm:text-2xl"
                whileHover={shouldReduceMotion ? {} : { x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {personalInfo.email}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent-light transition-all duration-500 group-hover:w-full" />
              </motion.a>
            </div>

            {/* Phone */}
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-content-tertiary">
                Phone
              </p>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="group relative inline-block font-display text-lg font-semibold text-content-primary transition-colors duration-300 hover:text-accent-light"
              >
                {personalInfo.phone}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent-light transition-all duration-500 group-hover:w-full" />
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-content-tertiary">
                Location
              </p>
              <p className="font-display text-lg font-semibold text-content-primary">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA button */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-display text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              Get in Touch
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}