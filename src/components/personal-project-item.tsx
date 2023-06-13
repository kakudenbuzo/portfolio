/* eslint-disable @next/next/no-img-element */

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MyComponentProps {
  personalProject: PersonalProject;
}

const PersonalProjectItem: React.FC<MyComponentProps> = ({
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
        <h3 className="ml-4 text-lg hover:underline">
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
      <div className="max-w-xs mt-4 text-slate-500">
        {personalProject.description.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <ul className="mt-2 flex flex-wrap">
        {personalProject.skills.map((skil) => (
          <li className="mr-1.5 mt-2" key={skil}>
            <p className="flex items-center rounded-full bg-green-500 px-3 py-1 text-xs font-medium leading-5 text-white">
              {skil}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PersonalProjectItem;

export class PersonalProject {
  imagePath: string = "";
  name: string = "";
  type: string = "";
  description: string[] = [""];
  link: string = "";
  skills: string[] = [];
  constructor(
    imagePath: string,
    name: string,
    type: string,
    description: string[],
    link: string,
    skills: string[]
  ) {
    this.imagePath = imagePath;
    this.name = name;
    this.type = type;
    this.description = description;
    this.link = link;
    this.skills = skills;
  }
}
