"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useLang } from "@/i18n";

export function Hero() {
  const { lang, t, toggle } = useLang();
  return (
    <header id="about" className="pt-10 pb-2">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {lang === "en" ? "Musashi Tsunoda" : "角田 武蔵"}
          </h1>
          <p className="text-base text-slate-600 mt-1">{t.role}</p>
        </div>
        <div
          className="mt-1 flex items-center bg-slate-100 rounded-full p-0.5 gap-0.5"
          role="group"
          aria-label="Language switcher"
        >
          <button
            onClick={() => lang !== "en" && toggle()}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
              lang === "en"
                ? "bg-white shadow-sm text-slate-800"
                : "text-slate-400 hover:text-slate-600"
            }`}
            aria-pressed={lang === "en"}
          >
            English
          </button>
          <button
            onClick={() => lang !== "ja" && toggle()}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
              lang === "ja"
                ? "bg-white shadow-sm text-slate-800"
                : "text-slate-400 hover:text-slate-600"
            }`}
            aria-pressed={lang === "ja"}
          >
            日本語
          </button>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5" />
          {t.contact.location}
        </span>
        <a
          href={`mailto:${t.contact.email}`}
          className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
          {t.contact.email}
        </a>
        <a
          href="https://github.com/kakudenbuzo"
          target="_blank"
          aria-label="GitHub"
          className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/musashi-tsunoda/"
          target="_blank"
          aria-label="LinkedIn"
          className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-3.5 h-3.5" />
          LinkedIn
        </a>
        <a
          href="https://zenn.dev/kakudenbuzo"
          target="_blank"
          aria-label="Zenn"
          className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors font-medium"
        >
          Zenn
        </a>
      </div>
    </header>
  );
}
