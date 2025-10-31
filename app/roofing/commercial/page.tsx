import { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Commercial Roofing Services | Staten Island Wash Kings",
  description: "Professional commercial roofing services in Staten Island. Commercial roof repairs, installation, and maintenance. Licensed, insured, and 5-star rated.",
};

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

