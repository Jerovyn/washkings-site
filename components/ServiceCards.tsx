"use client";

import siteConfig from "@/config/site_config.json";

interface ServiceCardsProps {
  className?: string;
}

export default function ServiceCards({ className = "" }: ServiceCardsProps) {
  const services = [
    { 
      name: "HOLIDAY LIGHTS", 
      value: "holiday-lights",
      icon: "✨",
      glowClass: "neon-glow-yellow",
      borderColor: "border-[#c8ff00]",
      iconColor: "text-[#c8ff00]"
    },
    { 
      name: "POWER WASHING", 
      value: "power-washing",
      icon: "💦",
      glowClass: "neon-glow-blue",
      borderColor: "border-[#00b4ff]",
      iconColor: "text-[#00b4ff]"
    },
    { 
      name: "GENERAL CONTRACTING", 
      value: "general-contracting",
      icon: "🔨",
      glowClass: "neon-glow-orange",
      borderColor: "border-[#ff8c00]",
      iconColor: "text-[#ff8c00]"
    },
    { 
      name: "ROOFING", 
      value: "roofing",
      icon: "🏠",
      glowClass: "neon-glow-purple",
      borderColor: "border-[#b400ff]",
      iconColor: "text-[#b400ff]"
    },
  ];

  const handleServiceClick = (serviceValue: string) => {
    window.open(siteConfig.jobberUrl, "_blank");
  };

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto ${className}`}>
      {services.map((service) => (
        <button
          key={service.value}
          onClick={() => handleServiceClick(service.value)}
          data-service={service.value}
          className={`group relative bg-black/40 backdrop-blur-md rounded-2xl p-8 border-2 ${service.borderColor} transition-all duration-300 hover:scale-105 transform ${service.glowClass} pulse-glow`}
          aria-label={`Book ${service.name}`}
        >
          {/* Icon */}
          <div className={`text-6xl mb-4 ${service.iconColor} drop-shadow-[0_0_10px_currentColor]`}>
            {service.icon}
          </div>
          
          {/* Service Name */}
          <div className="text-white uppercase font-bold text-sm tracking-wider">
            {service.name}
          </div>
        </button>
      ))}
    </div>
  );
}

