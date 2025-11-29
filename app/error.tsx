"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-stone-900 dark:via-neutral-900 dark:to-amber-950 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-7xl mb-4">⚠️</div>
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">
            エラーが発生しました
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400 mb-4">
            申し訳ございません。予期しないエラーが発生しました。
          </p>
          {error.message && (
            <details className="text-sm text-stone-500 dark:text-stone-500 mb-8">
              <summary className="cursor-pointer hover:text-stone-700 dark:hover:text-stone-300">
                エラー詳細を表示
              </summary>
              <p className="mt-2 p-4 bg-stone-100 dark:bg-stone-800 rounded-lg text-left font-mono">
                {error.message}
              </p>
            </details>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition duration-200 shadow-lg"
          >
            🔄 もう一度試す
          </button>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition duration-200 shadow-lg"
          >
            🏠 ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}

