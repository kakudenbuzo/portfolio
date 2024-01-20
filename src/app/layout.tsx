import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Musashi Tsunoda",
  description: "Musashi Tsunoda's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
      <link rel="manifest" href="/portfolio/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      <meta name="theme-color" content="#000000" />
    </head>
      <body className={inter.className + " bg-slate-50 dark:bg-black"}>
        {children}
      </body>
    </html>
  );
}
