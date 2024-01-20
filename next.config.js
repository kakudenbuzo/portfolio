/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  //next.js config
  output: "export",
  assetPrefix: isProd ? "/portfolio/" : "",
  basePath: isProd ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
})
