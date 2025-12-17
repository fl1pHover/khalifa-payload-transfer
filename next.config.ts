import { withPayload } from '@payloadcms/next/withPayload'
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  webpack: (webpackConfig: any) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },

  images: {
    // ATTENTION: MOCK
    domains: ['cdn.dummyjson.com'],
  },
}

export default withPayload(withMDX(nextConfig, { devBundleServerPackages: false }))
