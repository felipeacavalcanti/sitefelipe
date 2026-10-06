import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felipe Cavalcanti — Artista Visual",
  description:
    "Obras, pesquisa multissensorial e trajetória do artista visual brasileiro Felipe Cavalcanti.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
