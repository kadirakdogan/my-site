"use client";

import { personalInfo } from "@/data/content";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* ─── Animated background grid ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 h-[200%] w-full opacity-[0.03] animate-grid-drift"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Radial gradient mesh */}
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px] animate-pulse-glow" />
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      {/* ─── Content ─── */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.p
          {...fadeUp(0.1)}
          className="mb-6 font-mono text-sm tracking-[0.2em] text-accent-light uppercase"
        >
          {personalInfo.title}
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight text-content-primary"
        >
          {personalInfo.name.split(" ").map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
        </motion.h1>

        <motion.p
          {...fadeUp(0.45)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-content-secondary sm:text-xl"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          {...fadeUp(0.6)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#experience"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <span className="relative z-10">View Experience</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="/MY CV.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full border border-border-hover px-7 py-3.5 font-display text-sm font-semibold text-content-primary transition-all duration-300 hover:border-accent hover:text-accent-light"
          >
            Download CV
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-content-tertiary">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-[1px] bg-gradient-to-b from-content-tertiary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
