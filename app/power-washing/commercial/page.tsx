import { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Commercial Power Washing Services | Staten Island Wash Kings",
  description: "Professional commercial power washing services in Staten Island. Storefront cleaning, parking lot maintenance, building exterior washing, and more. Licensed, insured, and 5-star rated.",
};

export default function PowerWashingCommercial() {
  return (
    <ServiceLandingPage
      title="Commercial Power Washing"
      description="Staten Island Wash Kings delivers trusted commercial pressure washing services for businesses across Staten Island. From storefronts to parking lots, we help restore surfaces using eco-friendly techniques."
      servicesList={[
        "Building Exterior Washing",
        "Storefront and Walkway Cleaning",
        "Restaurant Patio Restoration",
        "Gas Station Pad and Canopy Cleaning",
        "Parking Lot & Garage Surface Cleaning",
        "Fleet Vehicle Washing",
        "Warehouse Dock and Equipment Cleaning",
        "Office Complex Maintenance",
        "Apartment and HOA Cleaning",
        "School & Campus Cleaning",
        "Shopping Center & Mall Cleaning",
        "Hotel & Resort Cleaning",
        "Roof Soft Washing",
        "Graffiti Removal",
        "Awning & Signboard Cleaning",
      ]}
      benefits={[
        "5-Star Rated Commercial Cleaning",
        "Licensed, Insured, and Certified Crew",
        "Eco-Safe Detergents and Equipment",
        "Weekend & Evening Appointments Available",
        "Customer Satisfaction Commitment",
      ]}
      serviceType="Power Washing"
      clientType="Commercial"
      icon="💦"
    />
  );
}

