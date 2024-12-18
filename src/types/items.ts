// 아이템 & 이미지 & 가격
export interface ChampItem {
  name: string;
  description: string;
  plaintext: string;
  image: {
    full: string;
  };
  gold: {
    total: number;
    sell: number;
  };
  into?: string[];
}
