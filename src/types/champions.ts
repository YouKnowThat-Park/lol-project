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
