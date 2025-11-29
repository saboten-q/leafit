import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-stone-900 dark:via-neutral-900 dark:to-amber-950 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">
            ページが見つかりません
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 mb-8">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition duration-200 shadow-lg"
          >
            🏠 ホームに戻る
          </Link>
          <Link
            href="/plants"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition duration-200 shadow-lg"
          >
            🌿 植物図鑑を見る
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-stone-500 dark:text-stone-500 text-sm mb-4">
            よく使われるページ
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/plants/pakira"
              className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              パキラ
            </Link>
            <span className="text-stone-400">•</span>
            <Link
              href="/plants/monstera"
              className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              モンステラ
            </Link>
            <span className="text-stone-400">•</span>
            <Link
              href="/plants/sansevieria"
              className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              サンスベリア
            </Link>
            <span className="text-stone-400">•</span>
            <Link
              href="/plants/pothos"
              className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              ポトス
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

