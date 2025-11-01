import { JOBBER_URL, PHONE, BRAND } from './links';

export interface EnvValidationResult {
  isValid: boolean;
  missing: string[];
  warnings: string[];
}

export function validateEnvVars(): EnvValidationResult {
  const missing: string[] = [];
  const warnings: string[] = [];

  // Required env vars
  if (!process.env.NEXT_PUBLIC_PHONE) {
    missing.push('NEXT_PUBLIC_PHONE');
  }
  if (!process.env.NEXT_PUBLIC_JOBBER_BOOK_URL || JOBBER_URL === '/api/lead') {
    warnings.push('NEXT_PUBLIC_JOBBER_BOOK_URL not set - using fallback form');
  }
  if (!process.env.NEXT_PUBLIC_BRAND_NAME) {
    warnings.push('NEXT_PUBLIC_BRAND_NAME not set - using default');
  }

  return {
    isValid: missing.length === 0,
    missing,
    warnings,
  };
}

export function getJobberUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_JOBBER_BOOK_URL;
  if (!url || url === '/api/lead') {
    return null;
  }
  return url;
}

