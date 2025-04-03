# 🎮 League of Legends 
데이터 웹 애플리케이션
리그 오브 레전드 데이터를 제공하는 웹 애플리케이션입니다.
챔피언 정보, 아이템 목록, 무료 로테이션 정보를 직관적으로 확인할 수 있습니다.

![메인화먀ㅕㄴ](https://github.com/user-attachments/assets/bc947251-31fe-41dd-adc8-84f5503b0d80)


🚀 기술 스택
- ⚛️ React - UI 컴포넌트 기반 개발
- 💻 Next.js - 파일 기반 라우팅 및 SSR
- 🌐 TypeScript - 정적 타입 언어 사용
- 🎨 Tailwind CSS - 쉽고 빠른 스타일링
- 🔗 Riot API - 게임 데이터 제공
- 🧂 Tanstack Query -


📂 프로젝트 구조
```
src/
│
├── app/                          # Next.js 라우팅 시스템
│   ├── api/rotation/             # API 라우트
│   │   └── route.ts              # 챔피언 로테이션 API 핸들러
│   │
│   ├── champions/                # 챔피언 관련 페이지
│   │   ├── [id]/                 # 특정 챔피언 상세 페이지
│   │   │   └── page.tsx          # 챔피언 상세 페이지
│   │   └── page.tsx              # 챔피언 목록 페이지
│   │
│   ├── items/                    # 아이템 관련 페이지
│   │   ├── [id]/                 # 특정 아이템 상세 페이지
│   │   │   └── page.tsx          # 아이템 상세 페이지
│   │   └── page.tsx              # 아이템 목록 페이지
│   │
│   ├── rotation/                 # 챔피언 로테이션 페이지
│   │   ├── page.tsx              # 메인 로테이션 페이지
│   │   └── _provider.tsx         # 데이터 제공자
│   │
│   ├── globals.css               # 전역 CSS 스타일
│   ├── layout.tsx                # 공통 레이아웃
│   └── page.tsx                  # 메인 페이지
│
├── components/                   # 재사용 가능한 컴포넌트
│   ├── ChampionData/             # 챔피언 데이터 관련 컴포넌트
│   ├── ChampionDetail/           # 챔피언 상세 컴포넌트
│   ├── ItemsData/                # 아이템 데이터 관련 컴포넌트
│   └── useDarkMode.tsx           # 다크모드 구현
│
├── types/                        # TypeScript 타입 정의
│   ├── champions.ts              # 챔피언 타입
│   ├── items.ts                  # 아이템 타입
│   └── rotations.ts              # 로테이션 타입
│
├── utils/                        # 유틸리티 함수
│   └── serverApi.ts              # API 호출 로직
│
└── public/                       # 정적 파일 (이미지, 아이콘 등)
    └── favicon.ico               # 파비콘 설정
```

## 로테이션 챔피언
![로테이션](https://github.com/user-attachments/assets/82761bf4-3b5e-44b3-8317-e96779143040)
로테이션 챔피언 목록을 불러와서 UI로 보여줍니다.

CSR 방식과 Route Handlers를 활용하고 있습니다.
- 클라이언트에서 동적으로 데이터를 처리하는 구조를 만들기 위함.

## 챔피언
![챔피언](https://github.com/user-attachments/assets/38c87029-9a84-4c2c-9264-e50da6afbd58)
챔피언 목록을 불러와서 UI로 보여줍니다.

ISR랜더링 방식을 사용하고 있습니다.
- 특정 시간 간격으로 데이터를 재검증 할 수 있도록 했음.


## 챔피언 상세 페이지
![디테일 챔피언](https://github.com/user-attachments/assets/a858a3de-018a-4221-b047-de413396d582)
특정 챔피언의 상세 페이지를 보여줍니다.

- 서버 컴포넌트로 서버 사이드에서 데이터를 가져옵니다.
- 메타데이터를 설정하여 SEO를 향상 시켰습니다.

## 아이템
![아이템](https://github.com/user-attachments/assets/0aba469c-7b24-4fd3-9a17-168f5f3f2849)
아이템 목록을 불러와 UI로 보여줍니다.

SSG랜더링 방식을 사용하고 있습니다.
- 아이템 데이터는 자주 변경되지 않고, 빠른 페이지 로딩이 필요함


## 아이템 상세 페이지
![아이템 디테일 ](https://github.com/user-attachments/assets/d6340ba1-01a3-443b-b200-58a60b146225)
아이템의 상세 페이지를 보여줍니다.
- 업그레이드 아이템을 클릭 하여 이동할 수 있게 함
- SSR랜더링 방식을 사용함


## 다크모드
| 다크모드 | 화이트 모드 |
|----------|-------------|
| ![다크모드](https://github.com/user-attachments/assets/69f51d3a-5fe9-421f-9579-bf1d7d852115) | ![화이트 모드](https://github.com/user-attachments/assets/dec8a350-2fb2-4b56-a327-7b73196b2e67) |

