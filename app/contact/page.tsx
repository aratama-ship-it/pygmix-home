import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "PYGMIXへの制作、出演、取材、ツールに関するお問い合わせ。",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-header">
        <Link className="wordmark" href="/" aria-label="PYGMIXホームへ">
          PYGMI<span>X</span>
        </Link>
        <Link className="contact-back-link" href="/">
          HOMEへ戻る ←
        </Link>
      </header>

      <section className="contact-layout" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p>CONTACT / PYGMIX STUDIO</p>
          <h1 id="contact-title">お問い合わせ</h1>
          <p>
            制作、上演・出演、取材、ツールやアプリについて、こちらからご連絡ください。
          </p>
          <p className="contact-delivery-note">
            現在は、入力後にお使いのメールアプリが開きます。内容をご確認のうえ送信してください。
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
