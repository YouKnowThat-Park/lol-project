import Image from "next/image";
import React from "react";

interface ChampionDetail_info_Props {
  champion: ChampionDetailType;
  version: string;
}

const ChampionDetail_info = ({
  champion,
  version,
}: ChampionDetail_info_Props) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={120}
        height={120}
        className="rounded-md border border-gray-600"
      />
      <div>
        <h1 className="text-4xl font-bold text-white">{champion.name}</h1>
        <h2 className="text-xl text-gray-400">{champion.title}</h2>
        <h3>{champion.blurb}</h3>
      </div>
    </div>
  );
};

export default ChampionDetail_info;
