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
        <div className="flex justify-center h-20 bg-black space-x-20 items-center  font-semibold  ">
          <div>
            <Link href="/">
              <Image
                src="/assets/logoImg.png"
                alt="logoImg"
                width={120}
                height={0}
              />
            </Link>
          </div>
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

          <nav className="flex justify-center text-white">
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
              className=" dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded m-0"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀️" : "🌑"}
            </button>
          </nav>
        </div>
        <RotationProvider>{children}</RotationProvider>
      </body>
    </html>
  );
}
