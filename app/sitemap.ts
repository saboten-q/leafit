import { MetadataRoute } from 'next';
import { getAllPlantSlugs } from '@/lib/plant-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leafit.vercel.app'; // 実際のドメインに変更してください
  
  // 基本ページ
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/plants`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];
  
  // 全植物の個別ページ
  const plantSlugs = getAllPlantSlugs();
  const plantPages = plantSlugs.map((slug) => ({
    url: `${baseUrl}/plants/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  return [...routes, ...plantPages];
}

