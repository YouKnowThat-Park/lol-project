import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Detail_upgrade_Props {
  item: ChampItem; // 현재 아이템 정보
  items: Record<string, ChampItem>; // 전체 아이템 데이터 (ID를 키로 가지는 객체)
  version: string; // 게임 버전
}

const Detail_Upgrade = ({ item, items, version }: Detail_upgrade_Props) => {
  if (!item.into) {
    return null; // 업그레이드 아이템이 없으면 아무것도 렌더링하지 않음
  }

  return (
    <div className="mt-8 w-full max-w-sm bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold text-white text-center mb-4">
        업그레이드 아이템
      </h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {item.into.map((upgradeId) => {
          const upgradeItem = items[upgradeId]; // 업그레이드 아이템 정보

          if (!upgradeItem) return null; // 업그레이드 아이템이 없으면 렌더링 안함

          return (
            <li key={upgradeId} className="text-center">
              <Link
                href={`/items/${upgradeId}`}
                className="flex flex-col items-center justify-center gap-2"
              >
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${upgradeItem.image.full}`}
                  alt={upgradeItem.name}
                  width={50}
                  height={50}
                  className="rounded-lg border border-gray-500 shadow-md"
                />
              </Link>
              <p className="text-sm text-gray-300 mt-2">{upgradeItem.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Detail_Upgrade;
