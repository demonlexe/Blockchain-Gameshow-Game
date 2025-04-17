import type { NextConfig } from "next";

const ProdBasePath = "/Blockchain-Gameshow-Game";
const isProd = process.env.NODE_ENV === "production";

function getBasePath() {
  let basePath = "";

  if (isProd && ProdBasePath) {
    basePath = ProdBasePath;
  }

  console.log("Base path is: ", basePath);
  return basePath;
}

const nextConfig: NextConfig = {
  /* config options here */
  output: isProd ? "export" : "standalone",

  basePath: getBasePath(),
};

export default nextConfig;
