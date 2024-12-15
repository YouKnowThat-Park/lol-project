import { ChampionDetailFetch } from "@/utils/serverApi";
import { ChampionData } from "@/types/champions";
import Image from "next/image";

interface ChampionDetailProps {
  params: {
    id: string;
  };
}

export default async function ChampionPage({ params }: ChampionDetailProps) {
  const championId = params.id;
  const { data: champion, version } = await ChampionDetailFetch(championId);

  if (!champion) {
    return <div>챔피언 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex justify-center py-8 min-h-screen">
      <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg w-[700px]">
        {/* 챔피언 정보 */}
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

        {/* 스킬 정보 */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-center">
            스킬 정보
          </h3>
          {/* 스킬 목록 */}
          <ul className="flex gap-6 justify-center">
            {/* 패시브 */}
            <li className="relative ">
              {/* 이미지와 모달 컨테이너 */}
              <div className="relative w-[80px] h-[80px] group">
                {/* 이미지 */}
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champion.passive.image.full}`}
                  alt={champion.passive.name}
                  width={80}
                  height={80}
                  className="rounded-md border border-gray-600 object-cover"
                />
                {/* 모달 (이미지 호버 시 표시) */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-white rounded-lg shadow-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <p className="text-gray-800 text-sm text-center px-4">
                    {champion.passive.description}
                  </p>
                </div>
              </div>
              {/* 텍스트 */}
              <div className="text-center mt-2">
                <strong className="text-sm">Passive:</strong>
                <span className="block text-xs">{champion.passive.name}</span>
              </div>
            </li>

            {/* Q, W, E, R 스킬 */}
            {champion.spells.map((spell, index) => (
              <li key={index} className="relative">
                {/* 이미지 컨테이너 */}
                <div className="relative w-[80px] h-[80px] group ">
                  {/* 이미지 */}
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`}
                    alt={spell.name}
                    width={80}
                    height={80}
                    className="rounded-md border border-gray-600 object-cover"
                  />
                  {/* 모달 카드 */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-white rounded-lg shadow-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <p className="text-gray-800 text-sm text-center px-4">
                      {spell.description}
                    </p>
                  </div>
                </div>
                {/* 텍스트 */}
                <div className="text-center mt-2">
                  <strong className="text-sm">
                    {["Q", "W", "E", "R"][index]}:
                  </strong>
                  <span className="block text-xs">{spell.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
