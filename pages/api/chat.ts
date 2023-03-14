import { type NextRequest, NextResponse } from 'next/server'
import { initialMessages } from '../../components/Chat'
import { type Message } from '../../components/ChatLine'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

const botName = 'AI'
const userName = 'News reporter' // TODO: move to ENV var
const firstMessge = initialMessages[0].message

// @TODO: unit test this. good case for unit testing
const generatePromptFromMessages = (messages: Message[], firstMessage: string) => {
  const messagesList: Object[] = []
  messagesList.push({ "role": "assistant", "content": firstMessage })
  messages.forEach((message) => {
    const messageObj = { "role": message.who, "content": message.message  }
    messagesList.push(messageObj)
  })
  return messagesList
}

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  // read body from request
  const body = await req.json()

  const firstPrompt = `あなたは下記人物のアシスタント担当です。ユーザーが彼についての質問をしてくることがありますので、彼についての情報を彼の代わりに提供してください。
  
                      名前: 田中善貴（あだ名はYoshiki）

                      大学: 青山学院大学

                      学年: 3回生

                      研究室: 宮治研究室

                      研究内容: 音声認識

                      得意な技術: TypeScript, React, Next.js

                      学習中の技術: IaC, Severless Architecture

                      ### 経歴

                      - 2020年4月 - 現在
                          
                          ### **青山学院大学 社会情報学部**
                          
                          情報/人間コースを専攻しており、コンピュータサイエンスの基礎からUI/UXを軸としたプロダクト開発を学ぶ。
                          
                      - 2020年7月 - 2021年3月
                          
                          ### **株式会社フェズ**
                          
                          Flask, GAS, Google Analytics APIを使用して、社内分析ツールのバックエンド開発を担当。
                          
                      - 2022年4月 - 現在
                          
                          ### **宮治研究室**
                          
                          ネットワーク情報システムを専攻しており、最新技術を使用したプロダクト開発を行なう。
                          
                      - 2022年5月 - 現在
                          
                          ### **株式会社キュービック**
                          
                          Node.js, Serverless Frameworkを使用して、新規プロダクトのバックエンド開発を担当。
                          

                      ### **実績**

                      - **四半期MVP取得**
                          
                          2022年9月
                          
                          100人以上在籍する学生インターンの中で、四半期で最も成果を上げたと認められ、MVPを受賞しました。
                          

                      ### 過去の制作物

                      [01
                      ****Python診断 ~ B2開発（個人） ~](https://github.com/yoshiki495/PythonDiagnosticApp)** 

                      概要: Python学習者のための適正診断アプリケーション

                      開発時間: 50h

                      使用技術: Python, Django, SQLite, Bootstrap, Chart.js

                      [02
                      **New Job With ~ B2開発（個人） ~**](https://apps.apple.com/us/app/new-job-with/id1611340066)

                      概要: **"予定管理 × SNS" アプリ**

                      開発時間: 100h

                      使用技術: NoCode, React Native, Wix

                      [03
                      **Purposeful Activity ~ B3開発（ハッカソン） ~**](https://github.com/moffy-Black/PurposefulActivity-Pub)

                      概要: 聴覚障害者向けコミュニケーションアプリ

                      開発時間: 50h

                      使用技術: React, Firebase Firestore/Functions, Flask, SkyWay, VRoid

                      [04
                      **目指せ！駅伝優勝！ ~ B3開発（ハッカソン） ~**](https://github.com/Takumi0711/SummerHackthon2022)

                      概要: **青学駅伝をモデルにしたアクションゲーム**

                      開発時間: 30h

                      使用技術: C#, Unity, NCMB

                      [05
                      **Code Editor with GPT-3.5 Turbo ~ B3開発（個人） ~**](https://github.com/yoshiki495/Code-Editor-with-GPT-3.5-Turbo)

                      概要: **GPT-3.5 Turboを搭載したAIがコードレビューアプリケーション**

                      開発時間: 10h

                      使用技術: JavaScript, React, Firebase Functions/Hosting, OpenAPI, Monaco Editor`

  const messagesPrompt = generatePromptFromMessages(body.messages, firstPrompt)

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: messagesPrompt,
  }

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  }

  if (process.env.OPENAI_API_ORG) {
    requestHeaders['OpenAI-Organization'] = process.env.OPENAI_API_ORG
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: requestHeaders,
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const data = await response.json()

  if (data.error) {
    console.error('OpenAI API error: ', data.error)
    return NextResponse.json({
      text: `ERROR with API integration. ${data.error.message}`,
    })
  }

  // return response with 200 and stringify json text
  return NextResponse.json({ text: data.choices[0].message.content })
}