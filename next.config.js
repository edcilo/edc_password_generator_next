/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["storage.edcilo.com"],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
