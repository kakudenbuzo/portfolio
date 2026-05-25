import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Musashi Tsunoda",
  description: "Musashi Tsunoda — Web Application Engineer",
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
        <link rel="apple-touch-icon" href="/portfolio/icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className + " bg-gray-100"}>
        {children}
      </body>
    </html>
  );
}
