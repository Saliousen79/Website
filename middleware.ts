import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // Liste der unterstützten Sprachen
  locales,

  // Standard-Sprache
  defaultLocale: 'de',

  // Locale immer im Pfad anzeigen
  localePrefix: 'always',
});

export const config = {
  // Matcher für alle Pfade außer API, _next/static, _next/image, favicon.ico
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
