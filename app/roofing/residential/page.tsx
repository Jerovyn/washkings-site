import ServiceLandingPage from "@/components/ServiceLandingPage";

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

