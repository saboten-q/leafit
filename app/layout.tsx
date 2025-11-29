import type { Metadata } from "next";
import "./globals.css";
import { WebsiteStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://leafit.vercel.app'), // 実際のドメインに変更してください
  title: {
    default: "Leafit - 日当たり診断で最適な観葉植物を見つける",
    template: "%s | Leafit",
  },
  description: "部屋の日当たり条件から最適な観葉植物を提案するWebアプリ。簡単な3ステップ診断で、あなたの部屋にぴったりの植物が見つかります。初心者向けから上級者向けまで50種類の植物を収録。",
  keywords: [
    "観葉植物",
    "診断",
    "日当たり",
    "育て方",
    "初心者",
    "パキラ",
    "モンステラ",
    "ガジュマル",
    "サンスベリア",
    "ポトス",
    "インテリアグリーン",
    "植物図鑑",
  ],
  authors: [{ name: "Leafit" }],
  creator: "Leafit",
  publisher: "Leafit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Leafit - 日当たり診断で最適な観葉植物を見つける",
    description: "部屋の日当たり条件から最適な観葉植物を提案。簡単3ステップ診断であなたにぴったりの植物が見つかります。",
    url: "https://leafit.vercel.app", // 実際のドメインに変更してください
    siteName: "Leafit",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.png", // OG画像を後で作成する場合
        width: 1200,
        height: 630,
        alt: "Leafit - 日当たり診断で最適な観葉植物を見つける",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leafit - 日当たり診断で最適な観葉植物を見つける",
    description: "部屋の日当たり条件から最適な観葉植物を提案。簡単3ステップ診断であなたにぴったりの植物が見つかります。",
    images: ["/og-image.png"], // OG画像を後で作成する場合
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console認証用（必要に応じて追加）
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* 追加のメタタグ */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://leafit.vercel.app" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* テーマカラー */}
        <meta name="theme-color" content="#059669" />
        {/* 構造化データ */}
        <WebsiteStructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

