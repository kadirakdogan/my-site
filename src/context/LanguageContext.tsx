"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { contentTr } from "@/data/content.tr";
import { contentEn } from "@/data/content.en";
import type { SiteContent } from "@/lib/types";

export type Locale = "tr" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: SiteContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem("kadir-portfolio-locale") as Locale;
      if (savedLocale === "tr" || savedLocale === "en") {
        setLocaleState(savedLocale);
      }
    } catch {
      // ignore localStorage errors (e.g. incognito)
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("kadir-portfolio-locale", newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // ignore
    }
  };

  const toggleLocale = () => {
    const next = locale === "tr" ? "en" : "tr";
    setLocale(next);
  };

  const t = locale === "tr" ? contentTr : contentEn;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
