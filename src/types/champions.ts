// 챔피언 데이터 & 이미지
interface ChampionData {
  id: string;
  key: string;
  title: string;
  name: string;
  blurb: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

interface ChampionSkill {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  cooldown: number[];
  cost: number[];
  range: number[];
  image: {
    full: string;
  };
}
interface ChampionSkin {
  id: string; // 스킨 ID
  num: number; // 스킨 번호
  name: string; // 스킨 이름
  chromas: boolean; // 크로마 지원 여부
}

interface ChampionDetailType {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: {
    full: string;
  };
  skins: ChampionSkin[]; // 스킨 데이터
  spells: {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    cooldown: number[];
    cost: number[];
    range: number[];
    image: {
      full: string;
    };
  }[]; // Q, W, E, R 스킬 배열
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  }; // 패시브 스킬 데이터
}
