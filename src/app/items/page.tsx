import { ItemsDataFetch } from "@/utils/serverApi";
import Image from "next/image";

export const revalidate = 86400;

export default async function Items() {
  const itemsRes = await ItemsDataFetch();
  const items: Record<string, ChampItem> = itemsRes.data;
  const version: string = itemsRes.version;

  return (
    <div>
      <ul className="grid grid-cols-5 gap-4">
        {Object.entries(items).map(([id, item]) => (
          <li
            key={id}
            className="flex-col justify-center items-center gap-4 border p-4 rounded-md shadow-md bg-white "
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
              alt={item.name}
              width={50}
              height={50}
              style={{
                marginRight: "10px",
              }}
            />
            <p className="text-lg font-semibold mb-2">{item.name}</p>
            <p className="text-sm text-gray-500 mb-2">{item.plaintext}</p>
            <p className="text-sm">
              구매가격:{item.gold.total}/판매가격{item.gold.sell}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
