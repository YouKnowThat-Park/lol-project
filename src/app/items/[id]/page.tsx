import Data_Main from "@/components/ItemsData/Detail_Main";
import Detail_Upgrade from "@/components/ItemsData/Detail_Upgrade";
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
        <Data_Main item={item} version={version} />

        {/* 업그레이드 아이템 섹션 */}
        <Detail_Upgrade item={item} items={items} version={version} />
      </div>
    </>
  );
}
