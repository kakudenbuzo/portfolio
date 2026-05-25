"use client";
import { useLang } from "@/i18n";
import { CvSectionTitle } from "@/components/cv-section-title";
import { education } from "@/data/education";

export function EducationSection() {
  const { lang, t } = useLang();
  return (
    <section id="education">
      <CvSectionTitle title={t.sections.education} />
      <ol className="flex flex-col gap-6">
        {education.map((edu, i) => (
          <li key={i} className="relative pl-6 border-l-2 border-gray-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  {edu.degree[lang]} — {edu.field[lang]}
                </h3>
                <p className="text-sm text-slate-600 mt-0.5">{edu.institution[lang]}</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {edu.location[lang]}{edu.gpa ? ` · GPA ${edu.gpa}` : ""}
                </p>
              </div>
              <span className="text-xs text-slate-400 font-mono whitespace-nowrap">
                {edu.duration}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
