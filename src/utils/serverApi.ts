import { version } from "os";

// 최신 버전 확인인
async function fetchLatestVersion() {
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
export default async function ChampionDataFetch() {
  const latestVersion = await fetchLatestVersion();
  const championVersions = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
  );

  if (!championVersions) {
    throw new Error("챔피언 정보를 가져오지 못했습니다.");
  }
  const championData = await championVersions.json();
  console.log("챔피언 데이터:", championData);

  return {
    data: championData.data,
    version: latestVersion,
  };
}

// 아이템 정보보 가져오기기
export async function ItemsDataFetch() {
  const latestVersion = await fetchLatestVersion();

  const itemRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
  );
  if (!itemRes) {
    throw new Error("아이템 정보를 찾지 못했습니다.");
  }
  const itemsData = await itemRes.json();

  return {
    data: itemsData.data,
    version: latestVersion,
  };
}
