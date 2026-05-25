"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "ja";

export const translations = {
  en: {
    role: "Web Application Engineer",
    bio: "Web application engineer based in Tokyo. I love product development and the process of creating products that people love. My ancestors were samurai, and my family does martial arts — in my free time I do kickboxing, which inspired me to build SCORE BOX.",
    summary:
      "Web Application Engineer with 5+ years of experience across web and mobile development. At Commune, I work in TypeScript across community SaaS feature development and in-house shared infrastructure — including designing an OAuth2.0 / OIDC authentication platform and a cross-product API authorization layer from scratch. Previously built EC SaaS systems in Java at e-ize. Also ship Flutter/Dart mobile apps independently, including a boxing scorecard app with 10,000+ downloads. Google Professional Cloud Architect certified.",
    contact: {
      location: "Tokyo, Japan",
      email: "musashi.t.app@gmail.com",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      articles: "Articles",
    },
    sections: {
      summary: "Professional Summary",
      experience: "Work Experience",
      education: "Education",
      projects: "Projects",
      articles: "Articles",
    },
    sourceCode: "Source code",
    copyright: "© 2024 Musashi Tsunoda",
  },
  ja: {
    role: "Webアプリケーションエンジニア",
    bio: "東京を拠点に活動するWebアプリケーションエンジニアです。人々に愛されるプロダクトを作るプロセスが大好きです。先祖は武士で、家族で武道に取り組んでいます。趣味はキックボクシングで、その経験からボクシングのスコアを記録できるモバイルアプリ「SCORE BOX」を開発しました。",
    summary:
      "Webおよびモバイル開発に5年以上携わるWebアプリケーションエンジニアです。現在は株式会社CommuneにてTypeScriptを用いたコミュニティSaaSの機能開発に加え、OAuth2.0 / OIDCを用いた共通認証基盤やプロダクト間API連携基盤をゼロから設計・開発しています。前職のe-izeではJavaを用いたEC SaaS開発を担当。個人ではFlutter/Dartでモバイルアプリを独自開発しており、ボクシング採点アプリは累計10,000件以上のダウンロードを達成。Google Professional Cloud Architect認定取得済み。",
    contact: {
      location: "東京都",
      email: "musashi.t.app@gmail.com",
    },
    nav: {
      about: "About",
      experience: "経歴",
      projects: "プロジェクト",
      articles: "記事",
    },
    sections: {
      summary: "職務要約",
      experience: "職歴",
      education: "学歴",
      projects: "個人プロジェクト",
      articles: "Zenn記事",
    },
    sourceCode: "ソースコード",
    copyright: "© 2024 角田 武蔵",
  },
} as const;

type Translations = {
  role: string;
  bio: string;
  summary: string;
  contact: { location: string; email: string };
  nav: { about: string; experience: string; projects: string; articles: string };
  sections: { summary: string; experience: string; education: string; projects: string; articles: string };
  sourceCode: string;
  copyright: string;
};

interface LangContextValue {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  t: translations.en,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "ja" : "en"));
  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
