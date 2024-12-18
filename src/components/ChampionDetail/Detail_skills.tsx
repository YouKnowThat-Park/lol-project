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
    <div>
      <ul className="flex gap-6 justify-center">
        <li className="relative ">
          <div className="relative w-[80px] h-[80px] group">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champion.passive.image.full}`}
              alt={champion.passive.name}
              width={80}
              height={80}
              className="rounded-md border border-gray-600 object-cover"
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-white rounded-lg shadow-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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

        {/* Q, W, E, R 스킬 */}
        {champion.spells.map((spell, index) => (
          <li key={index} className="relative">
            <div className="relative w-[80px] h-[80px] group ">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`}
                alt={spell.name}
                width={80}
                height={80}
                className="rounded-md border border-gray-600 object-cover"
              />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-white rounded-lg shadow-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className="text-gray-800 text-sm text-center px-4">
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
