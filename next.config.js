const path = require("path");
// const withTM = require("next-transpile-modules")(["@fancyapps/ui"]);

const isDebug = true;
const domain = isDebug ? "" : "https://www.demo.com";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // compilerOptions: {
  //   baseUrl: ".",
  // },
  // paths: {
  //   "@/styles/*": ["styles/*"],
  // },
  images: {
    // loader: "custom",
    // loader: "akamai",
    loader: "imgix",
    path: "/",
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
    basePath: domain,
  },
  assetPrefix: domain,
  // pageExtensions: ["html", "tsx", "ts", "jsx", "js"],
  // rewrites: async () => [
  //   {
  // //copy from: https://www.radiusmedia.de/service/impressum
  //     source: "/impressum.html",
  //     destination: "/html/impressum/index.html",
  //   },
  // ],

  // rewrites: async () => [
  //   {
  //     source: "/3d_cloud/:path*",
  //     destination: "/3d_cloud",
  //   },
  //   {
  //     source: "/ARmodelsView.html",
  //     destination: "/src/pages/api/ARmodelsVIew.js",
  //   },
  // ],
};

module.exports = (_phase, { defaultConfig }) => {
  // const plugins = [withTM];
  const plugins = [];
  const settings = plugins.reduce((acc, plugin) => plugin(acc), {
    // ...defaultConfig,
    ...nextConfig,
  });
  return settings;
};

// Original Settings
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
