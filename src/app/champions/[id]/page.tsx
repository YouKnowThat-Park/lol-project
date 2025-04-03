import dynamic from "next/dynamic";
import { ChampionDetailFetch } from "@/utils/serverApi";
import Head from "next/head";

const ChampionDetail_info = dynamic(
  () => import("@/components/ChampionDetail/Detail_info")
);
const Detail_spell = dynamic(
  () => import("@/components/ChampionDetail/Detail_skills"),
  {
    loading: () => <div>스킬 정보를 가져오고 있습니다. ^-^)b</div>,
  }
);
const Detail_skins = dynamic(
  () => import("@/components/ChampionDetail/Detail_skins"),
  {
    loading: () => <div>스킨 정보를 가져오고 있습니다. ^-^)b</div>,
  }
);

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

  const { name, blurb } = champion;

  return (
    <>
      {/* SEO 메타데이터 */}
      <Head>
        <title>{name} - League of Legends</title>
        <meta name="description" content={blurb} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={blurb} />
        <meta
          property="og:image"
          content={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`}
        />
      </Head>

      {/* ✅ 반응형 콘텐츠 레이아웃 */}
      <div className="flex justify-center py-8 mt-[120px] px-2 lg:px-4 overflow-x-hidden">
        <div
          className="
            w-full max-w-[700px]
            p-6 bg-gray-800 text-white 
            rounded-lg shadow-lg 
            break-words
          "
        >
          {/* 챔피언 정보 */}
          <ChampionDetail_info champion={champion} version={version} />

          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-center">
              스킬 정보
            </h3>

            {/* 스킬 목록 */}
            <Detail_spell champion={champion} version={version} />

            <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-center">
              스킨
            </h3>

            {/* 챔피언 스킨 */}
            <Detail_skins champion={champion} />
          </div>
        </div>
      </div>
    </>
  );
}
