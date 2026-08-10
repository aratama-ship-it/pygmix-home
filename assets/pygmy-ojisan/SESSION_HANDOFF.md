# ピグミーおじさん素材量産 — セッション引き継ぎ

作成日: 2026-08-03

## この文書の使い方

別のCodex／Claude Codeセッションは、この文書を最初に読み、ここに書かれた確定事項を維持したまま素材量産を続ける。

詳細なキャラクター仕様と履歴は同じフォルダの`PYGMY_OJISAN_ASSET_SPEC.md`を参照する。

## 目的

PYGMIXで使う「ピグミーおじさん」のポーズ素材を増やす。Web、動画、SNS、印刷物へ配置しやすい、1ポーズ1ファイルの透過PNGを作る。

既存Illustrator原画は正本として保持し、生成物で上書きしない。AI生成PNGは候補であり、本人が採用したものだけ後でベクター化候補へ進める。

## 本人確認済みの決定

- `pygmy-ojisan-jump-v1.png`の太い輪郭を量産基準として採用する。
- 細線案ではなく、太く連続した黒線と、大きな記号として読める単純な形を優先する。
- 顔、髪、服、指、靴、装飾品は付けない。
- 細線の既存生成物は比較履歴として残し、削除も上書きもしない。
- 元の`PYGMIX`フォルダにあるIllustratorファイルと`passed/`は変更しない。

## 作業場所

### 量産プロジェクト

`/Users/arata/Library/Mobile Documents/com~apple~CloudDocs/claude code files/web-projects/pygmix-home/assets/pygmy-ojisan/`

### 生成物

`/Users/arata/Library/Mobile Documents/com~apple~CloudDocs/claude code files/web-projects/pygmix-home/assets/pygmy-ojisan/generated-samples/`

### 既存原画・資料（読み取り専用）

- `/Users/arata/Library/Mobile Documents/com~apple~CloudDocs/claude code files/pygmix/PYGMIX/web cover pygmix.ai`
- `/Users/arata/Library/Mobile Documents/com~apple~CloudDocs/claude code files/pygmix/PYGMIX/web-cover-pygmix.png`
- `/Users/arata/Library/Mobile Documents/com~apple~CloudDocs/claude code files/pygmix/PYGMIX/passed/`

`web cover pygmix.ai`はPDF互換のIllustratorファイル。見た目の確認には同名PNGを使える。

## 最優先の参照画像

生成時は次の2枚を参照する。

1. 太線・造形の最優先参照
   - `generated-samples/pygmy-ojisan-jump-chroma-v1.png`
2. 元キャラクターの頭身・世界観参照
   - `/Users/arata/Library/Mobile Documents/com~apple~CloudDocs/claude code files/pygmix/PYGMIX/web-cover-pygmix.png`

プロンプトでは、1枚目が線幅、身体のつながり、単純さ、グラフィック上の人格を決定し、2枚目は旧来のキャラクター同一性だけを補助すると明記する。

## 現在の成果物

### 採用基準

- `pygmy-ojisan-jump-v1.png`
- `pygmy-ojisan-jump-chroma-v1.png`

### 太線シリーズ候補

- `pygmy-ojisan-sit-ledge-v2.png`
- `pygmy-ojisan-wall-cling-v2.png`
- `pygmy-ojisan-walk-v1.png`
- `pygmy-ojisan-thick-line-series-preview.jpg`

### 比較履歴（細線・量産基準にしない）

- `pygmy-ojisan-sit-ledge-v1.png`
- `pygmy-ojisan-wall-cling-v1.png`
- `pygmy-ojisan-generated-samples-preview.jpg`

### 2026-08-03 50ポーズ量産バッチ

- 透過PNG 50点: `pygmy-ojisan-<pose>-v1.png`
- クロマキー中間PNG 50点: `pygmy-ojisan-<pose>-chroma-v1.png`
- 白背景比較: `pygmy-ojisan-50-poses-preview.jpg`
- 機械検証: `pygmy-ojisan-50-poses-validation.json`
- 状態: すべて未採用の太線候補。本人レビュー待ち。
- 検証: 50点すべてRGBA、四隅アルファ0、可視緑フリンジなし。比較シートで空の円形頭部、禁止要素なし、太線、小表示での判別性を確認。

### 2026-08-03 オブジェクト・二人組・三人組 50案バッチ

- 一人＋オブジェクト30点、二人組12点、三人組8点。
- 透過PNG 50点: `pygmy-ojisan-<scene>-v1.png`
- クロマキー中間PNG 50点: `pygmy-ojisan-<scene>-chroma-v1.png`
- 白背景比較: `pygmy-ojisan-objects-groups-50-preview.jpg`
- 機械検証: `pygmy-ojisan-objects-groups-50-validation.json`
- 状態: すべて未採用の太線候補。本人レビュー待ち。
- 検証: 50点すべてRGBA、四隅アルファ0、可視緑フリンジなし。比較シートで指定人数、空の円形頭部、太線、オブジェクトとの関係、小表示での判別性を確認。
- このバッチだけは依頼により「1ファイルに1人」「接触対象を描かない」を例外とする。その他のキャラクター固定条件は維持する。

## キャラクター固定条件

