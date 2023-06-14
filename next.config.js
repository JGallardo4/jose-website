/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['tsx'],
    experimental: {
        appDir: true,
        mdxRs: true,
    },
}

module.exports = nextConfig
