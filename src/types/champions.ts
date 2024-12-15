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

interface ChampionDetailType {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: {
    full: string;
  };
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
  }[];
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
}
