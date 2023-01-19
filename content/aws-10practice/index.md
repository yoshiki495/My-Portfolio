---
title: "AWS設計のベストプラクティスで最低限知っておくべき10(+1)のこと"
date: "2023/01/29"
---

# 目次
1. スケーラビリティを確保する
2. 環境を自動化する
3. 使い捨て可能なリソースを使用する
4. コンポーネントを疎結合にする
5. サーバーではなくサービスを設計する
6. 適切なデータベースソリューションを選択する
7. 単一障害点を排除する
8. コストを最適化する
9. キャッシュを使用する
10. すべてのレイヤーでセキュリティを確保する
11. 増加するデータの管理

## スケーラビリティを確保する

### スケーラビリティとは
- ソフトウェアやシステムなどの拡張性、拡張可能性を示す言葉で、システムの利用や負荷の増大、用途の拡大などに応じてどれだけ柔軟に性能や機能を向上できるかを意味する

### アンチパターンとベストプラクティス
| アンチパターン | ベストプラクティス | 
| --- | --- |
| アプリケーションサーバーがキャパシティーの上限に到達し、ユーザーがアクセスできない状態。（新しいサーバーの起動には時間がかかる。） | アプリケーションサーバーがキャパシティーの上限に達する前に、Auto Scalingがアラームを受信することで、キャパシティーが上限に到達する前に準備していた新しいサーバーとともにスケールアウトする。 | 

## 環境を自動化する

### アンチパターンとベストプラクティス
| アンチパターン | ベストプラクティス |
| --- | --- |
| アプリケーションサーバーがクラッシュした際に、ユーザーが管理者に手動で通知し、管理者が新しいサーバーを手動で起動して設定している状態。 | アプリケーションサーバーがクラッシュした際に、Amazon CloudWatchによって異常のあるインスタンスを自動で検出し、自動でAuto Scalingへのアラートの送信・変更管理ソリューションへの記録・管理者への通知を行う。 |

## 使い捨て可能なリソースを使用する
- クラウドではいつでも捨てられるようにリソースを準備しておく
- クラウドではリソース1つ1つに名前は付けず、ラベル（タグ）で管理する
    - オンプレミスではリソース1つ1つに名前を付け、管理する
- サーバーには状態（ステート）を持たせない（ステートレス）

| アンチパターン | ベストプラクティス | 
| --- | --- | 
| 長期間の運用で各サーバーの設定に違いが生じる。必要でないときにもリソースが稼働している。IPアドレスの固定により柔軟性が失われている。使用中のハードウェアで新しい更新をテストすることが難しく不便である。などの状態。 | 設定が同じ場合、新しいリソースのデプロイを自動化する。使用していないリソースは終了する。新しいIPアドレスに自動的に切り替える。新しいリソースの更新内容をテストしてから、古いリソースを置き換える。 | 

## コンポーネントを疎結合にする

### 疎結合とは
- システムの構成要素（コンポーネント）間の結びつきや互いの依存関係、関連性などが弱く、各々の独立性が高い状態のこと

### 密結合とは
- システムの構成要素（コンポーネント）間の結びつきや互いの依存関係、関連性などが強く、各々の独立性が低い状態のこと

### アンチパターンとベストプラクティス

| アンチパターン | ベストプラクティス | 
| --- | --- | 
| 障害が起きているが、どのポイントで起きているか判別できておらず、そのポイントと結合している部分にも障害が起きている。スケーラビリティにおいて、結合が複雑化する。などの状態。 | 処理種別やデータ特性ごとにコンポーネントを細分化し、ロードバランサー（「処理のつなぎ目」）でコンポーネントをつなぐ。ステート（データ）を持つレイヤと持たないレイヤを分離。データ特性ごとにデータストアを選択する。 | 

## サーバーではなくサービスで設計する
- マネージドサービスを活用する
    - AWSでは、耐障害性や可用性が組み込まれており、テクノロジーをサービスとして活用できる

