import ServiceLandingPage from "@/components/ServiceLandingPage";

export default function PowerWashingResidential() {
  return (
    <ServiceLandingPage
      title="Residential Power Washing"
      description="We protect and enhance your home's beauty with trusted exterior cleaning services across Staten Island. We safely clean siding, driveways, patios, and more."
      servicesList={[
        "House Exterior Soft Washing",
        "Driveway Pressure Washing",
        "Patio and Deck Cleaning",
        "Fence Cleaning and Brightening",
        "Roof Soft Washing",
        "Gutter Exterior Cleaning",
        "Pool Deck Cleaning",
        "Sidewalk Mold Removal",
        "Garage Door Cleaning",
        "Outdoor Furniture Cleaning",
        "Rust and Stain Removal",
      ]}
      benefits={[
        "5-Star Rated Residential Cleaning",
        "Licensed, Insured, and Trained Technicians",
        "Safe, Eco-Friendly Soft Washing Methods",
        "Convenient Scheduling Options",
        "100% Satisfaction Guarantee",
      ]}
      serviceType="Power Washing"
      clientType="Residential"
      icon="💦"
    />
  );
}

