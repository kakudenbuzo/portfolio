export type PersonalProject = {
  imagePath: string;
  name: string;
  type: { en: string; ja: string };
  description: { en: string; ja: string };
  link: string;
  skills: string[];
};

export const personalProjects: PersonalProject[] = [
  {
    imagePath: "score-box-icon.png",
    name: "SCORE BOX",
    type: { en: "Mobile app", ja: "モバイルアプリ" },
    description: {
      en: "A mobile app for creating and sharing boxing match scorecards. Over 10,000 downloads across the App Store and Google Play.",
      ja: "ボクシングの試合のスコアカードを作成・共有できるモバイルアプリ。App StoreとGoogle Playで累計10,000以上のダウンロード数を達成。",
    },
    link: "https://score-box-link.web.app/",
    skills: ["Dart", "Flutter", "Firebase", "SQLite"],
  },
  {
    imagePath: "mokuren.png",
    name: "Mokuren",
    type: { en: "Chrome extension", ja: "Chrome拡張機能" },
    description: {
      en: "A Chrome extension for GitHub that lets you open issue pages in a sidebar. Built with friends.",
      ja: "GitHubのIssueページをサイドバーで開けるChrome拡張機能。友人と共同で開発しました。",
    },
    link: "https://chrome.google.com/webstore/detail/mokuren-for-github/nikennffbfoadbajdgnhlngjahofhdef",
    skills: ["TypeScript", "Vue.js", "Jest", "Cypress"],
  },
  {
    imagePath: "cupertino-catalog-icon.png",
    name: "Cupertino Catalog",
    type: { en: "Mobile app", ja: "モバイルアプリ" },
    description: {
      en: "A mobile app for Flutter developers to browse Cupertino (iOS-style) widgets and their code examples.",
      ja: "Flutter開発者向けに、Cupertinoウィジェット（iOSスタイル）とそのコードサンプルをブラウズできるモバイルアプリです。",
    },
    link: "https://apps.apple.com/us/app/cupertino-catalog/id1665329294",
    skills: ["Dart", "Flutter", "SQLite"],
  },
];