- 1ファイルに1人だけ。
- 完全な空の円形頭部。
- 顔、目、口、鼻、髪、耳を描かない。
- 胴体から太い台形状・ブロック状の四肢がつながる単純な構成。
- 太く連続した黒いアウトライン。
- 内側は透明。
- 手足の先に指、靴、丸い手袋を付けない。
- リアルな筋肉、人体、関節、遠近、陰影へ寄せない。
- 3D、塗り、ハイライト、影、質感を付けない。
- 文字、PYGMIXロゴ、透かし、余計な道具を入れない。
- 接触対象を別レイヤーで配置できるよう、壁、床、椅子、縁などは原則として描かない。

## 推奨する次の作業

1. `pygmy-ojisan-50-poses-preview.jpg`と`pygmy-ojisan-objects-groups-50-preview.jpg`を本人が一覧確認する。
2. 各候補を採用・要修正・不採用に分ける。
3. 要修正だけを1点ずつ再生成する。
4. 採用候補だけを必要に応じてベクター化候補へ進める。

本人の採否判断までは追加量産、SVG／Illustrator正本への昇格、Web組み込み、公開を行わない。

## 使用するスキルと生成方法

- `imagegen`スキルを使う。
- 通常の組み込み画像生成を使い、CLIやAPIへ切り替えない。
- ポーズごとに独立した画像生成を1回行う。
- 透過背景は、最初に単色緑背景を生成し、ローカルのクロマキー除去で作る。
- サブエージェントは使わない。Solなど高コストモデルへの切り替えも不要。

## 共通プロンプト

```text
Use case: stylized-concept
Asset type: reusable PYGMIX character pose asset, thick-line series
Primary request: Create the same character identity and exact bold outline language as Image 1 in the following pose: <POSE DESCRIPTION>.
Input images: Image 1 is the approved canonical thick-line reference and must control line weight, head size, body construction, and graphic personality. Image 2 is the older PYGMIX identity and proportion reference only.
Subject: exactly one faceless small humanoid. Perfectly circular empty head. Thick continuous black outline. One simplified torso flowing into simple blocky tapered arms and legs. No face, hair, ears, fingers, clothing, shoes, accessories, joints, or inner anatomy.
Style/medium: minimal naive hand-drawn vector-like mascot, bold monoline outline matching Image 1, simple and highly readable at small size. Outline only; transparent interior.
Composition/framing: full isolated figure centered with generous padding, no cropping.
Scene/backdrop: perfectly flat solid #00ff00 chroma-key background; one uniform color only, no shadows, gradients, texture, floor, horizon, or lighting variation.
Constraints: match Image 1 much more than Image 2; exactly one figure; no text, logo, watermark, baseline, wall, seat, or prop unless the requested pose absolutely requires it.
Avoid: thin line, separated delicate limbs, realistic anatomy, facial details, rounded gloves, 3D, shading, colored fill, motion lines.
```

`<POSE DESCRIPTION>`だけを各ポーズに合わせて変更する。

## 保存と命名

クロマキー版:

`pygmy-ojisan-<pose>-chroma-v<番号>.png`

透過版:

`pygmy-ojisan-<pose>-v<番号>.png`

既存名がある場合は上書きせず、`v2`、`v3`と番号を上げる。

## 透過処理

組み込み画像生成の出力を`generated-samples/`へコピーし、次を実行する。

```bash
python3 "/Users/arata/.codex/skills/.system/imagegen/scripts/remove_chroma_key.py" \
  --input "<CHROMA_INPUT.png>" \
  --out "<TRANSPARENT_OUTPUT.png>" \
  --auto-key border \
  --soft-matte \
  --transparent-threshold 12 \
  --opaque-threshold 220 \
  --despill
```

## 必須検証

各透過PNGについて次を確認する。

- RGBAになっている。
- 四隅のアルファ値がすべて0。
- 線が途中で切れていない。
- 線の周囲に緑色の縁が残っていない。
- 頭部が円形で空になっている。
- 顔や服などの禁止要素が増えていない。
- 太線がジャンプ基準と同程度に見える。
- 白背景で小さく並べてもポーズが判別できる。

バッチごとに白背景の比較JPEGを1枚作り、本人が一覧で確認できるようにする。

## 更新すべき文書

作業後は次を更新する。

- `PYGMY_OJISAN_ASSET_SPEC.md`: 確定ルール、生成物一覧、採否。
- この`SESSION_HANDOFF.md`: 次のバッチと現在地が変わった場合。

## 禁止事項・承認待ち

- 既存Illustrator、`passed/`、既存生成物を上書き・削除しない。
- 本人承認なしにSVG／Illustrator正本へ昇格しない。
- 本人承認なしにWebサイトへ組み込んだり公開したりしない。
- `/Users/arata/Library/Mobile Documents/com~apple~CloudDocs/claude code files/pygmix/PYGMIX/`へ生成物を移さない。現段階では`pygmix-home/assets/`がレビュー場所。
- 細線版と太線版を同一シリーズとして混在させない。

## 完了条件

- 指定された全ポーズの透過PNGが保存されている。
- 必須検証を通っている。
- 白背景の比較画像がある。
- 仕様書へファイル名と状態が追記されている。
- 採用・ベクター化・公開は本人判断として残っている。
