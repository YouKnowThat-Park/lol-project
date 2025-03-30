"use client";

import { ChampionData } from "@/types/champions";
import { ChampionRotationsData } from "@/types/rotations";
import ChampionDataFetch from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export type ChampionApiResponse = {
  data: Record<string, ChampionData>;
  version: string;
};

async function fetchRotationData() {
  const res = await fetch("/api/rotation");
  if (!res.ok) {
    throw new Error(
      "⚠️오류! 오류! : 로테이션 데이터를 가져오는데 실패했습니다.⚠️"
    );
  }
  return res.json();
}

export default function RotationPage() {
  // 챔피언 로테이션 데이터
  const {
    data: rotationData,
    isPending: isRotationPending,
    isError: isRotationError,
  } = useQuery<ChampionRotationsData>({
    queryKey: ["championRotationData"],
    queryFn: fetchRotationData,
  });

  // 챔피언 데이터
  const {
    data: championData,
    isPending: isChampionPending,
    isError: isChampionError,
  } = useQuery<ChampionApiResponse>({
    queryKey: ["championData"],
    queryFn: ChampionDataFetch,
  });

  console.log(championData);
  if (isRotationPending || isChampionPending) {
    return <p>^-^)b Loading...</p>;
  }

  if (isRotationError || isChampionError) {
    return <p>데이터를 찾을 수 없습니다. 다시 시도 해주세요.</p>;
  }

  return (
    <ul className="grid grid-cols-5 gap-6 mt-1">
      {rotationData.freeChampionIdsForNewPlayers.map((id: number) => {
        const champ = Object.values(championData.data).find(
          (champion) => parseInt(champion.key) === id
        );
        if (!champ) return null;

        return (
          <div key={id} className="flex justify-center py-8 max-h-screen">
            <div className="p-6 bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-4xl h-auto flex items-center gap-6">
              <li className="flex items-center gap-4">
                <Image
                  className="rounded-lg border border-gray-700 shadow-md"
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`}
                  alt={champ.name}
                  width={100}
                  height={100}
                />
                <div>
                  <p className="text-lg font-bold">{champ.name}</p>
                  <p className="text-sm text-gray-400">{champ.title}</p>
                </div>
              </li>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
