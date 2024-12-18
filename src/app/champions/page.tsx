// src/app/champions/page.tsx

import { ChampionData } from "@/types/champions";
import ChampionDataFetch from "@/utils/serverApi";
import ChampionData_item from "@/components/ChampionData/Data_info";

export const revalidate = 86400; // 하루마다 재검증

export default async function Champions() {
  const championData = await ChampionDataFetch();

  // Object.values()의 반환 타입을 ChampionData[]로 명시적으로 지정
  const champions = Object.values(championData.data) as ChampionData[];

  return (
    <div className="p-8 bg-gradient-to-b min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Champions
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {champions.map((champion) => (
          <ChampionData_item
            key={champion.id}
            champion={champion}
            latestVersion={championData.version}
          />
        ))}
      </ul>
    </div>
  );
}
