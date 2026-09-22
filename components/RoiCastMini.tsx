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

export default function RoiCastMini() {
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
        borderTop: "1px solid rgba(163,230,53,0.1)",
        paddingTop: "16px",
        marginTop: "4px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-manrope)",
          fontSize: "9px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(163,230,53,0.6)",
          fontWeight: 600,
          margin: "0 0 10px",
          transition: "opacity 0.3s",
        }}
      >
        {ui.industries[idx]}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
        {metricKeys.map((key, i) => (
          <div
            key={key}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(163,230,53,0.1)",
              borderRadius: "8px",
              padding: "10px 12px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-manrope)",
                color: "rgba(255,255,255,0.35)",
                fontSize: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 600,
                margin: "0 0 4px",
              }}
            >
              {metricLabels[i]}
            </p>
            <p
              key={`${idx}-${key}`}
              className="roicast-metric-value"
              style={{
                fontFamily: "var(--font-manrope)",
                color: "#a3e635",
                fontSize: "20px",
                fontWeight: 600,
                margin: 0,
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}
            >
              {current[key]}
            </p>
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: "var(--font-manrope)",
          color: "rgba(255,255,255,0.18)",
          fontSize: "8px",
          margin: "8px 0 0",
          letterSpacing: "0.03em",
        }}
      >
        {ui.benchmark}
      </p>
    </div>
  );
}
