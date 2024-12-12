import ChampionDataFetch from "@/utils/serverApi";
import { ChampionData } from "@/types/champions";

interface ChampionPageProps {
  params: {
    id: string;
  };
}

export default async function ChampionPage({ params }: ChampionPageProps) {
  const { id } = params;

  const { data: champions } = await ChampionDataFetch();

  const champion: ChampionData | undefined = champions[id];

  if (!champion) {
    return <div>챔피언 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{champion.name}</h1>
      <h2 className="text-lg text-gray-600">{champion.title}</h2>
      <div className="flex gap-4 mt-4">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={200}
          height={200}
        />
        <p>{champion.blurb}</p>
      </div>
    </div>
  );
}
