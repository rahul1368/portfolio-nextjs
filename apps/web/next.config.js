/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.godaddy.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'metamap.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'etmoney.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.shopclues.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'doubtnut.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
