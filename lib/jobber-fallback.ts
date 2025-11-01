'use client';

import { JOBBER_URL } from './links';

let jobberCheckCache: { valid: boolean; timestamp: number } | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function checkJobberAvailable(): Promise<boolean> {
  // If using fallback, don't check
  if (JOBBER_URL === '/api/lead' || !JOBBER_URL.startsWith('http')) {
    return false;
  }

  // Use cache if available
  if (jobberCheckCache && Date.now() - jobberCheckCache.timestamp < CACHE_DURATION) {
    return jobberCheckCache.valid;
  }

  try {
    // Quick HEAD request with timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000); // 3 second timeout

    const response = await fetch(JOBBER_URL, {
      method: 'HEAD',
      mode: 'no-cors', // Avoid CORS issues
      signal: controller.signal,
    });

    clearTimeout(timeout);

    // With no-cors, we can't read response, so assume it's available
    // If fetch doesn't throw, the URL is likely reachable
    jobberCheckCache = { valid: true, timestamp: Date.now() };
    return true;
  } catch (error) {
    // Network error, timeout, or unreachable
    jobberCheckCache = { valid: false, timestamp: Date.now() };
    return false;
  }
}

