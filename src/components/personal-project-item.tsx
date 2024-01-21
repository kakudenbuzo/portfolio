/* eslint-disable @next/next/no-img-element */

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type PersonalProject = {
  readonly imagePath: string;
  readonly  name: string;
  readonly  type: string;
  readonly  description: string[];
  readonly  link: string;
  readonly  skills: string[];
 };
type props ={
  readonly personalProject: PersonalProject;
}
export const PersonalProjectItem: React.FC<props> = ({
  personalProject,
}) => {
  return (
    <div>
      <div className="flex items-center">
        <img
          src={personalProject.imagePath}
          alt={personalProject.name + " icon"}
          className="w-16 h-16"
        ></img>
        <h3 className="ml-4 text-lg hover:underline dark:text-white">
          <a href={personalProject.link} target="_blank">
            {personalProject.name}
            <FontAwesomeIcon
              className="ml-3"
              size="xs"
              icon={faArrowUpRightFromSquare}
            />
          </a>
        </h3>
      </div>
      <div className="max-w-xs mt-4 text-slate-500 dark:text-slate-400">
        {personalProject.description.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <ul className="mt-2 flex flex-wrap">
        {personalProject.skills.map((skil) => (
          <li className="mr-1.5 mt-2" key={skil}>
            <p className="flex items-center rounded-full bg-green-500 px-3 py-1 text-xs font-medium leading-5 text-white dark:bg-green-600">
              {skil}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