| アンチパターン | ベストプラクティス |
| --- | --- |
| シンプルなアプリケーションを永続的にサーバー上で実行する。アプリケーション間で直接通信が行われる。静的ウェブアセットはローカルのインスタンスに保存される。ユーザー認証とユーザー状態の保存は、バックエンドサーバーによって処理される。などの状態。 | 必要に応じてサーバーレスソリューションをプロビジョニングする。メッセージキューによりアプリケーション間の通信が処理される。静的ウェブアセットはAmazon S3などの外部データストアに保存される。ユーザー認証とユーザー状態の保存にはAWSのマネージドサービスを使用する。 | 

## 適切なデータベースソリューションを選択する

### 検討事項
- 読み取りと書き込みのニーズ
- 必要なストレージの合計サイズ
- オブジェクトの標準的なサイズとオブジェクトへのアクセスの特性
- 耐久性の要件
- レイテンシーの要件
- サポートされる最大同時接続ユーザー数
- クエリの特性
- 必要とされる整合性統制の強度

## 単一障害点をなくす

### 単一障害点とは
- その箇所が停止するとシステム全体が停止するような箇所
- SPOF(Single Point of Failure)とも呼ばれる

### アンチパターンとベストプラクティス

| アンチパターン | ベストプラクティス |
| --- | --- | 
| 一つの箇所が停止したことにより、システム全体が停止している状態。 | セカンダリ（スタンバイ）データベースサーバーを作成して、データをレプリケートし、負荷を引き継ぐ。 |

## コストを最適化する

### AWSのコスト特性
- 初期投資が不要
    - データセンターの運用と保守への投資が不要に
- 従量課金
    - リソースを使用したときに、使用した分だけ支払う
- TCO(Total Cost of Ownership）で考える
    - TCOとは総所有コストのことで、ある設備などの資産に関する購入から廃棄までに必要な時間と支出の総計のことである
    - システムや資産の維持管理のために必要なランニングコスト（人件費、運用保守費用、セキュリティ機能等）も考慮する

### モニタリングを検討する
- リソースモニタリング
    - 割り当てたリソースのサイズは適切か
    - どの程度使用されているか
- コストモニタリング
    - コストエクスプローラー等を活用し、日々の利用料金を把握する

### 検討事項
- リソースのサイズとタイプがジョブに適しているか
- どのメトリックスをモニタリング必要があるか
- 使用されていないリソースがオフになっていることをどのような方法で確認するか
- リソースの使用頻度がどの程度か
- サーバーのいずれかをマネージドサービスに置き換えられるか

## キャッシュを使用する

### キャッシュとは
- 一度アクセスしたデータを一時的に保管し、次回アクセス時よりも高速にアクセスする仕組み

## すべてのレイヤーでセキュリティを確保する

### セキュリティの目的
- ビジネスリスクの回避・継続性の担保
    - セキュリティリスクの事前軽減
    - セキュリティ被害時の回復力向上
    - 経営・株主・顧客に対する説明責任
    - 運用方法の統一化・運用コスト低減

### 検討事項
- インフラストラクチャの各部分を隔離する
- 転送中及び保管中のデータを暗号化する
- 最小権限の原則を使用して、きめ細かなアクセスコントロールを実施する
- 多要素認証を使用する
- マネージドサービスを活用する
- リソースへのアクセスを記録する
- デプロイを自動化して、セキュリティの整合性を維持する

## 増加するデータの管理
| アンチパターン | ベストプラクティス |
| --- | --- | 
| クラウド上で加工されていない莫大なデータが残り、管理が難しい状態。 | Amazon S3 |

### Amazon S3とは
- AWSにおけるデータレイクのこと

### データレイクとは
- すべての構造化データと非構造化データを保存できる一元化されたリポジトリである
    - データをそのままの形で保存しているという意味
- 保存されたデータをダッシュボードや可視化、ビッグデータ処理、リアルタイム分析、機械学習など、さまざまなタイプの分析に活用することができる