"use client";

import ChampionDataFetch from "@/utils/serverApi";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RotationPage() {
  const [rotationData, setRotationData] =
    useState<ChampionRotationsData | null>(null);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string | null>();
  const [championData, setChampionData] = useState<ChampionData | null>(null);

  useEffect(() => {
    async function fetchRotation() {
      setLoading(true);
      setError(null);

      try {
        const rotationRes = await fetch("/api/rotation");
        if (!rotationRes.ok) {
          throw new Error(
            "⚠️오류! 오류! : 로테이션 데이터를 가져오는데 실패 했습니다.⚠️"
          );
        }
        const rotation: ChampionRotationsData = await rotationRes.json();
        setRotationData(rotation);

        const { data: champions } = await ChampionDataFetch();
        setChampionData(champions);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchRotation();
  }, []);

  if (loading) {
    return <p>^-^)b 　　　Loading... </p>;
  }

  if (error) {
    return <p>^-^)q 　　　Error... </p>;
  }

  if (!rotationData || !championData) {
    return <p>데이터를 찾을 수 없습니다. 다시 시도 해주세요.</p>;
  }

  return (
    <ul>
      {rotationData.freeChampionIdsForNewPlayers.map((id) => {
        const champ = Object.values(championData).find(
          (champion) => parseInt(champion.key) === id
        );
        if (!champ) return null;

        return (
          <li key={id}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`}
              alt={champ.name}
              width={100}
              height={100}
            />
            <p>{champ.name}</p>
            <p>{champ.title}</p>
          </li>
        );
      })}
    </ul>
  );
}
