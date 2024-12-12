"use client";

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
      console.log(championData);
      setLatestVersion(championData.version);
    }
    fetchData();
  }, []);

  if (!data) return <div>loading...</div>;

  return (
    <div>
      <ul>
        {Object.values(data).map((champion: ChampionData) => {
          const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`;
          console.log("Image URL:", imageUrl); // URL 디버깅
          return (
            <li key={champion.id} className="flex justify-center">
              <img
                src={imageUrl}
                alt={champion.name}
                width="120"
                height="120"
              />
              <p>{champion.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
