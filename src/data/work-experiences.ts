export type WorkExperience = {
  duration: string;
  role: { en: string; ja: string };
  companyName: string;
  description: { en: string; ja: string };
  achievements: { en: string[]; ja: string[] };
  link: string;
  skills: string[];
};

export const workExperiences: WorkExperience[] = [
  {
    duration: "Aug. 2023 – Present",
    role: { en: "Web Application Engineer", ja: "Webアプリケーションエンジニア" },
    companyName: "Commune",
    description: {
      en: "Full-stack development on a community SaaS platform (BtoBtoC) and in-house shared infrastructure, spanning feature development to designing authentication and authorization systems across multiple products.",
      ja: "コミュニティプラットフォームSaaS（BtoBtoC）の機能開発から、マルチプロダクト向け認証・認可基盤の設計・開発まで幅広く担当。",
    },
    achievements: {
      en: [
        "Developed features for a community SaaS in a 4-person scrum team — new API design, frontend components, E2E tests, and LLM feature integration",
        "Designed and built a shared authentication infrastructure (OAuth2.0 / OIDC) from scratch for 2–5 in-house products as a 2-person team",
        "Built a cross-product API authorization infrastructure using Hydra (Ory) as an OAuth2.0 authorization server; developed internal npm SDKs for easy adoption by other teams",
        "Set up company-wide error monitoring (Sentry + Slack); automated triage via Claude Code × MCP, significantly reducing on-call workload",
      ],
      ja: [
        "コミュニティSaaSをスクラム4人チームで開発（新規API設計、フロントエンド実装、E2Eテスト、LLM機能組み込み）",
        "社内マルチプロダクト向け共通認証基盤（OAuth2.0 / OIDC）をエンジニア2名でゼロから設計・開発",
        "Hydra（Ory）を用いたプロダクト間API連携基盤を構築し、各プロダクトチーム向け社内npm SDKを開発",
        "Sentry × Slackによるエラー監視基盤を整備。Claude Code × MCPでトリアージを自動化し工数を大幅削減",
      ],
    },
    link: "https://commune.us/",
    skills: ["TypeScript", "Node.js", "Express", "React", "Next.js", "Hono", "MySQL", "PostgreSQL", "GCP", "Terraform", "Docker"],
  },
  {
    duration: "Apr. 2021 – Mar. 2023",
    role: { en: "Full-stack Developer", ja: "フルスタックエンジニア" },
    companyName: "e-ize Co. Ltd.",
    description: {
      en: "Full-stack engineer on an EC SaaS platform renewal project. Worked in a team of 6 engineers on design, development, testing, and maintenance across frontend, backend, and infrastructure.",
      ja: "EC SaaSのリニューアル開発・運用保守に従事。エンジニア6名のチームでフロントエンド・バックエンド・インフラのフルスタックを担当。",
    },
    achievements: {
      en: [
        "Automated CI/CD pipeline with GitHub Actions for frontend, backend, and batch — eliminating manual deployment errors and significantly cutting release time",
        "Added 2 new payment methods to the EC platform, handling differing settlement timing and refund rules across providers",
        "Improved unit test coverage to 80%+ across the codebase; enforced test-result reporting on all pull requests",
        "Implemented responsive design for the admin dashboard, enabling access from smartphones and tablets",
      ],
      ja: [
        "GitHub ActionsでフロントエンドからバッチまでのCI/CDを自動化し、デプロイミスをほぼゼロに削減",
        "ECプラットフォームに2種類の新決済手段を追加（プロバイダーごとの確定タイミング・返金ルールの差異に対応）",
        "テストカバレッジを80%以上に引き上げ、PRごとにユニットテスト実行結果を申告するフローを確立",
        "管理画面のレスポンシブ対応を実装し、スマホ・タブレットからのアクセスを実現",
      ],
    },
    link: "https://e-ize.jp/",
    skills: ["Java", "JavaScript", "Spring Boot", "Vue.js", "Nuxt.js", "MySQL", "Docker", "AWS", "JUnit", "Jest"],
  },
  {
    duration: "Dec. 2019 – Mar. 2021",
    role: { en: "Engineer Intern", ja: "エンジニアインターン" },
    companyName: "e-ize Co. Ltd.",
    description: {
      en: "First software engineering experience as an intern while completing my master's degree, contributing to both front-end and back-end development of the EC SaaS platform.",
      ja: "修士課程在籍中にインターンとして参加し、EC SaaSのフロントエンド・バックエンド両面の開発に携わりました。",
    },
    achievements: {
      en: [
        "Contributed to frontend feature development using Vue.js and Nuxt.js",
        "Participated in backend development with Spring Boot and code reviews",
        "Gained hands-on experience with Docker-based development environments and AWS deployments",
      ],
      ja: [
        "Vue.jsおよびNuxt.jsを使用したフロントエンドの機能開発に貢献",
        "Spring Bootによるバックエンド開発とコードレビューに参加",
        "Dockerを使用したローカル開発環境とAWSデプロイの実務経験を習得",
      ],
    },
    link: "https://e-ize.jp/",
    skills: ["Java", "JavaScript", "Spring Boot", "Vue.js", "Nuxt.js", "MySQL", "Docker", "AWS"],
  },
];
