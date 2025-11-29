export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-stone-900 dark:via-neutral-900 dark:to-amber-950 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mb-4"></div>
        <p className="text-xl font-semibold text-amber-900 dark:text-amber-100">
          読み込み中...
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
          植物情報を取得しています
        </p>
      </div>
    </div>
  );
}

