import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import RoiCastUI from "@/components/RoiCastUI";

export default function RoiCastSection() {
  return (
    <section
      aria-labelledby="roicast-heading"
      style={{
        padding: "clamp(72px, 10vh, 120px) 0 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 clamp(24px, 4vw, 60px)",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center">

          {/* LEFT — editorial text (40%) */}
          <div className="lg:w-[40%] flex-shrink-0" style={{ paddingBottom: "clamp(40px, 6vh, 64px)" }}>
            <div className="lg:pr-16">
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-manrope)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--green)",
                  marginBottom: "clamp(20px, 3vh, 32px)",
                }}
              >
                Free Tool
              </span>

              <h2
                id="roicast-heading"
                style={{
                  fontFamily: "var(--font-gloock)",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 3.2vw, 50px)",
                  lineHeight: 1.1,
                  color: "var(--text-primary)",
                  marginBottom: "clamp(16px, 2.5vh, 24px)",
                  letterSpacing: "-0.01em",
                }}
              >
                Before you spend more
                <br />
                on marketing,
                <br />
                run the numbers.
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  maxWidth: "360px",
                  fontWeight: 400,
                  marginBottom: "clamp(24px, 4vh, 36px)",
                }}
              >
                See what your economics could support using real industry
                benchmarks and your own business inputs.
              </p>

              <Link
                href={siteConfig.roiCast}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-manrope)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--green)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(163,230,53,0.3)",
                  paddingBottom: "3px",
                  letterSpacing: "0.02em",
                }}
              >
                Run your projection
                <span aria-hidden="true" style={{ fontSize: "16px" }}>↗</span>
              </Link>
            </div>
          </div>

          {/* RIGHT — live product UI (60%) */}
          <div
            className="lg:w-[60%]"
            style={{ position: "relative", overflow: "visible" }}
          >
            {/* Ambient green glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-25% -15%",
                background:
                  "radial-gradient(ellipse at 55% 50%, rgba(163,230,53,0.06) 0%, transparent 65%)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Left-edge dark fade */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "18%",
                background:
                  "linear-gradient(to right, #070707 0%, rgba(7,7,7,0.55) 55%, transparent 100%)",
                zIndex: 3,
                pointerEvents: "none",
              }}
            />

            {/* Desktop: perspective tilt + extends beyond grid */}
            <div
              className="roicast-screenshot-wrap hidden lg:block"
              style={{ position: "relative", zIndex: 1 }}
            >
              <RoiCastUI />
            </div>

            {/* Mobile: edge-to-edge, flat */}
            <div
              className="roicast-screenshot-wrap lg:hidden"
              style={{ position: "relative", zIndex: 1 }}
            >
              <RoiCastUI />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
