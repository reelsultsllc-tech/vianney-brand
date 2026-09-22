"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import RoiCastUIAnimated from "@/components/RoiCastUIAnimated";
import RoiCastMini from "@/components/RoiCastMini";
import { useLocale } from "@/components/LanguageProvider";

export default function RoiCastCard() {
  const { t } = useLocale();
  const rc = t.roiCast;

  return (
    <Link
      href={siteConfig.roiCast}
      className="roi-cast-card"
      aria-label="ROI CAST — free marketing ROI calculator"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Ambient green glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(163,230,53,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Left-to-right fade overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, #070707 0%, rgba(7,7,7,0.92) 30%, rgba(7,7,7,0.68) 50%, rgba(7,7,7,0.24) 68%, transparent 84%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── DESKTOP content row ───────────────────────── */}
      <div
        className="hidden lg:flex items-center justify-between"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "clamp(220px, 34vw, 380px)",
          padding: "clamp(28px, 4vw, 44px)",
        }}
      >
        {/* Left text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(10px, 1.4vw, 16px)",
            maxWidth: "clamp(220px, 40%, 480px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontFamily: "var(--font-manrope)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: "rgba(163,230,53,0.8)" }}>03</span>
            <span style={{ display: "block", width: "24px", height: "1px", background: "rgba(163,230,53,0.3)" }} />
            <span style={{ fontFamily: "var(--font-manrope)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(163,230,53,0.55)" }}>
              {rc.eyebrowDesktop}
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-gloock)", fontWeight: 400, fontSize: "clamp(24px, 2.8vw, 42px)", lineHeight: 1.08, color: "var(--text-primary)", margin: 0 }}>
            {rc.title}
          </h2>
          <p style={{ fontFamily: "var(--font-manrope)", fontSize: "clamp(12px, 1.05vw, 14px)", lineHeight: 1.65, color: "var(--text-secondary)", maxWidth: "360px", fontWeight: 400, margin: 0 }}>
            {rc.description}
          </p>
          <span style={{ fontFamily: "var(--font-manrope)", fontSize: "12px", fontWeight: 500, color: "rgba(163,230,53,0.65)", letterSpacing: "0.04em" }}>
            {rc.cta}
          </span>
        </div>

        {/* Arrow */}
        <div
          className="roi-cast-arrow"
          style={{ flexShrink: 0, width: "clamp(36px, 3vw, 44px)", height: "clamp(36px, 3vw, 44px)", borderRadius: "50%", border: "1px solid rgba(163,230,53,0.25)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3 }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="rgba(163,230,53,0.8)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* ── MOBILE content ───────────────────────────── */}
      <div
        className="lg:hidden"
        style={{
          position: "relative",
          zIndex: 2,
          padding: "clamp(24px, 5vw, 32px)",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <span style={{ fontFamily: "var(--font-manrope)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: "rgba(163,230,53,0.8)" }}>03</span>
          <span style={{ display: "block", width: "20px", height: "1px", background: "rgba(163,230,53,0.3)" }} />
          <span style={{ fontFamily: "var(--font-manrope)", fontSize: "9px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(163,230,53,0.5)" }}>
            {rc.eyebrowMobile}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
          <h2 style={{ fontFamily: "var(--font-gloock)", fontWeight: 400, fontSize: "28px", lineHeight: 1.08, color: "var(--text-primary)", margin: 0 }}>
            {rc.title}
          </h2>
          <div
            className="roi-cast-arrow"
            style={{ flexShrink: 0, width: "38px", height: "38px", borderRadius: "50%", border: "1px solid rgba(163,230,53,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="rgba(163,230,53,0.8)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <p style={{ fontFamily: "var(--font-manrope)", fontSize: "13px", lineHeight: 1.6, color: "var(--text-secondary)", fontWeight: 400, margin: "0 0 4px" }}>
          {rc.descriptionMobile}
        </p>

        <RoiCastMini />
      </div>

      {/* ── Desktop animated UI (absolute) ───────────── */}
      <div
        aria-hidden="true"
        className="hidden lg:block"
        style={{
          position: "absolute",
          right: "clamp(16px, 2vw, 32px)",
          top: "50%",
          transform: "translateY(-50%) scale(0.78)",
          transformOrigin: "right center",
          width: "600px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <RoiCastUIAnimated />
      </div>
    </Link>
  );
}
