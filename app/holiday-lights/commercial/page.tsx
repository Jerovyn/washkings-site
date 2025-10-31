import ServiceLandingPage from "@/components/ServiceLandingPage";

export default function HolidayLightsCommercial() {
  return (
    <ServiceLandingPage
      title="Commercial Holiday Lights Installation"
      description="Create a memorable holiday experience for your customers with our commercial holiday lights installation services. From storefronts to large buildings, we create stunning displays that attract customers and boost your business."
      servicesList={[
        "Large-Scale Commercial Displays",
        "Storefront & Facade Lighting",
        "Parking Lot & Walkway Lighting",
        "Custom Corporate Designs",
        "Maintenance & Support",
        "LED Commercial Solutions",
      ]}
      benefits={[
        "Professional Commercial Installations",
        "Boost Holiday Traffic & Sales",
        "Fully Insured & Licensed",
        "Scheduled Maintenance Available",
        "Energy-Efficient Solutions",
      ]}
      serviceType="Holiday Lights"
      clientType="Commercial"
      icon="✨"
    />
  );
}

