export default async function ChampionDataFetch() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  if (!res) {
    throw new Error("버전 데이터를 가져오지 못했습니다.");
  }
  const versions = await res.json();
  const latestVersion = versions[0];
  console.log("최신버전:", latestVersion);

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
