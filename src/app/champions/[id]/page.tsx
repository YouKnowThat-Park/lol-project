import ChampionDetail_info from "@/components/ChampionDetail/Detail_info";
import Detail_spell from "@/components/ChampionDetail/Detail_skills";
import Detail_skins from "@/components/ChampionDetail/Detail_skins";
import { ChampionDetailFetch } from "@/utils/serverApi";

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
    <div className="flex justify-center py-8 mt-[120px]  ">
      <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg w-[700px] flex-wrap object-cover ">
        {/* 챔피언 정보 */}
        <ChampionDetail_info champion={champion} version={version} />

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-center">
            스킬 정보
          </h3>

          {/* 스킬 목록 */}
          <Detail_spell champion={champion} version={version} />

          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-center"></h3>

          {/*챔피언 스킨*/}
          <Detail_skins champion={champion} />
        </div>
      </div>
    </div>
  );
}
