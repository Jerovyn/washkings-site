import ServiceLandingPage from "@/components/ServiceLandingPage";

export default function GeneralContractingResidential() {
  return (
    <ServiceLandingPage
      title="Residential General Contracting"
      description="Trust Staten Island Wash Kings for all your residential construction and renovation needs. We handle everything from small repairs to complete home improvements with quality craftsmanship and attention to detail."
      servicesList={[
        "Home Renovations",
        "Kitchen & Bathroom Remodeling",
        "Deck & Patio Construction",
        "Siding & Window Installation",
        "Interior & Exterior Painting",
        "Flooring Installation",
      ]}
      benefits={[
        "Licensed & Insured Contractors",
        "Quality Craftsmanship",
        "Timely Project Completion",
        "Transparent Pricing",
        "Satisfaction Guaranteed",
      ]}
      serviceType="General Contracting"
      clientType="Residential"
      icon="🔨"
    />
  );
}

