import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PYGMIX｜真面目にふざける。",
    template: "%s｜PYGMIX",
  },
  description:
    "身体、構造、記録、技術。異なる領域を掛け合わせてつくるPYGMIX studioのホームページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
