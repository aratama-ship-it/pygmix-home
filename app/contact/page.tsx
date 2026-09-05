import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "PYGMIXへの制作、出演、取材、ツールに関するお問い合わせ。",
};

/* ---- 簡易英語対応（2026-09-05） ----
   ★サイト全体の多言語化ではなく、このページだけを ?lang=en で切り替える。
     app/layout.tsx の <html lang="ja"> はルートで固定のため、ページ単位では変えない。
   ★カテゴリ・件名はリンク元（舞台スケッチのLP・紹介ページ）が
     ?category=tool&subject=... を付けて送ってくる想定。
     CONTACT_FORM_DESIGN.md にも「件名はURLのsubjectから初期値を設定可能」とあるが、
     これまでフォーム側が読んでいなかった（値を渡しても何も起きなかった）ので、
     ついでに読み取って初期値に反映する。 */
const CATEGORY_FROM_QUERY: Record<string, string> = {
  tool: "ツール・アプリ",
};

const COPY = {
  ja: {
    backLink: "HOMEへ戻る ←",
    kicker: "CONTACT / PYGMIX STUDIO",
    title: "お問い合わせ",
    phrases: [
      "制作、",
      "上演・出演、",
      "取材、",
      "ツールやアプリについて、",
      "こちらからご連絡ください。",
    ],
    deliveryNote: "現在は、入力後にお使いのメールアプリが開きます。内容をご確認のうえ送信してください。",
  },
  en: {
    backLink: "← Back to home",
    kicker: "CONTACT / PYGMIX STUDIO",
    title: "Contact",
    phrases: [
      "Production, ",
      "performances, ",
      "press, ",
      "or tools and apps — ",
      "get in touch here.",
    ],
    deliveryNote: "Right now, submitting opens your email app with the message ready. Please check it before sending.",
  },
} as const;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const asString = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";
  const lang = asString(params.lang) === "en" ? "en" : "ja";
  const t = COPY[lang];

  const rawCategory = asString(params.category);
  const initialCategory = CATEGORY_FROM_QUERY[rawCategory] ?? "";
  const initialSubject = asString(params.subject);

  return (
    <main className="contact-page">
      <header className="contact-header">
        <Link className="wordmark" href="/" aria-label="PYGMIXホームへ">
          PYGMI<span>X</span>
        </Link>
        <Link className="contact-back-link" href="/">
          {t.backLink}
        </Link>
      </header>

      <section className="contact-layout" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p>{t.kicker}</p>
          <h1 id="contact-title">{t.title}</h1>
          <p>
            {t.phrases.map((phrase) => (
              <span className="contact-phrase" key={phrase}>
                {phrase}
              </span>
            ))}
          </p>
          <p className="contact-delivery-note">{t.deliveryNote}</p>
        </div>

        <ContactForm lang={lang} initialCategory={initialCategory} initialSubject={initialSubject} />
      </section>
    </main>
  );
}
