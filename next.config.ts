import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.rakuten.co.jp',
      },
      {
        protocol: 'https',
        hostname: 'thumbnail.image.rakuten.co.jp',
      },
    ],
  },
  // トレイリングスラッシュなし（SEO推奨）
  trailingSlash: false,
  // 圧縮を有効化
  compress: true,
};

export default nextConfig;

