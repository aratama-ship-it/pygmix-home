# ピグミーおじさん素材 量産仕様

更新日: 2026-08-03

## 目的

PYGMIXのWeb、動画、印刷物、SNSで使える「ピグミーおじさん」のポーズ素材を、既存キャラクターの形を保ちながら増やす。

生成物は採用前の候補であり、既存のIllustrator原画を上書きしない。AI生成したPNGをそのまま正本とせず、採用後に必要なものだけ輪郭とアンカーポイントを整えてベクター化する。

## 正本参照

- `/Users/arata/Library/Mobile Documents/com~apple~CloudDocs/claude code files/pygmix/PYGMIX/web cover pygmix.ai`
- `/Users/arata/Library/Mobile Documents/com~apple~CloudDocs/claude code files/pygmix/PYGMIX/web-cover-pygmix.png`
- `/Users/arata/Library/Mobile Documents/com~apple~CloudDocs/claude code files/pygmix/PYGMIX/passed/`

`passed/`には座る、横になる、ぶら下がる、逆立ち、ブランコなどの既存ポーズがある。新規生成前にファイル名と見た目を確認し、同じポーズの重複を避ける。

## キャラクター固定条件

- 顔のない、空の円形頭部。
- 髪、耳、服、指、靴、装飾品を加えない。
- 胴体と、単純な直線・台形状の四肢で構成する。
- リアルな人体、筋肉、関節表現へ寄せない。
- 3D、陰影、質感、ハイライト、影を加えない。
- 原則は黒いアウトラインのみ。内側は透明。
- 手描きらしいわずかな揺れを残すが、線のガタつきは増やしすぎない。
- 1ファイル1キャラクター、文字・ロゴ・透かしなし。

## 採用する線幅

2026-08-03、本人確認により`pygmy-ojisan-jump-v1.png`の太線を量産基準として採用した。

- 太く連続した黒い輪郭。
- 頭部、胴体、四肢を大きな記号として読める単純さ。
- 小さい表示、アイコン、ステッカーでも形が消えにくいこと。
- 新規生成ではジャンプ案の緑背景版を最優先の線幅・造形参照として使う。

細線の初回案は比較履歴として残すが、太線シリーズには混在させない。

## 出力形式

- レビュー用正本: 透過PNG、RGBA、黒線。
- 比較用: 白背景のJPEGコンタクトシート。
- 採用後の追加候補: 白線PNG、SVGまたはIllustratorで整えたベクター。
- 緑背景の`*-chroma-*`は透過処理を再実行するための中間ファイル。

## ファイル名

`pygmy-ojisan-<pose>-v<番号>.png`

例:

- `pygmy-ojisan-jump-v1.png`
- `pygmy-ojisan-sit-ledge-v1.png`
- `pygmy-ojisan-wall-cling-v1.png`

## 初回サンプル

保存先: `generated-samples/`

| ファイル | 状態 | メモ |
|---|---|---|
| `pygmy-ojisan-jump-v1.png` | 基準採用 | 太線シリーズの線幅・頭身・単純さの基準。 |
| `pygmy-ojisan-sit-ledge-v1.png` | 比較履歴 | 細線。太線シリーズには使わない。 |
| `pygmy-ojisan-wall-cling-v1.png` | 比較履歴 | 細線。太線シリーズには使わない。 |
| `pygmy-ojisan-generated-samples-preview.jpg` | 比較用 | 3案を白背景で比較するプレビュー。 |
| `pygmy-ojisan-sit-ledge-v2.png` | 太線候補 | ジャンプ基準で再生成した座り姿。 |
| `pygmy-ojisan-wall-cling-v2.png` | 太線候補 | ジャンプ基準で再生成した壁につかまる姿。 |
| `pygmy-ojisan-walk-v1.png` | 太線候補 | ジャンプ基準で生成した歩行姿。 |
| `pygmy-ojisan-thick-line-series-preview.jpg` | 比較用 | 採用基準と太線3候補の比較。 |

## 50ポーズ量産バッチ（2026-08-03）

保存先: `generated-samples/`

状態: すべて未採用の太線候補。本人レビュー前であり、ベクター化・Web組み込み・公開はしていない。

- 透過PNG: `pygmy-ojisan-<pose>-v1.png` 50点
- クロマキー中間PNG: `pygmy-ojisan-<pose>-chroma-v1.png` 50点
- 白背景比較: `pygmy-ojisan-50-poses-preview.jpg`
- 機械検証結果: `pygmy-ojisan-50-poses-validation.json`

