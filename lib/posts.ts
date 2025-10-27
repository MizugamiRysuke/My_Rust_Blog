import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostData = {
  id: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  description: string;
  contentHtml: string;
};

export function getSortedPostsData(): PostData[] {
  // posts ディレクトリ内のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // ファイル名から ".md" を削除して ID を取得
    const id = fileName.replace(/\.md$/, '');

    // マークダウンファイルを文字列として読み込む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter を使って投稿のメタデータセクションをパースする
    const matterResult = matter(fileContents);

    // データを id と組み合わせる
    return {
      id,
      ...(matterResult.data as { title: string; date: string; author: string; tags: string[]; description: string; }),
      contentHtml: '', // contentHtml は後で取得
    };
  });
  // 投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matter を使って投稿のメタデータセクションをパースする
  const matterResult = matter(fileContents);

  // remark を使ってマークダウンを HTML 文字列に変換する
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データを id と contentHtml と組み合わせる
  return {
    id,
    ...(matterResult.data as { title: string; date: string; author: string; tags: string[]; description: string; }),
    contentHtml,
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  const result = fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
  return result;
}