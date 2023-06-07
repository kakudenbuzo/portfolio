import { PersonalProject } from "@/components/personal-project-item";

export const personalProjects = [
  new PersonalProject(
    "score-box-icon.webp",
    "SCORE BOX",
    "Mobile app",
    [
      "SCORE BOX is a mobile app that allows you to create your scorecard of boxing fights." +
        " You can also share your scorecard with others.",
      "It has been downloaded in total over 7000 on the App Store and Google Play.",
      "You can see the posts that its users shared on Twitter with the hashtag #SCORE_BOX.",
    ],
    "https://score-box-link.web.app/",
    ["Dart", "Flutter", "Firebase", "SQLite"]
  ),
  new PersonalProject(
    "mokuren.png",
    "Mokuren",
    "Chrome extension",
    [
      "Mokuren is a Chrome extension for GitHub.",
      "You can open the issue page in a sidebar.",
      "I developed it with my firiends.",
    ],
    "https://chrome.google.com/webstore/detail/mokuren-for-github/nikennffbfoadbajdgnhlngjahofhdef",
    ["TypeScript", "Vue.js", "GCP", "Cypress"]
  ),
  new PersonalProject(
    "cupertino-catalog-icon.png",
    "Cupertino catalog",
    "Chrome extension",
    [
      "Cupertiono catalog is a mobile app for Flutter developers.",
      "You can brawse Cupertino widgets and their code examples.",
      "Cupertino widgets are iOS-style widgets for Flutter.",
    ],
    "https://apps.apple.com/us/app/cupertino-catalog/id1665329294",
    ["Dart", "Flutter", "SQLite"]
  ),
];
