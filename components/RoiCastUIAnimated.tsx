"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/components/LanguageProvider";

const industryData = [
  { cpl: "$85",  cierre: "22%", ticket: "$4,500", roi: "8–14%" },
  { cpl: "$120", cierre: "18%", ticket: "$5,500", roi: "6–11%" },
  { cpl: "$35",  cierre: "18%", ticket: "$3,500", roi: "5–9%"  },
  { cpl: "$45",  cierre: "25%", ticket: "$2,800", roi: "7–12%" },
  { cpl: "$28",  cierre: "15%", ticket: "$1,800", roi: "4–8%"  },
  { cpl: "$22",  cierre: "28%", ticket: "$890",   roi: "3–7%"  },
  { cpl: "$65",  cierre: "12%", ticket: "$8,500", roi: "4–9%"  },
];

const metricKeys = ["cpl", "cierre", "ticket", "roi"] as const;

export default function RoiCastUIAnimated() {
  const { t } = useLocale();
  const ui = t.roiCastUI;
  const [idx, setIdx] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % industryData.length), 2600);
    return () => clearInterval(timer);
  }, []);

  const current = industryData[idx];
  const metricLabels = [ui.metrics.cpl, ui.metrics.cierre, ui.metrics.ticket, ui.metrics.roi];

  return (
    <div
      style={{
        background: "#0a0a0a",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.07)",
        fontFamily: "var(--font-manrope)",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          padding: "10px 18px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "15px", letterSpacing: "0.04em" }}>RO</span>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" style={{ margin: "0 1px" }}>
            <circle cx="8" cy="9" r="5.5" stroke="#a3e635" strokeWidth="1.4" />
            <circle cx="8" cy="9" r="2.2" stroke="#a3e635" strokeWidth="1.4" />
            <line x1="11.8" y1="5.2" x2="15" y2="2" stroke="#a3e635" strokeWidth="1.4" strokeLinecap="round" />
            <polyline points="12.5,2 15,2 15,4.5" stroke="#a3e635" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "15px", letterSpacing: "0.04em" }}>CAST</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", letterSpacing: "0.04em", flex: 1, textAlign: "center" }}>
          {ui.subtitle}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", letterSpacing: "0.06em" }}>ES&nbsp;/&nbsp;EN</span>
          <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#a3e635", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="4" stroke="#000" strokeWidth="1.2" />
              <circle cx="6" cy="6" r="1.5" stroke="#000" strokeWidth="1.2" />
              <line x1="9" y1="3" x2="11" y2="1" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr", padding: "14px", gap: "14px" }}>

        {/* LEFT: industry pills */}
        <div style={{ background: "#111", borderRadius: "10px", padding: "14px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "14px" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <rect x="1.5" y="1" width="10" height="11" rx="1.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
              <line x1="4" y1="5" x2="9" y2="5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="4" y1="7.5" x2="9" y2="7.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            </svg>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
              {ui.setupLabel}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#a3e635", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#000", fontSize: "9px", fontWeight: 700, lineHeight: 1 }}>1</span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px", fontWeight: 400 }}>{ui.industryLabel}</span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {ui.industries.map((name, i) => {
              const sel = i === idx;
              return (
                <span
                  key={name}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "4px 9px",
                    borderRadius: "6px",
                    fontSize: "9.5px",
                    fontWeight: sel ? 600 : 400,
                    border: `1px solid ${sel ? "#a3e635" : "rgba(255,255,255,0.12)"}`,
                    color: sel ? "#a3e635" : "rgba(255,255,255,0.55)",
                    background: "transparent",
                    lineHeight: 1.3,
                    transition: "border-color 0.4s, color 0.4s",
                  }}
                >
                  {sel && (
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                      <circle cx="4.5" cy="4.5" r="3.8" stroke="#a3e635" strokeWidth="1" />
                      <path d="M2.5 4.5l1.5 1.5 2.5-2.5" stroke="#a3e635" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {name}
                </span>
              );
            })}
          </div>

          <div style={{ marginTop: "auto", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "8.5px", margin: "0 0 3px", lineHeight: 1.5 }}>
              {ui.disclaimer}
            </p>
            <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "8.5px", margin: 0, lineHeight: 1.5 }}>
              {ui.privacy}
            </p>
          </div>
        </div>

        {/* RIGHT: results */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "18px" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <rect x="1" y="8" width="3" height="4" rx="0.5" fill="rgba(255,255,255,0.35)" />
              <rect x="5" y="5" width="3" height="7" rx="0.5" fill="rgba(255,255,255,0.35)" />
              <rect x="9" y="2" width="3" height="10" rx="0.5" fill="rgba(255,255,255,0.35)" />
            </svg>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
              {ui.resultsLabel}
            </span>
          </div>

          <p style={{ color: "#a3e635", fontSize: "9.5px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 10px", transition: "opacity 0.3s" }}>
            {ui.industries[idx]}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", flex: 1 }}>
            {metricKeys.map((key, i) => (
              <div
                key={key}
                style={{ background: "#111", borderRadius: "8px", padding: "12px 13px", border: "1px solid rgba(163,230,53,0.1)" }}
              >
                <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600, margin: "0 0 6px" }}>
                  {metricLabels[i]}
                </p>
                <p
                  key={`${idx}-${key}`}
                  className="roicast-metric-value"
                  style={{ color: "#a3e635", fontSize: "22px", fontWeight: 600, margin: 0, lineHeight: 1, letterSpacing: "-0.01em" }}
                >
                  {current[key]}
                </p>
              </div>
            ))}
          </div>

          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "8px", textAlign: "right", margin: "10px 0 0", letterSpacing: "0.03em" }}>
            {ui.benchmark}
          </p>
        </div>
      </div>
    </div>
  );
}
