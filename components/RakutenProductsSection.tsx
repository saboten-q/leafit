"use client";

import { useState, useEffect } from "react";

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

interface RakutenProductsSectionProps {
  plantName: string;
  searchKeyword?: string;
  affiliateUrl?: string;
}

export function RakutenProductsSection({
  plantName,
  searchKeyword,
  affiliateUrl,
}: RakutenProductsSectionProps) {
  const [rakutenProducts, setRakutenProducts] = useState<RakutenProduct[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoadingProducts(true);
      try {
        const keyword = searchKeyword || `観葉植物 ${plantName}`;
        const response = await fetch(
          `/api/rakuten-products?keyword=${encodeURIComponent(keyword)}`
        );
        if (!response.ok) {
          console.error("商品取得エラー:", response.status);
          setRakutenProducts([]);
          return;
        }
        const data = await response.json();
        setRakutenProducts(data.products || []);
      } catch (error) {
        console.error("商品取得エラー:", error);
        setRakutenProducts([]);
      } finally {
        setIsLoadingProducts(false);
      }
    };

    fetchProducts();
  }, [plantName, searchKeyword]);

  // ページ総数を計算
  const totalPages = Math.ceil(rakutenProducts.length / itemsPerPage);
  
  // 現在のページの商品を取得
  const currentProducts = rakutenProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-yellow-900/30 rounded-2xl shadow-xl p-6 md:p-8 mb-8 border-2 border-amber-200 dark:border-amber-700">
      <h2 className="text-2xl font-bold mb-2 text-amber-900 dark:text-amber-100">
        🛍️ {plantName}を育ててみませんか？
      </h2>
      <p className="mb-4 text-amber-700 dark:text-amber-300">楽天市場で{plantName}を探す</p>

      {isLoadingProducts ? (
        <div className="bg-white/60 dark:bg-stone-800/60 rounded-xl p-8 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
          <p className="mt-3 text-amber-700 dark:text-amber-300">商品を読み込み中...</p>
        </div>
      ) : rakutenProducts.length > 0 ? (
        <>
          {/* カルーセル商品リスト */}
          <div className="relative">
            {/* 左矢印 */}
            {totalPages > 1 && (
              <button
                onClick={handlePrevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 rounded-full p-3 shadow-lg hover:bg-amber-50 dark:hover:bg-stone-700 transition duration-200 hover:scale-110"
                aria-label="前の商品"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* 商品グリッド */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {currentProducts.map((product, index) => (
                <a
                  key={index}
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-stone-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {product.imageUrl && (
                    <div className="relative w-full pb-[100%] bg-gray-100 dark:bg-stone-700">
                      <img
                        src={product.imageUrl}
                        alt={product.itemName}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                        }}
                      />
                    </div>
                  )}
                  <div className="p-3">
                    <p className="text-xs text-stone-700 dark:text-stone-300 font-medium line-clamp-2 mb-2 h-8">
                      {product.itemName}
                    </p>
                    <p className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-1">
                      ¥{product.itemPrice.toLocaleString()}
                    </p>
                    {product.reviewCount && product.reviewCount > 0 && (
                      <div className="flex items-center mb-1">
                        <span className="text-amber-500 text-xs mr-1">⭐</span>
                        <span className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                          {product.reviewAverage?.toFixed(1)}
                        </span>
                        <span className="text-xs text-stone-500 dark:text-stone-500 ml-1">
                          ({product.reviewCount})
                        </span>
                      </div>
                    )}
                    <p className="text-xs text-stone-500 dark:text-stone-500 truncate">
                      {product.shopName}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* 右矢印 */}
            {totalPages > 1 && (
              <button
                onClick={handleNextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 rounded-full p-3 shadow-lg hover:bg-amber-50 dark:hover:bg-stone-700 transition duration-200 hover:scale-110"
                aria-label="次の商品"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* ページインジケーター */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentPage
                      ? "bg-amber-600 dark:bg-amber-400 w-6"
                      : "bg-amber-300 dark:bg-amber-700 hover:bg-amber-400 dark:hover:bg-amber-600"
                  }`}
                  aria-label={`ページ ${index + 1}`}
                />
              ))}
            </div>
          )}

          <div className="mt-6 text-center">
            {affiliateUrl && (
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-xl transition duration-200 shadow-lg"
              >
                楽天市場でもっと見る →
              </a>
            )}
          </div>
        </>
      ) : (
        <div className="text-center">
          {affiliateUrl && (
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-10 rounded-xl transition duration-200 shadow-lg"
            >
              楽天市場で見る →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

