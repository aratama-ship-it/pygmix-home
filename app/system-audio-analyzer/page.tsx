import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "System Audio Analyzer",
  description:
    "Macのシステム音声をスペクトラム、ラウドネス、ステレオ像としてリアルタイム解析するPYGMIXのmacOSアプリ。",
};

const features = [
  {
    index: "01 / SPECTRUM",
    title: "音の形を見る。",
    note: "20Hz〜20kHzのスペクトラム、ピークホールド、スペクトログラムをリアルタイム表示。",
  },
  {
    index: "02 / LOUDNESS",
    title: "大きさを測る。",
    note: "Peak、True Peak、LUFS M/S/Iと配信ターゲットとの差を同時に確認。",
  },
  {
    index: "03 / STEREO",
    title: "広がりを読む。",
    note: "位相相関、ベクトルスコープ、Mid/Side、帯域別ステレオ像を可視化。",
  },
  {
    index: "04 / COMPARE",
    title: "違いを比べる。",
    note: "A/Bリファレンス取込、入力補正、オンデマンドのキー解析に対応。",
  },
] as const;

export default function SystemAudioAnalyzerPage() {
  return (
    <main className="audio-product-page">
      <header className="audio-product-header">
        <Link className="wordmark" href="/" aria-label="PYGMIXホームへ">
          PYGMI<span>X</span>
        </Link>
        <Link className="audio-back-link" href="/#projects">
          PROJECTSへ戻る ←
        </Link>
      </header>

      <section className="audio-product-hero" aria-labelledby="audio-title">
        <p className="audio-product-kicker">MACOS APP / REAL-TIME AUDIO ANALYSIS</p>
        <h1 id="audio-title">System Audio Analyzer</h1>
        <p className="audio-product-lead">
          Macで再生している音を、音声自体には干渉せずリアルタイム解析。
          スペクトラム、ラウドネス、ステレオ像から、聴感の裏側にある構造を見える形にします。
        </p>
        <div className="audio-product-tags" aria-label="対応環境と状態">
          <span>BETA / BUILD 28</span>
          <span>APPLE SILICON</span>
          <span>macOS 14.2+</span>
          <span>LOCAL PROCESSING</span>
        </div>
      </section>

      <section className="audio-product-body" aria-labelledby="audio-features-title">
        <div className="audio-product-intro">
          <p>WHAT IT SHOWS / 01—04</p>
          <h2 id="audio-features-title">聴いている音を、複数の角度から確かめる。</h2>
        </div>

        <div className="audio-feature-grid">
          {features.map((feature) => (
            <article className="audio-feature-card" key={feature.index}>
              <span>{feature.index}</span>
              <h3>{feature.title}</h3>
              <p>{feature.note}</p>
            </article>
          ))}
        </div>

        <section className="audio-product-status" aria-labelledby="audio-status-title">
          <h2 id="audio-status-title">現在はテスター向けベータです。</h2>
          <div>
            <p>
              対応環境はApple Silicon搭載Mac／macOS 14.2以降です。
              音声はメモリ上だけで処理し、ファイル保存や外部送信は行いません。
            </p>
            <p>
              Build 28はDeveloper ID公証前のため、一般向けの直接ダウンロードはまだ提供していません。
              ベータ版の利用をご希望の場合はお問い合わせください。
            </p>
            <a className="audio-contact-link" href="mailto:circusarata@gmail.com?subject=System%20Audio%20Analyzer%20Beta">
              ベータ利用について問い合わせる ↗
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
