import { WorkExperience } from "@/components/work-experience-item";

export const workExperiences: WorkExperience[] = [
  {
    duration: "Apr. 2021 - Mar. 2023",
    role: "Full-stack Developer",
    companyName: "e-ize Co. Ltd.",
    description: [
      "I worked as a full-stack engineer on a service that made it easy to build e-commerce sites from the web.",
      " I worked in a team of 3-5 engineers, designing, developing, testing, and maintaining the service " +
        "for both the front-end and back-end.",
      "What I worked on:",
      "・New features for the front-end of the management screen and shop pages.",
      "・New features for the back-end of the system. (e.g. new payment methods, responsiveness, etc.)",
      "・Automation of back-end and front-end deployments using GitHub Actions.",
      "・Development of batches, such as subscription purchase processing.",
    ],
    link: "https://e-ize.jp/",
    skills: [
      "Java",
      "JavaScript",
      "Spring Boot",
      "Vue.js",
      "Nuxt.js",
      "MySQL",
      "Docker",
    ],
  },
  {
    duration: "Dec. 2019 - Mar. 2021",
    role: "Internship",
    companyName: "e-ize Co. Ltd.",
    description: [
      "As my first experience as a software engineer, I worked as an intern while I was finishing my master's degree.",
      "I worked on the front-end and back-end of the service.",
    ],
    link: "https://e-ize.jp/",
    skills: [
      "Java",
      "JavaScript",
      "Spring Boot",
      "Vue.js",
      "Nuxt.js",
      "MySQL",
      "Docker",
    ],
  },
];
