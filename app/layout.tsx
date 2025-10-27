import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Rust Blog", // タイトルをブログ名に変更
  description: "A blog built with Next.js and Rust", // 説明文も変更
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="light"> {/* langをjaに、data-themeを追加 */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen"> {/* 全体をflexboxで囲み、最小高さを設定 */}
          {/* ヘッダー */}
          <header className="navbar bg-base-100 shadow-md">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl" href="/">My Rust Blog</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </header>

          {/* メインコンテンツ */}
          <main className="flex-grow container mx-auto p-4"> {/* flex-growで中央に配置 */}
            {children}
          </main>

          {/* フッター */}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
              <p>Copyright © {new Date().getFullYear()} - My Rust Blog. All rights reserved.</p>
            </aside>
          </footer>
        </div>
      </body>
    </html>
  );
}