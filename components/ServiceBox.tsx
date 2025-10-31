"use client";

import { useState } from "react";
import Link from "next/link";

interface ServiceBoxProps {
  service: string;
  icon: string;
  residentialUrl: string;
  commercialUrl: string;
  residentialImage?: string;
  commercialImage?: string;
}

export default function ServiceBox({ 
  service, 
  icon, 
  residentialUrl, 
  commercialUrl,
  residentialImage = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  commercialImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
}: ServiceBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
    >
      {/* Base Card */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        !isHovered ? "opacity-100" : "opacity-0 scale-110"
      }`}>
        <div className="h-full bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>
          <div className="relative z-10">
            <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
              {icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">{service}</h3>
            <p className="text-white/90 text-lg">Hover or tap to explore</p>
          </div>
        </div>
      </div>

      {/* Hovered State - Split View with Images */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isHovered ? "opacity-100" : "opacity-0 scale-90"
      }`}>
        <div className="h-full grid grid-cols-1 gap-2 p-2">
          {/* Residential Option */}
          <Link
            href={residentialUrl}
            className="relative group/residential h-full rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/residential:scale-110"
              style={{ backgroundImage: `url(${residentialImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative h-full flex flex-col items-center justify-end p-6">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-4 border border-white/20">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Residential</h4>
              <p className="text-white/90 text-sm">Perfect for homes</p>
            </div>
          </Link>

          {/* Commercial Option */}
          <Link
            href={commercialUrl}
            className="relative group/commercial h-full rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/commercial:scale-110"
              style={{ backgroundImage: `url(${commercialImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative h-full flex flex-col items-center justify-end p-6">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-4 border border-white/20">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Commercial</h4>
              <p className="text-white/90 text-sm">Built for businesses</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 ${
        isHovered ? "opacity-50" : ""
      }`} />
    </div>
  );
}
