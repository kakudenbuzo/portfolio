export type Certification = {
  name: { en: string; ja: string };
  issuer: { en: string; ja: string };
  acquired: string;
  expires?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: { en: "Professional Cloud Architect", ja: "Professional Cloud Architect" },
    issuer: { en: "Google Cloud", ja: "Google Cloud" },
    acquired: "Nov. 2024",
    url: "https://cloud.google.com/certification/cloud-architect",
  },
];
