import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export type WorkExperience = {
  readonly duration: string;
  readonly role: string;
  readonly  companyName: string;
  readonly  description: string[];
  readonly   link: string;
  readonly  skills: string[];
};
interface MyComponentProps {
  workExperience: WorkExperience;
}
const WorkExperienceItem: React.FC<MyComponentProps> = ({ workExperience }) => {
  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore(true);
  };
  const isShorten = workExperience.description.length > 2;
  return (
    <div>
      <p className="text-base text-slate-500 dark:text-slate-400">
        {workExperience.duration}
      </p>
      <h3 className="mt-3 text-lg hover:underline dark:text-white">
        <a href={workExperience.link} target="_blank">
          {workExperience.role} - {workExperience.companyName}
          <FontAwesomeIcon
            className="ml-3"
            size="xs"
            icon={faArrowUpRightFromSquare}
          />
        </a>
      </h3>
      <div className="max-w-xs mt-1 text-slate-500 dark:text-slate-400">
        {workExperience.description.map((line, i) => {
          if (showMore) return <p key={i}>{line}</p>;
          else if (i == 1 && i + 1 < workExperience.description.length)
            return <p key={i}>{line.slice(0, line.length - 5)} ...</p>;
          else if (i < 2) return <p key={i}>{line}</p>;
          else return null;
        })}
      </div>
      {!showMore && isShorten && (
        <div className="max-w-xs mt-1 text-end text-slate-500 dark:text-slate-400">
          <span className="hover:text-black">
            <button onClick={showMoreHandler}>... Show more</button>
          </span>
        </div>
      )}

      <ul className="mt-2 flex flex-wrap max-w-xs">
        {workExperience.skills.map((skil) => (
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
export default WorkExperienceItem;

