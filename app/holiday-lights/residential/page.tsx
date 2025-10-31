import { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Residential Holiday Lights Installation | Staten Island Wash Kings",
  description: "Professional residential holiday lights installation and removal in Staten Island. Transform your home with beautiful, energy-efficient lighting displays. Licensed, insured, and 5-star rated.",
};

export default function HolidayLightsResidential() {
  return (
    <ServiceLandingPage
      title="Residential Holiday Lights Installation"
      description="Transform your home into a festive wonderland with our professional holiday lights installation services. We design, install, and maintain beautiful holiday displays that make your home the highlight of the neighborhood."
      servicesList={[
        "Custom Holiday Light Design",
        "Professional Installation",
        "Maintenance & Repairs",
        "Seasonal Removal & Storage",
        "LED Energy-Efficient Options",
        "Timed Lighting Controls",
      ]}
      benefits={[
        "Professional Design & Installation",
        "Safe & Secure Setup",
        "Maintenance Included",
        "Energy-Efficient LED Options",
        "Seasonal Service Available",
      ]}
      serviceType="Holiday Lights"
      clientType="Residential"
      icon="✨"
    />
  );
}

