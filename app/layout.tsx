import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import GAWrapper from "./GAWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vývoj Webových Aplikací",
  description: "Série návodů ve které se naučíte vytvářet profesionální weby a webové aplikace za pomocí React frameworku Next.js a TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={inter.className}>
        <GAWrapper />
        {children}
      </body>
    </html>
  );
}
