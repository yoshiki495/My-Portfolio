import BlogLayout from 'layouts/blog';
import { getAllPosts, getPostBySlug } from "../../lib/read-markdown";
import markdownToHtml from "../../lib/convert-file";
import { Post } from 'lib/types';

export default function PostPage({ post }: { post: Post }) {
  return (
    <BlogLayout post={post}>
    </BlogLayout>
  );
}

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

/**
 * 記事の内容を取得する
 */
export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, ["slug", "title", "date", "content"]);
  // Markdown を HTML に変換する
  const content = await markdownToHtml(post.content);
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};
