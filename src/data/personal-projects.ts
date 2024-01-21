import { PersonalProject } from "@/components/personal-project-item";

export const personalProjects: PersonalProject[] = [
  {
    imagePath: "score-box-icon.webp",
    name: "SCORE BOX",
    type: "Mobile app",
    description: [
      "SCORE BOX is a mobile app that allows you to create your scorecard of boxing fights." +
        " You can also share your scorecard with others.",
      "It has been downloaded in total over 7000 on the App Store and Google Play.",
      "You can see the posts that its users shared on Twitter with the hashtag #SCORE_BOX.",
    ],
    link: "https://score-box-link.web.app/",
    skills: ["Dart", "Flutter", "Firebase", "SQLite"]
  },
  {
    imagePath: "mokuren.png",
    name: "Mokuren",
    type: "Chrome extension",
    description: [
      "Mokuren is a Chrome extension for GitHub.",
      "You can open the issue page in a sidebar.",
      "I developed it with my firiends.",
    ],
    link: "https://chrome.google.com/webstore/detail/mokuren-for-github/nikennffbfoadbajdgnhlngjahofhdef",
    skills: ["TypeScript", "Vue.js", "GCP", "Cypress"]
  },
  {
    imagePath: "cupertino-catalog-icon.png",
    name: "Cupertino catalog",
    type: "Chrome extension",
    description: [
      "Cupertiono catalog is a mobile app for Flutter developers.",
      "You can brawse Cupertino widgets and their code examples.",
      "Cupertino widgets are iOS-style widgets for Flutter.",
    ],
    link: "https://apps.apple.com/us/app/cupertino-catalog/id1665329294",
    skills: ["Dart", "Flutter", "SQLite"]
  },
];