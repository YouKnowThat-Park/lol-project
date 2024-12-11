import { error } from "console";
import { NextResponse } from "next/server";

export async function GET() {
  // 튜터님이 알료주신 주신 api url을 불러옴
  const RIOT_API_URL =
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
  // env.local에 있는 api를 process.env.RIOT_API_KEY 해서 불러옴
  const RIOT_API_KEY = process.env.RIOT_API_KEY;

  // 라이엇 키가 false면 NextResponse을 json 형식으로 바꿔서 아래 {}를 리턴하게함
  if (!RIOT_API_KEY) {
    return NextResponse.json(
      // 반환할 데이터
      { error: "라이엇api 키가 존재 하지 않습니다. 다시 확인해 주세요." },
      // 응답 상태 코드
      { status: 500 }
    );
  }

  try {
    const res = await fetch(RIOT_API_URL, {
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    });
    if (!res) {
      throw new Error("패치 데이터가 없습니다");
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "error" }, { status: 500 });
  }
}