| # | pose | # | pose |
|---:|---|---:|---|
| 1 | `run` | 26 | `listening` |
| 2 | `crouch` | 27 | `double-cheer` |
| 3 | `wave` | 28 | `shy-tucked` |
| 4 | `peek-over-top` | 29 | `peek-left` |
| 5 | `lift-invisible-box` | 30 | `peek-right` |
| 6 | `tiptoe-sneak` | 31 | `climb-invisible-ladder` |
| 7 | `shrug` | 32 | `push-invisible-wall` |
| 8 | `hands-on-hips` | 33 | `pull-heavy-load` |
| 9 | `polite-bow` | 34 | `present-left` |
| 10 | `side-stretch` | 35 | `present-right` |
| 11 | `yawn-stretch` | 36 | `point-up` |
| 12 | `startled-recoil` | 37 | `point-down` |
| 13 | `banana-slip` | 38 | `point-left` |
| 14 | `trip-forward` | 39 | `point-right` |
| 15 | `airplane-balance` | 40 | `one-knee-kneel` |
| 16 | `dance-twist` | 41 | `frog-squat` |
| 17 | `disco-point` | 42 | `crab-walk` |
| 18 | `moonwalk-lean` | 43 | `cross-legged-stand` |
| 19 | `playful-kick` | 44 | `arms-crossed` |
| 20 | `high-five-reach` | 45 | `hands-behind-back` |
| 21 | `clap` | 46 | `salute` |
| 22 | `self-hug` | 47 | `shelter-from-rain` |
| 23 | `facepalm` | 48 | `shoulder-heavy-load` |
| 24 | `scratch-head` | 49 | `crawl` |
| 25 | `thinking` | 50 | `dizzy-stagger` |

機械検証では50点すべてについてRGBA、四隅アルファ0、可視緑フリンジなし、妥当な線画占有率を確認した。比較シートの目視では、空の円形頭部、禁止要素なし、太線、小表示でのポーズ判別性を確認した。

## オブジェクト・二人組・三人組 50案バッチ（2026-08-03）

保存先: `generated-samples/`

状態: すべて未採用の太線候補。ベクター化・Web組み込み・公開はしていない。

- 一人＋オブジェクト: 30点
- 二人組: 12点
- 三人組: 8点
- 透過PNG: `pygmy-ojisan-<scene>-v1.png` 50点
- クロマキー中間PNG: `pygmy-ojisan-<scene>-chroma-v1.png` 50点
- 白背景比較: `pygmy-ojisan-objects-groups-50-preview.jpg`
- 機械検証結果: `pygmy-ojisan-objects-groups-50-validation.json`

一人＋オブジェクトは箱、はしご、ロープ、傘、風船、本、カメラ、自転車、机、植物、看板、旗、太鼓、釣り竿などを使用。二人組はハイタッチ、綱引き、シーソー、箱運び、おんぶ、ダンス、カヌー、二人乗り自転車など。三人組は人間ピラミッド、リレー、長板運び、綱引き、箱上げ、コンガ、相合い傘、大玉押しを収録した。

このバッチだけは依頼に合わせて「1ファイルに1人」「接触対象を描かない」を例外とする。人物単体の造形条件は維持し、登場人物は各案で指定した1人、2人、3人に限定した。

機械検証では50点すべてについてRGBA、四隅アルファ0、可視緑フリンジなし、妥当な線画占有率を確認した。比較シートの目視では全50案の人数、オブジェクト、空の円形頭部、太線、小表示での状況判別性を確認した。

## 次のレビュー

`pygmy-ojisan-50-poses-preview.jpg`と`pygmy-ojisan-objects-groups-50-preview.jpg`で本人が候補を確認する。採用・修正・不採用を決めるまで、追加ベクター化、既存Illustratorへの統合、Web組み込み、公開は行わない。

## 将来の追加候補

### 日常

- 椅子に座る
- あぐら
- しゃがむ
- 寝転ぶ
- 読む
- 考える
- 手を振る

### 移動・動作

- 走る
- 小さく跳ぶ
- 大きく跳ぶ
- 転ぶ
- 登る
- ぶら下がる
- 押す／引く

### 画面・レイアウトとの接触

- 上辺からのぞく
- 下辺に腰掛ける
- 左右の壁につかまる
- 角から顔を出す
- 文字を持ち上げる
- ボタンを押す
- 線の上を歩く

## 量産手順

1. 既存`passed/`を確認し、重複しないポーズを選ぶ。
2. 正本画像を参照し、1ポーズにつき1回の画像生成を行う。
3. 単色背景を除去し、透過PNGへ変換する。
4. 四隅のアルファ値、輪郭の欠け、緑色の縁、キャラクターの頭身を確認する。
5. 白背景の比較シートで線幅とポーズの読みやすさを確認する。
6. 本人が採用した素材だけをベクター化候補へ移す。

## 生成プロンプト共通部

```text
Create exactly one new pose of the existing Pygmy Ojisan outline character.
Use `pygmy-ojisan-jump-chroma-v1.png` as the primary approved reference for line weight, body construction, and graphic personality. Use the older PYGMIX artwork only as the identity and proportion reference.
Keep a perfectly circular empty head; no face, hair, ears, clothes, fingers, shoes, or accessories.
Use one simplified torso flowing into blocky tapered limbs. Keep the bold naive hand-drawn vector personality.
Use the same thick continuous black outline as the approved jump reference. Transparent interior, no shading, no text, no logo, no watermark, and no extra objects.
Place the complete isolated figure on a perfectly flat solid #00ff00 chroma-key background with generous padding.
```

各生成では、上記にポーズ、手足の向き、接触対象を描くか描かないかを追加する。
