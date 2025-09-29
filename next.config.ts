import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopack: {
      // Next가 잘못 추정하는 워크스페이스 루트를 명시적으로 고정
      root: __dirname,
    },
  },
};

export default nextConfig;
