export const siteConfig = {
  name: "CR Surfaces",
  tagline: "Flooring & Countertop Installation Done Right",
  description:
    "CR Surfaces installs premium flooring and countertops for homeowners across Sarasota and Tampa, FL — hardwood, LVP, tile, quartz, and granite, fabricated and installed by craftsmen who stand behind the work.",
  url: "https://www.crsurfaces.com",
  phone: "[PHONE]",
  phoneHref: "tel:+10000000000",
  email: "[EMAIL]",
  serviceAreas: ["Sarasota, FL", "Tampa, FL"],
  areaServed: ["Sarasota", "Tampa", "Bradenton", "St. Petersburg", "Venice", "Brandon"],
  social: {
    facebook: "",
    instagram: "",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
