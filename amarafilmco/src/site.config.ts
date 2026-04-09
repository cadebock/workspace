/**
 * Single source for business info, integrations, and social links.
 * Update `site` in astro.config.mjs for production URL (sitemap, RSS, canonicals).
 */
export const siteConfig = {
  businessName: "Amara Film Co",
  tagline: "Arizona Wedding Photography & Cinema",
  description:
    "Award-winning wedding photography and films. Arizona & worldwide. We preserve and elevate the feeling of your day.",
  email: "amarafilmco@gmail.com",
  phone: "",
  location: "Arizona · travel worldwide",
  instagramUrl: "https://www.instagram.com/amarafilmco/",
  instagramHandle: "@amarafilmco",
  /** Cal.com embed iframe src (add `?embed=true` to your public booking link). Replace with your Cal.com or Calendly embed URL. */
  calEmbedUrl: "https://cal.com/william/30min?embed=true",
  /** Cal.com / Calendly booking page URL for CTA links (opens in new tab). */
  bookingPageUrl: "https://cal.com/william/30min",
  /** Placeholder film entries for /films — replace embedId with your Vimeo or YouTube video IDs. */
  films: [
    {
      title: "Desert elopement",
      subtitle: "Scottsdale · highlight",
      provider: "vimeo" as const,
      embedId: "76979871",
    },
    {
      title: "Garden celebration",
      subtitle: "Sedona · feature film",
      provider: "vimeo" as const,
      embedId: "22439234",
    },
  ],
  /** Curated Instagram grid (static images; link to profile or post). */
  instagramGrid: [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
      alt: "Bride and groom in soft light",
      href: "https://www.instagram.com/amarafilmco/",
    },
    {
      src: "https://images.unsplash.com/photo-1606800052052-a45c2e0e7b3a?auto=format&fit=crop&w=600&q=80",
      alt: "Wedding portrait",
      href: "https://www.instagram.com/amarafilmco/",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
      alt: "Couple embracing",
      href: "https://www.instagram.com/amarafilmco/",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
      alt: "Walking together",
      href: "https://www.instagram.com/amarafilmco/",
    },
  ],
  /** Portfolio gallery items (filters: category slug). */
  portfolio: [
    { src: "https://images.unsplash.com/photo-1606800052052-a45c2e0e7b3a?auto=format&fit=crop&w=1200&q=80", alt: "Bridal portrait in garden", category: "classic" },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80", alt: "Golden hour embrace", category: "desert" },
    { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80", alt: "Ceremony arch", category: "classic" },
    { src: "https://images.unsplash.com/photo-1522673606160-ade2b6c91c4f?auto=format&fit=crop&w=1200&q=80", alt: "Bouquet detail", category: "detail" },
    { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80", alt: "Couple after ceremony", category: "desert" },
    { src: "https://images.unsplash.com/photo-1529636799528-3f6769b7b01a?auto=format&fit=crop&w=1200&q=80", alt: "Reception candlelight", category: "classic" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", alt: "First dance", category: "classic" },
    { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80", alt: "Outdoor vows", category: "desert" },
  ],
  portfolioFilters: [
    { id: "all", label: "All" },
    { id: "classic", label: "Garden & venue" },
    { id: "desert", label: "Desert & light" },
    { id: "detail", label: "Details" },
  ],
  testimonials: [
    { quote: "We were in tears—your work felt like a film, not a highlight reel.", cite: "C. & X., Scottsdale" },
    { quote: "You caught moments we never even saw. We'll treasure this forever.", cite: "K. & M., Sedona" },
    { quote: "Creative, cinematic, and so fun to relive. Worth every penny.", cite: "S. & J., Phoenix" },
    { quote: "Our families watched together and everyone felt the emotion. Incredible.", cite: "B. & T., Tucson" },
  ],
  faq: [
    {
      q: "How far in advance should we book?",
      a: "Most couples book 9–12 months ahead for peak dates. If your date is sooner, reach out—occasionally we have a spot open.",
    },
    {
      q: "Do you travel for weddings?",
      a: "Yes. We're based in Arizona and travel worldwide. Travel and lodging are quoted clearly with your collection.",
    },
    {
      q: "What is your turnaround time?",
      a: "Sneak peeks within two weeks. Full galleries and films are typically delivered within 8–12 weeks depending on season.",
    },
    {
      q: "What if it rains?",
      a: "We plan for backup portraits and embrace the mood—some of our favorite images happened in rain or mist.",
    },
    {
      q: "Do we get printing rights?",
      a: "Yes. Your gallery includes high-resolution downloads and a print release for personal use.",
    },
    {
      q: "Can we hire photo only or film only?",
      a: "Absolutely. Many couples book both for a cohesive story; others choose one. We'll align on deliverables in your proposal.",
    },
  ],
} as const;
