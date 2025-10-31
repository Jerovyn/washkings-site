import { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Residential General Contracting Services | Staten Island Wash Kings",
  description: "Professional residential general contracting services in Staten Island. Home improvements, repairs, and renovations. Licensed, insured, and 5-star rated.",
};

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

