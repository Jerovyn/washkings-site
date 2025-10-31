"use client";

import siteConfig from "@/config/site_config.json";

interface ServiceButtonsProps {
  className?: string;
}

export default function ServiceButtons({ className = "" }: ServiceButtonsProps) {
  const services = [
    { name: "Power Washing", value: "power-washing" },
    { name: "Holiday Lights", value: "holiday-lights" },
    { name: "Roofing", value: "roofing" },
    { name: "General Contracting", value: "general-contracting" },
  ];

  const handleServiceClick = (serviceValue: string) => {
    // For now, all services go to same Jobber booking
    // In future, can route to service-specific booking URLs
    window.open(siteConfig.jobberUrl, "_blank");
  };

  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {services.map((service) => (
        <button
          key={service.value}
          onClick={() => handleServiceClick(service.value)}
          data-service={service.value}
          className="px-4 py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-sm md:text-base font-semibold hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
          aria-label={`Book ${service.name}`}
        >
          {service.name}
        </button>
      ))}
    </div>
  );
}

