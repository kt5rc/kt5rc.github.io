# ktnd111.github.io

TypeScript / React中心の技術ブログを Astro + MDX で運用するための構成です。

## セットアップ

```bash
npm install
npm run dev
```

## 投稿フロー

1. `src/content/blog/`, `src/content/experiments/`, `src/content/notes/` のいずれかに `.mdx` を追加する
2. Frontmatter に `title`, `description`, `date`, `tags` を設定する
3. `npm run ci` で `lint`, `check`, `build` を通す
4. `main` へマージすると GitHub Pages に自動デプロイされる

## ディレクトリ

- `src/content/blog/`: React 技術ブログ
- `src/content/experiments/`: 検証記事、PoC
- `src/content/notes/`: ライブラリ備忘録
- `src/components/`: React / Astro UI
- `archive/legacy-site/`: 旧静的HTMLと旧変換基盤
