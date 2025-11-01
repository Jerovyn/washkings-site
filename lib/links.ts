export const PHONE = `tel:${process.env.NEXT_PUBLIC_PHONE ?? ''}`;
export const JOBBER_URL = process.env.NEXT_PUBLIC_JOBBER_BOOK_URL ?? '/api/lead';
export const BRAND = process.env.NEXT_PUBLIC_BRAND_NAME ?? 'Exterior Cleaning Co';

export const jobberWith = (service: string) => 
  `${JOBBER_URL}${JOBBER_URL.includes('?') ? '&' : '?'}service=${encodeURIComponent(service)}`;

