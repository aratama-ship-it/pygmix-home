import type { Metadata } from "next";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element -- Local, pre-sized release images must remain compatible with Vinext's static asset worker. */

export const metadata: Metadata = {
  title: "音のメモ",
  description:
    "PCキーボードですぐ音を鳴らし、音階や短いメロディを確かめるPYGMIXのMacアプリ。",
  alternates: {
    canonical: "https://pygmix.com/oto-no-memo",
  },
  icons: {
    icon: [
      {
        url: "/visuals/icon-oto-no-memo.png",
        type: "image/png",
        sizes: "1024x1024",
      },
    ],
  },
  openGraph: {
    title: "音のメモ｜PYGMIX",
    description:
      "起動したら、すぐ音を確認。JISキーボードで音階や短いメロディを確かめるMacアプリ。",
    url: "https://pygmix.com/oto-no-memo",
    siteName: "PYGMIX",
    type: "website",
    images: [
      {
        url: "https://pygmix.com/visuals/oto-no-memo-app.jpg",
        width: 1106,
        height: 768,
        alt: "音のメモの20音キーボード画面",
      },
    ],
  },
};

const features = [
  {
    index: "01 / PLAY",
    title: "開いて、押す。",
    note: "MIDI機器や新規プロジェクトは不要。アプリを開き、JISキーボードを押すと音が鳴ります。",
  },
  {
    index: "02 / SHIFT",
    title: "半音ずつ、ずらす。",
    note: "半音単位の移調とオクターブ変更で、別の高さをその場で試せます。",
  },
  {
    index: "03 / TAKE",
    title: "短いメロディを残す。",
    note: "弾いたノート列を記録して再生。思いついた音の並びを、すぐ聴き直せます。",
  },
  {
    index: "04 / KEY MAP",
    title: "弾きやすい配置にする。",
    note: "20音それぞれのPCキーを変更可能。標準のJIS配列にもワンクリックで戻せます。",
  },
] as const;

const checksum =
  "2aa55b7f47ec142257900f5c0cbd8cfd22b9536e7d7c35b75405e93972e356b6";

