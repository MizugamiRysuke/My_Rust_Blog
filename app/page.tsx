import Link from 'next/link'; // Linkコンポーネントをインポート

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen"> {/* 画面中央に配置 */}
      <h1 className="text-5xl font-bold mb-8">My Rust Blog</h1>
      <Link href="/blog" className="btn btn-primary btn-lg">
        ブログ記事を見る
      </Link>
    </main>
  );
}