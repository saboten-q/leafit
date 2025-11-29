import Link from "next/link";
import { plantDatabase } from "@/lib/plant-database";
import { generateSlug } from "@/lib/plant-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "植物図鑑 | Leafit - 全50種類の観葉植物",
  description: "Leafitの植物図鑑。パキラ、モンステラ、ガジュマルなど人気の観葉植物50種類の育て方を詳しく解説。初心者向けから上級者向けまで。",
  keywords: ["観葉植物", "植物図鑑", "育て方", "初心者", "パキラ", "モンステラ", "インテリアグリーン"],
  openGraph: {
    title: "植物図鑑 | Leafit",
    description: "50種類の観葉植物の育て方を詳しく解説",
    type: "website",
  },
};

export default function PlantsPage() {
  // 難易度別にグループ化
  const easyPlants = plantDatabase.filter(p => p.careLevel === "easy");
  const moderatePlants = plantDatabase.filter(p => p.careLevel === "moderate");
  const advancedPlants = plantDatabase.filter(p => p.careLevel === "advanced");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-stone-900 dark:via-neutral-900 dark:to-amber-950">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-block text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition"
          >
            Leafit
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900 dark:text-amber-100">
            🌿 植物図鑑
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-lg mb-6">
            全50種類の観葉植物の育て方を詳しく解説
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-200 shadow-lg"
          >
            ← 診断ページに戻る
          </Link>
        </div>

        {/* 初心者向け */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold text-lg mr-3">
              初心者向け
            </div>
            <p className="text-stone-600 dark:text-stone-400">
              育てやすく、失敗しにくい植物たち
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {easyPlants.map((plant) => (
              <PlantCard key={plant.name} plant={plant} />
            ))}
          </div>
        </section>

        {/* 中級者向け */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-amber-500 text-white px-4 py-2 rounded-lg font-bold text-lg mr-3">
              中級者向け
            </div>
            <p className="text-stone-600 dark:text-stone-400">
              少し手間がかかるが、育てがいのある植物たち
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {moderatePlants.map((plant) => (
              <PlantCard key={plant.name} plant={plant} />
            ))}
          </div>
        </section>

        {/* 上級者向け */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg mr-3">
              上級者向け
            </div>
            <p className="text-stone-600 dark:text-stone-400">
              こだわりの栽培を楽しめる植物たち
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {advancedPlants.map((plant) => (
              <PlantCard key={plant.name} plant={plant} />
            ))}
          </div>
        </section>

        {/* フッター */}
        <footer className="mt-16 text-center text-sm text-amber-800 dark:text-amber-400">
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

// 植物カード コンポーネント
function PlantCard({ plant }: { plant: typeof plantDatabase[0] }) {
  const slug = generateSlug(plant.name);
  
  // 日照レベルのアイコン
  const getSunlightIcon = (level: number) => {
    if (level >= 4) return "☀️☀️☀️";
    if (level >= 3) return "☀️☀️";
    return "☀️";
  };

  return (
    <Link
      href={`/plants/${slug}`}
      className="bg-white dark:bg-stone-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100 dark:border-stone-700 hover:scale-105 group"
    >
      {plant.imageUrl && (
        <div className="relative w-full h-48 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-stone-700 dark:to-stone-800">
          <img
            src={plant.imageUrl}
            alt={plant.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
            {plant.name}
          </h3>
          <span
            className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2 ${
              plant.careLevel === "easy"
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                : plant.careLevel === "moderate"
                ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
            }`}
          >
            {plant.careLevel === "easy"
              ? "初心者"
              : plant.careLevel === "moderate"
              ? "中級者"
              : "上級者"}
          </span>
        </div>
        
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-3 line-clamp-2">
          {plant.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-500">
          <div>
            <span className="mr-2">{getSunlightIcon(plant.sunlightLevel)}</span>
            <span>日照レベル {plant.sunlightLevel}</span>
          </div>
          <div>
            💧 {plant.wateringFrequency}
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-amber-100 dark:border-stone-700">
          <p className="text-xs text-stone-500 dark:text-stone-500 italic">
            花言葉：{plant.flowerLanguage}
          </p>
        </div>
      </div>
    </Link>
  );
}