export default function OtoNoMemoPage() {
  return (
    <main className="melody-product-page">
      <header className="melody-product-header">
        <Link className="wordmark" href="/" aria-label="PYGMIXホームへ">
          PYGMI<span>X</span>
        </Link>
        <Link className="melody-back-link" href="/#projects">
          PROJECTSへ戻る ←
        </Link>
      </header>

      <section className="melody-product-hero" aria-labelledby="melody-title">
        <div className="melody-hero-copy">
          <p className="melody-kicker">P-04 / MACOS MELODY CHECKER</p>
          <div className="melody-title-lockup">
            <img
              src="/visuals/icon-oto-no-memo.svg"
              alt=""
              width={1024}
              height={1024}
            />
            <h1 id="melody-title">音のメモ</h1>
          </div>
          <p className="melody-promise">
            <span>起動したら、</span>
            <span>すぐ音を確認。</span>
          </p>
          <p className="melody-lead">
            PCキーボードだけで音階や短いメロディを確かめるMacアプリです。
            ピアノとサイン波を切り替えながら、思いついた音をその場で鳴らせます。
          </p>

          <div className="melody-download-block">
            <p className="melody-platform-note">
              macOS専用デスクトップアプリ / Windows・iPhone・iPadには対応していません
            </p>
            <a
              className="melody-download-link"
              href="/downloads/oto-no-memo-0.3.0-macos-arm64.dmg"
              download
            >
              <span>Mac版をダウンロード</span>
              <b aria-hidden="true">↓</b>
            </a>
            <p>VERSION 0.3.0 / 613 KB / APPLE SILICON / macOS 14+</p>
          </div>
          <a className="melody-security-jump" href="#install">
            ダウンロード前にセキュリティ情報を確認 →
          </a>
        </div>

        <figure className="melody-hero-visual">
          <div className="melody-window-label">
            <span>20 NOTE / JIS QUICK CHECK</span>
            <span>C4—G5</span>
          </div>
          <img
            src="/visuals/oto-no-memo-app.jpg"
            alt="音のメモの画面。JISキーボードに対応した20音の鍵盤、半音移調、録音と再生の操作が並んでいる"
            width={1106}
            height={768}
          />
          <figcaption>実際のアプリ画面 / VERSION 0.3.0</figcaption>
        </figure>
      </section>

      <section className="melody-speed-strip" aria-label="音を確認するまでの流れ">
        <p>音を確認するまで</p>
        <ol>
          <li><span>01</span> アプリを開く</li>
          <li><span>02</span> JISキーを押す</li>
          <li><span>03</span> 音が鳴る</li>
        </ol>
      </section>

      <section className="melody-feature-section" aria-labelledby="melody-features-title">
        <div className="melody-section-heading">
          <p>WHAT YOU CAN DO / 01—04</p>
          <h2 id="melody-features-title">
            音を確かめたい瞬間に、必要な操作だけ。
          </h2>
        </div>

        <div className="melody-feature-list">
          {features.map((feature) => (
            <article className="melody-feature" key={feature.index}>
              <span>{feature.index}</span>
              <h3>{feature.title}</h3>
              <p>{feature.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="melody-keymap-section" aria-labelledby="melody-keymap-title">
        <div className="melody-keymap-copy">
          <p>JIS KEY MAP / 20 NOTES</p>
          <h2 id="melody-keymap-title">Macの横幅を、1.5オクターブの鍵盤に。</h2>
          <p>
            標準配置は、JISキーボードの文字キー2段を音階と同じ並びに割り当てています。
            白鍵はAから］、黒鍵はWから＠。画面の鍵盤をクリックして鳴らすこともできます。
          </p>
          <dl>
            <div>
              <dt>WHITE KEYS</dt>
              <dd>A S D F G H J K L ; : ]</dd>
            </div>
            <div>
              <dt>BLACK KEYS</dt>
              <dd>W E T Y U O P @</dd>
            </div>
            <div>
              <dt>RANGE</dt>
              <dd>C4—G5 / 20 NOTES</dd>
            </div>
          </dl>
        </div>

        <figure className="melody-keymap-visual">
          <img
            src="/visuals/oto-no-memo-keymap.jpg"
            alt="音のメモのキー割り当て画面。JISキーボードの上段と下段に20音が横並びで対応している"
            width={980}
            height={360}
          />
          <figcaption>キーは20音すべて変更でき、変更内容はこのMacに保存されます。</figcaption>
        </figure>
      </section>

      <section className="melody-local-section" aria-labelledby="melody-local-title">
        <p>LOCAL BY DESIGN</p>
        <div>
          <h2 id="melody-local-title">音は、このMacの中で生成します。</h2>
          <p>
            マイク入力、音声ファイルの読み込み、クラウド送信は使いません。
            「録音」は演奏したノート列をアプリ内で記録する機能です。
          </p>
        </div>
      </section>

      <section className="melody-install-section" id="install" aria-labelledby="melody-install-title">
        <div className="melody-install-heading">
          <p>DOWNLOAD / CURRENT BUILD</p>
          <h2 id="melody-install-title">音のメモ 0.3.0</h2>
          <a
            className="melody-download-link melody-download-link-light"
            href="/downloads/oto-no-memo-0.3.0-macos-arm64.dmg"
            download
          >
            <span>DMGをダウンロード</span>
            <b aria-hidden="true">↓</b>
          </a>
        </div>

        <div className="melody-install-details">
          <dl className="melody-spec-list">
            <div>
              <dt>VERSION</dt>
              <dd>0.3.0 / BUILD 3</dd>
            </div>
            <div>
              <dt>REQUIRES</dt>
              <dd>Apple Silicon搭載Mac / macOS 14以降</dd>
            </div>
            <div>
              <dt>FILE</dt>
              <dd>oto-no-memo-0.3.0-macos-arm64.dmg / 613 KB</dd>
            </div>
            <div>
              <dt>SHA-256</dt>
              <dd className="melody-checksum">{checksum}</dd>
            </div>
          </dl>

          <div className="melody-security-note">
            <p className="melody-security-label">SECURITY STATUS / PLEASE READ</p>
            <h3>この版はDeveloper ID署名・Apple公証前です。</h3>
            <p>
              macOSで開発元に関する警告が表示される場合があります。
              配布元とSHA-256を確認したうえで、利用するか判断してください。
              セキュリティ機能を無効にする案内は行っていません。
            </p>
            <a
              href="https://support.apple.com/ja-jp/guide/mac-help/mh40616/mac"
              target="_blank"
              rel="noreferrer"
            >
              Apple公式：Macでアプリを安全に開く ↗
            </a>
          </div>

          <ol className="melody-install-steps">
            <li>
              <span>01</span>
              <p>ダウンロードしたDMGを開きます。</p>
            </li>
            <li>
              <span>02</span>
              <p>「音のメモ」をアプリケーションフォルダへ移します。</p>
            </li>
            <li>
              <span>03</span>
              <p>起動がブロックされた場合は、上記のApple公式手順を確認します。</p>
            </li>
          </ol>
        </div>
      </section>

      <footer className="melody-product-footer">
        <Link className="site-footer-wordmark" href="/">
          PYGMI<span>X</span>
        </Link>
        <p>音階や短いメロディを、すぐ確かめる。</p>
        <Link href="/#projects">PROJECTSへ戻る ↑</Link>
      </footer>
    </main>
  );
}
