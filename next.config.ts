import createMDX from '@next/mdx'
import { withPayload } from '@payloadcms/next/withPayload'

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

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  images: {
    // ATTENTION: MOCK
    domains: ['cdn.dummyjson.com'],
  },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withPayload(withMDX(nextConfig))
// export default withPayload(withMDX(nextConfig, { devBundleServerPackages: false }))
