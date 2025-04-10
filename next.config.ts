/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apimaterial.sistemaeditoracapro.com.br',
        pathname: '/uploads/**',
      },
    ],
  },
};
