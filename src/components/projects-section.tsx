"use client";
/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useLang } from "@/i18n";
import { personalProjects } from "@/data/personal-projects";
import { CvSectionTitle } from "@/components/cv-section-title";

export function ProjectsSection() {
  const { lang, t } = useLang();
  return (
    <section id="projects">
      <CvSectionTitle title={t.sections.projects} />
      <ul className="flex flex-col gap-6">
        {personalProjects.map((project, i) => (
          <li key={i} className="flex items-start gap-4">
            <img
              src={project.imagePath}
              alt={project.name}
              className="w-10 h-10 rounded-lg flex-shrink-0 mt-0.5"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-semibold text-slate-800">
                  <a
                    href={project.link}
                    target="_blank"
                    className="hover:underline inline-flex items-center gap-1.5"
                    aria-label={`${project.name} (opens in new tab)`}
                  >
                    {project.name}
                    <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} className="text-slate-400" />
                  </a>
                </h3>
                <span className="text-xs text-slate-400">{project.type[lang]}</span>
              </div>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">{project.description[lang]}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {project.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center border border-slate-300 text-slate-600 rounded px-2 py-0.5 text-xs">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
