"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PathBanner from "@/components/PathBanner";
import RoiCastCard from "@/components/RoiCastCard";
import ThinkingSection from "@/components/ThinkingSection";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import { useLocale } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────── */}
        <Hero />

        {/* ── Three destinations ───────────────────────── */}
        <section
          aria-label="Ways to work together"
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "0 clamp(24px, 4vw, 60px) clamp(64px, 9vh, 96px)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* 01 — DIY Marketing */}
          <PathBanner
            number="01"
            eyebrow={t.path01.eyebrow}
            title={t.path01.title}
            description={t.path01.description}
            cta={t.path01.cta}
            href={siteConfig.workWithVianney}
            imageSrc="/images/vianney-work.webp"
            imageAlt={t.path01.imageAlt}
            objectPosition="62% 18%"
            variant="default"
          />

          {/* 02 — When you need a team */}
          <PathBanner
            number="02"
            eyebrow={t.path02.eyebrow}
            title={t.path02.title}
            description={t.path02.description}
            cta={t.path02.cta}
            href={siteConfig.reelsults}
            imageSrc="/images/reelsults-card.webp"
            imageAlt={t.path02.imageAlt}
            objectPosition="55% 18%"
            variant="reelsults"
          />

          {/* 03 — ROI CAST animated card */}
          <RoiCastCard />
        </section>

        {/* ── Latest Thinking ──────────────────────────── */}
        <ThinkingSection />

      </main>
      <Footer />
    </>
  );
}
