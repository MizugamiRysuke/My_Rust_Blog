---
title: '私の最初のブログ記事'
date: '2025-10-27'
author: 'Mizugami'
tags: ['Next.js', 'Rust', 'Blog']
description: 'これはNext.jsとRustで構築するブログの最初の記事です。'
---

# 私の最初のブログ記事へようこそ！

これは、Next.js と Rust で構築するブログの最初の記事です。
Markdown 形式で書かれています。

## 開発の進捗

現在、フロントエンドの基本的なレイアウトが完成し、Markdown ファイルを読み込む準備を進めています。

### 次のステップ

- Markdown ファイルを読み込むユーティリティ関数の作成
- 記事一覧ページの作成
- 記事詳細ページの作成

楽しみにしていてください！

## 2025 年 10 月 27 日: Web 開発の基本構成要素

### npm と TypeScript の関係

`npm`はパッケージ管理ツールであり、`TypeScript`はプログラミング言語です。`npm`が`TypeScript`を扱うためのツールを管理します。

```mermaid
graph TD
    subgraph "あなたのPC"
        Node[Node.js<br>実行環境] --> npm(npm<br>パッケージ執事)
    end

    subgraph "プロジェクト 'my-rust-blog'"
        npm -- "管理する" --> pj[package.json<br>プロジェクト設計書]
        pj -- "依存関係(dependencies)に記載" --> next[Next.js パッケージ]
        pj -- "依存関係(dependencies)に記載" --> ts[TypeScript パッケージ]
        pj -- "scriptsに記載" --> script["dev: next dev<br>コマンドのショートカット"]
    end

    npm -- "npm run dev で実行" --> script
```

### ブラウザ環境と Node.js 環境の違い

どちらも同じ「V8」エンジンを搭載していますが、提供される API（道具）が異なるため、役割が異なります。

```mermaid
graph TD
    subgraph "ブラウザ環境 (例: Chrome)"
        direction TB
        BrowserAPI["<b>ブラウザ固有の道具 (API)</b><br>window<br>document (DOM)<br>alert()"]
        V8_Browser["JavaScriptエンジン (V8)<br>頭脳"]
        BrowserAPI -- "道具を提供する" --> V8_Browser
    end

    subgraph Node.js環境
        direction TB
        NodeAPI["<b>Node.js固有の道具 (API)</b><br>fs (ファイル操作)<br>http (サーバー)<br>process"]
        V8_Node["JavaScriptエンジン (V8)<br>頭脳"]
        NodeAPI -- "道具を提供する" --> V8_Node
    end

    style V8_Browser fill:#lightgreen,stroke:#333,stroke-width:2px
    style V8_Node fill:#lightgreen,stroke:#333,stroke-width:2px
```

### Node.js, npm, V8 エンジンのインストール関係

`Node.js`をインストールすると、実行環境本体、心臓部である`V8`エンジン、パッケージ管理ツールである`npm`が一度に PC にセットアップされます。

```mermaid
graph TD
    subgraph "あなたのPC"
        Installer["Node.js インストーラー<br>(公式サイトからDL)"]

        subgraph "インストールされるもの"
            direction LR
            npm[npmコマンド]
            subgraph Node.js 実行環境
                V8[V8 エンジン<br>心臓部]
                APIs[Node.js API<br>fs, httpなど]
            end
        end

        Installer -- "実行すると..." --> Node.js実行環境
        Installer -- "一緒に..." --> npm
    end
```

### 5 つの主要技術の全体関係図

TypeScript, Node.js, Next.js, React, npm の役割と関係性を一枚にまとめた図です。

```mermaid
graph TD
    subgraph "PCの環境 (土台)"
        Node_js["<b>Node.js</b><br>JS実行環境<br>(厨房)"]
        Node_js -- "付属" --> npm["<b>npm</b><br>パッケージ管理<br>(執事)"]
    end

    subgraph "Webアプリケーションの構成要素"
        Next_js["<b>Next.js</b><br>フレームワーク<br>(骨組み)"]
        React["<b>React</b><br>UIライブラリ<br>(部品)"]
        TypeScript["<b>TypeScript</b><br>プログラミング言語<br>(設計図の言語)"]
    end

    Node_js -- "が実行する" --> Next_js
    Next_js -- "が骨組みとして利用する" --> React
    TypeScript -- "で<br>Next.js/Reactの<br>コードを書く" --> Next_js

    npm -- "でインストール・管理" --> Next_js
    npm -- "でインストール・管理" --> React
    npm -- "でインストール・管理" --> TypeScript
```