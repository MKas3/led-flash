import bundleAnalyzer from '@next/bundle-analyzer';
import createMDX from '@next/mdx';

const withBundleAnalyzer = bundleAnalyzer({
  // eslint-disable-next-line node/prefer-global/process
  enabled: process.env.ANALYZE === 'true' || process.env.ANALYZE === true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    mdxRs: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'led-flash.ru',
        port: '',
        protocol: 'https'
      },
      {
        hostname: 'led-flash.ru',
        port: '',
        protocol: 'http'
      },
      {
        hostname: 'localhost',
        port: '3000',
        protocol: 'http'
      }
    ]
  },
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: true
  }
};

const withMDX = createMDX({});

export default withBundleAnalyzer(withMDX(nextConfig));
