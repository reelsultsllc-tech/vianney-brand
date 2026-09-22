"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { useLocale } from "@/components/LanguageProvider";

const SocialLinks = [
  { label: "Instagram", href: siteConfig.instagram, abbr: "IG" },
  { label: "LinkedIn",  href: siteConfig.linkedin,  abbr: "in" },
  { label: "YouTube",   href: siteConfig.youtube,   abbr: "YT" },
];

export default function Footer() {
  const { t } = useLocale();
  const f = t.footer;
  const nav = t.nav;

  const FooterNav = [
    { label: nav.thinking,   href: siteConfig.thinking },
    { label: nav.workWithMe, href: siteConfig.workWithVianney },
    { label: nav.reelsults,  href: siteConfig.reelsults },
    { label: nav.roiCast,    href: siteConfig.roiCast },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(200,155,85,0.1)",
        padding: "clamp(48px, 7vh, 72px) 0 clamp(28px, 4vh, 40px)",
      }}
    >
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(24px, 4vw, 60px)" }}>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Left: Brand */}
          <div style={{ maxWidth: "260px" }}>
            <Link
              href="/"
              style={{
                display: "block",
                fontFamily: "var(--font-manrope)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                textDecoration: "none",
                marginBottom: "12px",
              }}
            >
              Vianney
            </Link>
            <p
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {f.tagline1}
              <br />
              {f.tagline2}
            </p>
          </div>

          {/* Center: Nav */}
          <nav aria-label="Footer navigation">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {FooterNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="footer-nav-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Social + CTA */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}
            className="md:items-end"
          >
            <div style={{ display: "flex", gap: "20px" }}>
              {SocialLinks.map((s) => (
                <Link key={s.label} href={s.href} aria-label={s.label} className="footer-social-link">
                  {s.abbr}
                </Link>
              ))}
            </div>
            <Link href={siteConfig.workWithVianney} className="footer-cta">
              {f.workWithVianney}
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{ marginTop: "clamp(36px, 5vh, 56px)", paddingTop: "20px", borderTop: "1px solid rgba(200,155,85,0.08)" }}
          className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center"
        >
          <p style={{ fontFamily: "var(--font-manrope)", fontSize: "12px", fontWeight: 400, color: "rgba(170,163,154,0.55)", margin: 0, letterSpacing: "0.02em" }}>
            {f.copyright}
          </p>
          <p style={{ fontFamily: "var(--font-manrope)", fontSize: "11px", fontWeight: 400, color: "rgba(170,163,154,0.38)", margin: 0, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {f.motto}
          </p>
        </div>
      </div>
    </footer>
  );
}
