"use client";

interface QuickBookButtonProps {
  serviceType?: string;
  clientType?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const JOBBER_BOOKING_URL = "https://clienthub.getjobber.com/booking/4384d7ab-b4ef-4782-836c-7912be1238ec";

export default function QuickBookButton({
  serviceType = "",
  clientType = "",
  variant = "primary",
  size = "md",
}: QuickBookButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2 text-base",
    md: "px-8 py-3 text-lg",
    lg: "px-10 py-4 text-xl",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl",
    secondary: "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl",
  };

  return (
    <a
      href={JOBBER_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300 hover:scale-105 transform ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      <span>⚡</span>
      <span>Book Now</span>
    </a>
  );
}


