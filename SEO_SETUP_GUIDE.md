# 🚀 SEO設定ガイド

Leafitの検索エンジン最適化（SEO）について

## ✅ 実装済みのSEO対策

### 1. メタタグ・OGP設定 ✓

#### 実装箇所
- `app/layout.tsx` - サイト全体のメタデータ
- `app/plants/page.tsx` - 植物一覧ページ
- `app/plants/[slug]/page.tsx` - 各植物の個別ページ

#### 内容
- **タイトルタグ**: 各ページ最適化済み
- **ディスクリプション**: 検索結果に表示される説明文
- **キーワード**: 主要キーワード設定
- **OGP (Open Graph Protocol)**: SNSシェア時の表示最適化
- **Twitter Card**: Twitter用のカード表示
- **robots**: クローラー指示
- **canonical**: 正規URL指定

### 2. サイトマップ ✓

#### ファイル
- `app/sitemap.ts`

#### 内容
- トップページ
- 植物一覧ページ
- 全50種類の植物個別ページ

#### アクセスURL
```
https://your-domain.com/sitemap.xml
```

### 3. robots.txt ✓

#### ファイル
- `app/robots.ts`

#### 内容
- 全ページのクロール許可
- APIルートのクロール除外
- サイトマップへのリンク

#### アクセスURL
```
https://your-domain.com/robots.txt
```

### 4. 構造化データ（JSON-LD）✓

#### ファイル
- `components/StructuredData.tsx`

#### 実装済みの構造化データ

##### a. WebApplication Schema
トップページに実装。Googleにアプリ情報を提供。

##### b. BreadcrumbList Schema
各植物ページに実装。パンくずリストを検索結果に表示。

##### c. Article Schema
各植物ページに実装。記事として認識される。

##### d. FAQ Schema
各植物ページに実装。よくある質問が検索結果に表示される可能性。

##### e. HowTo Schema
各植物ページに実装。育て方手順が検索結果に表示される可能性。

## 🔧 デプロイ前に必ず変更すべき項目

### 1. ドメインの変更

以下のファイルで `https://leafit.vercel.app` を実際のドメインに変更：

```typescript
// app/layout.tsx
metadataBase: new URL('https://your-actual-domain.com'),

// app/sitemap.ts
const baseUrl = 'https://your-actual-domain.com';

// app/robots.ts
const baseUrl = 'https://your-actual-domain.com';

// app/plants/[slug]/page.tsx
const baseUrl = "https://your-actual-domain.com";
```

### 2. OG画像の準備

以下の画像を用意して `public/` フォルダに配置：

- `og-image.png` (1200×630px) - SNSシェア用
- `favicon.ico` - ファビコン
- `icon.svg` - モダンブラウザ用アイコン
- `apple-touch-icon.png` (180×180px) - iOS用

### 3. Google Search Console設定（デプロイ後）

1. [Google Search Console](https://search.google.com/search-console) にアクセス
2. サイトを登録
3. 認証コードを取得
4. `app/layout.tsx` の `verification` セクションに追加：

```typescript
verification: {
  google: 'your-verification-code-here',
},
```

## 📊 SEO効果測定

### Google Search Console で確認できる項目
- 検索キーワード
- クリック数・表示回数
- 平均掲載順位
- サイトマップの状態
- 構造化データのエラー

### 確認方法
1. サイトマップを送信: `/sitemap.xml`
2. URL検査ツールで個別ページをテスト
3. リッチリザルトテストで構造化データを検証

## 🎯 推奨される次のステップ

### 短期（1ヶ月以内）
1. ✅ OG画像の作成と設置
2. ✅ Google Search Console登録
3. ✅ Google Analyticsの設定
4. ✅ 初回インデックス確認

### 中期（3ヶ月以内）
1. ✅ コンテンツSEO（ブログ記事の追加）
2. ✅ 内部リンク構造の最適化
3. ✅ ページ速度の最適化
4. ✅ 被リンク獲得施策

### 長期（6ヶ月以上）
1. ✅ 植物の種類を100種類に拡大
2. ✅ ユーザー生成コンテンツ（レビュー等）
3. ✅ 動画コンテンツの追加
4. ✅ 多言語対応

## 🔍 主要キーワード戦略

### 1. ビッグキーワード（競合：強）
- 観葉植物
- 観葉植物 育て方
- 観葉植物 初心者

### 2. ミドルキーワード（競合：中）
- 観葉植物 診断
- 部屋 日当たり 植物
- 観葉植物 選び方
- パキラ 育て方
- モンステラ 育て方

### 3. ロングテールキーワード（競合：弱）
- 北向き 部屋 観葉植物
- 日当たり悪い 育てやすい 植物
- 窓なし 部屋 観葉植物
- [植物名] 初心者 育て方
- [植物名] 枯れる 原因

## 📈 目標KPI

### 3ヶ月後
- オーガニック流入: 1,000セッション/月
- 主要キーワードで30位以内

### 6ヶ月後
- オーガニック流入: 5,000セッション/月
- 主要キーワードで10位以内

### 12ヶ月後
- オーガニック流入: 20,000セッション/月
- 複数のロングテールで1位獲得

## 🛠️ トラブルシューティング

### サイトマップが認識されない
→ `public/sitemap.xml` ではなく、`app/sitemap.ts` で動的生成されています

### 構造化データがエラーになる
→ [リッチリザルトテスト](https://search.google.com/test/rich-results) で検証

### インデックスされない
→ Google Search Console で URL検査 → インデックス登録をリクエスト

## 📚 参考リンク

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google構造化データガイド](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google Search Console](https://search.google.com/search-console)

---

**最終更新**: 2024年11月


