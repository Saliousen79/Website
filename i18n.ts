import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Unterstützte Sprachen
export const locales = ['de', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validiere, dass die eingehende Locale unterstützt wird
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
