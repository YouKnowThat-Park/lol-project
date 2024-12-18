import { NextResponse } from "next/server";

export async function GET() {
  const RIOT_API_URL =
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
  const RIOT_API_KEY = process.env.RIOT_API_KEY;

  if (!RIOT_API_KEY) {
    return NextResponse.json(
      { error: "라이엇 API 키가 존재하지 않습니다. 다시 확인해 주세요." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(RIOT_API_URL, {
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    });

    if (!res.ok) {
      throw new Error("패치 데이터가 없습니다");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Riot API data:", error);
    return NextResponse.json(
      { error: "서버에서 데이터를 가져오는 중 문제가 발생했습니다." },
      { status: 500 }
    );
  }
}
