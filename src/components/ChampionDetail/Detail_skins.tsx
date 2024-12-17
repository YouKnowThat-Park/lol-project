import Image from "next/image";
import React from "react";

interface ChampionDetail_skins_Props {
  champion: ChampionDetailType;
}

const Detail_skins = ({ champion }: ChampionDetail_skins_Props) => {
  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-3 mt-10">
        {champion.skins.map((skins, index) => (
          <li key={index} className="flex justify-center">
            <div className="flex justify-center">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skins.num}.jpg`}
                alt={skins.name}
                height={150}
                width={150}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Detail_skins;
