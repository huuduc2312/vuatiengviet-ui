/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.vuatiengviet.vn",
        port: "",
        pathname: "/uploads/*",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/*",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/tim-tu',
        destination: '/tim-van',
        permanent: true, // Set to true for 301 redirect, or false for 302 redirect
      },
      // You can add more redirect rules here if needed
    ];
  },
};

module.exports = nextConfig;