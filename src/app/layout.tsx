"use client";
import "./globals.css";

import Image from "next/image";
import Link from "next/link";

import useDarkMode from "../components/useDarkMode";
import RotationProvider from "./_provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <html lang="en" className={theme}>
      <body className={theme}>
        {/* ✅ 공통 바디 */}
        <div className="h-20 bg-black font-semibold flex items-center">
          {/* ✅ 데스크탑 구조 그대로 유지 */}
          <div className="hidden lg:flex justify-center items-center space-x-20 w-full px-20">
            {/* 로고 */}
            <Link href="/">
              <Image
                src="/assets/logoImg.png"
                alt="logoImg"
                width={120}
                height={0}
              />
            </Link>

            {/* 메뉴 */}
            <nav
              className="flex justify-center space-x-20 items-center"
              style={{ color: "#C8AA64" }}
            >
              <div>
                <a href="https://www.op.gg/?hl=ko_KR" target="_blank">
                  <p className="ml-1.5">OP.GG</p>
                  <p>전적 검색</p>
                </a>
              </div>
              <div>
                <a
                  href="https://www.leagueoflegends.com/ko-kr/news/tags/patch-notes/"
                  target="_blank"
                >
                  <p className="ml-1.5">롤 패치</p>
                  <p>공지사항</p>
                </a>
              </div>
              <div className="space-y-1.5">
                <Link href="/rotation">로테이션</Link>
                <div className="w-16 h-px bg-white" />
                <Link href="/champions" className="ml-2">
                  챔피언
                </Link>
              </div>
              <div className="space-y-1.5">
                <Link href="/items" className="ml-1.5">
                  아이템
                </Link>
              </div>
            </nav>

            {/* 버튼 */}
            <div className="flex-shrink-0 text-white flex items-center space-x-4">
              <a href="https://www.leagueoflegends.com/ko-kr/" target="_blank">
                <Image
                  className="ml-12"
                  src="/assets/playImg.png"
                  alt="playImg"
                  width={90}
                  height={40}
                />
              </a>
              <button
                className="dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
                onClick={toggleTheme}
              >
                {theme === "dark" ? "☀️" : "🌑"}
              </button>
            </div>
          </div>

          {/* ✅ 모바일: 여백 없음, 좌우 고정 + 가운데 드래그 */}
          <div className="flex lg:hidden items-center justify-between w-full px-0">
            {/* 로고 */}
            <div className="flex-shrink-0 pl-2">
              <Link href="/">
                <Image
                  src="/assets/logoImg.png"
                  alt="logoImg"
                  width={100}
                  height={0}
                />
              </Link>
            </div>

            {/* 드래그 메뉴 */}
            <div className="flex-grow overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden mx-2">
              <nav className="flex items-center space-x-6 text-sm text-[#C8AA64] min-w-max">
                <a
                  href="https://www.op.gg/?hl=ko_KR"
                  target="_blank"
                  className="shrink-0"
                >
                  <p>OP.GG</p>
                  <p>전적 검색</p>
                </a>
                <a
                  href="https://www.leagueoflegends.com/ko-kr/news/tags/patch-notes/"
                  target="_blank"
                  className="shrink-0"
                >
                  <p>롤 패치</p>
                  <p>공지사항</p>
                </a>
                <Link href="/rotation" className="shrink-0">
                  로테이션
                </Link>
                <Link href="/champions" className="shrink-0">
                  챔피언
                </Link>
                <Link href="/items" className="shrink-0">
                  아이템
                </Link>
              </nav>
            </div>

            {/* 다크모드 버튼 */}
            <div className="flex-shrink-0 pr-2">
              <button
                className="dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded"
                onClick={toggleTheme}
              >
                {theme === "dark" ? "☀️" : "🌑"}
              </button>
            </div>
          </div>
        </div>

        <RotationProvider>{children}</RotationProvider>
      </body>
    </html>
  );
}
