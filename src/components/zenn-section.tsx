"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useLang } from "@/i18n";
import { CvSectionTitle } from "@/components/cv-section-title";

export type ZennArticle = {
  title: string;
  link: string;
  pubDate: string;
};

export function ZennSection({ articles }: { articles: ZennArticle[] }) {
  const { t } = useLang();
  return (
    <section id="articles">
      <CvSectionTitle title={t.sections.articles} />
      {articles.length === 0 ? (
        <p className="text-sm text-slate-400">—</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {articles.map((article, i) => (
            <li key={i}>
              <a
                href={article.link}
                target="_blank"
                className="group inline-flex items-start gap-2"
              >
                <span className="text-sm text-slate-700 group-hover:underline leading-relaxed">
                  {article.title}
                </span>
                <FontAwesomeIcon
                  className="mt-1 flex-shrink-0 text-slate-400"
                  size="xs"
                  icon={faArrowUpRightFromSquare}
                />
              </a>
              {article.pubDate && (
                <p className="mt-0.5 text-xs text-slate-400">{article.pubDate}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
