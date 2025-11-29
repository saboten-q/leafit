/**
 * 構造化データ（JSON-LD）コンポーネント
 * Googleなどの検索エンジンにリッチスニペット情報を提供
 */

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Leafit",
    "alternateName": "リーフィット",
    "url": "https://leafit.vercel.app",
    "description": "部屋の日当たり条件から最適な観葉植物を提案するWebアプリ。簡単な3ステップ診断で、あなたの部屋にぴったりの植物が見つかります。",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "100"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbStructuredData({ 
  items 
}: { 
  items: Array<{ name: string; url: string }> 
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function PlantArticleStructuredData({ 
  plantName, 
  description, 
  imageUrl,
  datePublished = "2024-01-01",
  dateModified = new Date().toISOString().split('T')[0],
}: { 
  plantName: string;
  description: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${plantName}の育て方`,
    "description": description,
    "image": imageUrl || "https://leafit.vercel.app/og-image.png",
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": "Leafit"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Leafit",
      "logo": {
        "@type": "ImageObject",
        "url": "https://leafit.vercel.app/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function FAQStructuredData({ 
  faqs 
}: { 
  faqs: Array<{ question: string; answer: string }> 
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function HowToStructuredData({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

