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
    <div className="p-8 bg-gradient-to-b min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Champions
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {Object.values(data).map((champion: ChampionData) => {
          return (
            <li
              key={champion.id}
              className="flex flex-col items-center gap-2 border border-gray-700 p-4 rounded-lg shadow-lg bg-gray-800 hover:scale-105 hover:bg-gray-700 transition-transform duration-300"
            >
              <Link href={`/champions/${champion.id}`} className="text-center">
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`}
                  alt={champion.name}
                  width="120"
                  height="120"
                  className="rounded-md"
                />
                <p className="mt-4 text-lg font-medium text-gray-100 hover:text-yellow-400 transition-colors">
                  {champion.name}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
