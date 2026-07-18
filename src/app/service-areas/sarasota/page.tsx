import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Flooring & Countertops in Sarasota, FL",
  description: `${siteConfig.name} installs flooring and countertops for homeowners throughout Sarasota, FL — hardwood, LVP, tile, quartz, and granite.`,
  alternates: { canonical: "/service-areas/sarasota" },
};

export default function SarasotaPage() {
  return (
    <LocationPage
      city="Sarasota"
      intro={`${siteConfig.name} installs flooring and countertops for homeowners throughout Sarasota, FL. From beachside condos to inland family homes, we bring the same in-home consultation, careful templating, and clean installation to every job.`}
      neighborhoods={[
        "Downtown Sarasota",
        "Siesta Key",
        "Lakewood Ranch",
        "The Meadows",
        "Southside Village",
        "Gulf Gate",
      ]}
    />
  );
}
