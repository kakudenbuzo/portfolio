export type Education = {
  institution: { en: string; ja: string };
  degree: { en: string; ja: string };
  field: { en: string; ja: string };
  duration: string;
  location: { en: string; ja: string };
  gpa?: string;
};

export const education: Education[] = [
  {
    institution: { en: "Shibaura Institute of Technology", ja: "芝浦工業大学" },
    degree: { en: "Master of Engineering", ja: "修士（工学）" },
    field: { en: "Electrical Engineering and Computer Science", ja: "電気電子情報工学専攻" },
    duration: "Apr. 2019 – Mar. 2021",
    location: { en: "Tokyo, Japan", ja: "東京都" },
    gpa: "4.0",
  },
  {
    institution: { en: "Shibaura Institute of Technology", ja: "芝浦工業大学" },
    degree: { en: "Bachelor of Engineering", ja: "学士（工学）" },
    field: { en: "Electronic Engineering", ja: "電子工学" },
    duration: "Apr. 2015 – Mar. 2019",
    location: { en: "Tokyo, Japan", ja: "東京都" },
  },
];
