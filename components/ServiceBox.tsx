"use client";

import { useState } from "react";
import Link from "next/link";

interface ServiceBoxProps {
  service: string;
  icon: string;
  residentialUrl: string;
  commercialUrl: string;
}

export default function ServiceBox({ service, icon, residentialUrl, commercialUrl }: ServiceBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
    >
      <div className="p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-text-primary mb-4">{service}</h3>
        
        {isHovered ? (
          <div className="space-y-3 w-full animate-fade-in">
            <Link
              href={residentialUrl}
              className="block w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              🏠 Residential
            </Link>
            <Link
              href={commercialUrl}
              className="block w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              🚚 Commercial
            </Link>
          </div>
        ) : (
          <p className="text-text-secondary">Hover or tap to see options</p>
        )}
      </div>
    </div>
  );
}

