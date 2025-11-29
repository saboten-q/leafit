import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  getPlantBySlug, 
  getAllPlantSlugs, 
  getPlantContent,
  generateSlug,
} from "@/lib/plant-content";
import { plantDatabase } from "@/lib/plant-database";
import type { Metadata } from "next";
import { 
  BreadcrumbStructuredData, 
  PlantArticleStructuredData, 
  FAQStructuredData,
  HowToStructuredData,
} from "@/components/StructuredData";
import { RakutenProductsSection } from "@/components/RakutenProductsSection";

// 静的生成のためのパス生成
export async function generateStaticParams() {
  const slugs = getAllPlantSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// メタデータ生成
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  const content = getPlantContent(slug);
  
  if (!plant) {
    return {
      title: "植物が見つかりません | Leafit",
    };
  }

  return {
    title: `${plant.name}の育て方 | Leafit 植物図鑑`,
    description: content.metaDescription,
    keywords: content.keywords,
    openGraph: {
      title: `${plant.name}の育て方 | Leafit`,
      description: content.metaDescription,
      type: "article",
      images: plant.imageUrl ? [plant.imageUrl] : [],
    },
  };
}

export default async function PlantDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  const content = getPlantContent(slug);
  
  if (!plant) {
    notFound();
  }

  // 日照レベルの表示
  const getSunlightText = (level: number) => {
    if (level >= 4) return "☀️☀️☀️ 日光が大好き";
    if (level >= 3) return "☀️☀️ 明るい場所が好き";
    if (level >= 2) return "☀️ 半日陰でもOK";
    return "🌙 暗い場所でも育つ";
  };

  // 関連植物（同じ難易度の植物を3つ）
  const relatedPlants = plantDatabase
    .filter(p => p.careLevel === plant.careLevel && p.name !== plant.name)
    .slice(0, 3);

  // 構造化データ用
  const baseUrl = "https://leafit.vercel.app";
  const breadcrumbItems = [
    { name: "ホーム", url: baseUrl },
    { name: "植物図鑑", url: `${baseUrl}/plants` },
    { name: plant.name, url: `${baseUrl}/plants/${slug}` },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-stone-900 dark:via-neutral-900 dark:to-amber-950">
      {/* 構造化データ */}
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <PlantArticleStructuredData
        plantName={plant.name}
        description={content.metaDescription}
        imageUrl={plant.imageUrl}
      />
      <FAQStructuredData faqs={content.faq} />
      <HowToStructuredData
        name={`${plant.name}の育て方`}
        description={content.careGuide.basic}
        steps={[
          { name: "水やり", text: content.careGuide.watering },
          { name: "置き場所の選定", text: content.careGuide.placement },
          { name: "植え替え", text: content.careGuide.repotting },
        ]}
      />
      
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        
        {/* パンくずリスト */}
        <nav className="mb-6 text-sm text-stone-600 dark:text-stone-400">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href="/plants" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
            植物図鑑
          </Link>
          <span className="mx-2">/</span>
          <span className="text-amber-900 dark:text-amber-100 font-medium">{plant.name}</span>
        </nav>

        {/* 1. ヒーローセクション */}
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-xl overflow-hidden mb-8 border border-amber-100 dark:border-stone-700">
          <div className="md:flex">
            {/* 画像 */}
            {plant.imageUrl && (
              <div className="md:w-2/5 relative h-64 md:h-auto bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-stone-700 dark:to-stone-800">
                <img
                  src={plant.imageUrl}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
            
            {/* テキスト */}
            <div className={`p-8 ${plant.imageUrl ? 'md:w-3/5' : 'w-full'}`}>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-4xl font-bold text-amber-900 dark:text-amber-100">
                  {plant.name}
                </h1>
                <span
                  className={`px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap ml-4 ${
                    plant.careLevel === "easy"
                      ? "bg-emerald-500 text-white"
                      : plant.careLevel === "moderate"
                      ? "bg-amber-500 text-white"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {plant.careLevel === "easy"
                    ? "初心者向け"
                    : plant.careLevel === "moderate"
                    ? "中級者向け"
                    : "上級者向け"}
                </span>
              </div>
              
              <p className="text-xl text-emerald-700 dark:text-emerald-400 font-medium mb-4">
                {content.catchphrase}
              </p>
              
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
                {plant.description}
              </p>
            </div>
          </div>
        </div>

        {/* 2. クイック情報カード */}
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-xl p-6 mb-8 border border-amber-100 dark:border-stone-700">
          <h2 className="text-2xl font-bold mb-6 text-amber-900 dark:text-amber-100 flex items-center">
            <span className="mr-2">📊</span>
            基本情報
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-3xl mb-2">💧</div>
              <div className="text-xs text-stone-600 dark:text-stone-400 mb-1">水やり頻度</div>
              <div className="font-bold text-stone-800 dark:text-stone-200">{plant.wateringFrequency}</div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <div className="text-3xl mb-2">☀️</div>
              <div className="text-xs text-stone-600 dark:text-stone-400 mb-1">日当たり</div>
              <div className="font-bold text-stone-800 dark:text-stone-200 text-sm">{getSunlightText(plant.sunlightLevel)}</div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <div className="text-3xl mb-2">📏</div>
              <div className="text-xs text-stone-600 dark:text-stone-400 mb-1">サイズ</div>
              <div className="font-bold text-stone-800 dark:text-stone-200">{content.size}</div>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-rose-200 dark:border-rose-800">
              <div className="text-3xl mb-2">🌡️</div>
              <div className="text-xs text-stone-600 dark:text-stone-400 mb-1">適温</div>
              <div className="font-bold text-stone-800 dark:text-stone-200">{content.temperature}</div>
            </div>
          </div>
          
          <div className="mt-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="text-xs text-stone-600 dark:text-stone-400 mb-1">💰 価格帯</div>
            <div className="font-bold text-lg text-stone-800 dark:text-stone-200">{content.priceRange}</div>
          </div>
        </div>

        {/* 3. こんな人におすすめ */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl shadow-lg p-6 mb-8 border-2 border-emerald-300 dark:border-emerald-700">
          <h2 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-emerald-100 flex items-center">
            <span className="mr-2">✨</span>
            こんな人におすすめ
          </h2>
          <div className="space-y-2">
            {content.recommendedFor.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-stone-800 p-3 rounded-lg text-stone-700 dark:text-stone-300 font-medium shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* 4. 育て方ガイド（タブ式） */}
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-xl p-6 mb-8 border border-amber-100 dark:border-stone-700">
          <h2 className="text-2xl font-bold mb-6 text-amber-900 dark:text-amber-100 flex items-center">
            <span className="mr-2">🪴</span>
            育て方ガイド
          </h2>
          
          <div className="space-y-6">
            {/* 基本の育て方 */}
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                基本の育て方
              </h3>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                {content.careGuide.basic}
              </p>
            </div>
            
            {/* 水やり */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-2">
                💧 水やり
              </h3>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                {content.careGuide.watering}
              </p>
            </div>
            
            {/* 置き場所 */}
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-lg font-bold text-amber-700 dark:text-amber-400 mb-2">
                ☀️ 置き場所
              </h3>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                {content.careGuide.placement}
              </p>
            </div>
            
            {/* 植え替え */}
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="text-lg font-bold text-teal-700 dark:text-teal-400 mb-2">
                🌱 植え替え
              </h3>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                {content.careGuide.repotting}
              </p>
            </div>
            
            {/* よくある失敗 */}
            <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4 border-2 border-rose-300 dark:border-rose-700">
              <h3 className="text-lg font-bold text-rose-700 dark:text-rose-400 mb-3 flex items-center">
                <span className="mr-2">⚠️</span>
                よくある失敗と対策
              </h3>
              <div className="space-y-2">
                {content.careGuide.commonMistakes.map((mistake, index) => (
                  <div
                    key={index}
                    className="text-stone-700 dark:text-stone-300 leading-relaxed"
                  >
                    {mistake}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5. Q&A */}
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-xl p-6 mb-8 border border-amber-100 dark:border-stone-700">
          <h2 className="text-2xl font-bold mb-6 text-amber-900 dark:text-amber-100 flex items-center">
            <span className="mr-2">💬</span>
            よくある質問
          </h2>
          
          <div className="space-y-4">
            {content.faq.map((item, index) => (
              <details
                key={index}
                className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-stone-700 dark:to-neutral-800 rounded-lg border border-amber-200 dark:border-stone-600 overflow-hidden group"
              >
                <summary className="cursor-pointer p-4 font-bold text-stone-800 dark:text-stone-200 hover:bg-amber-100 dark:hover:bg-stone-600 transition list-none">
                  <div className="flex items-center">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400 group-open:rotate-90 transition-transform">
                      ▶
                    </span>
                    <span>Q. {item.question}</span>
                  </div>
                </summary>
                <div className="p-4 pt-0 text-stone-700 dark:text-stone-300 leading-relaxed">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">A. </span>
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* 6. 品種バリエーション */}
        {plant.examples.length > 1 && (
          <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-xl p-6 mb-8 border border-amber-100 dark:border-stone-700">
            <h2 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100 flex items-center">
              <span className="mr-2">🌿</span>
              品種バリエーション
            </h2>
            <div className="flex flex-wrap gap-2">
              {plant.examples.map((example, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-stone-800 dark:text-stone-200 rounded-lg border border-emerald-200 dark:border-emerald-700 font-medium"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 7. 花言葉 */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg p-6 mb-8 border-2 border-purple-300 dark:border-purple-700">
          <h2 className="text-xl font-bold mb-2 text-purple-900 dark:text-purple-100 flex items-center">
            <span className="mr-2">🌸</span>
            花言葉
          </h2>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {plant.flowerLanguage}
          </p>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
            プレゼントにもぴったりです
          </p>
        </div>

        {/* 8. 購入セクション（楽天商品横スクロール） */}
        <RakutenProductsSection
          plantName={plant.name}
          searchKeyword={plant.searchKeyword}
          affiliateUrl={plant.affiliateUrl}
        />

        {/* 9. 関連する植物 */}
        {relatedPlants.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-amber-900 dark:text-amber-100 flex items-center">
              <span className="mr-2">🌱</span>
              この植物も育てやすい（同じ難易度）
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPlants.map((relatedPlant) => {
                const relatedSlug = generateSlug(relatedPlant.name);
                return (
                  <Link
                    key={relatedPlant.name}
                    href={`/plants/${relatedSlug}`}
                    className="bg-white dark:bg-stone-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100 dark:border-stone-700 hover:scale-105"
                  >
                    {relatedPlant.imageUrl && (
                      <div className="relative w-full h-40 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-stone-700 dark:to-stone-800">
                        <img
                          src={relatedPlant.imageUrl}
                          alt={relatedPlant.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-2">
                        {relatedPlant.name}
                      </h3>
                      <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">
                        {relatedPlant.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* 10. 診断に戻るCTA */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-xl p-8 mb-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            🏠 あなたの部屋に合う植物を診断
          </h2>
          <p className="mb-6 text-emerald-50">
            部屋の日当たりから、あなたにぴったりの植物を提案します
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-emerald-600 font-bold py-4 px-10 rounded-xl hover:bg-emerald-50 transition duration-200 shadow-lg"
          >
            診断を始める →
          </Link>
        </div>

        {/* フッター */}
        <footer className="mt-12 text-center text-sm text-amber-800 dark:text-amber-400">
          <Link
            href="/"
            className="text-lg font-semibold mb-2 text-emerald-700 dark:text-emerald-400 hover:underline inline-block"
          >
            Leafit
          </Link>
          <p className="mb-2">
            環境に合う植物なら、管理もラクに。無理なく続くグリーンライフを始めましょう
          </p>
        </footer>
      </div>
    </div>
  );
}

