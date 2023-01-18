import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Yoshiki Tanaka
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Software Developer and a member of {' '}
                <span className="font-semibold">Miyaji Lab</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                I'm learning Python, Node.js, React, Next.js, AWS, etc...
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Yoshiki Tanaka"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Posts
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="Serverless Frameworkを使ってLambda + API Gateway + DynamoDBの環境を構築してみる"
              slug="serverless-framework-tutorial"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
            <BlogPostCard
              title="京大が開発してるHARKというロボット聴覚OSSの講習会に行ってきた話"
              slug="hark"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="今話題のChatGPTにPythonデスクトップアプリ作らせてみた"
              slug="chatgpt-for-desktop-app"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
          </div>
          <Link
            href="/blog"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'Read all posts'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            My Project
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Previous projects that have been created.
          </p>
          <VideoCard
            index="02"
            href="https://apps.apple.com/us/app/new-job-with/id1611340066"
            title="New Job With"
          />
          <VideoCard
            index="01"
            href="https://chat-gpt-clone-6ga39d9v3-yoshiki495.vercel.app"
            title="ChatGPT Clone"
          />
        </div>
      </Container>
    </Suspense>
  );
}
