/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/karmp.github.io" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/karmp.github.io/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
