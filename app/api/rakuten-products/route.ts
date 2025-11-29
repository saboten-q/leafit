/**
 * 楽天商品検索APIを呼び出して、上位20件の商品を取得するAPIルート
 */

import { NextRequest, NextResponse } from "next/server";

interface RakutenProduct {
  itemName: string;
  itemPrice: number;
  itemUrl: string;
  affiliateUrl?: string;
  imageUrl: string;
  shopName: string;
  reviewAverage?: number;
  reviewCount?: number;
}

interface RakutenApiResponse {
  Items?: Array<{
    Item?: {
      itemName: string;
      itemPrice: number;
      itemUrl: string;
      affiliateUrl?: string;
      mediumImageUrls?: Array<{ imageUrl: string }>;
      smallImageUrls?: Array<{ imageUrl: string }>;
      shopName: string;
      reviewAverage?: number;
      reviewCount?: number;
    };
  }>;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const keyword = searchParams.get("keyword");

  console.log("[Rakuten API] リクエスト受信:", keyword);

  if (!keyword) {
    console.error("[Rakuten API] キーワードが指定されていません");
    return NextResponse.json(
      { error: "検索キーワードが指定されていません" },
      { status: 400 }
    );
  }

  const appId = process.env.RAKUTEN_APP_ID;
  const affiliateId = process.env.RAKUTEN_AFFILIATE_ID;

  console.log("[Rakuten API] 環境変数チェック - appId:", appId ? "設定済み" : "未設定");
  console.log("[Rakuten API] 環境変数チェック - affiliateId:", affiliateId ? "設定済み" : "未設定");

  if (!appId) {
    console.error("[Rakuten API] 楽天APIキーが設定されていません");
    return NextResponse.json(
      { error: "楽天APIキーが設定されていません" },
      { status: 500 }
    );
  }

  try {
    // 楽天商品検索API v2を呼び出し
    const apiUrl = new URL(
      "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601"
    );
    apiUrl.searchParams.set("applicationId", appId);
    // 既に「観葉植物」などが含まれている場合もあるので、そのまま使用
    apiUrl.searchParams.set("keyword", keyword);
    apiUrl.searchParams.set("hits", "20"); // 上位20件を取得（カルーセル用）
    apiUrl.searchParams.set("sort", "standard"); // 標準並び
    if (affiliateId) {
      apiUrl.searchParams.set("affiliateId", affiliateId);
    }

    console.log("[Rakuten API] リクエストURL:", apiUrl.toString());

    const response = await fetch(apiUrl.toString());

    console.log("[Rakuten API] レスポンスステータス:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Rakuten API] エラーレスポンス:", errorText);
      throw new Error(`楽天API呼び出しエラー: ${response.status} - ${errorText}`);
    }

    const data: RakutenApiResponse = await response.json();
    console.log("[Rakuten API] 取得した商品数:", data.Items?.length || 0);

    if (!data.Items || data.Items.length === 0) {
      return NextResponse.json({ products: [] });
    }

    // 商品データを整形
    const products: RakutenProduct[] = data.Items.map((item) => {
      const product = item.Item!;
      
      // 画像URLを取得（サイズ制限を削除）
      let imageUrl =
        product.mediumImageUrls?.[0]?.imageUrl ||
        product.smallImageUrls?.[0]?.imageUrl ||
        "";
      
      // サイズパラメータを削除
      imageUrl = imageUrl.replace(/\?_ex=\d+x\d+/, "");

      return {
        itemName: product.itemName,
        itemPrice: product.itemPrice,
        itemUrl: product.itemUrl,
        affiliateUrl: product.affiliateUrl || product.itemUrl,
        imageUrl,
        shopName: product.shopName,
        reviewAverage: product.reviewAverage,
        reviewCount: product.reviewCount,
      };
    });

    console.log("[Rakuten API] 成功 - 商品数:", products.length);
    return NextResponse.json({ products });
  } catch (error) {
    console.error("[Rakuten API] 例外エラー:", error);
    if (error instanceof Error) {
      console.error("[Rakuten API] エラー詳細:", error.message);
      console.error("[Rakuten API] スタック:", error.stack);
    }
    return NextResponse.json(
      { error: "商品情報の取得に失敗しました", products: [] },
      { status: 500 }
    );
  }
}

