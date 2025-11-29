export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-stone-900 dark:via-neutral-900 dark:to-amber-950">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* ヘッダースケルトン */}
        <div className="text-center mb-12 animate-pulse">
          <div className="h-12 w-48 bg-stone-200 dark:bg-stone-700 rounded-lg mx-auto mb-4"></div>
          <div className="h-8 w-64 bg-stone-200 dark:bg-stone-700 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-96 bg-stone-200 dark:bg-stone-700 rounded-lg mx-auto"></div>
        </div>

        {/* 植物カードスケルトン */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-stone-800 rounded-xl shadow-md overflow-hidden border border-amber-100 dark:border-stone-700 animate-pulse"
            >
              <div className="w-full h-48 bg-stone-200 dark:bg-stone-700"></div>
              <div className="p-4">
                <div className="h-6 bg-stone-200 dark:bg-stone-700 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-stone-200 dark:bg-stone-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-stone-200 dark:bg-stone-700 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

