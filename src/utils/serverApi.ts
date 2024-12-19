import { ChampionData, ChampionDetailType } from "@/types/champions";
import { ChampItem } from "@/types/items";

// 최신 버전 확인인
async function fetchLatestVersion(): Promise<string> {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  if (!res) {
    throw new Error("버전 데이터를 가져오지 못했습니다.");
  }
  const versions = await res.json();
  return versions[0];
}

//챔피언 정보 가져오기기
export default async function ChampionDataFetch(): Promise<{
  data: Record<string, ChampionData>; // 챔피언 데이터는 ID를 키로 하는 객체
  version: string;
}> {
  const latestVersion = await fetchLatestVersion();
  const championVersions = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
  );

  if (!championVersions) {
    throw new Error("챔피언 정보를 가져오지 못했습니다.");
  }
  const championData: { data: Record<string, ChampionData> } =
    await championVersions.json();

  return {
    data: championData.data,
    version: latestVersion,
  };
}

//챔피언 디테일 정보 가져오기
export async function ChampionDetailFetch(
  championId: string
): Promise<{ data: ChampionDetailType; version: string }> {
  const latestVersion = await fetchLatestVersion();
  const detailRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${championId}.json`
  );
  if (!detailRes) {
    throw new Error("챔피언 상세정보를 불러오지 못했습니다.");
  }
  const championDetail = await detailRes.json();

  return {
    data: championDetail.data[championId] as ChampionDetailType,
    version: latestVersion,
  };
}

// 아이템 정보보 가져오기기
export async function ItemsDataFetch(): Promise<{
  data: Record<string, ChampItem>; // 아이템 데이터는 ID를 키로 하는 객체
  version: string;
}> {
  const latestVersion = await fetchLatestVersion();

  const itemRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
  );
  if (!itemRes) {
    throw new Error("아이템 정보를 찾지 못했습니다.");
  }
  const itemsData: { data: Record<string, ChampItem> } = await itemRes.json();

  return {
    data: itemsData.data,
    version: latestVersion,
  };
}
