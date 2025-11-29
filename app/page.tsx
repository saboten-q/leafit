"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type {
  DiagnosisInput,
  DiagnosisResult,
  Direction,
  WindowSize,
  DistanceFromWindow,
} from "@/types/plant-diagnosis";
import {
  DirectionLabels,
  WindowSizeLabels,
  DistanceLabels,
  SunlightLevelLabels,
  SunlightLevelDescriptions,
  SunlightLevelColors,
} from "@/types/plant-diagnosis";
import { diagnose, encodeResultToUrl, decodeUrlToInput } from "@/lib/diagnosis-engine";
import { generateSlug } from "@/lib/plant-content";

// 楽天商品の型
interface RakutenProduct {
  itemName: string;
  itemPrice: number;
  itemUrl: string;
  affiliateUrl: string;
  imageUrl: string;
  shopName: string;
  reviewAverage?: number;
  reviewCount?: number;
}

export default function Home() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState<DiagnosisInput>({
    direction: "south",
    windowSize: "medium",
    distanceFromWindow: "near",
    hasObstruction: false,
  });

  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [shareUrl, setShareUrl] = useState<string>("");
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  
  // 各植物の楽天商品を保存
  const [rakutenProducts, setRakutenProducts] = useState<Record<string, RakutenProduct[]>>({});

  // URLパラメータから診断入力を読み込む
  useEffect(() => {
    const input = decodeUrlToInput(searchParams);
    if (input) {
      setFormData(input);
      // 自動的に診断を実行
      const diagnosisResult = diagnose(input);
      setResult(diagnosisResult);
    }
  }, [searchParams]);

  // 楽天商品を取得
  const fetchRakutenProducts = async (searchKeyword: string) => {
    try {
      const response = await fetch(`/api/rakuten-products?keyword=${encodeURIComponent(searchKeyword)}`);
      if (!response.ok) {
        console.error("商品取得エラー:", response.status);
        return [];
      }
      const data = await response.json();
      return data.products || [];
    } catch (error) {
      console.error("商品取得エラー:", error);
      return [];
    }
  };

  // 診断結果が更新されたら、各植物の商品を取得
  useEffect(() => {
    if (result && result.recommendedPlants.length > 0) {
      const fetchAllProducts = async () => {
        for (let i = 0; i < result.recommendedPlants.length; i++) {
          const plant = result.recommendedPlants[i];
          // searchKeywordがあればそれを使用、なければ「観葉植物 ${植物名}」を使用
          const keyword = plant.searchKeyword || `観葉植物 ${plant.name}`;
          
          try {
            const products = await fetchRakutenProducts(keyword);
            // 取得するたびに即座に表示（既存の商品データを保持しながら追加）
            setRakutenProducts(prev => ({
              ...prev,
              [plant.name]: products
            }));
          } catch (error) {
            console.error(`商品取得エラー (${plant.name}):`, error);
            setRakutenProducts(prev => ({
              ...prev,
              [plant.name]: []
            }));
          }
          
          // レート制限対策：1秒待機（最後の植物以外）
          if (i < result.recommendedPlants.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
      };
      
      // 初期化：診断結果が変わったら商品データをクリア
      setRakutenProducts({});
      fetchAllProducts();
    }
  }, [result]);

  const handleDirectionChange = (direction: Direction) => {
    setFormData((prev) => ({ ...prev, direction }));
  };

  const handleWindowSizeChange = (windowSize: WindowSize) => {
    setFormData((prev) => ({ ...prev, windowSize }));
  };

  const handleDistanceChange = (distanceFromWindow: DistanceFromWindow) => {
    setFormData((prev) => ({ ...prev, distanceFromWindow }));
  };

  const handleObstructionChange = (hasObstruction: boolean) => {
    setFormData((prev) => ({ ...prev, hasObstruction }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const diagnosisResult = diagnose(formData);
    setResult(diagnosisResult);
    setShareUrl("");
  };

  // 診断結果が出たら自動的にシェアURLを生成
  useEffect(() => {
    if (result) {
      const url = encodeResultToUrl(result.input);
      setShareUrl(url);
    }
  }, [result]);

  const handleCopyUrl = async () => {
    if (shareUrl) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShowCopyNotification(true);
        setTimeout(() => setShowCopyNotification(false), 2000);
      } catch (err) {
        alert("URLのコピーに失敗しました");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-stone-900 dark:via-neutral-900 dark:to-amber-950">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            Leafit
          </h1>
          <p className="text-amber-800 dark:text-amber-300 text-lg font-medium">
            ☀️ 日当たり診断 × 🌱 植物レコメンド
          </p>
          <p className="text-stone-600 dark:text-stone-400 text-sm mt-2">
            あなたの部屋にぴったりの植物を見つけよう！
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* 左側：入力フォーム */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-900 dark:text-amber-100 flex items-center">
                <span className="mr-2">📍</span>
                お部屋の情報を教えてください
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 部屋の方角 */}
                <div>
                  <label className="block text-lg font-semibold text-stone-700 dark:text-stone-200 mb-3">
                    1. 部屋の方角
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(Object.keys(DirectionLabels) as Direction[]).map((dir) => (
                      <button
                        key={dir}
                        type="button"
                        onClick={() => handleDirectionChange(dir)}
                        className={`px-4 py-3 rounded-lg font-medium transition-all ${
                          formData.direction === dir
                            ? "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg scale-105"
                            : "bg-amber-50 dark:bg-stone-700 text-stone-700 dark:text-stone-200 hover:bg-amber-100 dark:hover:bg-stone-600 border border-amber-200 dark:border-stone-600"
                        }`}
                      >
                        {DirectionLabels[dir]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 窓のサイズ */}
                <div>
                  <label className="block text-lg font-semibold text-stone-700 dark:text-stone-200 mb-3">
                    2. 窓のサイズ
                  </label>
                  <div className="space-y-2">
                    {(Object.keys(WindowSizeLabels) as WindowSize[]).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleWindowSizeChange(size)}
                        className={`w-full px-4 py-3 rounded-lg font-medium text-left transition-all ${
                          formData.windowSize === size
                            ? "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg"
                            : "bg-amber-50 dark:bg-stone-700 text-stone-700 dark:text-stone-200 hover:bg-amber-100 dark:hover:bg-stone-600 border border-amber-200 dark:border-stone-600"
                        }`}
                      >
                        {WindowSizeLabels[size]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 窓からの距離 */}
                <div>
                  <label className="block text-lg font-semibold text-stone-700 dark:text-stone-200 mb-3">
                    3. 植物を置く場所（窓からの距離）
                  </label>
                  <div className="space-y-2">
                    {(Object.keys(DistanceLabels) as DistanceFromWindow[]).map((dist) => (
                      <button
                        key={dist}
                        type="button"
                        onClick={() => handleDistanceChange(dist)}
                        className={`w-full px-4 py-3 rounded-lg font-medium text-left transition-all ${
                          formData.distanceFromWindow === dist
                            ? "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg"
                            : "bg-amber-50 dark:bg-stone-700 text-stone-700 dark:text-stone-200 hover:bg-amber-100 dark:hover:bg-stone-600 border border-amber-200 dark:border-stone-600"
                        }`}
                      >
                        {DistanceLabels[dist]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 建物の有無 */}
                <div>
                  <label className="block text-lg font-semibold text-stone-700 dark:text-stone-200 mb-3">
                    4. 向かいの建物
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleObstructionChange(false)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        !formData.hasObstruction
                          ? "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg scale-105"
                          : "bg-amber-50 dark:bg-stone-700 text-stone-700 dark:text-stone-200 hover:bg-amber-100 dark:hover:bg-stone-600 border border-amber-200 dark:border-stone-600"
                      }`}
                    >
                      なし / 低い建物
                    </button>
                    <button
                      type="button"
                      onClick={() => handleObstructionChange(true)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        formData.hasObstruction
                          ? "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg scale-105"
                          : "bg-amber-50 dark:bg-stone-700 text-stone-700 dark:text-stone-200 hover:bg-amber-100 dark:hover:bg-stone-600 border border-amber-200 dark:border-stone-600"
                      }`}
                    >
                      同じ高さ以上
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 ease-in-out transform hover:scale-105 shadow-lg text-lg"
                >
                  🔍 診断する
                </button>
              </form>
            </div>
          </div>

          {/* 右側：結果表示 */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-xl p-6 md:p-8 border border-amber-100 dark:border-stone-700">
              <h2 className="text-2xl font-bold mb-6 text-amber-900 dark:text-amber-100 flex items-center">
                <span className="mr-2">✨</span>
                診断結果
              </h2>

              {!result ? (
                <div className="flex flex-col items-center justify-center h-64 text-amber-400 dark:text-amber-600">
                  <svg
                    className="w-24 h-24 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <p className="text-center text-lg">
                    左側のフォームを入力して<br />
                    診断ボタンをクリックしてください
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* 日照レベル */}
                  <div
                    className={`p-6 rounded-xl border-2 ${
                      SunlightLevelColors[result.sunlightLevel].bg
                    } ${SunlightLevelColors[result.sunlightLevel].border}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-stone-700 dark:text-stone-200">
                        日照レベル
                      </h3>
                      <div className="text-3xl font-bold">
                        {result.sunlightScore}
                        <span className="text-lg font-normal text-stone-600 dark:text-stone-400">
                          /100
                        </span>
                      </div>
                    </div>
                    <div
                      className={`text-3xl font-bold mb-2 ${
                        SunlightLevelColors[result.sunlightLevel].text
                      }`}
                    >
                      {SunlightLevelLabels[result.sunlightLevel]}
                    </div>
                    <p className="text-stone-700 dark:text-stone-300">
                      {SunlightLevelDescriptions[result.sunlightLevel]}
                    </p>
                  </div>

                  {/* アドバイス */}
                  <div className={`p-5 rounded-lg border-2 ${
                    SunlightLevelColors[result.sunlightLevel].bg
                  } ${SunlightLevelColors[result.sunlightLevel].border}`}>
                    <h3 className={`text-lg font-bold mb-3 flex items-center ${
                      SunlightLevelColors[result.sunlightLevel].text
                    }`}>
                      <span className="mr-2">💡</span>
                      アドバイス
                    </h3>
                    <div className="text-sm text-stone-700 dark:text-stone-300 whitespace-pre-line leading-relaxed">
                      {result.advice}
                    </div>
                  </div>

                  {/* おすすめの植物 */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-amber-900 dark:text-amber-100">
                      🪴 おすすめの植物
                    </h3>
                    <div className="space-y-4">
                      {result.recommendedPlants.map((plant, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 dark:from-stone-800 dark:via-neutral-800 dark:to-stone-800 p-4 rounded-lg border border-orange-200 dark:border-stone-600"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-bold text-amber-900 dark:text-amber-100">
                              {plant.name}
                            </h4>
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                plant.careLevel === "easy"
                                  ? "bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200"
                                  : plant.careLevel === "moderate"
                                  ? "bg-amber-200 text-amber-800 dark:bg-amber-800 dark:text-amber-200"
                                  : "bg-orange-200 text-orange-800 dark:bg-orange-800 dark:text-orange-200"
                              }`}
                            >
                              {plant.careLevel === "easy"
                                ? "初心者向け"
                                : plant.careLevel === "moderate"
                                ? "中級者向け"
                                : "上級者向け"}
                            </span>
                          </div>
                          <p className="text-sm text-stone-700 dark:text-stone-300 mb-1">
                            {plant.description}
                          </p>
                          <p className="text-xs text-stone-500 dark:text-stone-400 italic mb-2">
                            花言葉：{plant.flowerLanguage}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {plant.examples.map((example, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-white dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded text-xs border border-orange-100 dark:border-stone-600"
                              >
                                {example}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-stone-600 dark:text-stone-400 mb-3">
                            💧 水やり: {plant.wateringFrequency}
                          </p>

                          {/* 楽天商品3つを表示 */}
                          {rakutenProducts[plant.name] && rakutenProducts[plant.name].length > 0 && (
                            <div className="mb-3">
                              <p className="text-xs font-semibold text-stone-600 dark:text-stone-400 mb-2">
                                🛍️ おすすめ商品
                              </p>
                              <div className="grid grid-cols-3 gap-2">
                                {rakutenProducts[plant.name].slice(0, 3).map((product, i) => (
                                  <a
                                    key={i}
                                    href={product.affiliateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-stone-700 rounded-lg overflow-hidden border border-orange-100 dark:border-stone-600 hover:shadow-lg transition-shadow"
                                  >
                                    {product.imageUrl && (
                                      <div className="relative w-full pb-[100%] bg-gray-100">
                                        <img
                                          src={product.imageUrl}
                                          alt={product.itemName}
                                          className="absolute inset-0 w-full h-full object-cover"
                                          onError={(e) => {
                                            e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                                          }}
                                        />
                                      </div>
                                    )}
                                    <div className="p-2">
                                      <p className="text-xs text-stone-700 dark:text-stone-300 line-clamp-2 mb-1 h-8">
                                        {product.itemName}
                                      </p>
                                      <p className="text-sm font-bold text-rose-600 dark:text-rose-400">
                                        ¥{product.itemPrice.toLocaleString()}
                                      </p>
                                      {product.reviewCount && product.reviewCount > 0 && (
                                        <div className="flex items-center mt-1">
                                          <span className="text-xs text-amber-500">⭐</span>
                                          <span className="text-xs text-stone-600 dark:text-stone-400 ml-1">
                                            {product.reviewAverage?.toFixed(1)} ({product.reviewCount})
                                          </span>
                                        </div>
                                      )}
                                      <p className="text-xs text-stone-500 dark:text-stone-400 truncate mt-1">
                                        {product.shopName}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="flex gap-2 mt-3">
                            <Link
                              href={`/plants/${generateSlug(plant.name)}`}
                              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-center font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md"
                            >
                              📖 詳しい育て方を見る
                            </Link>
                            {plant.affiliateUrl && (
                              <a
                                href={plant.affiliateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-center font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md"
                              >
                                🛒 楽天で購入
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* シェアボタン */}
                  <div className="border-t border-amber-200 dark:border-stone-700 pt-6">
                    <h3 className="text-lg font-bold mb-3 text-amber-900 dark:text-amber-100">
                      🔗 この診断結果をシェアする
                    </h3>
                    {shareUrl && (
                      <div className="space-y-4">
                        {/* SNSシェアボタン */}
                        <div className="grid grid-cols-2 gap-3">
                          {/* LINE */}
                          <a
                            href={`https://line.me/R/msg/text/?${encodeURIComponent(`Leafitで植物診断してみた！🌱\n${shareUrl}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b34a] text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                            </svg>
                            LINE
                          </a>

                          {/* Twitter/X */}
                          <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Leafitで植物診断してみた！🌱')}&url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                            X
                          </a>

                          {/* Facebook */}
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#0d65d9] text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Facebook
                          </a>

                          {/* URLコピー */}
                          <button
                            onClick={handleCopyUrl}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                            URLコピー
                          </button>
                        </div>

                        {showCopyNotification && (
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-4 py-2 rounded-lg text-sm text-center">
                            ✓ URLをコピーしました！
                          </div>
                        )}

                        {/* URL表示（折りたたみ可能） */}
                        <details className="group">
                          <summary className="cursor-pointer text-xs text-stone-600 dark:text-stone-400 text-center hover:text-stone-800 dark:hover:text-stone-200">
                            URLを表示 ▼
                          </summary>
                          <div className="mt-2 p-3 bg-amber-50 dark:bg-stone-700 rounded-lg border border-amber-200 dark:border-stone-600">
                            <p className="text-xs text-stone-700 dark:text-stone-300 break-all">
                              {shareUrl}
                            </p>
                          </div>
                        </details>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* フッター */}
        <footer className="mt-12 text-center text-sm text-amber-800 dark:text-amber-400">
          <p className="text-lg font-semibold mb-2 text-emerald-700 dark:text-emerald-400">
            Leafit
          </p>
          <p className="mb-2">
            環境に合う植物なら、管理もラクに。無理なく続くグリーンライフを始めましょう
          </p>
          <p className="text-xs">
            ※ 診断結果は目安です。実際の日照条件は季節や時間帯により変動します
          </p>
        </footer>
      </div>
    </div>
  );
}
