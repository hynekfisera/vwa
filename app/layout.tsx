import "./globals.css";
import GAWrapper from "./GAWrapper";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
faConfig.autoAddCss = false;
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vývoj Webových Aplikací",
  description: "Série návodů ve které se naučíte vytvářet profesionální weby a webové aplikace za pomocí React frameworku Next.js a TailwindCSS",
  openGraph: {
    title: "Vývoj Webových Aplikací",
    description: "Série návodů ve které se naučíte vytvářet profesionální weby a webové aplikace za pomocí React frameworku Next.js a TailwindCSS",
    url: "https://vwa.cz",
    siteName: "VWA",
    type: "website",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vývoj Webových Aplikací",
    description: "Série návodů ve které se naučíte vytvářet profesionální weby a webové aplikace za pomocí React frameworku Next.js a TailwindCSS",
  },
  metadataBase: new URL("https://vwa.cz"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className={GeistSans.className}>
        <GAWrapper />
        {children}
      </body>
    </html>
  );
}
