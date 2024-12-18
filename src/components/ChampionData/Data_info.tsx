import { ChampionData } from "@/types/champions";
import Image from "next/image";
import Link from "next/link";

interface ChampionItemProps {
  champion: ChampionData;
  latestVersion: string;
}

const ChampionData_item = ({ champion, latestVersion }: ChampionItemProps) => {
  return (
    <li
      key={champion.id}
      className="flex flex-col items-center gap-2 border border-gray-700 p-4 rounded-lg shadow-lg bg-gray-800 hover:scale-105 hover:bg-gray-700 transition-transform duration-300"
    >
      <Link href={`/champions/${champion.id}`} className="text-center">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`}
          alt={champion.name}
          width="120"
          height="120"
          className="rounded-md"
        />
        <p className="mt-4 text-lg font-medium text-gray-100 hover:text-yellow-400 transition-colors">
          {champion.name}
        </p>
      </Link>
    </li>
  );
};

export default ChampionData_item;
