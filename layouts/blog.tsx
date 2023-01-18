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
      </article>
    </Container>
  );
}
