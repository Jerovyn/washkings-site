'use client';

// Analytics event emitter
// Compatible with Google Analytics 4, Facebook Pixel, and custom tracking

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
): void {
  // Google Analytics 4 (dataLayer)
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }

  // Console logging for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, eventParams);
  }
}

// Predefined events
export const analytics = {
  bookClick: (service?: string, type?: string) =>
    trackEvent('book_click', { service, type }),
  
  callClick: (source?: string) =>
    trackEvent('call_click', { source }),
  
  serviceSelect: (service: string, type?: string) =>
    trackEvent('service_select', { service, type }),
  
  formSubmit: (service?: string, type?: string) =>
    trackEvent('form_submit', { service, type }),
  
  audioToggle: (enabled: boolean) =>
    trackEvent('audio_toggle', { enabled }),
  
  effectsToggle: (enabled: boolean) =>
    trackEvent('effects_toggle', { enabled }),
  
  pwaInstall: (source: string) =>
    trackEvent('pwa_install', { source }),
};


