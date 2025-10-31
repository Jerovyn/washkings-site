"use client";

import { useEffect } from "react";

export default function TrustindexWidget() {
  useEffect(() => {
    // Load Trustindex script if not already loaded
    if (!document.querySelector('script[src*="trustindex.io/loader.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.trustindex.io/loader.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Trustindex will automatically initialize widgets when script loads
    // Widget is configured via data attributes on the div below
  }, []);

  return (
    <div
      className="ti-widget"
      data-layout-id="5"
      data-layout-category="slider"
      data-set-id="ligth-border"
      data-pid="8700dcb256aa932cf84678d8e97"
      data-language="en"
      data-close-locale="Close"
      data-review-target-width="275"
      data-css-version="2"
      data-footer-link-domain="trustindex.io"
      data-review-text-mode="readmore"
      data-reply-by-locale="Owner's reply"
      data-pager-autoplay-timeout="6"
      data-slider-loop="1"
      data-trustindex-widget="true"
      data-no-translation="true"
    />
  );
}

