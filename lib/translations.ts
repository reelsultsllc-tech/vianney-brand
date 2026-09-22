export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      thinking: "Thinking",
      workWithMe: "Work With Me",
      reelsults: "Reelsults",
      roiCast: "ROI CAST",
      workWithVianney: "Work With Vianney",
    },
    hero: {
      headline1: "Better decisions.",
      headline2: "Real results.",
      subheadline:
        "Work directly with Vianney, bring in Reelsults for execution, or run your numbers first with ROI CAST.",
      cta: "Choose your next move ↓",
    },
    path01: {
      eyebrow: "Doing It Yourself",
      title: "DIY Marketing, Guided.",
      description:
        "Advice, feedback and community for business owners doing their own marketing.",
      cta: "Join Vianney's community →",
      imageAlt: "Vianney working through a strategy decision with a business owner",
    },
    path02: {
      eyebrow: "When You Need a Team",
      title: "Need to move faster?",
      description:
        "Vianney's marketing team that combines strategy, technology systems and execution when you need to grow.",
      cta: "Bring in Reelsults →",
      imageAlt: "Reelsults — Vianney's strategy and execution team",
    },
    roiCast: {
      eyebrowDesktop: "Not sure paid marketing makes sense?",
      eyebrowMobile: "Free Tool",
      title: "ROI CAST",
      description:
        "Before you spend more on marketing, run the numbers. See what your budget could realistically return — based on real benchmarks from your industry.",
      descriptionMobile:
        "Not sure paid marketing makes sense? Run the numbers first.",
      cta: "Run ROI CAST →",
    },
    roiCastUI: {
      subtitle: "ROI prediction powered by data",
      setupLabel: "Setup",
      industryLabel: "1. Industry",
      resultsLabel: "Your projection results",
      metrics: {
        cpl: "Avg. CPL",
        cierre: "Close Rate",
        ticket: "Avg. Ticket",
        roi: "Expected ROI",
      },
      disclaimer: "3 free projections available",
      privacy: "🔒 Your data is safe and never shared.",
      benchmark: "Benchmarks from 70+ real businesses in this sector",
      industries: [
        "Immigration Lawyers",
        "Criminal Lawyers",
        "Financial Coach",
        "CPA / Tax",
        "Credit Services",
        "Auto Insurance",
        "Auto Dealers",
      ],
    },
    thinking: {
      eyebrow: "Latest Thinking",
      headline1: "Ideas worth",
      headline2: "thinking about.",
      seeAll: "See all thinking →",
      posts: [
        "Organic Isn't Free. You're Just Paying Differently.",
        "More Leads Don't Always Mean More Growth.",
        "Before You Blame Marketing, Check What Happens After the Lead.",
      ],
    },
    footer: {
      tagline1: "Better decisions.",
      tagline2: "More intentional growth.",
      workWithVianney: "Work With Vianney",
      copyright: "© 2026 Vianney. All rights reserved.",
      motto: "A more intentional way to grow.",
    },
  },
  es: {
    nav: {
      thinking: "Ideas",
      workWithMe: "Trabaja Conmigo",
      reelsults: "Reelsults",
      roiCast: "ROI CAST",
      workWithVianney: "Trabaja con Vianney",
    },
    hero: {
      headline1: "Mejores decisiones.",
      headline2: "Resultados reales.",
      subheadline:
        "Trabaja directamente con Vianney, trae a Reelsults para ejecución, o corre tus números primero con ROI CAST.",
      cta: "Elige tu próximo paso ↓",
    },
    path01: {
      eyebrow: "Haciéndolo Tú Solo",
      title: "Marketing Propio, Guiado.",
      description:
        "Consejos, retroalimentación y comunidad para dueños de negocios que hacen su propio marketing.",
      cta: "Únete a la comunidad →",
      imageAlt: "Vianney trabajando una decisión estratégica con un dueño de negocio",
    },
    path02: {
      eyebrow: "Cuando Necesitas un Equipo",
      title: "¿Necesitas moverte más rápido?",
      description:
        "El equipo de marketing de Vianney que combina estrategia, sistemas tecnológicos y ejecución cuando necesitas crecer.",
      cta: "Trae a Reelsults →",
      imageAlt: "Reelsults — el equipo de estrategia y ejecución de Vianney",
    },
    roiCast: {
      eyebrowDesktop: "¿No sabes si la publicidad pagada tiene sentido?",
      eyebrowMobile: "Herramienta Gratis",
      title: "ROI CAST",
      description:
        "Antes de gastar más en marketing, corre los números. Ve lo que tu presupuesto podría retornar — basado en benchmarks reales de tu industria.",
      descriptionMobile:
        "¿No estás seguro si el marketing pagado tiene sentido? Corre los números primero.",
      cta: "Corre ROI CAST →",
    },
    roiCastUI: {
      subtitle: "Predicción de ROI impulsada por datos",
      setupLabel: "Configuración",
      industryLabel: "1. Industria",
      resultsLabel: "Resultados de tu proyección",
      metrics: {
        cpl: "CPL Promedio",
        cierre: "Tasa de Cierre",
        ticket: "Ticket Promedio",
        roi: "ROI Esperado",
      },
      disclaimer: "3 proyecciones gratuitas disponibles",
      privacy: "🔒 Tus datos están seguros y nunca se comparten.",
      benchmark: "Benchmarks de 70+ negocios reales en este sector",
      industries: [
        "Abogados de Inmigración",
        "Abogados Penales",
        "Coach Financiero",
        "CPA / Impuestos",
        "Servicios de Crédito",
        "Seguro de Auto",
        "Concesionarios de Autos",
      ],
    },
    thinking: {
      eyebrow: "Últimas Ideas",
      headline1: "Ideas que vale la",
      headline2: "pena considerar.",
      seeAll: "Ver todas las ideas →",
      posts: [
        "Lo Orgánico No Es Gratis. Solo Pagas Diferente.",
        "Más Leads No Siempre Significa Más Crecimiento.",
        "Antes de Culpar al Marketing, Revisa Qué Pasa Después del Lead.",
      ],
    },
    footer: {
      tagline1: "Mejores decisiones.",
      tagline2: "Crecimiento más intencional.",
      workWithVianney: "Trabaja con Vianney",
      copyright: "© 2026 Vianney. Todos los derechos reservados.",
      motto: "Una forma más intencional de crecer.",
    },
  },
} as const;

export type T = typeof translations["en"];
