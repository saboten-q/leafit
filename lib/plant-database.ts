/**
 * 植物データベース
 * 各日照レベルに適した植物の情報（50種類）
 * 並び順：初心者向け → 中級者向け → 上級者向け
 */

import type { PlantInfo } from "@/types/plant-diagnosis";

export const plantDatabase: PlantInfo[] = [
  // === 初心者向け（easy） ===
  
  // 1. パキラ
  {
    category: "medium-light",
    name: "パキラ",
    description: "日本で最も売れている定番。「発財樹」として風水人気も高い。剪定に強く、編み込まれた幹が人気。",
    flowerLanguage: "快活、勝利",
    examples: ["パキラ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2591%25E3%2582%25AD%25E3%2583%25A9%2F",
  },

  // 2. モンステラ
  {
    category: "medium-light",
    name: "モンステラ",
    description: "カフェや美容室の定番。南国風だが日本の気候でも育てやすい。独特な切れ込みのある葉が人気。",
    flowerLanguage: "嬉しい便り、壮大な計画",
    examples: ["モンステラ・デリシオサ", "ヒメモンステラ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%25A2%25E3%2583%25B3%25E3%2582%25B9%25E3%2583%2586%25E3%2583%25A9%2F",
  },

  // 3. ガジュマル
  {
    category: "sun-loving",
    name: "ガジュマル",
    description: "「多幸の木」。沖縄の精霊（キジムナー）が宿ると言われる。ユニークな幹の形が魅力。",
    flowerLanguage: "健康、多幸",
    examples: ["ガジュマル"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25AC%25E3%2582%25B8%25E3%2583%25A5%25E3%2583%259E%25E3%2583%25AB%2F",
  },

  // 4. サンスベリア
  {
    category: "shade-tolerant",
    name: "サンスベリア",
    description: "「トラノオ」の名で昔から有名。空気清浄効果が話題。乾燥に極めて強く手間いらず。",
    flowerLanguage: "永久、不滅",
    examples: ["サンスベリア・トリファスキアタ", "ローレンティー"],
    careLevel: "easy",
    wateringFrequency: "月1〜2回程度",
    sunlightLevel: 2,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B5%25E3%2583%25B3%25E3%2582%25B9%25E3%2583%2599%25E3%2583%25AA%25E3%2582%25A2%2F",
  },

  // 5. ポトス
  {
    category: "shade-tolerant",
    name: "ポトス",
    description: "昭和からのロングセラー。今では「エンジョイ」など新品種も人気。水耕栽培も容易。",
    flowerLanguage: "永遠の富、華やかな明るさ",
    examples: ["ゴールデンポトス", "ポトス・エンジョイ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 2,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%259D%25E3%2583%2588%25E3%2582%25B9%2F",
  },

  // 6. フィカス・ベンガレンシス
  {
    category: "sun-loving",
    name: "フィカス・ベンガレンシス",
    description: "白い幹と緑の葉のコントラストが美しく、新築祝いで人気。丈夫で育てやすい。",
    flowerLanguage: "長寿",
    examples: ["フィカス・ベンガレンシス"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2595%25E3%2582%25A3%25E3%2582%25AB%25E3%2582%25B9%25E3%2583%25BB%25E3%2583%2599%25E3%2583%25B3%25E3%2582%25AC%25E3%2583%25AC%25E3%2583%25B3%25E3%2582%25B7%25E3%2582%25B9%2F",
  },

  // 7. ドラセナ（幸福の木）
  {
    category: "shade-tolerant",
    name: "ドラセナ（幸福の木）",
    description: "お中元・お歳暮の定番だったが、今はモダンな部屋に置かれる。半日陰でも育つ。",
    flowerLanguage: "幸福、隠しきれない幸せ",
    examples: ["ドラセナ・マッサンゲアナ", "ドラセナ・コンシンネ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 2,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2589%25E3%2583%25A9%25E3%2582%25BB%25E3%2583%258A%25EF%25BC%2588%25E5%25B9%25B8%25E7%25A6%258F%25E3%2581%25AE%25E6%259C%25A8%25EF%25BC%2589%2F",
  },

  // 8. シュガーバイン
  {
    category: "medium-light",
    name: "シュガーバイン",
    description: "手のひらのような葉が可愛い。雑貨屋でよく見かけるつる性植物。寒さにやや弱い。",
    flowerLanguage: "すこやか",
    examples: ["シュガーバイン"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B7%25E3%2583%25A5%25E3%2582%25AC%25E3%2583%25BC%25E3%2583%2590%25E3%2582%25A4%25E3%2583%25B3%2F",
  },

  // 9. アイビー（ヘデラ）
  {
    category: "medium-light",
    name: "アイビー（ヘデラ）",
    description: "寄せ植えの名脇役。寒さに強く、日本の冬も屋外で越せる。つる性で垂らすとかわいい。",
    flowerLanguage: "永遠の愛、友情、信頼",
    examples: ["ヘデラ・ヘリックス"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25A2%25E3%2582%25A4%25E3%2583%2593%25E3%2583%25BC%25EF%25BC%2588%25E3%2583%2598%25E3%2583%2587%25E3%2583%25A9%25EF%25BC%2589%2F",
  },

  // 10. シマトネリコ
  {
    category: "sun-loving",
    name: "シマトネリコ",
    description: "涼しげな小葉。ベランダの目隠しやリビングのメインツリーに。成長が早い。",
    flowerLanguage: "高潔、威厳",
    examples: ["シマトネリコ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B7%25E3%2583%259E%25E3%2583%2588%25E3%2583%258D%25E3%2583%25AA%25E3%2582%25B3%2F",
  },

  // 11. コーヒーの木
  {
    category: "medium-light",
    name: "コーヒーの木",
    description: "100円ショップの定番。葉に光沢があり、意外と寒さにも耐える。大きく育てば実もなる。",
    flowerLanguage: "一緒に休みましょう",
    examples: ["コーヒーノキ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B3%25E3%2583%25BC%25E3%2583%2592%25E3%2583%25BC%25E3%2581%25AE%25E6%259C%25A8%2F",
  },

  // 12. 多肉植物（エケベリア等）
  {
    category: "succulents",
    name: "多肉植物（エケベリア等）",
    description: "ぷっくりした姿が大人気。「多肉女子」という言葉も生まれた。乾燥に強い。",
    flowerLanguage: "優美、たくましさ",
    examples: ["エケベリア", "ハオルチア", "セダム"],
    careLevel: "easy",
    wateringFrequency: "月1〜2回程度",
    sunlightLevel: 5,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E5%25A4%259A%25E8%2582%2589%25E6%25A4%258D%25E7%2589%25A9%25EF%25BC%2588%25E3%2582%25A8%25E3%2582%25B1%25E3%2583%2599%25E3%2583%25AA%25E3%2582%25A2%25E7%25AD%2589%25EF%25BC%2589%2F",
    searchKeyword: "エケベリア 観葉植物",
  },

  // 13. テーブルヤシ
  {
    category: "shade-tolerant",
    name: "テーブルヤシ",
    description: "100均でよく売られている。日陰に強くトイレや玄関向き。成長が遅い。",
    flowerLanguage: "あなたを見守る",
    examples: ["テーブルヤシ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 2,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2586%25E3%2583%25BC%25E3%2583%2596%25E3%2583%25AB%25E3%2583%25A4%25E3%2582%25B7%2F",
  },

  // 14. アガベ
  {
    category: "succulents",
    name: "アガベ",
    description: "トゲがありワイルド。アパレル店や男性の部屋で圧倒的人気。日光を非常に好む。",
    flowerLanguage: "気高い貴婦人、繊細",
    examples: ["アガベ・アテナータ"],
    careLevel: "easy",
    wateringFrequency: "月1〜2回程度",
    sunlightLevel: 5,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25A2%25E3%2582%25AC%25E3%2583%2599%2F",
  },

  // 15. シェフレラ（カポック）
  {
    category: "medium-light",
    name: "シェフレラ（カポック）",
    description: "非常に丈夫。オフィスやホテルのロビーでよく見かける。環境適応能力が高い。",
    flowerLanguage: "とても真面目、実直",
    examples: ["シェフレラ・アルボリコラ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B7%25E3%2582%25A7%25E3%2583%2595%25E3%2583%25AC%25E3%2583%25A9%25EF%25BC%2588%25E3%2582%25AB%25E3%2583%259D%25E3%2583%2583%25E3%2582%25AF%25EF%25BC%2589%2F",
  },

  // 16. ザミオクルカス
  {
    category: "low-light",
    name: "ザミオクルカス",
    description: "「金銭樹」。日陰に最強に強いので、北側の部屋の救世主。艶のある葉が美しい。",
    flowerLanguage: "輝く未来",
    examples: ["ザミオクルカス"],
    careLevel: "easy",
    wateringFrequency: "月1〜2回程度",
    sunlightLevel: 1,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B6%25E3%2583%259F%25E3%2582%25AA%25E3%2582%25AF%25E3%2583%25AB%25E3%2582%25AB%25E3%2582%25B9%2F",
  },

  // 17. ペペロミア
  {
    category: "shade-tolerant",
    name: "ペペロミア",
    description: "机に置けるサイズ。スイカ模様などバリエーションが豊富。多肉質で丈夫。",
    flowerLanguage: "艶やか、かわいらしさ",
    examples: ["ペペロミア・グラベラ", "ペペロミア・ジェミニ"],
    careLevel: "easy",
    wateringFrequency: "土が乾いてから（やや控えめ）",
    sunlightLevel: 2,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%259A%25E3%2583%259A%25E3%2583%25AD%25E3%2583%259F%25E3%2582%25A2%2F",
  },

  // 18. ユッカ（青年の木）
  {
    category: "sun-loving",
    name: "ユッカ（青年の木）",
    description: "尖った葉が上を向くため、風水で「邪気払い」によいとされる。乾燥と日光を好む。",
    flowerLanguage: "勇壮、偉大",
    examples: ["ユッカ・エレファンティペス"],
    careLevel: "easy",
    wateringFrequency: "土が完全に乾いてから",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%25A6%25E3%2583%2583%25E3%2582%25AB%25EF%25BC%2588%25E9%259D%2592%25E5%25B9%25B4%25E3%2581%25AE%25E6%259C%25A8%25EF%25BC%2589%2F",
  },

  // 19. ゴムの木（バーガンディ）
  {
    category: "sun-loving",
    name: "ゴムの木（バーガンディ）",
    description: "黒っぽい葉がシック。落ち着いた大人のインテリアに合う。葉が肉厚で丈夫。",
    flowerLanguage: "永久の幸せ",
    examples: ["フィカス・バーガンディ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B4%25E3%2583%25A0%25E3%2581%25AE%25E6%259C%25A8%25EF%25BC%2588%25E3%2583%2590%25E3%2583%25BC%25E3%2582%25AC%25E3%2583%25B3%25E3%2583%2587%25E3%2582%25A3%25EF%25BC%2589%2F",
  },

  // 20. オリヅルラン
  {
    category: "medium-light",
    name: "オリヅルラン",
    description: "学校やオフィスによくある。子株が折り鶴のように垂れ下がる。丈夫で育てやすい。",
    flowerLanguage: "守り抜く愛、子孫繁栄",
    examples: ["オリヅルラン"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25AA%25E3%2583%25AA%25E3%2583%2585%25E3%2583%25AB%25E3%2583%25A9%25E3%2583%25B3%2F",
  },

  // 21. ストレリチア（オーガスタ）
  {
    category: "sun-loving",
    name: "ストレリチア（オーガスタ）",
    description: "トロピカルな大きな葉。高級ホテルのような雰囲気になる。バナナのような葉が特徴。",
    flowerLanguage: "輝かしい未来、寛容",
    examples: ["ストレリチア・オーガスタ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B9%25E3%2583%2588%25E3%2583%25AC%25E3%2583%25AA%25E3%2583%2581%25E3%2582%25A2%25EF%25BC%2588%25E3%2582%25AA%25E3%2583%25BC%25E3%2582%25AC%25E3%2582%25B9%25E3%2582%25BF%25EF%25BC%2589%2F",
  },

  // 22. サボテン
  {
    category: "succulents",
    name: "サボテン",
    description: "雑貨感覚で置ける。柱サボテンはモダンな部屋のアクセントに。水やり頻度が少ない。",
    flowerLanguage: "枯れない愛、燃える心",
    examples: ["金鯱", "柱サボテン"],
    careLevel: "easy",
    wateringFrequency: "月1回程度（夏は月2回）",
    sunlightLevel: 5,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B5%25E3%2583%259C%25E3%2583%2586%25E3%2583%25B3%2F",
  },

  // 23. ナギ（梛）
  {
    category: "shade-tolerant",
    name: "ナギ（梛）",
    description: "葉が裂けないことから「縁結び」「魔除け」の御神木とされる。日本の伝統的な植物。",
    flowerLanguage: "神聖",
    examples: ["ナギ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 2,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%258A%25E3%2582%25AE%25EF%25BC%2588%25E6%25A2%259B%25EF%25BC%2589%2F",
  },

  // 24. ワイヤープランツ
  {
    category: "medium-light",
    name: "ワイヤープランツ",
    description: "針金のような茎に丸い小葉。寄せ植えやグランドカバーに人気。涼しげな印象。",
    flowerLanguage: "憧れ",
    examples: ["ワイヤープランツ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%25AF%25E3%2582%25A4%25E3%2583%25A4%25E3%2583%25BC%25E3%2583%2597%25E3%2583%25A9%25E3%2583%25B3%25E3%2583%2584%2F",
  },

  // 25. スパティフィラム
  {
    category: "shade-tolerant",
    name: "スパティフィラム",
    description: "日陰でも白い花が咲く数少ない植物。日本の室内向き。空気清浄効果も高い。",
    flowerLanguage: "上品な淑女、清らかな心",
    examples: ["スパティフィラム"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら（やや多め）",
    sunlightLevel: 2,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B9%25E3%2583%2591%25E3%2583%2586%25E3%2582%25A3%25E3%2583%2595%25E3%2582%25A3%25E3%2583%25A9%25E3%2583%25A0%2F",
  },

  // 26. フランスゴムの木
  {
    category: "medium-light",
    name: "フランスゴムの木",
    description: "幹を曲げ仕立てにしたものがおしゃれで、インテリア性が高い。丸い葉が可愛い。",
    flowerLanguage: "永久の幸せ",
    examples: ["フィカス・ルビギノーサ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2595%25E3%2583%25A9%25E3%2583%25B3%25E3%2582%25B9%25E3%2582%25B4%25E3%2583%25A0%25E3%2581%25AE%25E6%259C%25A8%2F",
  },

  // 27. ピレア・ペペロミオイデス
  {
    category: "medium-light",
    name: "ピレア・ペペロミオイデス",
    description: "「パンケーキプランツ」。北欧インテリア好きの間でブーム。丸い葉が特徴。",
    flowerLanguage: "友好",
    examples: ["ピレア・ペペロミオイデス"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2594%25E3%2583%25AC%25E3%2582%25A2%25E3%2583%25BB%25E3%2583%259A%25E3%2583%259A%25E3%2583%25AD%25E3%2583%259F%25E3%2582%25AA%25E3%2582%25A4%25E3%2583%2587%25E3%2582%25B9%2F",
  },

  // 28. アグラオネマ
  {
    category: "low-light",
    name: "アグラオネマ",
    description: "映画『レオン』の植物。耐陰性が高く、暗い部屋でも柄が出る。美しい模様の葉。",
    flowerLanguage: "青春の輝き",
    examples: ["アグラオネマ・シルバークイーン"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 1,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25A2%25E3%2582%25B0%25E3%2583%25A9%25E3%2582%25AA%25E3%2583%258D%25E3%2583%259E%2F",
  },

  // 29. リプサリス
  {
    category: "medium-light",
    name: "リプサリス",
    description: "森林性サボテン。垂れ下がる姿がユニークでハンギングに最適。独特の形状。",
    flowerLanguage: "燃える心",
    examples: ["リプサリス"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%25AA%25E3%2583%2597%25E3%2582%25B5%25E3%2583%25AA%25E3%2582%25B9%2F",
  },

  // 30. ハートカズラ
  {
    category: "sun-loving",
    name: "ハートカズラ",
    description: "ハート型の葉がつる状に伸びる。「恋が実る」と言われる。吊り鉢で楽しむ。",
    flowerLanguage: "協力、助け合う",
    examples: ["ハートカズラ"],
    careLevel: "easy",
    wateringFrequency: "土が乾いてから",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%258F%25E3%2583%25BC%25E3%2583%2588%25E3%2582%25AB%25E3%2582%25BA%25E3%2583%25A9%2F",
  },

  // 31. ソテツ
  {
    category: "sun-loving",
    name: "ソテツ",
    description: "日本の庭園にも合う。南国リゾート風の演出にも使える。力強い印象の葉。",
    flowerLanguage: "雄々しい",
    examples: ["ソテツ"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 5,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25BD%25E3%2583%2586%25E3%2583%2584%2F",
  },

  // 32. ハオルチア
  {
    category: "shade-tolerant",
    name: "ハオルチア",
    description: "透明な窓を持つ「クリスタルプラント」。室内向けの多肉。ぷっくりした姿が人気。",
    flowerLanguage: "小さな愛",
    examples: ["ハオルチア"],
    careLevel: "easy",
    wateringFrequency: "月1〜2回程度",
    sunlightLevel: 2,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%258F%25E3%2582%25AA%25E3%2583%25AB%25E3%2583%2581%25E3%2582%25A2%2F",
  },

  // 33. アスパラガス（ナナス）
  {
    category: "medium-light",
    name: "アスパラガス（ナナス）",
    description: "ふわふわした葉が涼しげ。切り花のアレンジでもよく使われる。繊細な見た目。",
    flowerLanguage: "何も変わらない、無変化",
    examples: ["アスパラガス・ナナス"],
    careLevel: "easy",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25A2%25E3%2582%25B9%25E3%2583%2591%25E3%2583%25A9%25E3%2582%25AC%25E3%2582%25B9%25EF%25BC%2588%25E3%2583%258A%25E3%2583%258A%25E3%2582%25B9%25EF%25BC%2589%2F",
  },

  // 34. トックリラン
  {
    category: "sun-loving",
    name: "トックリラン",
    description: "根元が膨らんだ姿がユーモラス。ポニーテールとも呼ばれる。乾燥に強い。",
    flowerLanguage: "多くの才能",
    examples: ["トックリラン"],
    careLevel: "easy",
    wateringFrequency: "土が完全に乾いてから",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2588%25E3%2583%2583%25E3%2582%25AF%25E3%2583%25AA%25E3%2583%25A9%25E3%2583%25B3%2F",
  },

  // 35. 金のなる木
  {
    category: "sun-loving",
    name: "金のなる木",
    description: "昭和の家庭によくあったが、最近は多肉として見直されている。縁起が良い植物。",
    flowerLanguage: "一攫千金、富",
    examples: ["カネノナルキ"],
    careLevel: "easy",
    wateringFrequency: "月1〜2回程度",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E9%2587%2591%25E3%2581%25AE%25E3%2581%25AA%25E3%2582%258B%25E6%259C%25A8%2F",
  },

  // === 中級者向け（moderate） ===

  // 36. フィカス・ウンベラータ
  {
    category: "medium-light",
    name: "フィカス・ウンベラータ",
    description: "日本で不動の人気No.1おしゃれ樹木。ハート型の葉が特徴。寒さにはやや弱い。",
    flowerLanguage: "すこやか、永久の幸せ",
    examples: ["フィカス・ウンベラータ"],
    careLevel: "moderate",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2595%25E3%2582%25A3%25E3%2582%25AB%25E3%2582%25B9%25E3%2583%25BB%25E3%2582%25A6%25E3%2583%25B3%25E3%2583%2599%25E3%2583%25A9%25E3%2583%25BC%25E3%2582%25BF%2F",
  },

  // 37. エバーフレッシュ
  {
    category: "medium-light",
    name: "エバーフレッシュ",
    description: "夜に葉を閉じる姿に癒やされる人が続出。和室にも合う。水切れに注意。",
    flowerLanguage: "歓喜、胸のときめき",
    examples: ["エバーフレッシュ"],
    careLevel: "moderate",
    wateringFrequency: "土の表面が乾いたら（やや多め）",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25A8%25E3%2583%2590%25E3%2583%25BC%25E3%2583%2595%25E3%2583%25AC%25E3%2583%2583%25E3%2582%25B7%25E3%2583%25A5%2F",
  },

  // 38. オリーブの木
  {
    category: "sun-loving",
    name: "オリーブの木",
    description: "「平和の象徴」。戸建てのシンボルツリーやベランダで大人気。日光が大好き。",
    flowerLanguage: "平和、知恵",
    examples: ["オリーブ"],
    careLevel: "moderate",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 5,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25AA%25E3%2583%25AA%25E3%2583%25BC%25E3%2583%2596%25E3%2581%25AE%25E6%259C%25A8%2F",
  },

  // 39. ユーカリ（ポポラス等）
  {
    category: "sun-loving",
    name: "ユーカリ（ポポラス等）",
    description: "丸い葉が可愛い。ドライフラワーにしやすく女性に大人気。日光と風通しが必須。",
    flowerLanguage: "新生、再生",
    examples: ["ユーカリ・ポポラス", "ユーカリ・グニー"],
    careLevel: "moderate",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 5,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%25A6%25E3%2583%25BC%25E3%2582%25AB%25E3%2583%25AA%25EF%25BC%2588%25E3%2583%259D%25E3%2583%259D%25E3%2583%25A9%25E3%2582%25B9%25E7%25AD%2589%25EF%25BC%2589%2F",
    searchKeyword: "ユーカリ 観葉植物",
  },

  // 40. ビカクシダ（コウモリラン）
  {
    category: "medium-light",
    name: "ビカクシダ（コウモリラン）",
    description: "現在大ブーム中。板付けにして壁に飾る「男前インテリア」。鹿の角のような独特なフォルム。",
    flowerLanguage: "助け合う、魔法",
    examples: ["ビカクシダ"],
    careLevel: "moderate",
    wateringFrequency: "週1〜2回（霧吹きまたはソーキング）",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2593%25E3%2582%25AB%25E3%2582%25AF%25E3%2582%25B7%25E3%2583%2580%25EF%25BC%2588%25E3%2582%25B3%25E3%2582%25A6%25E3%2583%25A2%25E3%2583%25AA%25E3%2583%25A9%25E3%2583%25B3%25EF%25BC%2589%2F",
  },

  // 41. ソフォラ（メルヘンの木）
  {
    category: "medium-light",
    name: "ソフォラ（メルヘンの木）",
    description: "カクカクした枝が特徴。華奢で可愛らしく、インスタで人気。乾燥に注意。",
    flowerLanguage: "可憐",
    examples: ["ソフォラ・ミクロフィラ"],
    careLevel: "moderate",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25BD%25E3%2583%2595%25E3%2582%25A9%25E3%2583%25A9%25EF%25BC%2588%25E3%2583%25A1%25E3%2583%25AB%25E3%2583%2598%25E3%2583%25B3%25E3%2581%25AE%25E6%259C%25A8%25EF%25BC%2589%2F",
  },

  // 42. グリーンネックレス
  {
    category: "succulents",
    name: "グリーンネックレス",
    description: "玉状の多肉。吊り鉢にして窓辺に飾るのが日本の定番。過湿に弱い。",
    flowerLanguage: "健やかな成長、青春の思い出",
    examples: ["グリーンネックレス"],
    careLevel: "moderate",
    wateringFrequency: "月2〜3回程度",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25B0%25E3%2583%25AA%25E3%2583%25BC%25E3%2583%25B3%25E3%2583%258D%25E3%2583%2583%25E3%2582%25AF%25E3%2583%25AC%25E3%2582%25B9%2F",
  },

  // 43. ミモザ（アカシア）
  {
    category: "sun-loving",
    name: "ミモザ（アカシア）",
    description: "黄色い花が咲く。春を告げる木としてリース素材などで人気。日光を好む。",
    flowerLanguage: "秘密の恋、友情",
    examples: ["ミモザ・アカシア"],
    careLevel: "moderate",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 5,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%259F%25E3%2583%25A2%25E3%2582%25B6%25EF%25BC%2588%25E3%2582%25A2%25E3%2582%25AB%25E3%2582%25B7%25E3%2582%25A2%25EF%25BC%2589%2F",
  },

  // 44. カシワバゴムノキ
  {
    category: "sun-loving",
    name: "カシワバゴムノキ",
    description: "柏の葉のような大きな波打つ葉。存在感が強く店舗で人気。モダンなインテリアに最適。",
    flowerLanguage: "永遠の幸せ",
    examples: ["フィカス・リラータ"],
    careLevel: "moderate",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25AB%25E3%2582%25B7%25E3%2583%25AF%25E3%2583%2590%25E3%2582%25B4%25E3%2583%25A0%25E3%2583%258E%25E3%2582%25AD%2F",
  },

  // 45. アンスリウム
  {
    category: "medium-light",
    name: "アンスリウム",
    description: "赤いハート型の花（仏炎苞）。ハワイアンな雰囲気でギフトに多い。トロピカルで華やか。",
    flowerLanguage: "煩悩、恋にもだえる心",
    examples: ["アンスリウム"],
    careLevel: "moderate",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25A2%25E3%2583%25B3%25E3%2582%25B9%25E3%2583%25AA%25E3%2582%25A6%25E3%2583%25A0%2F",
  },

  // 46. ベンジャミン
  {
    category: "sun-loving",
    name: "ベンジャミン",
    description: "幹が三つ編みされていることが多い。環境が変わると葉を落とす。オフィスでよく見かける。",
    flowerLanguage: "融通のきく仲間、信頼",
    examples: ["フィカス・ベンジャミナ"],
    careLevel: "moderate",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 4,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2599%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%25A3%25E3%2583%259F%25E3%2583%25B3%2F",
  },

  // 47. ディスキディア
  {
    category: "medium-light",
    name: "ディスキディア",
    description: "「ミリオンハート」など。葉が貯水嚢になる変わった種類も。吊り鉢で楽しむ。",
    flowerLanguage: "平和",
    examples: ["ディスキディア・ルスキフォリア"],
    careLevel: "moderate",
    wateringFrequency: "土が乾いてから",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%2587%25E3%2582%25A3%25E3%2582%25B9%25E3%2582%25AD%25E3%2583%2587%25E3%2582%25A3%25E3%2582%25A2%2F",
  },

  // 48. ポリシャス
  {
    category: "medium-light",
    name: "ポリシャス",
    description: "繊細な葉がモミジのよう。別名「タイワンモミジ」。和風にも洋風にも合う。",
    flowerLanguage: "大切な思い出",
    examples: ["ポリシャス"],
    careLevel: "moderate",
    wateringFrequency: "土の表面が乾いたら",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2583%259D%25E3%2583%25AA%25E3%2582%25B7%25E3%2583%25A3%25E3%2582%25B9%2F",
  },

  // 49. エアプランツ
  {
    category: "medium-light",
    name: "エアプランツ",
    description: "土がいらない植物。ガラス容器に入れたり流木に飾ったりする。霧吹きと風通しで育てる。",
    flowerLanguage: "不屈",
    examples: ["チランジア・イオナンタ", "ウスネオイデス"],
    careLevel: "moderate",
    wateringFrequency: "週2〜3回の霧吹き",
    sunlightLevel: 3,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25A8%25E3%2582%25A2%25E3%2583%2597%25E3%2583%25A9%25E3%2583%25B3%25E3%2583%2584%2F",
  },

  // === 上級者向け（advanced） ===

  // 50. アジアンタム
  {
    category: "shade-tolerant",
    name: "アジアンタム",
    description: "和風にも洋風にも合う繊細な葉。乾燥ですぐチリチリになる。こまめな霧吹きが必須。",
    flowerLanguage: "天真爛漫、繊細",
    examples: ["アジアンタム"],
    careLevel: "moderate",
    wateringFrequency: "土が乾く前に（高湿度を好む）",
    sunlightLevel: 2,
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/4ea97976.a1763d9c.4ea97977.ab801edf/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E8%25A6%25B3%25E8%2591%2589%25E6%25A4%258D%25E7%2589%25A9%2520%25E3%2582%25A2%25E3%2582%25B8%25E3%2582%25A2%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%25A0%2F",
  },
];
