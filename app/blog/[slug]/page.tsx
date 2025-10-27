import { getPostData, getAllPostIds } from '@/lib/posts';
import { notFound } from 'next/navigation';
import MermaidRenderer from '@/components/MermaidRenderer'; // MermaidRendererをインポート

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const allPostIds = getAllPostIds();
  return allPostIds.map((post) => ({
    slug: post.params.id,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  let postData;
  try {
    postData = await getPostData(slug);
  } catch (error) {
    console.error(`Failed to fetch post data for slug: ${slug}`, error);
    notFound(); // 記事が見つからない場合は404ページを表示
  }

  return (
    <article className="prose lg:prose-xl mx-auto p-4"> {/* proseクラスでMarkdownのスタイルを適用 */}
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <p className="text-gray-600 mb-6">
        <time dateTime={postData.date}>{postData.date}</time> by {postData.author}
      </p>
      {/* dangerouslySetInnerHTML の代わりに MermaidRenderer を使用 */}
      <MermaidRenderer contentHtml={postData.contentHtml} />
    </article>
  );
}