import type { NextConfig } from "next";

const ProdBasePath = "/Blockchain-Gameshow-Game";
const isProd = process.env.NODE_ENV === "production";

function getBasePath() {
  let basePath = "";

  if (isProd && ProdBasePath) {
    basePath = ProdBasePath;
  }

  return basePath;
}

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: getBasePath(),

  publicRuntimeConfig: {
    basePath: getBasePath(),
  },
};

export default nextConfig;
