"use client";

/* eslint-disable @next/next/no-img-element -- Plate faces are local, pre-sized for static edge hosting. */

import { useState, type CSSProperties } from "react";

type OrbitItem = {
  id: string;
  className: string;
  /** カード面：公開中のOGカードを読む場合のみ */
  src?: string;
  alt?: string;
  /** カード面：OGカードが無いプロジェクトはアプリアイコン＋名前で見せる */
  icon?: string;
  /** カード面：アイコンも無い場合は名前だけ */
  label?: string;
  category: string;
  mix: string;
  credit: string;
  href: string;
  external: boolean;
  delay: string;
};

/* 皿はLIVE PROJECTSの8件＋YouTubeの入門動画。52秒で1周するので約5.78秒ずつずらす。
   面の画像は各配信元から取り込んで640px/192pxに縮小した同梱コピー。皿は全部が初回表示に
   出るため遅延読み込みが効かず、配信元の原寸（合計6.36MB）を直接読むと初回表示が重くなる。 */
const orbitItems: readonly OrbitItem[] = [
  {
    id: "howto",
    className: "orbit-howto",
    src: "/visuals/thumb-juggling-howto.jpg",
    alt: "ジャグリングの持ち方から投げ方までを解説するPYGMIX studioの入門動画",
    category: "JUGGLING / VIDEO",
    mix: "TEACH × MOTION",
    credit: "PYGMIX STUDIO / YOUTUBE",
    href: "https://www.youtube.com/watch?v=tBXMkUGqYBQ",
    external: true,
    delay: "0s",
  },
  {
    id: "juggleline",
    className: "orbit-juggleline",
    icon: "/visuals/icon-juggleline.png",
    label: "JuggleLine",
    category: "JUGGLING / ANALYSIS",
    mix: "VIDEO → TRAJECTORY",
    credit: "BETA",
    href: "https://juggling-trajectory-analyzer-54347579590.asia-northeast1.run.app/",
    external: true,
    delay: "-5.78s",
  },
  {
    id: "koubo",
    className: "orbit-koubo",
    src: "/visuals/og-koubo.jpg",
    alt: "公募ものさしのカード",
    category: "OPEN CALLS",
    mix: "公募 × 条件",
    credit: "koubo.art-monosashi.com",
    href: "https://koubo.art-monosashi.com/",
    external: true,
    delay: "-11.56s",
  },
  {
    id: "audio",
    className: "orbit-audio",
    icon: "/visuals/icon-system-audio-analyzer.png",
    label: "System Audio\nAnalyzer",
    category: "MACOS / AUDIO",
    mix: "SOUND → STRUCTURE",
    credit: "BETA / BUILD 28",
    href: "/system-audio-analyzer",
    external: false,
    delay: "-17.33s",
  },
  {
    id: "joseikin",
    className: "orbit-joseikin",
    src: "/visuals/og-joseikin.jpg",
    alt: "助成ものさしのカード",
    category: "GRANTS",
    mix: "助成 × 根拠",
    credit: "joseikin.art-monosashi.com",
    href: "https://joseikin.art-monosashi.com/",
    external: true,
    delay: "-23.11s",
  },
  {
    id: "diabolo48",
    className: "orbit-diabolo48",
    icon: "/visuals/icon-diabolo48.png",
    label: "４８ヶ月の\nディアボロ",
    category: "DIABOLO / ARCHIVE",
    mix: "48 MONTHS",
    credit: "制作中",
    href: "https://aratama-ship-it.github.io/diabolo4yeargame/",
    external: true,
    delay: "-28.89s",
  },
  {
    id: "fridge",
    className: "orbit-fridge",
    icon: "/visuals/icon-fridge.png",
    label: "冷蔵庫の\n現在地",
    category: "KITCHEN / TOOL",
    mix: "残りもの → 献立",
    credit: "GITHUB PAGES",
    href: "https://aratama-ship-it.github.io/fridge-leftovers/",
    external: true,
    delay: "-34.67s",
  },
  {
    id: "venue",
    className: "orbit-venue",
    src: "/visuals/og-venue.jpg",
    alt: "会場ものさしのカード",
    category: "VENUES",
    mix: "会場 × 条件",
    credit: "venue.art-monosashi.com",
    href: "https://venue.art-monosashi.com/",
    external: true,
    delay: "-40.44s",
  },
  {
    id: "mesure",
    className: "orbit-mesure",
    src: "/visuals/og-mesure.jpg",
    alt: "MESUREのカード",
    category: "NORTH AMERICA",
    mix: "CANADA + USA",
    credit: "mesure.art-monosashi.com",
    href: "https://mesure.art-monosashi.com/",
    external: true,
    delay: "-46.22s",
  },
];

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
        NINE PLATES
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
        aria-label="入口から出口へ流れるPYGMIXの9つのプロジェクト"
      >
        {orbitItems.map((item) => {
          const visual = (
            <>
              {item.src ? (
                <img src={item.src} alt={item.alt} />
              ) : (
                <span
                  className={`orbit-plate${item.icon ? " orbit-plate-icon" : ""}`}
                >
                  {item.icon ? <img src={item.icon} alt="" /> : null}
                  <span>{item.label}</span>
                </span>
              )}
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
              <a
                className="orbit-card"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                aria-label={`${item.label ?? item.category}を開く`}
              >
                {visual}
              </a>
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
          <a href="/contact">CONTACT</a>
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
