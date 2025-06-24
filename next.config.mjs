import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "portfolio-dhavin.vercel.app",
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
