"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { LangProvider, useLang } from "@/i18n";
import { Hero } from "@/components/hero";
import { SummarySection } from "@/components/summary-section";
import { WorkSection } from "@/components/work-section";
import { EducationSection } from "@/components/education-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ProjectsSection } from "@/components/projects-section";
import { ZennSection } from "@/components/zenn-section";
import type { ZennArticle } from "@/components/zenn-section";

function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-16 pb-8 text-slate-400 text-center text-sm">
      <a
        href="https://github.com/kakudenbuzo/portfolio"
        target="_blank"
        className="hover:text-slate-700 underline inline-flex items-center gap-1.5"
      >
        <FontAwesomeIcon size="sm" icon={faGithub} />
        {t.sourceCode}
      </a>
      <p className="mt-2">{t.copyright}</p>
    </footer>
  );
}

export function PageClient({ articles }: { articles: ZennArticle[] }) {
  return (
    <LangProvider>
      <main className="max-w-[860px] mx-auto px-8 pb-12 bg-white min-h-screen shadow-sm">
        <Hero />
        <SummarySection />
        <WorkSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <ZennSection articles={articles} />
        <Footer />
      </main>
    </LangProvider>
  );
}
