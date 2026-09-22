"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Locale, translations } from "@/lib/translations";

type LangCtx = {
  locale: Locale;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
};

const LangContext = createContext<LangCtx>({
  locale: "en",
  t: translations["en"],
});

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language || "en";
  return lang.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const detected = detectLocale();
    setLocale(detected);
    document.documentElement.lang = detected;
  }, []);

  return (
    <LangContext.Provider value={{ locale, t: translations[locale] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLocale() {
  return useContext(LangContext);
}
