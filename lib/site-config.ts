export const siteConfig = {
  // Navigation destinations
  workWithVianney: "/work-with-vianney",
  reelsults: "https://reelsults.com",
  roiCast: "https://roicast.reelsults.com",
  thinking: "/thinking",

  // Social
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/in/",
  youtube: "https://youtube.com/",

  // SEO
  title: "Vianney — Better Decisions. Real Results.",
  description:
    "Practical thinking, strategic guidance and execution for business owners who want to grow more intentionally.",
  ogImage: "/og-image.jpg",
  siteUrl: "https://vianney.co",
};

export const thinkingPosts = [
  {
    id: 1,
    title: "Organic Isn't Free. You're Just Paying Differently.",
    href: "/thinking/organic-isnt-free",
    category: "Marketing",
  },
  {
    id: 2,
    title: "More Leads Don't Always Mean More Growth.",
    href: "/thinking/more-leads-growth",
    category: "Strategy",
  },
  {
    id: 3,
    title: "Before You Blame Marketing, Check What Happens After the Lead.",
    href: "/thinking/blame-marketing",
    category: "Sales",
  },
];

// Leave empty — testimonials section will not render
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  company: string;
}[] = [];
