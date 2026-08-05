"use client";

/* eslint-disable @next/next/no-img-element -- These local assets are pre-sized for static edge hosting. */

import { useState, type CSSProperties } from "react";

const orbitItems = [
  {
    id: "circus",
    className: "orbit-circus",
    src: "/visuals/circus-chiarini.jpg",
    alt: "明治期のサーカス興行を描いた世界第一チャリネ大曲馬之図",
    category: "CIRCUS / HISTORY",
    mix: "BODY × SPECTACLE",
    credit: "出典：国立国会図書館『NDLイメージバンク』",
    delay: "0s",
  },
  {
    id: "games",
    className: "orbit-games",
    src: "/visuals/game-kasane.jpg",
    alt: "PYGMIXで制作した、木の駒を重ねて遊ぶゲーム",
    category: "GAMES / WEB",
    mix: "PLAY × LOGIC",
    credit: "PYGMIX ORIGINAL",
    href: "https://kasane-maru-batsu.juggler-arata.workers.dev/",
    delay: "-5.2s",
  },
  {
    id: "learning",
    className: "orbit-learning",
    src: "/visuals/diabolo-learning.jpg",
    alt: "ディアボロの軌道をカードの連続として描いた学習用ビジュアル",
    category: "LEARNING / TOOLS",
    mix: "FEELING → STRUCTURE",
    credit: "PYGMIX ORIGINAL",
    delay: "-10.4s",
  },
  {
    id: "yokohama",
    className: "orbit-yokohama",
    src: "/visuals/circus-yokohama.jpg",
    alt: "横浜に来た外国曲馬の多様な身体芸を描いた錦絵",
    category: "PERFORMANCE / HISTORY",
    mix: "JAPAN × WORLD",
    credit: "出典：国立国会図書館『NDLイメージバンク』",
    delay: "-15.6s",
  },
  {
    id: "juggling",
    className: "orbit-juggling",
    src: "/visuals/juggler-1934.jpg",
    alt: "シルクハット姿でボールを操るジャグラーの版画",
    category: "JUGGLING / ARCHIVE",
    mix: "PAST × PRESENT",
    credit: "SMITHSONIAN OPEN ACCESS / CC0",
    delay: "-20.8s",
  },
  {
    id: "island",
    className: "orbit-island",
    src: "/visuals/game-island.jpg",
    alt: "六角形の地形タイルを組み合わせて島を拓くボードゲーム",
    category: "GAMES / SYSTEMS",
    mix: "RULES × LANDSCAPE",
    credit: "PYGMIX ORIGINAL",
    href: "https://island-founders.juggler-arata.chatgpt.site/",
    delay: "-26s",
  },
  {
    id: "diabolo",
    className: "orbit-diabolo",
    src: "/visuals/diabolo-archive-1907.jpg",
    alt: "1907年の風刺画に描かれたディアボロ",
    category: "DIABOLO / RESEARCH",
    mix: "ARCHIVE × BODY",
    credit: "RIJKSMUSEUM / PUBLIC DOMAIN",
    delay: "-31.2s",
  },
  {
    id: "soulier",
    className: "orbit-soulier",
    src: "/visuals/circus-soulier.jpg",
    alt: "馬上芸と空中芸が同時に展開する仏蘭西大曲馬の錦絵",
    category: "CIRCUS / ARCHIVE",
    mix: "BODY × IMAGE",
    credit: "出典：国立国会図書館『NDLイメージバンク』",
    delay: "-36.4s",
  },
  {
    id: "costumes",
    className: "orbit-costumes",
    src: "/visuals/diabolo-1812.jpg",
    alt: "1812年の服飾版画に描かれたディアボロを操る女性",
    category: "DIABOLO / CULTURE",
    mix: "TOY × FASHION",
    credit: "WIKIMEDIA COMMONS / PUBLIC DOMAIN",
    delay: "-41.6s",
  },
  {
    id: "story",
    className: "orbit-story",
    src: "/visuals/diabolo-story-1915.jpg",
    alt: "1915年の物語『デアボロの恨』が載る縦書きの書籍見開き",
    category: "TEXT / RESEARCH",
    mix: "WORDS × OBJECTS",
    credit: "国立国会図書館デジタルコレクション / 保護期間満了",
    delay: "-46.8s",
  },
] as const;

export default function OrbitHero() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className={`orbit-hero${paused ? " is-paused" : ""}`}
      aria-labelledby="hero-title"
    >
      <div className="orbit-grid" aria-hidden="true" />
      <p className="orbit-corner orbit-corner-left">
        CROSS-DISCIPLINARY
        <br />
        CREATIVE STUDIO
      </p>
      <p className="orbit-corner orbit-corner-right">
        TEN PLATES
        <br />
        ONE FOUNDATION
      </p>

      <div className="orbit-rail" aria-hidden="true">
        <span />
      </div>

      <div className="orbit-gate orbit-gate-entry" aria-hidden="true">
        <span className="orbit-gate-label">
          <b>入口</b>
          <small>IN</small>
        </span>
        <i>→</i>
      </div>
      <div className="orbit-gate orbit-gate-exit" aria-hidden="true">
        <i>→</i>
        <span className="orbit-gate-label">
          <b>出口</b>
          <small>OUT</small>
        </span>
      </div>

      <div
        className="orbit-items"
        aria-label="入口から出口へ流れるPYGMIXの10の活動"
      >
        {orbitItems.map((item) => {
          const visual = (
            <>
              <img src={item.src} alt={item.alt} />
              <span className="orbit-caption">
                <span>
                  <b>{item.category}</b>
                  <i>{item.mix}</i>
                </span>
                <small>{item.credit}</small>
              </span>
            </>
          );

          return (
            <div
              className={`orbit-item ${item.className}`}
              key={item.id}
              style={{ "--orbit-delay": item.delay } as CSSProperties}
            >
              {"href" in item ? (
                <a
                  className="orbit-card"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${item.category}を開く`}
                >
                  {visual}
                </a>
              ) : (
                <figure className="orbit-card">{visual}</figure>
              )}
            </div>
          );
        })}
      </div>

      <div className="center-menu">
        <p className="center-index">MIXING FIELD / CONTINUOUS</p>
        <h1 id="hero-title" aria-label="PYGMIX">
          <span>PYGMI</span>
          <b>X</b>
        </h1>
        <p className="center-catch">
          真面目に、<strong>ふざける。</strong>
        </p>

        <nav aria-label="メインナビゲーション">
          <a href="#activities">WORKS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#principle">ABOUT</a>
          <a
            href="https://pygmix-games.juggler-arata.chatgpt.site/"
            target="_blank"
            rel="noreferrer"
          >
            GAMES ↗
          </a>
          <a href="mailto:circusarata@gmail.com">CONTACT</a>
        </nav>

        <button
          type="button"
          className="orbit-toggle"
          aria-pressed={paused}
          onClick={() => setPaused((current) => !current)}
        >
          <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
          {paused ? "コンベアを再開" : "コンベアを止める"}
        </button>
      </div>

      <p className="orbit-hint">
        ENTER <span aria-hidden="true">→</span> MIX <span aria-hidden="true">→</span> EXIT
      </p>
    </section>
  );
}
