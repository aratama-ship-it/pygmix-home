import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the PYGMIX home draft", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>PYGMIX｜真面目にふざける。<\/title>/i);
  assert.match(html, /CROSS-DISCIPLINARY.*CREATIVE STUDIO/);
  assert.match(html, /NINE PLATES/);
  assert.match(html, />入口</);
  assert.match(html, />出口</);
  assert.equal([...html.matchAll(/class="orbit-item /g)].length, 9);
  assert.doesNotMatch(html, /ACTIVITY INDEX|ひとつじゃない。|でも、ばらばらでもない。/);
  assert.match(html, /JuggleLine/);
  assert.match(html, /System Audio Analyzer/);
  assert.match(html, /href="\/system-audio-analyzer"/);
  assert.match(html, /公募ものさし/);
  assert.match(html, /助成ものさし/);
  assert.match(html, /会場ものさし/);
  assert.match(html, /juggling-trajectory-analyzer-54347579590\.asia-northeast1\.run\.app/);
  assert.match(html, /koubo\.art-monosashi\.com/);
  assert.match(html, /joseikin\.art-monosashi\.com/);
  assert.match(html, /venue\.art-monosashi\.com/);
  assert.match(html, /MESURE/);
  assert.match(html, /mesure\.art-monosashi\.com/);
  assert.match(html, /４８ヶ月のディアボロ/);
  assert.match(html, /制作中/);
  assert.match(html, /冷蔵庫の現在地/);
  assert.match(html, /\/visuals\/thumb-juggling-howto\.jpg/);
  // 皿の面はすべて同梱コピー。外部から画像を読み直すと初回表示が重くなる
  assert.doesNotMatch(html, /i\.ytimg\.com|art-monosashi\.com\/(assets\/)?og|github\.io\/[a-z0-9-]+\/assets\//);
  assert.match(html, /youtube\.com\/watch\?v=tBXMkUGqYBQ/);
  assert.doesNotMatch(html, /pygmix-games|kasane-maru-batsu|island-founders/);
  assert.doesNotMatch(html, /chatgpt\.site/);
  assert.doesNotMatch(html, /GAMES|ゲーム|盤上|遊び|遊べ/);
  assert.doesNotMatch(html, /circusarata@gmail\.com ↗|class="footer-mail"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("server-renders the System Audio Analyzer detail page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("audio-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/system-audio-analyzer", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /System Audio Analyzer/);
  assert.match(html, /Apple Silicon/);
  assert.match(html, /macOS 14\.2/);
  assert.match(html, /Build 28/i);
  assert.match(html, /Developer ID公証前/);
  assert.match(html, /circusarata@gmail\.com/);
});

test("removes the disposable starter preview", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.match(layout, /lang="ja"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
