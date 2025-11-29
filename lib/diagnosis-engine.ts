/**
 * 日当たり診断エンジン
 * シンプルなルールベースで日照レベルを判定
 */

import type {
  DiagnosisInput,
  DiagnosisResult,
  SunlightLevel,
  PlantInfo,
} from "@/types/plant-diagnosis";
import { plantDatabase } from "./plant-database";

/**
 * 方角による基礎スコア（0-100）
 */
const DIRECTION_SCORES = {
  south: 100,  // 南向き：最高
  east: 80,    // 東向き：良好（午前中の光）
  west: 70,    // 西向き：まあまあ（午後の光）
  north: 30,   // 北向き：低い
} as const;

/**
 * 窓のサイズによる補正係数
 */
const WINDOW_SIZE_MULTIPLIERS = {
  large: 1.2,   // 大きい窓：+20%
  medium: 1.0,  // 中くらい：そのまま
  small: 0.7,   // 小さい窓：-30%
} as const;

/**
 * 窓からの距離による減衰
 */
const DISTANCE_PENALTIES = {
  near: 0,      // 近い：減衰なし
  medium: -15,  // 中間：-15点
  far: -30,     // 遠い：-30点
} as const;

/**
 * 障害物（建物）による減衰
 */
const OBSTRUCTION_PENALTY = -25; // -25点

/**
 * 日照スコアから日照レベルを判定
 */
function scoreToLevel(score: number): SunlightLevel {
  if (score >= 75) return "strong";
  if (score >= 50) return "moderate";
  if (score >= 25) return "weak";
  return "almost-none";
}

/**
 * 日照レベルに基づいて植物を推奨
 * スコアから推奨日照量を計算し、適した植物を返す
 */
function recommendPlants(level: SunlightLevel, score: number): PlantInfo[] {
  // スコアから推奨日照量を算出（1-5）
  let recommendedSunlight: number;
  
  if (level === "strong") {
    // 強い：日照量 4-5
    recommendedSunlight = score >= 85 ? 5 : 4;
  } else if (level === "moderate") {
    // 普通：日照量 3-4
    recommendedSunlight = score >= 60 ? 4 : 3;
  } else if (level === "weak") {
    // 弱い：日照量 2-3
    recommendedSunlight = score >= 35 ? 3 : 2;
  } else {
    // ほぼなし：日照量 1-2
    recommendedSunlight = score >= 15 ? 2 : 1;
  }
  
  // 推奨日照量±1の範囲の植物を抽出し、日照量の差が小さい順にソート
  return plantDatabase
    .filter((plant) => {
      const diff = Math.abs(plant.sunlightLevel - recommendedSunlight);
      return diff <= 1; // ±1の範囲
    })
    .sort((a, b) => {
      const diffA = Math.abs(a.sunlightLevel - recommendedSunlight);
      const diffB = Math.abs(b.sunlightLevel - recommendedSunlight);
      return diffA - diffB;
    })
    .slice(0, 6); // 上位6種類を表示
}

/**
 * 日照レベルに応じたアドバイスを生成
 */
function generateAdvice(input: DiagnosisInput, level: SunlightLevel): string {
  const adviceMap: Record<SunlightLevel, string[]> = {
    strong: [
      "素晴らしい環境です！多肉植物やサボテン、ハーブ類など、日光が大好きな植物を育てるのに最適です。",
      "水やりは土が乾いたらたっぷりと。直射日光で葉焼けする植物もあるので、様子を見ながら調整しましょう。",
    ],
    moderate: [
      "多くの観葉植物に適した環境です。初心者でも育てやすい植物が豊富にあります。",
      "窓際に置くことで、より多くの植物を選択できます。定期的に葉の向きを変えると均等に育ちます。",
    ],
    weak: [
      "やや暗めの環境ですが、耐陰性のある植物なら十分育てられます。",
      "葉の色が薄くなったり、間延びしてきたら光不足のサインです。窓に近づけるか、育成ライトの使用も検討しましょう。",
    ],
    "almost-none": [
      "光が非常に限られた環境です。低光量に強い植物を選ぶか、LEDの育成ライトの使用をおすすめします。",
      "窓に近づけるだけでも大きく変わります。また、たまに日当たりの良い場所に移動させて「日光浴」させるのも効果的です。",
    ],
  };

  const baseAdvice = adviceMap[level];
  const tips: string[] = [];

  // 追加のヒント
  if (input.hasObstruction) {
    tips.push("向かいの建物が日光を遮っているため、午前や午後の特定の時間帯だけ光が入る可能性があります。");
  }

  if (input.direction === "north") {
    tips.push("北向きの部屋は直射日光が入りにくいですが、明るい間接光は得られます。耐陰性植物が向いています。");
  }

  if (input.distanceFromWindow === "far") {
    tips.push("窓から遠い場所は光が届きにくいです。可能であれば窓際に近づけると、育てられる植物の選択肢が広がります。");
  }

  return [...baseAdvice, ...tips].join("\n\n");
}

/**
 * 日当たり診断を実行
 */
export function diagnose(input: DiagnosisInput): DiagnosisResult {
  // 1. 方角による基礎スコア
  let score: number = DIRECTION_SCORES[input.direction];

  // 2. 窓のサイズによる補正
  score *= WINDOW_SIZE_MULTIPLIERS[input.windowSize];

  // 3. 窓からの距離による減衰
  score += DISTANCE_PENALTIES[input.distanceFromWindow];

  // 4. 障害物による減衰
  if (input.hasObstruction) {
    score += OBSTRUCTION_PENALTY;
  }

  // スコアを0-100の範囲に制限
  score = Math.max(0, Math.min(100, Math.round(score)));

  // 日照レベルを判定
  const sunlightLevel = scoreToLevel(score);

  // 植物を推奨（スコアも渡す）
  const recommendedPlants = recommendPlants(sunlightLevel, score);

  // アドバイスを生成
  const advice = generateAdvice(input, sunlightLevel);

  return {
    input,
    sunlightLevel,
    sunlightScore: score,
    recommendedPlants,
    advice,
  };
}

/**
 * 診断結果をURLパラメータにエンコード
 */
export function encodeResultToUrl(input: DiagnosisInput): string {
  const params = new URLSearchParams({
    dir: input.direction,
    win: input.windowSize,
    dist: input.distanceFromWindow,
    obs: input.hasObstruction ? "1" : "0",
  });
  
  return `${window.location.origin}?${params.toString()}`;
}

/**
 * URLパラメータから診断入力をデコード
 */
export function decodeUrlToInput(searchParams: URLSearchParams): DiagnosisInput | null {
  const dir = searchParams.get("dir") as DiagnosisInput["direction"];
  const win = searchParams.get("win") as DiagnosisInput["windowSize"];
  const dist = searchParams.get("dist") as DiagnosisInput["distanceFromWindow"];
  const obs = searchParams.get("obs");

  // 必須パラメータが揃っているかチェック
  if (!dir || !win || !dist || obs === null) {
    return null;
  }

  // 値が有効かチェック
  const validDirections = ["north", "east", "south", "west"];
  const validWindowSizes = ["small", "medium", "large"];
  const validDistances = ["near", "medium", "far"];

  if (
    !validDirections.includes(dir) ||
    !validWindowSizes.includes(win) ||
    !validDistances.includes(dist)
  ) {
    return null;
  }

  return {
    direction: dir,
    windowSize: win,
    distanceFromWindow: dist,
    hasObstruction: obs === "1",
  };
}

