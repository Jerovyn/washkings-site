import { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Residential Roofing Services | Staten Island Wash Kings",
  description: "Professional residential roofing services in Staten Island. Roof repairs, installation, and maintenance. Licensed, insured, and 5-star rated.",
};

export default function RoofingResidential() {
  return (
    <ServiceLandingPage
      title="Residential Roofing Services"
      description="Protect your home with our professional residential roofing services. From repairs to complete roof replacement, we ensure your home stays safe and dry with quality roofing solutions."
      servicesList={[
        "Roof Repairs",
        "Roof Replacement",
        "Gutter Installation & Repair",
        "Roof Inspections",
        "Emergency Roof Services",
        "Skylight Installation",
      ]}
      benefits={[
        "Licensed & Insured Roofers",
        "Quality Materials & Workmanship",
        "Free Estimates",
        "Warranty Protection",
        "Emergency Services Available",
      ]}
      serviceType="Roofing"
      clientType="Residential"
      icon="🏠"
    />
  );
}

