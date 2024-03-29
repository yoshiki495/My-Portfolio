import { Suspense } from 'react';
import Image from 'next/image';

import Container from '../components/Container';
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
              <h2 className="text-gray-700 dark:text-gray-200 mt-6">
              <span className="font-semibold">Aoyama Gakuin Univ. </span>
                {'  '} ▶︎ | B3 | MYJ Lab | Voice Recognition |
              </h2>
              <h2 className="text-gray-700 dark:text-gray-200 mt-2">
              <span className="font-semibold">Frontend Dev</span>
                {'  '} ▶︎ | TypeScript | React | Next.js | Vue.js |
              </h2>
              <h2 className="text-gray-700 dark:text-gray-200 mt-2">
              <span className="font-semibold">Backend Dev</span>
                {'  '} ▶︎ | Python | Django | Serverless Archit. | 
              </h2>
              <h2 className="text-gray-700 dark:text-gray-200 mt-2">
              <span className="font-semibold">Still learning</span>
                {'  '} ▶︎ | AWS | IaC | Docker | UI/UX Design |
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                
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

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-4 text-black dark:text-white">
            My History
          </h3>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row items-center md:justify-center mb-8 md:mb-16">
              <div className="mx-4">
                <div className="text-gray-700 dark:text-gray-200 text-center md:text-left">
                  <div className="relative pl-4 mb-8">
                    <div className="border-r-2 border-gray-600 absolute h-full top-0" style={{left: "15px"}}></div>
                    <ul className="list-none m-2 p-2">
                    <li className="mb-4">
                        <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-8 w-8">
                          <path
                            d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                          <path
                            d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                          <path
                            d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                          <div className="flex-1 ml-4 font-bold">School</div>
                          <div className="text-gray-500">2020年4月 - 現在</div>
                        </div>
                        <div className="ml-12">
                          <h4 className="font-bold mb-2">青山学院大学 社会情報学部</h4>
                          <p className="text-gray-500">情報/人間コースを専攻しており、コンピュータサイエンスの基礎から UI/UX を軸としたプロダクト開発を学ぶ。</p>
                        </div>
                      </li>
                      <li className="mb-4">
                        <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-8 w-8">
                          <path
                            d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                          <path
                            d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                          <path
                            d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                          <div className="flex-1 ml-4 font-bold">Intern</div>
                          <div className="text-gray-500">2020年7月 - 2021年3月</div>
                        </div>
                        <div className="ml-12">
                          <h4 className="font-bold mb-2">株式会社フェズ</h4>
                          <p className="text-gray-500">Flask, GAS, Google Analytics API, Slack API を使用して、社内分析ツールのバックエンド開発を担当。</p>
                        </div>
                      </li>
                      <li className="mb-4">
                        <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-8 w-8">
                          <path
                            d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                          <path
                            d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                          <path
                            d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                          <div className="flex-1 ml-4 font-bold">Intern</div>
                          <div className="text-gray-500">2021年10月 - 2021年12月</div>
                        </div>
                        <div className="ml-12">
                          <h4 className="font-bold mb-2">株式会社Wizleap</h4>
                          <p className="text-gray-500">Vue.js を使用して、既存プロダクトのフロントエンド開発を担当。</p>
                        </div>
                      </li>
                      <li className="mb-4">
                        <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-8 w-8">
                          <path
                            d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                          <path
                            d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                          <path
                            d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                          <div className="flex-1 ml-4 font-bold">School</div>
                          <div className="text-gray-500">2022年4月 - 現在</div>
                        </div>
                        <div className="ml-12">
                          <h4 className="font-bold mb-2">宮治研究室</h4>
                          <p className="text-gray-500">ネットワーク情報システムを専攻しており、最新技術を使用したプロダクト開発を行なう。</p>
                        </div>
                      </li>
                      <li className="mb-4">
                        <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-8 w-8">
                          <path
                            d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                          <path
                            d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                          <path
                            d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                          <div className="flex-1 ml-4 font-bold">Intern</div>
                          <div className="text-gray-500">2022年5月 - 現在</div>
                        </div>
                        <div className="ml-12">
                          <h4 className="font-bold mb-2">株式会社キュービック</h4>
                          <p className="text-gray-500">Node.js, Docker, Serverless Framework を使用して、新規プロダクトのバックエンド開発を担当。</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
      </div>

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-4 text-black dark:text-white">
        My Achievement
      </h3>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:justify-center mb-8 md:mb-16">
          <div className="mx-4">
            <div className="text-gray-700 dark:text-gray-200 text-center md:text-left">
              <div className="relative pl-4 mb-8">
                <div className="border-r-2 border-gray-600 absolute h-full top-0" style={{left: "15px"}}></div>
                <ul className="list-none m-2 p-2">
                  <li className="mb-4">
                    <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-8 w-8">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                      <div className="flex-1 ml-4 font-bold">TOEIC700点取得</div>
                      <div className="text-gray-500">2021年3月</div>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-500">
                        TOEIC Listening & Reading で700点を取得しました。
                      </p>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-8 w-8">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                      <div className="flex-1 ml-4 font-bold">四半期MVP取得</div>
                      <div className="text-gray-500">2022年9月</div>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-500">
                        100人以上在籍する学生インターンの中で、四半期で最も成果を上げたと認められ、MVPを受賞しました。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-4 text-black dark:text-white">
        My Learning
      </h3>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:justify-center mb-8 md:mb-16">
          <div className="mx-4">
            <div className="text-gray-700 dark:text-gray-200 text-center md:text-left">
              <div className="relative pl-4 mb-8">
                <div className="border-r-2 border-gray-600 absolute h-full top-0" style={{left: "15px"}}></div>
                <ul className="list-none m-2 p-2">
                  <li className="mb-4">
                    <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8">
                      <path
                        d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path
                        fill-rule="evenodd"
                        d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                    </svg>
                      <div className="flex-1 ml-4 font-bold">Ruby, Ruby on Rails, jQuery, HTML, CSS</div>
                      <div className="text-gray-500">2020年4月 - 2020年6月</div>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-500">
                        ネット記事を参考にWeb開発の基本を学習し、ポートフォリオサイトを作成。
                      </p>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8">
                      <path
                        d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path
                        fill-rule="evenodd"
                        d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                    </svg>
                      <div className="flex-1 ml-4 font-bold">Python, Flask, JavaScript, GAS</div>
                      <div className="text-gray-500">2020年7月 - 2021年3月</div>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-500">
                        インターン先で学んだことをもとに、スクレイピングなど自分の興味のある分野を学習。
                      </p>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8">
                      <path
                        d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path
                        fill-rule="evenodd"
                        d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                    </svg>
                      <div className="flex-1 ml-4 font-bold">Python, Django, SQL</div>
                      <div className="text-gray-500">2021年4月 - 2021年8月</div>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-500">
                        技術書を参考にWeb開発の基本を学習し、ポートフォリオサイトを再度作成。
                      </p>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8">
                      <path
                        d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path
                        fill-rule="evenodd"
                        d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                    </svg>
                      <div className="flex-1 ml-4 font-bold">PHP, Laravel, Vue.js</div>
                      <div className="text-gray-500">2021年9月 - 2021年12月</div>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-500">
                        フロントエンドとバックエンドの知識を学習し、ポートフォリオサイトを再度作成。
                      </p>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8">
                      <path
                        d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path
                        fill-rule="evenodd"
                        d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                    </svg>
                      <div className="flex-1 ml-4 font-bold">TypeScript, Node.js, React, Firebase</div>
                      <div className="text-gray-500">2022年1月 - 2022年8月</div>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-500">
                        フロントエンドとバックエンドの知識を学習し、ポートフォリオサイトを再度作成。
                      </p>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8">
                      <path
                        d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path
                        fill-rule="evenodd"
                        d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                    </svg>
                      <div className="flex-1 ml-4 font-bold">C#, Unity, Azure</div>
                      <div className="text-gray-500">2022年9月 - 2022年12月</div>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-500">
                        ゲーム開発やセンサーの知識を学習すると共に、音声認識を学習。
                      </p>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8">
                      <path
                        d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path
                        fill-rule="evenodd"
                        d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                    </svg>
                      <div className="flex-1 ml-4 font-bold">Next.js</div>
                      <div className="text-gray-500">2023年1月 - 2023年2月</div>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-500">
                        フロントエンドの知識を学習し、ポートフォリオサイトを再度作成。
                      </p>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8">
                      <path
                        d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path
                        fill-rule="evenodd"
                        d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                    </svg>
                      <div className="flex-1 ml-4 font-bold">AWS, IaC</div>
                      <div className="text-gray-500">2023年3月 - 現在</div>
                    </div>
                    <div className="ml-12">
                      <p className="text-gray-500">
                        クラウドの知識を学習し、AWS SAAの資格取得を目指す。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        My Project
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        今までの制作物の一部を時系列に沿って紹介します。
      </p>
      <VideoCard
        index="01"
        href="https://github.com/yoshiki495/Python-Diagnostic-App"
        title="Python診断 ~ B2開発（個人） ~ "
      />
      <VideoCard
        index="02"
        href="https://www.new-job-with.com/"
        title="New Job With ~ B2開発（個人）  ~ "
      />
      <VideoCard
        index="03"
        href="https://github.com/moffy-Black/PurposefulActivity-Pub"
        title="Purposeful Activity ~ B3開発（ハッカソン） ~ "
      />
      <VideoCard
        index="04"
        href="https://github.com/Takumi0711/SummerHackthon2022"
        title="目指せ！駅伝優勝！ ~ B3開発（ハッカソン） ~ "
      />
      <VideoCard
        index="05"
        href="https://github.com/yoshiki495/Code-Editor-with-GPT-3.5-Turbo"
        title="Code Editor with GPT-3.5 Turbo ~ B3開発（個人） ~ "
      />
      <VideoCard
        index="06"
        href="https://github.com/yoshiki495/My-Portfolio"
        title="My Portfolio ~ B3開発（個人） ~ "
      />
      <VideoCard
        index="06"
        href="https://github.com/yoshiki495/Talk-Matic"
        title="Talk Matic ~ B3開発（個人） ~ "
      />
</div>
</Container>
</Suspense>
);
}

