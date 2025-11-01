"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { analytics } from "@/lib/analytics";

interface LeadFormProps {
  serviceType?: string;
  clientType?: string;
}

export default function LeadForm({ serviceType = "", clientType = "" }: LeadFormProps) {
  const formStartTime = useRef<number>(Date.now());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    serviceType: serviceType,
    clientType: clientType,
    // Honeypot field (hidden from users)
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Honeypot check: if website field is filled, it's a bot
    if (formData.website) {
      console.log("Bot detected via honeypot");
      setSubmitStatus("error");
      return;
    }

    // Timing guard: legitimate forms take at least 3 seconds to complete
    const formDuration = Date.now() - formStartTime.current;
    if (formDuration < 3000) {
      console.log("Form submitted too quickly, possible bot");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website: undefined, // Don't send honeypot field
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        analytics.formSubmit(serviceType, clientType);
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
          serviceType: serviceType,
          clientType: clientType,
          website: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px" }}
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-semibold mb-1">
          Service Address
        </label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent text-gray-900"
        />
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Thank you! We&apos;ll contact you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          There was an error submitting your form. Please call us instead.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
