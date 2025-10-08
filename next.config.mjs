/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  trailingSlash: true,       // .../seite/index.html
  images: { unoptimized: true }, // nötig für Static Export
}

export default nextConfig
