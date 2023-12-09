/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/tim-tu", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.vuatiengviet.vn",
        port: "",
        pathname: "/uploads/*",
      },
    ],
  },
};

module.exports = nextConfig;
