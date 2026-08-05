/* eslint-disable @next/next/no-img-element -- These local assets are pre-sized for static edge hosting. */

import OrbitHero from "./OrbitHero";

const activityCards = [
  {
    number: "01",
    className: "activity-performance",
    category: "PERFORMANCE / BODY",
    mix: "身体技法 × 観察",
    title: "動きの中にある構造を、見つける。",
    note: "舞台で培った感覚を、軌道・タイミング・関係として捉え直す。",
  },
  {
    number: "02",
    className: "activity-games",
    category: "GAMES / WEB",
    mix: "遊び × ルール × 同期",
    title: "考えることを、遊べる形にする。",
    note: "盤上の思考から身体感覚まで、ひとりでも誰かとでも試せるゲームへ。",
    href: "https://pygmix-games.juggler-arata.chatgpt.site/",
  },
  {
    number: "03",
    className: "activity-research",
    category: "RESEARCH / ARCHIVE",
    mix: "歴史資料 × 身体芸術",
    title: "過去の断片から、現在の身体を見る。",
    note: "資料を集め、つなぎ直し、表現の背景に別の視点をつくる。",
  },
  {
    number: "04",
    className: "activity-film",
    category: "FILM / DOCUMENT",
    mix: "動き × 記録 × 編集",
    title: "時間の中の出来事を、もう一度組み立てる。",
    note: "演技を並べるのではなく、活動の輪郭が見える映像を考える。",
  },
  {
    number: "05",
    className: "activity-learning",
    category: "LEARNING / TOOLS",
    mix: "感覚 × 構造化 × 反復",
    title: "わかるまでの過程も、道具にする。",
    note: "複雑な技術や判断を、小さく試しながら身につけられる体験へ。",
  },
] as const;

const projectLinks = [
  {
    className: "project-juggleline",
    index: "P-01",
    category: "JUGGLING ANALYSIS / BETA",
    title: "JuggleLine",
    note: "動画からボールの軌道・高さ・リズム・左右差を可視化する、ジャグリング解析アプリ。",
    href: "https://juggling-trajectory-analyzer-54347579590.asia-northeast1.run.app/",
    action: "解析アプリを開く ↗",
  },
  {
    className: "project-koubo",
    index: "M-01",
    category: "OPEN CALLS",
    title: "公募ものさし",
    note: "身体芸術の公募を、条件や締切から探す。",
    href: "https://koubo.art-monosashi.com/",
    action: "公募を探す ↗",
  },
  {
    className: "project-grants",
    index: "M-02",
    category: "GRANTS",
    title: "助成ものさし",
    note: "舞台・身体芸術の助成制度を、地域や条件から比べる。",
    href: "https://joseikin.art-monosashi.com/",
    action: "助成を探す ↗",
  },
  {
    className: "project-photo",
    index: "M-03",
    category: "PHOTO CONTESTS",
    title: "写真コンテストものさし",
    note: "写真と応募条件から、コンテスト候補を照合する。",
    href: "https://photo-contest-monosashi.juggler-arata.chatgpt.site/",
    action: "候補を比べる ↗",
  },
  {
    className: "project-venue",
    index: "M-04",
    category: "VENUES",
    title: "会場ものさし",
    note: "イベント会場を、規模・天井高・予算・搬入・アクセスで比べる。",
    href: "https://venue.art-monosashi.com/",
    action: "会場を探す ↗",
  },
] as const;

function ActivityCard({ card }: { card: (typeof activityCards)[number] }) {
  const inner = (
    <>
      <div className="activity-card-top">
        <span>{card.number}</span>
        <span>{card.category}</span>
      </div>
      <p className="activity-mix">{card.mix}</p>
      <h3>{card.title}</h3>
      <p className="activity-note">{card.note}</p>
      {"href" in card ? (
        <span className="activity-open" aria-hidden="true">
          OPEN THE GAMES ↗
        </span>
      ) : null}
    </>
  );

  return (
    <article className={`activity-card ${card.className}`}>
      {"href" in card ? (
        <a href={card.href} target="_blank" rel="noreferrer">
          {inner}
        </a>
      ) : (
        <div className="activity-card-inner">{inner}</div>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <main id="top">
      <OrbitHero />

      <section className="activities" id="activities" aria-labelledby="activities-title">
        <div className="section-title">
          <p>ACTIVITY INDEX / 01—05</p>
          <h2 id="activities-title">
            ひとつじゃない。
            <br />
            でも、ばらばらでもない。
          </h2>
          <span>同じ基盤から、出口はいろいろ。</span>
        </div>

        <div className="activity-board">
          {activityCards.map((card) => (
            <ActivityCard key={card.number} card={card} />
          ))}

          <div className="activity-image activity-image-games">
            <img
              src="/visuals/game-kasane.jpg"
              alt="PYGMIX GAMESの作品、かさねマルバツ"
            />
            <span>MORE THAN ONE WAY TO PLAY.</span>
          </div>

          <figure className="activity-image activity-image-archive">
            <img
              src="/visuals/diabolo-archive-1907.jpg"
              alt="1907年のディアボロ資料"
            />
            <figcaption>
              Albert Hahn, <i>Kiesrecht-Diabolo</i>, 1907 / Rijksmuseum,
              Public Domain
            </figcaption>
          </figure>

          <div className="activity-symbol" aria-hidden="true">
            <span>?</span>
            <b>×</b>
            <i>!</i>
          </div>
        </div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="projects-heading">
          <p>LIVE PROJECTS / 01—05</p>
          <h2 id="projects-title">
            つくったものを、
            <br />
            ここから試せます。
          </h2>
          <p>
            ジャグリング解析アプリと、条件や根拠を比べる「ものさし」シリーズ。
          </p>
        </div>

        <div className="project-grid">
          {projectLinks.map((project) => (
            <article className={`project-card ${project.className}`} key={project.index}>
              <a href={project.href} target="_blank" rel="noreferrer">
                <div className="project-card-top">
                  <span>{project.index}</span>
                  <span>{project.category}</span>
                </div>
                <div className="project-card-copy">
                  <h3>{project.title}</h3>
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
          LOGIC <b>×</b> BODY <b>×</b> PLAY <b>×</b>
        </div>
        <div className="principle-copy">
          <p>ONE FOUNDATION / MANY OUTPUTS</p>
          <h2 id="principle-title">理屈と身体のあいだに、創作のスイッチがある。</h2>
          <div>
            <p>
              PYGMIXは、観察する、構造を見つける、実際に試す、遊べる形へ変える、という往復から活動をつくります。
            </p>
            <p>
              舞台、ゲーム、映像、調査、学習ツール。見た目の違う成果が、同じ考え方から枝分かれしていきます。
            </p>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-wordmark" href="#top">
          PYGMI<span>X</span>
        </a>
        <p>真面目にふざける。</p>
        <a className="footer-mail" href="mailto:circusarata@gmail.com">
          circusarata@gmail.com ↗
        </a>
      </footer>
    </main>
  );
}
