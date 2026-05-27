"use client";
import { useLang } from "@/i18n";
import { CvSectionTitle } from "@/components/cv-section-title";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  const { lang, t } = useLang();
  return (
    <section id="certifications">
      <CvSectionTitle title={t.sections.certifications} />
      <ol className="flex flex-col gap-6">
        {certifications.map((cert, i) => (
          <li key={i} className="relative pl-6 border-l-2 border-gray-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {cert.name[lang]}
                    </a>
                  ) : (
                    cert.name[lang]
                  )}
                </h3>
                <p className="text-sm text-slate-600 mt-0.5">{cert.issuer[lang]}</p>
                {cert.expires && (
                  <p className="text-xs text-slate-400 mt-0.5">Expires: {cert.expires}</p>
                )}
              </div>
              <span className="text-xs text-slate-400 font-mono whitespace-nowrap">
                {cert.acquired}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
