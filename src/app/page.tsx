"use client";
import {PersonalProjectItem} from "@/components/personal-project-item";
import {WorkExperienceItem} from "@/components/work-experience-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { workExperiences } from "@/data/work-experiences";
import { personalProjects } from "@/data/personal-projects";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto pt-12 px-6 pb-8">
      <header>
        <h1 className="text-4xl font-bold dark:text-white" id="about">
          Musashi Tsunoda
        </h1>
        <h2 className="text-lg font-medium mt-3 dark:text-white">
          Web application engineer
        </h2>
        <div className="text-base text-slate-500 mt-4 dark:text-slate-400">
          <p className="max-w-xs">
            I am a web application engineer in Tokyo. I love product development
            and I am interested in the process of creating products that people
            love.
            <br />
            My ancestors were samurai, and my family does martial arts, so in my
            free time I do kickboxing. That is why I developed a mobile app for
            scoring boxing matches.
          </p>
        </div>
        <ul className="mt-3 flex gap-x-4">
          <li>
            <a
              href="https://github.com/kakudenbuzo"
              target="_blank"
              className="text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white"
            >
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/musashi-tsunoda/"
              target="_blank"
              className="text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white"
            >
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </header>
      <section className="pt-24">
        <h2
          className="py-4 text-lg font-bold uppercase mb-4 sticky top-0 backdrop-blur bg-slate-50/50 -mx-6 px-6 dark:bg-black/50 dark:text-white"
          id="experience"
        >
          Work experience
        </h2>
        <ol className="grid md:grid-cols-2  gap-x-8 gap-y-16">
          {workExperiences.map((experience, i) => (
            <li key={i}>
              <WorkExperienceItem
                workExperience={experience}
              ></WorkExperienceItem>
            </li>
          ))}
        </ol>
      </section>
      <section className="pt-24">
        <h2
          className="py-4 text-lg font-bold uppercase mb-4 sticky top-0 backdrop-blur bg-slate-50/50 -mx-6 px-6 dark:bg-black/50 dark:text-white"
          id="project"
        >
          Personal project
        </h2>
        <ul className="grid md:grid-cols-2  gap-x-8 gap-y-16">
          {personalProjects.map((project, i) => (
            <li key={i}>
              <PersonalProjectItem
                personalProject={project}
              ></PersonalProjectItem>
            </li>
          ))}
        </ul>
      </section>
      <footer className="mt-24 text-slate-500 text-center dark:text-slate-400">
        <span className="hover:text-black underline dark:hover:text-white">
          <a href="https://github.com/kakudenbuzo/portfolio" target="_blank">
            <FontAwesomeIcon size="sm" icon={faGithub} className="mr-1" />
            Source code
          </a>
        </span>
        <p className="mt-2">© 2023 Musashi Tsunoda</p>
      </footer>
    </main>
  );
}
