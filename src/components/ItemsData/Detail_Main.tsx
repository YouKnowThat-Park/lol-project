import { ChampItem } from "@/types/items";
import Image from "next/image";

interface ItemDataProps {
  item: ChampItem;
  version: string;
}

const Data_Main = ({ item, version }: ItemDataProps) => {
  const cleanedText = (text: string): string => {
    return text.replace(/[^가-힣\s]/g, " ");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full ">
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
            {cleanedText(item.name)}
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
            {cleanedText(item.plaintext)}
          </p>
          <p className="text-sm text-gray-300 text-center">
            {cleanedText(item.description)}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Data_Main;
