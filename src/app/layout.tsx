"use client";
import "./globals.css";
import PlayLogo from "../app/assets/playImg.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useDarkMode from "../components/useDarkMode";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <html lang="en" className={theme}>
      <body className={theme}>
        <div className="flex justify-center h-20 bg-black space-x-20 items-center mb-10">
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
              <p className="ml-1.5">OP.GG</p>
              <p>전적 검색</p>
            </div>
            <div>
              <p className="ml-1.5">롤 패치</p>
              <p>공지사항</p>
            </div>
            <div className="space-y-1.5">
              <Link href="/rotation">로테이션</Link>
              <div className="w-16 h-px bg-white" />
              <Link href="/champions" className="ml-1.5">
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
            <p>공지사항</p>
            <p>커뮤니티</p>
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
        {children}
      </body>
    </html>
  );
}
