"use client";

import type { FormEvent } from "react";

const contactAddress = "info@pygmix.com";

export default function ContactForm() {
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
    const mailBody = [
      `お名前: ${name}`,
      `メールアドレス: ${email}`,
      `ご所属: ${organization || "（未記入）"}`,
      `お問い合わせ種別: ${category}`,
      `件名: ${subject || "（未記入）"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${contactAddress}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  }

  return (
    <form className="contact-form" onSubmit={openMailDraft}>
      <div className="contact-field-grid">
        <label>
          <span>お名前 *</span>
          <input name="name" type="text" required maxLength={100} autoComplete="name" />
        </label>

        <label>
          <span>メールアドレス *</span>
          <input name="email" type="email" required maxLength={254} autoComplete="email" />
        </label>
      </div>

      <div className="contact-field-grid">
        <label>
          <span>ご所属</span>
          <input name="organization" type="text" maxLength={120} autoComplete="organization" />
        </label>

        <label>
          <span>お問い合わせ種別 *</span>
          <select name="category" required defaultValue="">
            <option value="" disabled>
              選択してください
            </option>
            <option value="制作依頼">制作依頼</option>
            <option value="上演・出演">上演・出演</option>
            <option value="取材">取材</option>
            <option value="ツール・アプリ">ツール・アプリ</option>
            <option value="その他">その他</option>
          </select>
        </label>
      </div>

      <label>
        <span>件名</span>
        <input name="subject" type="text" maxLength={150} />
      </label>

      <label>
        <span>お問い合わせ内容 *</span>
        <textarea name="message" required minLength={10} maxLength={5000} rows={9} />
      </label>

      <label className="contact-consent">
        <input name="consent" type="checkbox" required />
        <span>
          入力内容を問い合わせへの返信に利用することに同意します。内容はこのサイトには保存されません。
        </span>
      </label>

      <button className="contact-submit" type="submit">
        メールアプリを開く ↗
      </button>

      <p className="contact-direct-mail">
        メールアプリが開かない場合は、
        <a href={`mailto:${contactAddress}`}>{contactAddress}</a>
        へ直接お送りください。
      </p>
    </form>
  );
}
