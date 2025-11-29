import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://leafit.vercel.app'; // 実際のドメインに変更してください
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'], // APIルートはクロール不要
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

