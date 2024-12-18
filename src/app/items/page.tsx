import { ItemsDataFetch } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

export default async function Items() {
  const itemsRes = await ItemsDataFetch();
  const items: Record<string, ChampItem> = itemsRes.data;
  const version: string = itemsRes.version;

  const cleanedText = (text: string): string => {
    return text.replace(/[^가-힣\s]/g, " ");
  };

  return (
    <div className="p-6 min-h-screen mt-11">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Object.entries(items).map(([id, item]) => (
          <li
            key={id}
            className="flex flex-col justify-center items-center gap-4 border border-gray-300 p-4 rounded-lg shadow-lg bg-gray-800 transform transition-transform duration-300 hover:scale-105"
          >
            <Link
              href={`/items/${id}`}
              className="flex flex-col items-center justify-center gap-2"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-md border border-gray-300"
              />
              <p className="text-lg font-semibold text-center text-white mb-2">
                {cleanedText(item.name)}
              </p>
              <p className="text-sm text-white text-center mb-2">
                {cleanedText(item.plaintext)}
              </p>
              <p className="text-sm text-white text-center">
                구매가격: {item.gold.total} / 판매가격: {item.gold.sell}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
