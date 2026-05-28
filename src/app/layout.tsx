import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3WW2G4V0L7"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3WW2G4V0L7');
          `}
        </Script>
      </body>
    </html>
  );
}
