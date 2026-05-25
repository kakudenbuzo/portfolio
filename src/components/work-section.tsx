"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useLang } from "@/i18n";
import { workExperiences } from "@/data/work-experiences";
import { CvSectionTitle } from "@/components/cv-section-title";

export function WorkSection() {
  const { lang, t } = useLang();
  return (
    <section id="experience">
      <CvSectionTitle title={t.sections.experience} />
      <ol className="flex flex-col gap-8">
        {workExperiences.map((exp, i) => (
          <li key={i} className="relative pl-6 border-l-2 border-gray-200">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-sm font-semibold text-slate-800">
                <a
                  href={exp.link}
                  target="_blank"
                  className="hover:underline inline-flex items-center gap-1.5"
                  aria-label={`${exp.companyName} (opens in new tab)`}
                >
                  {exp.role[lang]} · {exp.companyName}
                  <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} className="text-slate-400" />
                </a>
              </h3>
              <span className="text-xs text-slate-400 font-mono whitespace-nowrap">{exp.duration}</span>
            </div>
            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{exp.description[lang]}</p>
            <ul className="mt-2 space-y-1">
              {exp.achievements[lang].map((item, j) => (
                <li key={j} className="text-sm text-slate-500 flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {exp.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex items-center border border-slate-300 text-slate-600 rounded px-2 py-0.5 text-xs">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
