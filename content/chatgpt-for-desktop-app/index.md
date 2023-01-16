---
title: "今話題のChatGPTにPythonデスクトップアプリ作らせてみた"
date: 2023/1/16
---

## 1. はじめに

はいどうも、[myjlab advent calender 2022](https://qiita.com/advent-calendar/2022/myjlab) 6日目を担当する3年の [yoshiki495](https://github.com/yoshiki495) です。

5日目担当 [阿左見さん](https://qiita.com/ren_180) の [無料で使える！ render.comとは？](https://qiita.com/ren_180/items/d82b371783e638b6c3d7) をサンドイッチしての2日目になります。

過去にHeroku使って無料でデプロイしたアプリたちを思い出してとても悲しい気持ちです。

余談は置いておいて、

先日、OpenAIからChatGPTという名の対話型言語モデルが発表されましたね。

こんな感じで多くの著名人が話題に取り上げています。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">chatGPTは雨描いて，って言って出てくるからプログラミング実習とかアレだわ． <a href="https://t.co/nSetPWe5PD">pic.twitter.com/nSetPWe5PD</a></p>&mdash; 落合陽一 Yoichi OCHIAI (@ochyai) <a href="https://twitter.com/ochyai/status/1599606597567016960?ref_src=twsrc%5Etfw">December 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

いやついにここまで来たかと感動しますね。

そんなわけで今回はこのChatGPTにPythonデスクトップアプリを作らせることができるか検証していこうと思います。

ではどうぞ。

## 2. 検証

### まずは作り方を聞いてみる

![スクリーンショット 2022-12-05 15.17.20.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2298551/21fa4ced-e2b7-2f7b-42a6-cf0eaee5c3c0.png)
良い感じですね。

箇条書きで補足もあってわかりやすい。

### 実際に作ってもらう

今回はtkinterとPyInstallerを使ってアプリケーションを作ってもらいたいと思います。
![スクリーンショット 2022-12-05 15.47.46.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2298551/c01106b0-4c5d-2340-7866-48d0c36d7714.png)

良い感じですね。

コメントもしてくれてありがたい。

### テスト

あとは言われた通りに作成するだけです。

するとPythonファイルと同じ階層のdistフォルダ内このようなアイコンが作成されます。

![スクリーンショット 2022-12-05 16.13.03.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2298551/2d7061aa-039a-3b5f-bcab-47a0bee1f109.png)

これをクリックすると、デスクトップにPythonプログラムに記述した通りのウィンドウが表示されます。

![スクリーンショット 2022-12-05 16.18.36.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2298551/a2ff0c67-fac3-3dfa-4031-806186cb491e.png)

正常系ですね。つまり結果は成功です。

### 補足

ちなみに自分はM1のMacを使っているのでpipコマンドを使用すると当たり前に `zsh: command not found: pip` というエラーが出力されます。

こういう場合、ChatGPTに聞いてみるとどうなるでしょうか。
![スクリーンショット 2022-12-05 16.36.27.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2298551/fc5b26ef-1328-ea33-39ac-c079dcbb0aa3.png)

とのことです。

あながち間違ってはないですが、

M1のMacを使うなら順当にpip3コマンドを使いましょうね。

## 3. おわりに

これにて検証一旦終了です。

結果は成功。

いやChatGPT凄いですね。

上手く使いこなせば開発が加速度的に進みそうです。

みなさんも是非。これにて。