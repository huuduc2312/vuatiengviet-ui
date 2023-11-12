/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/tim-tu", permanent: true }];
  },
};

module.exports = nextConfig;
