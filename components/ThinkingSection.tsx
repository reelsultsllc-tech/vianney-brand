"use client";

import Link from "next/link";
import { thinkingPosts, siteConfig } from "@/lib/site-config";
import { useLocale } from "@/components/LanguageProvider";

export default function ThinkingSection() {
  const { t } = useLocale();
  const th = t.thinking;

  return (
    <section
      aria-labelledby="thinking-heading"
      style={{ padding: "clamp(96px, 14vh, 160px) 0 clamp(80px, 12vh, 140px)" }}
    >
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(24px, 4vw, 60px)" }}>

        {/* Section header */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "clamp(40px, 6vh, 64px)" }}
          className="lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-manrope)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                marginBottom: "clamp(14px, 2vh, 20px)",
              }}
            >
              {th.eyebrow}
            </span>
            <h2
              id="thinking-heading"
              style={{
                fontFamily: "var(--font-gloock)",
                fontWeight: 400,
                fontSize: "clamp(36px, 4vw, 58px)",
                lineHeight: 1.06,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              {th.headline1}
              <br />
              {th.headline2}
            </h2>
          </div>

          <Link
            href={siteConfig.thinking}
            className="hidden lg:inline-flex"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--text-secondary)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              borderBottom: "1px solid rgba(170,163,154,0.3)",
              paddingBottom: "2px",
              flexShrink: 0,
              marginBottom: "6px",
              alignSelf: "flex-end",
            }}
          >
            {th.seeAll}
          </Link>
        </div>

        {/* Editorial article list */}
        <ol style={{ listStyle: "none", margin: 0, padding: 0 }} role="list">
          {thinkingPosts.map((post, index) => (
            <li key={post.id}>
              <Link href={post.href} className="thinking-row" aria-label={th.posts[index]}>
                <span
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                    width: "28px",
                    letterSpacing: "0.04em",
                    paddingTop: "2px",
                  }}
                  aria-hidden="true"
                >
                  0{post.id}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "clamp(15px, 1.6vw, 18px)",
                    fontWeight: 400,
                    lineHeight: 1.42,
                    flex: 1,
                    letterSpacing: "0.005em",
                  }}
                >
                  {th.posts[index]}
                </span>
                <span
                  className="thinking-arrow"
                  style={{ fontFamily: "var(--font-manrope)", fontSize: "16px", flexShrink: 0, paddingTop: "1px" }}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              {index < thinkingPosts.length - 1 && (
                <div aria-hidden="true" style={{ height: "1px", background: "rgba(200,155,85,0.14)" }} />
              )}
            </li>
          ))}
        </ol>

        <div aria-hidden="true" style={{ height: "1px", background: "rgba(200,155,85,0.14)", marginBottom: "clamp(28px, 4vh, 40px)" }} />

        <Link
          href={siteConfig.thinking}
          className="lg:hidden inline-flex"
          style={{
            fontFamily: "var(--font-manrope)",
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--text-secondary)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(170,163,154,0.3)",
            paddingBottom: "2px",
            letterSpacing: "0.04em",
          }}
        >
          {th.seeAll}
        </Link>
      </div>
    </section>
  );
}
