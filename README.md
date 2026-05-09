# reel-10min-lp

## Netlify接続手順

このプロジェクトは Next.js 15 + App Router 構成です。Netlify では **Next.js Runtime プラグイン**を使ってデプロイします。

### 1) GitHubにPush

```bash
git push origin <your-branch>
```

### 2) Netlifyで新規サイト作成

1. Netlify ダッシュボードで **Add new site** → **Import an existing project**
2. GitHub を接続してこのリポジトリを選択
3. Build settings は以下を確認
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy を実行

> `netlify.toml` で同設定を固定しています。

### 3) 環境変数（必要な場合のみ）

現状のLPには必須環境変数はありません。
将来的にフォーム送信や外部API連携を追加したら Netlify の Site settings > Environment variables で設定します。

### 4) デプロイ確認

デプロイ完了後に発行された `*.netlify.app` のURLで確認してください。

---

## ローカル起動

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できます。
