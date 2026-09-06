import OrbitHero from "./OrbitHero";

type ProjectLink = {
  className: string;
  index: string;
  category: string;
  title: string;
  note: string;
  href: string;
  action: string;
  external: boolean;
  /** 公開しているが未完成のものに付ける短いラベル */
  status?: string;
};

const projectLinks: readonly ProjectLink[] = [
  {
    className: "project-stagesketch",
    index: "P-05",
    category: "STAGE / IMAGE STUDY",
    title: "舞台スケッチ",
    note: "舞台の立ち位置と動線を、客席からの正面図と真上の平面図で同時に描く。体験版は登録不要。",
    href: "https://stagesketch-try.juggler-arata.workers.dev/",
    action: "体験版を使ってみる ↗",
    external: true,
  },
  {
    className: "project-juggleline",
    index: "P-01",
    category: "JUGGLING ANALYSIS / BETA",
    title: "JuggleLine",
    note: "動画からボールの軌道・高さ・リズム・左右差を可視化する、ジャグリング解析アプリ。",
    href: "https://juggling-trajectory-analyzer-54347579590.asia-northeast1.run.app/",
    action: "解析アプリを開く ↗",
    external: true,
  },
  {
    className: "project-audio",
    index: "P-02",
    category: "MACOS / AUDIO ANALYSIS",
    title: "System Audio Analyzer",
    note: "Macで再生中の音を、スペクトラム・ラウドネス・ステレオ像としてリアルタイム解析するベータアプリ。",
    href: "/system-audio-analyzer",
    action: "アプリの詳細を見る →",
    external: false,
  },
  {
    className: "project-melody",
    index: "P-04",
    category: "MACOS / MELODY CHECK",
    title: "音のメモ",
    note: "JISキーボードを押して、音階や短いメロディをすぐ確かめるMacアプリ。ピアノとサイン波に対応。",
    href: "/oto-no-memo",
    action: "アプリの詳細・ダウンロード →",
    external: false,
  },
  {
    className: "project-koubo",
    index: "M-01",
    category: "OPEN CALLS",
    title: "公募ものさし",
    note: "身体芸術の公募を、条件や締切から探す。",
    href: "https://koubo.art-monosashi.com/",
    action: "公募を探す ↗",
    external: true,
  },
  {
    className: "project-grants",
    index: "M-02",
    category: "GRANTS",
    title: "助成ものさし",
    note: "舞台・身体芸術の助成制度を、地域や条件から比べる。",
    href: "https://joseikin.art-monosashi.com/",
    action: "助成を探す ↗",
    external: true,
  },
  {
    className: "project-venue",
    index: "M-03",
    category: "VENUES",
    title: "会場ものさし",
    note: "イベント会場を、規模・天井高・予算・搬入・アクセスで比べる。",
    href: "https://venue.art-monosashi.com/",
    action: "会場を探す ↗",
    external: true,
  },
  {
    className: "project-mesure",
    index: "M-04",
    category: "NORTH AMERICA / FR—EN",
    title: "MESURE",
    note: "カナダとアメリカの公募・助成を、締切と条件からフランス語と英語で探す。「ものさし」の北米版。",
    href: "https://mesure.art-monosashi.com/",
    action: "Chercher / Search ↗",
    external: true,
  },
  {
    className: "project-diabolo48",
    index: "A-01",
    category: "DIABOLO / ARCHIVE",
    title: "４８ヶ月のディアボロ",
    note: "4年分の練習と変化を、月単位でたどるディアボロの記録。順次追加しています。",
    href: "https://aratama-ship-it.github.io/diabolo4yeargame/",
    action: "記録を見る ↗",
    external: true,
    status: "制作中",
  },
  {
    className: "project-fridge",
    index: "P-03",
    category: "KITCHEN / TOOL",
    title: "冷蔵庫の現在地",
    note: "いま冷蔵庫にあるもの から、つくれる料理と使い切る順番を考える。",
    href: "https://aratama-ship-it.github.io/fridge-leftovers/",
    action: "残りものから探す ↗",
    external: true,
  },
] as const;

export default function Home() {
  return (
    <main id="top">
      <OrbitHero />

      {/* 本人指示 2026-09-06「舞台スケッチをこの倍くらいまで大きくしたい。
          そろそろそもそものデザインの見直しも必要かもしれません」。
          識別のヒーロー（円・コンベア）を縦に詰め、いま推す1つをここへ専用セクションとして
          切り出した（参照ブリーフ: docs/2026-09-06_hero-redesign-brief）。
          ★流れる皿でも中央の円でもないので、640×336の実寸に近い大きさで出せる。 */}
      <section className="pickup" id="pickup" aria-labelledby="pickup-title">
        <div className="pickup-heading">
          {/* ★題（舞台スケッチ）は面の画像の中にあるので、文字では繰り返さない
              （本人指示 2026-09-06）。節の見出しは PICKUP が兼ねる。
              読み上げ・画像が出ないときの題は、下の img の alt が持っている。 */}
          <h2 id="pickup-title">PICKUP</h2>
        </div>
        <a
          className="pickup-card"
          href="https://stagesketch-try.juggler-arata.workers.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="pickup-face"
            src="/visuals/og-stagesketch.jpg"
            alt="舞台スケッチ — 舞台の立ち位置と動線を、客席からの正面図と真上の平面図で同時に描くツール"
            width={640}
            height={336}
          />
          {/* ★<a>は透過的な内容モデルでblock要素を含められるが、<span>にp要素を
              入れるのは無効。copyはdivにする（project-card-copyと同じ考え方）。 */}
          <div className="pickup-copy">
            <p className="pickup-category">STAGE / IMAGE STUDY</p>
            <p className="pickup-note">
              舞台の立ち位置と動線を、客席からの正面図と真上の平面図で同時に描く。体験版は登録不要。
            </p>
            <span className="pickup-action">体験版を使ってみる ↗</span>
          </div>
        </a>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="projects-heading">
          <p>LIVE PROJECTS / 01—10</p>
          <h2 id="projects-title">ライブラリ</h2>
          <p>
            身体と音を解析するツール、条件や根拠を比べる「ものさし」シリーズ、記録と生活の道具。
          </p>
        </div>

        <div className="project-grid">
          {projectLinks.map((project) => (
            <article className={`project-card ${project.className}`} key={project.index}>
              <a
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noreferrer" : undefined}
              >
                <div className="project-card-top">
                  <span>{project.index}</span>
                  <span>{project.category}</span>
                </div>
                <div className="project-card-copy">
                  <h3>{project.title}</h3>
                  {project.status ? (
                    <span className="project-status">{project.status}</span>
                  ) : null}
                  <p>{project.note}</p>
                </div>
                <span className="project-action">{project.action}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <a className="site-footer-wordmark" href="#top" aria-label="ページ上部へ戻る">
          PYGMI<span>X</span>
        </a>
        <nav aria-label="フッターナビゲーション">
          <a href="/contact">CONTACT →</a>
          <a href="#top">PAGE TOP ↑</a>
        </nav>
        <p>© 2026 PYGMIX</p>
      </footer>
    </main>
  );
}
