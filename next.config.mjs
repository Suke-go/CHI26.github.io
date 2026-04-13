/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_PAGES_REPO || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: repo ? `/${repo}` : "",
  assetPrefix: repo ? `/${repo}/` : "",
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
