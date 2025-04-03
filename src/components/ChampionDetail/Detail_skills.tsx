import { ChampionDetailType } from "@/types/champions";
import Image from "next/image";
import React from "react";

interface ChampionDetail_skills_Props {
  champion: ChampionDetailType;
  version: string;
}

const Detail_spell = ({ champion, version }: ChampionDetail_skills_Props) => {
  const stripHtml = (html: string) => html.replace(/<br[^>]*>/g, "");

  return (
    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden px-1 md:overflow-visible relative z-0">
      <ul
        className="
          flex gap-6 
          min-w-max 
          md:justify-center 
          md:min-w-full 
           relative z-10 overflow-visible
        "
      >
        {/* 패시브 */}
        <li className="relative shrink-0 z-10">
          <div className="relative w-[80px] h-[80px] group z-20">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champion.passive.image.full}`}
              alt={champion.passive.name}
              width={80}
              height={80}
              className="rounded-md border border-gray-600 object-cover"
            />
            <div className="absolute left-1/2 top-full translate-y-2 -translate-x-1/2 w-[350px] h-[250px] bg-white rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center z-50 max-[767px]:hidden">
              <p className="text-gray-800 text-sm text-center px-4">
                {champion.passive.description}
              </p>
            </div>
          </div>
          <div className="text-center mt-2">
            <strong className="text-sm">Passive:</strong>
            <span className="block text-xs">{champion.passive.name}</span>
          </div>
        </li>

        {/* QWER */}
        {champion.spells.map((spell, index) => (
          <li key={index} className="relative shrink-0 z-10">
            <div className="relative w-[80px] h-[80px] group z-20">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`}
                alt={spell.name}
                width={80}
                height={80}
                className="rounded-md border border-gray-600 object-cover"
              />
              <div className="absolute left-1/2 top-full translate-y-2 -translate-x-1/2 w-[350px] h-[250px] bg-white rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center z-50 max-[767px]:hidden">
                <p className="text-gray-800 text-sm text-center px-4 z-50">
                  {stripHtml(spell.description)}
                </p>
              </div>
            </div>
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
  );
};

export default Detail_spell;
