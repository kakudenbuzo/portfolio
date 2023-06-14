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
      <body className={inter.className + " bg-slate-50 dark:bg-black"}>
        {children}
      </body>
    </html>
  );
}
