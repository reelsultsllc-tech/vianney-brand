"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { useLocale } from "@/components/LanguageProvider";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.thinking, href: siteConfig.thinking },
    { label: t.nav.workWithMe, href: siteConfig.workWithVianney },
    { label: t.nav.reelsults, href: siteConfig.reelsults },
    { label: t.nav.roiCast, href: siteConfig.roiCast },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(7,7,7,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,155,85,0.12)" : "none",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: "1360px", padding: "0 28px", height: "68px" }}
        >
          <Link
            href="/"
            className="text-[15px] tracking-[0.22em] uppercase font-medium"
            style={{ color: "var(--text-primary)", letterSpacing: "0.22em" }}
            aria-label="Vianney — home"
          >
            VIANNEY
          </Link>

          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-px transition-all duration-300 origin-center"
              style={{
                background: "var(--text-primary)",
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{ background: "var(--text-primary)", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px transition-all duration-300 origin-center"
              style={{
                background: "var(--text-primary)",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10 transition-all duration-500 md:hidden"
        style={{
          background: "rgba(7,7,7,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
        }}
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-[22px] tracking-[0.15em] uppercase font-light"
            style={{ color: "var(--text-primary)" }}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={siteConfig.workWithVianney}
          onClick={() => setMenuOpen(false)}
          className="mt-4 text-[13px] tracking-[0.12em] uppercase px-8 py-3"
          style={{ border: "1px solid var(--border-gold)", color: "var(--gold)", borderRadius: "4px" }}
        >
          {t.nav.workWithVianney}
        </Link>
      </div>
    </>
  );
}
