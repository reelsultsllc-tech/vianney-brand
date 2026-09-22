import Image from "next/image";
import Link from "next/link";

interface PathBannerProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  imageContent?: React.ReactNode;
  objectPosition?: string;
  variant?: "default" | "reelsults" | "tool";
}

export default function PathBanner({
  number,
  eyebrow,
  title,
  description,
  cta,
  href,
  imageSrc,
  imageAlt,
  imageContent,
  objectPosition = "65% 18%",
  variant = "default",
}: PathBannerProps) {
  const isTool = variant === "tool";

  const overlayGradient = isTool
    ? "linear-gradient(to right, rgba(7,7,7,0.98) 0%, rgba(7,7,7,0.90) 36%, rgba(7,7,7,0.68) 55%, rgba(7,7,7,0.28) 72%, rgba(7,7,7,0.06) 88%, transparent 100%)"
    : variant === "reelsults"
    ? "linear-gradient(to right, rgba(13,12,11,0.96) 0%, rgba(13,12,11,0.88) 26%, rgba(13,12,11,0.62) 44%, rgba(13,12,11,0.22) 62%, rgba(13,12,11,0.06) 80%, transparent 95%)"
    : "linear-gradient(to right, rgba(13,12,11,0.97) 0%, rgba(13,12,11,0.93) 32%, rgba(13,12,11,0.70) 50%, rgba(13,12,11,0.28) 68%, rgba(13,12,11,0.06) 86%, transparent 100%)";

  const accentColor = isTool ? "rgba(163,230,53,0.8)" : "rgba(200,155,85,0.8)";
  const accentBorder = isTool ? "rgba(163,230,53,0.25)" : "rgba(200,155,85,0.3)";
  const numberColor = isTool ? "rgba(163,230,53,0.8)" : "var(--gold)";
  const separatorBg = isTool ? "rgba(163,230,53,0.3)" : "rgba(200,155,85,0.4)";
  const ctaColor = isTool ? "rgba(163,230,53,0.65)" : "rgba(200,155,85,0.7)";

  return (
    <Link
      href={href}
      className="path-banner"
      aria-label={title}
      style={
        isTool
          ? { background: "#070707", borderColor: "rgba(163,230,53,0.14)" }
          : undefined
      }
    >
      {/* Background image */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          className="banner-img"
          style={{ objectFit: "cover", objectPosition }}
          sizes="(max-width: 768px) 100vw, 1360px"
        />
      )}

      {/* Tool variant: ambient green glow */}
      {isTool && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 72% 50%, rgba(163,230,53,0.07) 0%, transparent 60%)",
          }}
        />
      )}

      {/* Directional overlay */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, background: overlayGradient }}
      />

      {/* Reelsults faint background labels */}
      {variant === "reelsults" && (
        <div
          aria-hidden="true"
          className="hidden lg:flex"
          style={{
            position: "absolute",
            right: "clamp(80px, 8vw, 140px)",
            top: "50%",
            transform: "translateY(-50%)",
            flexDirection: "column",
            gap: "7px",
            alignItems: "flex-end",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          {["Strategy", "Execution", "Results"].map((w) => (
            <span
              key={w}
              style={{
                fontSize: "10px",
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color: "rgba(200,155,85,0.18)",
                fontFamily: "var(--font-manrope)",
                fontWeight: 500,
              }}
            >
              {w}
            </span>
          ))}
        </div>
      )}

      {/* imageContent — desktop only, absolutely positioned right side */}
      {imageContent && (
        <div
          aria-hidden="true"
          className="hidden lg:block"
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%) scale(0.46)",
            transformOrigin: "right center",
            width: "620px",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          {imageContent}
        </div>
      )}

      {/* Card content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "clamp(160px, 30vw, 268px)",
          padding: "0 clamp(24px, 4vw, 44px)",
        }}
      >
        {/* Left: text block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(8px, 1.2vw, 14px)",
            maxWidth: "clamp(200px, 44%, 520px)",
          }}
        >
          {/* Number + eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: numberColor,
              }}
            >
              {number}
            </span>
            <span
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                background: separatorBg,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: isTool ? "rgba(163,230,53,0.55)" : "var(--text-secondary)",
              }}
            >
              {eyebrow}
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-gloock)",
              fontWeight: 400,
              fontSize: "clamp(22px, 2.6vw, 38px)",
              lineHeight: 1.08,
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className="hidden sm:block"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "clamp(12px, 1.1vw, 13px)",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              maxWidth: "340px",
              fontWeight: 400,
              margin: 0,
            }}
          >
            {description}
          </p>

          {/* CTA text */}
          <span
            className="hidden md:inline-block"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "12px",
              fontWeight: 500,
              color: ctaColor,
              letterSpacing: "0.04em",
            }}
          >
            {cta}
          </span>
        </div>

        {/* Arrow */}
        <div
          className="banner-arrow"
          style={{
            flexShrink: 0,
            width: "clamp(36px, 3vw, 44px)",
            height: "clamp(36px, 3vw, 44px)",
            borderRadius: "50%",
            border: `1px solid ${accentBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
              stroke={accentColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
