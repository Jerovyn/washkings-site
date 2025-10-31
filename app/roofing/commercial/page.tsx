import ServiceLandingPage from "@/components/ServiceLandingPage";

export default function RoofingCommercial() {
  return (
    <ServiceLandingPage
      title="Commercial Roofing Services"
      description="Keep your business protected with our comprehensive commercial roofing services. We handle everything from flat roof repairs to complete commercial roof installations for buildings of all sizes."
      servicesList={[
        "Commercial Roof Repairs",
        "Flat Roof Systems",
        "Roof Maintenance Programs",
        "Roof Inspections & Assessments",
        "Emergency Commercial Repairs",
        "Membrane Roofing Installation",
      ]}
      benefits={[
        "Licensed Commercial Roofers",
        "Minimal Business Disruption",
        "Preventive Maintenance Programs",
        "Commercial Warranty Coverage",
        "24/7 Emergency Service",
      ]}
      serviceType="Roofing"
      clientType="Commercial"
      icon="🏠"
    />
  );
}

