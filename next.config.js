const withNextIntl = require('next-intl/plugin')(
  // Dies ist der Standardpfad zur i18n config
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withNextIntl(nextConfig);
