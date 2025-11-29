/**
 * 日当たり診断 × 植物レコメンドの型定義
 */

// 部屋の方角
export type Direction = "north" | "east" | "south" | "west";

// 窓のサイズ
export type WindowSize = "small" | "medium" | "large";

// 窓からの距離
export type DistanceFromWindow = "near" | "medium" | "far";

// 日照レベル
export type SunlightLevel = "strong" | "moderate" | "weak" | "almost-none";

// 植物カテゴリ
export type PlantCategory = 
  | "succulents"           // 多肉植物
  | "shade-tolerant"       // 耐陰性が強い観葉植物
  | "sun-loving"           // 日光が好きな植物
  | "medium-light"         // 中程度の光を好む植物
  | "low-light";           // 低光量でも育つ植物

// 診断の入力
export interface DiagnosisInput {
  direction: Direction;
  windowSize: WindowSize;
  distanceFromWindow: DistanceFromWindow;
  hasObstruction: boolean; // 向かいに同じ高さ以上の建物がある
}

// 植物の情報
export interface PlantInfo {
  category: PlantCategory;
  name: string;
  description: string;
  flowerLanguage: string; // 花言葉
  examples: string[];
  careLevel: "easy" | "moderate" | "advanced";
  wateringFrequency: string;
  sunlightLevel: number; // 日照量 (1-5)
  imageUrl?: string; // 植物の画像URL（オプション）
  affiliateUrl?: string; // 楽天アフィリエイトリンク（オプション）
  searchKeyword?: string; // 楽天検索用キーワード（オプション、未指定時は「観葉植物 ${name}」）
}

// 診断結果
export interface DiagnosisResult {
  input: DiagnosisInput;
  sunlightLevel: SunlightLevel;
  sunlightScore: number; // 0-100の数値スコア
  recommendedPlants: PlantInfo[];
  advice: string;
}

// フォーム入力の型（ラベル付き）
export const DirectionLabels: Record<Direction, string> = {
  north: "北",
  east: "東",
  south: "南",
  west: "西",
};

export const WindowSizeLabels: Record<WindowSize, string> = {
  small: "小（腰高窓程度）",
  medium: "中（一般的な掃き出し窓）",
  large: "大（壁一面の窓）",
};

export const DistanceLabels: Record<DistanceFromWindow, string> = {
  near: "0〜0.5m（窓のすぐ近く）",
  medium: "0.5〜1.5m（部屋の中央付近）",
  far: "1.5m以上（窓から遠い）",
};

export const SunlightLevelLabels: Record<SunlightLevel, string> = {
  strong: "強い",
  moderate: "普通",
  weak: "弱い",
  "almost-none": "ほぼなし",
};

export const SunlightLevelDescriptions: Record<SunlightLevel, string> = {
  strong: "日光をたっぷり浴びられる環境です。日当たりが大好きな植物を育てるのに最適！",
  moderate: "適度な明るさがある環境です。多くの観葉植物が元気に育ちます。",
  weak: "やや暗めの環境です。耐陰性のある植物を選びましょう。",
  "almost-none": "日光がほとんど届かない環境です。低光量に強い植物か、育成ライトの使用を検討してください。",
};

export const SunlightLevelColors: Record<SunlightLevel, { bg: string; text: string; border: string }> = {
  strong: { bg: "bg-gradient-to-br from-amber-100 to-orange-100 dark:bg-gradient-to-br dark:from-amber-900/30 dark:to-orange-900/30", text: "text-orange-800 dark:text-orange-300", border: "border-orange-300 dark:border-orange-700" },
  moderate: { bg: "bg-gradient-to-br from-emerald-100 to-teal-100 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:to-teal-900/30", text: "text-emerald-800 dark:text-emerald-300", border: "border-emerald-300 dark:border-emerald-700" },
  weak: { bg: "bg-gradient-to-br from-teal-100 to-cyan-100 dark:bg-gradient-to-br dark:from-teal-900/30 dark:to-cyan-900/30", text: "text-teal-800 dark:text-teal-300", border: "border-teal-300 dark:border-teal-700" },
  "almost-none": { bg: "bg-gradient-to-br from-stone-100 to-neutral-100 dark:bg-gradient-to-br dark:from-stone-900/30 dark:to-neutral-900/30", text: "text-stone-800 dark:text-stone-300", border: "border-stone-300 dark:border-stone-700" },
};

