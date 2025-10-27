import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-8">ブログ記事一覧</h2>
      <ul className="space-y-4">
        {allPostsData.map(({ id, date, title, description }) => (
          <li key={id} className="card bg-base-100 shadow-xl p-6">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl">
                <Link href={`/blog/${id}`} className="link link-hover">
                  {title}
                </Link>
              </h3>
              <small className="text-gray-500">{date}</small>
              <p className="text-lg">{description}</p>
              <div className="card-actions justify-end">
                <Link href={`/blog/${id}`} className="btn btn-primary">
                  続きを読む
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}