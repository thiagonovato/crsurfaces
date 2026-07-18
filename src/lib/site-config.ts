export const siteConfig = {
  name: "CR Surfaces",
  tagline: "Flooring & Countertop Installation Done Right",
  description:
    "CR Surfaces installs premium flooring and countertops for homeowners across Sarasota and Tampa, FL — hardwood, LVP, tile, quartz, and granite, fabricated and installed by craftsmen who stand behind the work.",
  url: "https://www.crsurfaces.com",
  phone: "941-284-2253",
  phoneHref: "tel:+19412842253",
  email: "sales@crsurfaces.com",
  serviceAreas: ["Sarasota, FL", "Tampa, FL"],
  areaServed: ["Sarasota", "Tampa", "Lakewood Ranch", "Bradenton", "St. Petersburg", "Venice", "Brandon"],
  social: {
    facebook: "",
    instagram: "",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
