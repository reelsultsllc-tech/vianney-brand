"use client";

import Image from "next/image";
import { useLocale } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section aria-label="Vianney — introduction">

      {/* Portrait — 44svh mobile / 48vh desktop */}
      <div
        className="relative h-[44svh] lg:h-[48vh]"
        style={{ minHeight: "240px", overflow: "hidden" }}
      >
        <Image
          src="/images/vianney-hero.webp"
          alt="Vianney"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "50% 22%" }}
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "36%",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(7,7,7,0.5) 60%, #070707 100%)",
          }}
        />
      </div>

      {/* Orientation block */}
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding:
            "clamp(16px, 2.2vh, 26px) clamp(24px, 4vw, 60px) clamp(18px, 2.8vh, 28px)",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-gloock)",
            fontWeight: 400,
            fontSize: "clamp(22px, 2.2vw, 34px)",
            lineHeight: 1.1,
            color: "var(--text-primary)",
            marginBottom: "clamp(8px, 1vh, 12px)",
            letterSpacing: "-0.01em",
          }}
        >
          {t.hero.headline1}{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            {t.hero.headline2}
          </em>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-manrope)",
            fontSize: "clamp(12px, 0.95vw, 14px)",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            maxWidth: "520px",
            fontWeight: 400,
            marginBottom: "clamp(14px, 1.8vh, 20px)",
          }}
        >
          {t.hero.subheadline}
        </p>

        <span
          style={{
            fontFamily: "var(--font-manrope)",
            fontSize: "12px",
            fontWeight: 500,
            color: "rgba(200,155,85,0.78)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {t.hero.cta}
        </span>
      </div>
    </section>
  );
}
