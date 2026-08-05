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
  assert.match(html, /TEN PLATES/);
  assert.match(html, />入口</);
  assert.match(html, />出口</);
  assert.equal([...html.matchAll(/class="orbit-item /g)].length, 10);
  assert.match(html, /ACTIVITY INDEX/);
  assert.match(html, /身体技法/);
  assert.match(html, /PYGMIX GAMES/);
  assert.match(html, /JuggleLine/);
  assert.match(html, /公募ものさし/);
  assert.match(html, /助成ものさし/);
  assert.match(html, /写真コンテストものさし/);
  assert.match(html, /会場ものさし/);
  assert.match(html, /juggling-trajectory-analyzer-54347579590\.asia-northeast1\.run\.app/);
  assert.match(html, /koubo\.art-monosashi\.com/);
  assert.match(html, /joseikin\.art-monosashi\.com/);
  assert.match(html, /photo-contest-monosashi\.juggler-arata\.chatgpt\.site/);
  assert.match(html, /venue\.art-monosashi\.com/);
  assert.match(html, /Public Domain/);
  assert.match(html, /circusarata@gmail\.com/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
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
