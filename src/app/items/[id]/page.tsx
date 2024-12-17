import { ItemsDataFetch } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

interface ItemDetailProps {
  params: {
    id: string;
  };
}

export default async function ItemDetailPage({ params }: ItemDetailProps) {
  const res = await ItemsDataFetch();
  const items: Record<string, ChampItem> = res.data;
  const version: string = res.version;

  const item = items[params.id];

  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "");

  if (!item) {
    return <div>아이템 정보를 찾을 수 없습니다.</div>;
  }
  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-6 mt-11">
        {/* 메인 아이템 카드 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
          <ul>
            <li className="flex flex-col items-center gap-4">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg border border-gray-500 shadow-md"
              />
              <p className="text-2xl font-bold text-white text-center">
                {item.name}
              </p>
              <p className="text-lg text-gray-300 text-center">
                구매 가격:{" "}
                <span className="text-yellow-400 font-semibold">
                  {item.gold.total}
                </span>{" "}
                / 판매 가격:{" "}
                <span className="text-green-400 font-semibold">
                  {item.gold.sell}
                </span>
              </p>
              <p className="text-sm text-gray-400 text-center italic">
                {item.plaintext}
              </p>
              <p className="text-sm text-gray-300 text-center">
                {stripHtml(item.description)}
              </p>
            </li>
          </ul>
        </div>

        {/* 업그레이드 아이템 섹션 */}
        {item.into && (
          <div className="mt-8 w-full max-w-sm bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-white text-center mb-4">
              업그레이드 아이템
            </h2>
            <ul className="flex flex-wrap justify-center gap-4">
              {item.into.map((upgradeId) => (
                <li key={upgradeId} className="text-center">
                  <Link
                    href={`/items/${upgradeId}`}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    <Image
                      src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${items[upgradeId]?.image.full}`}
                      alt={items[upgradeId]?.name || "업그레이드 아이템"}
                      width={50}
                      height={50}
                      className="rounded-lg border border-gray-500 shadow-md"
                    />
                  </Link>
                  <p className="text-sm text-gray-300 mt-2">
                    {items[upgradeId]?.name || "알 수 없음"}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
