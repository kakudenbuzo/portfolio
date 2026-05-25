"use client";
import { useLang } from "@/i18n";
import { CvSectionTitle } from "@/components/cv-section-title";

export function SummarySection() {
  const { t } = useLang();
  return (
    <section id="summary">
      <CvSectionTitle title={t.sections.summary} />
      <p className="text-sm text-slate-700 leading-relaxed">{t.summary}</p>
    </section>
  );
}
