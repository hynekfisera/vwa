import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import GAWrapper from "./GAWrapper";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
faConfig.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vývoj Webových Aplikací",
  description: "Série návodů ve které se naučíte vytvářet profesionální weby a webové aplikace za pomocí React frameworku Next.js a TailwindCSS",
  openGraph: {
    title: "Vývoj Webových Aplikací",
    description: "Série návodů ve které se naučíte vytvářet profesionální weby a webové aplikace za pomocí React frameworku Next.js a TailwindCSS",
    url: "https://vwa.cz",
    siteName: "VWA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vývoj Webových Aplikací",
    description: "Série návodů ve které se naučíte vytvářet profesionální weby a webové aplikace za pomocí React frameworku Next.js a TailwindCSS",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#0ea5e9" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
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
