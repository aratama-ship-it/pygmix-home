"use client";

import type { FormEvent } from "react";

const contactAddress = "info@pygmix.com";

type Lang = "ja" | "en";

/* カテゴリは選択肢の見た目だけ英訳する。値（メールの本文に載る文字列）は
   日本語のまま。受け取るのはPYGMIX側（日本語話者）なので、値を英語化する
   必要はない。見た目と値を分けることで、日本語版と同じメール本文形式を保てる。 */
const CATEGORY_OPTIONS: { value: string; ja: string; en: string }[] = [
  { value: "制作依頼", ja: "制作依頼", en: "Production request" },
  { value: "上演・出演", ja: "上演・出演", en: "Performance / booking" },
  { value: "取材", ja: "取材", en: "Press / interview" },
  { value: "ツール・アプリ", ja: "ツール・アプリ", en: "Tool / app" },
  { value: "その他", ja: "その他", en: "Other" },
];

const COPY = {
  ja: {
    name: "お名前 *",
    email: "メールアドレス *",
    organization: "ご所属",
    category: "お問い合わせ種別 *",
    categoryPlaceholder: "選択してください",
    subject: "件名",
    message: "お問い合わせ内容 *",
    consent: "入力内容を問い合わせへの返信に利用することに同意します。内容はこのサイトには保存されません。",
    submit: "メールアプリを開く ↗",
    directMailPrefix: "メールアプリが開かない場合は、",
    directMailSuffix: "へ直接お送りください。",
    mailLabels: {
      name: "お名前",
      email: "メールアドレス",
      organization: "ご所属",
      organizationEmpty: "（未記入）",
      category: "お問い合わせ種別",
      subject: "件名",
      subjectEmpty: "（未記入）",
    },
  },
  en: {
    name: "Name *",
    email: "Email *",
    organization: "Organization",
    category: "What is this about? *",
    categoryPlaceholder: "Please choose one",
    subject: "Subject",
    message: "Message *",
    consent: "I agree that the information above may be used to reply to this inquiry. It is not stored on this site.",
    submit: "Open email app ↗",
    directMailPrefix: "If your email app doesn't open, please write directly to ",
    directMailSuffix: ".",
    mailLabels: {
      name: "Name",
      email: "Email",
      organization: "Organization",
      organizationEmpty: "(not provided)",
      category: "Category",
      subject: "Subject",
      subjectEmpty: "(not provided)",
    },
  },
} as const;

export default function ContactForm({
  lang = "ja",
  initialCategory = "",
  initialSubject = "",
}: {
  lang?: Lang;
  initialCategory?: string;
  initialSubject?: string;
}) {
  const t = COPY[lang];

  function openMailDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const organization = String(form.get("organization") ?? "").trim();
    const category = String(form.get("category") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const mailSubject = `[PYGMIX CONTACT] ${category}${subject ? ` / ${subject}` : ""}`;
    const l = t.mailLabels;
    const mailBody = [
      `${l.name}: ${name}`,
      `${l.email}: ${email}`,
      `${l.organization}: ${organization || l.organizationEmpty}`,
      `${l.category}: ${category}`,
      `${l.subject}: ${subject || l.subjectEmpty}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${contactAddress}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  }

  return (
    <form className="contact-form" onSubmit={openMailDraft}>
      <div className="contact-field-grid">
        <label>
          <span>{t.name}</span>
          <input name="name" type="text" required maxLength={100} autoComplete="name" />
        </label>

        <label>
          <span>{t.email}</span>
          <input name="email" type="email" required maxLength={254} autoComplete="email" />
        </label>
      </div>

      <div className="contact-field-grid">
        <label>
          <span>{t.organization}</span>
          <input name="organization" type="text" maxLength={120} autoComplete="organization" />
        </label>

        <label>
          <span>{t.category}</span>
          <select name="category" required defaultValue={initialCategory}>
            <option value="" disabled>
              {t.categoryPlaceholder}
            </option>
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {lang === "en" ? option.en : option.ja}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>{t.subject}</span>
        <input name="subject" type="text" maxLength={150} defaultValue={initialSubject} />
      </label>

      <label>
        <span>{t.message}</span>
        <textarea name="message" required minLength={10} maxLength={5000} rows={9} />
      </label>

      <label className="contact-consent">
        <input name="consent" type="checkbox" required />
        <span>{t.consent}</span>
      </label>

      <button className="contact-submit" type="submit">
        {t.submit}
      </button>

      <p className="contact-direct-mail">
        {t.directMailPrefix}
        <a href={`mailto:${contactAddress}`}>{contactAddress}</a>
        {t.directMailSuffix}
      </p>
    </form>
  );
}
