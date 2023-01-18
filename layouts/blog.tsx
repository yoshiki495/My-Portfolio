import { PropsWithChildren, Suspense } from 'react';

import Container from 'components/Container';
import { Post } from 'lib/types';

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Post }>) {
  return (
    <Container
      title={`${post.title} – Yoshiki Tanaka`}
      description={post.excerpt}
      date={new Date(post.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Yoshiki Tanaka / '}
              {post.date}
            </p>
          </div>
        </div>
        <Suspense fallback={null}>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.toString() }} />
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <a
              href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                `https://leerob.io/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Discuss on Twitter'}
            </a>
            {` • `}
            <a
              href="https://github.com/leerob/leerob.io/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Suggest Change'}
            </a>
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
