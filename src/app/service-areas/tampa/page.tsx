import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Flooring & Countertops in Tampa, FL",
  description: `${siteConfig.name} installs flooring and countertops for homeowners throughout Tampa, FL — hardwood, LVP, tile, quartz, and granite.`,
  alternates: { canonical: "/service-areas/tampa" },
};

export default function TampaPage() {
  return (
    <LocationPage
      city="Tampa"
      intro={`${siteConfig.name} installs flooring and countertops for homeowners throughout Tampa, FL. Whether it's a historic bungalow in Hyde Park or a new build in New Tampa, we handle the measuring, fabrication, and installation directly.`}
      neighborhoods={[
        "Downtown Tampa",
        "Hyde Park",
        "South Tampa",
        "Westchase",
        "New Tampa",
        "Carrollwood",
      ]}
    />
  );
}
