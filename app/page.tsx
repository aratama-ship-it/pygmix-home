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

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="projects-heading">
          <p>LIVE PROJECTS / 01—08</p>
          <h2 id="projects-title">
            つくったものを、
            <br />
            ここから試せます。
          </h2>
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

      <section className="principle" id="principle" aria-labelledby="principle-title">
        <div className="principle-marquee" aria-hidden="true">
          LOGIC <b>×</b> BODY <b>×</b> TOOLS <b>×</b>
        </div>
        <div className="principle-copy">
          <p>ONE FOUNDATION / MANY OUTPUTS</p>
          <h2 id="principle-title">理屈と身体のあいだに、創作のスイッチがある。</h2>
          <div>
            <p>
              PYGMIXは、観察する、構造を見つける、実際に試す、道具の形にする、という往復から活動をつくります。
            </p>
            <p>
              舞台、映像、調査、記録、学習ツール。見た目の違う成果が、同じ考え方から枝分かれしていきます。
            </p>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-wordmark" href="#top">
          PYGMI<span>X</span>
        </a>
        <p>真面目にふざける。</p>
      </footer>
    </main>
  );
}
