"use client";

import ChampionDataFetch from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
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
    <div>
      <ul className="grid grid-cols-10 gap-4">
        {Object.values(data).map((champion: ChampionData) => {
          return (
            <li
              key={champion.id}
              className="flex-col items-center gap-4 border p-4 rounded-md shadow-md"
            >
              <Link href={`/champions/${champion.id}`}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`}
                  alt={champion.name}
                  width="120"
                  height="120"
                />
                <p>{champion.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
