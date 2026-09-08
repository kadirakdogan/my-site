"use client";

import { personalInfo } from "@/data/content";
import { useEffect, useState, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navigation = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Contact", "contact"],
] as const;

export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", () => {
    // We just need this to trigger re-render for the progress bar
  });

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one with the largest intersection ratio
          const best = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveSection(best.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    navigation.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-border bg-surface-primary/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-accent to-accent-light"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          {/* Logo / Name */}
          <a
            href="#hero"
            className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-secondary font-display text-sm font-bold text-accent transition-colors duration-300 group-hover:border-accent/30">
              KA
            </div>
            <div
              className={`hidden transition-all duration-300 sm:block ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="font-display text-sm font-semibold text-content-primary leading-tight">
                {personalInfo.name}
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={`#${href}`}
                className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeSection === href
                    ? "text-accent-light"
                    : "text-content-tertiary hover:text-content-secondary"
                }`}
              >
                {activeSection === href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-accent/10 border border-accent/20"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-content-secondary transition-colors duration-300 hover:border-border-hover hover:text-content-primary md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-surface-primary/95 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col items-center gap-6">
            {navigation.map(([label, href], i) => (
              <motion.a
                key={href}
                href={`#${href}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-display text-2xl font-semibold transition-colors duration-300 ${
                  activeSection === href
                    ? "text-accent-light"
                    : "text-content-secondary hover:text-content-primary"
                }`}
              >
                {label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}