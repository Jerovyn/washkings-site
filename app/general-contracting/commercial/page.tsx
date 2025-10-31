import ServiceLandingPage from "@/components/ServiceLandingPage";

export default function GeneralContractingCommercial() {
  return (
    <ServiceLandingPage
      title="Commercial General Contracting"
      description="From office buildouts to retail renovations, we provide comprehensive commercial contracting services for businesses across Staten Island. We deliver projects on time and within budget."
      servicesList={[
        "Commercial Buildouts",
        "Office Renovations",
        "Retail Space Construction",
        "Facility Maintenance",
        "Tenant Improvements",
        "Commercial Remodeling",
      ]}
      benefits={[
        "Licensed Commercial Contractors",
        "Project Management Expertise",
        "On-Time & On-Budget Delivery",
        "Commercial Insurance Coverage",
        "Code Compliance Guaranteed",
      ]}
      serviceType="General Contracting"
      clientType="Commercial"
      icon="🔨"
    />
  );
}

