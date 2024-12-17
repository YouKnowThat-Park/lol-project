"use client";

import ChampionData_item from "@/components/ChampionData/Data_info";
import ChampionDataFetch from "@/utils/serverApi";
import { useEffect, useState } from "react";

export default function Champions() {
  const [data, setData] = useState<Record<string, ChampionData> | null>(null);
  const [error, setError] = useState<null>();
  const [latestVersion, setLatestVersion] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const championData = await ChampionDataFetch();
      setData(championData.data);
      setLatestVersion(championData.version);
    }
    fetchData();
  }, []);

  if (!data) return <div>loading...</div>;

  return (
    <div className="p-8 bg-gradient-to-b min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Champions
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {Object.values(data).map((champion: ChampionData) => (
          <ChampionData_item
            key={champion.id}
            champion={champion}
            latestVersion={latestVersion}
          />
        ))}
      </ul>
    </div>
  );
}
