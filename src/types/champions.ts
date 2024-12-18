// 챔피언 데이터 & 이미지
export interface ChampionData {
  // export 추가
  id: string;
  key: string;
  title: string;
  name: string;
  blurb: string;
  image: {
    full: string;
  };
}

export interface ChampionSkill {
  // export 추가
  name: string;
  description: string;
  image: {
    full: string;
  };
}

export interface ChampionSkin {
  // export 추가
  num: number; // 스킨 번호
  name: string; // 스킨 이름
}

export interface ChampionDetailType {
  // export 추가
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
    name: string;
    description: string;
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
