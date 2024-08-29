import React from "react";
import { FaAngleRight } from "react-icons/fa6";

interface GithubCardProps {
  name: string;
  link: string;
  language: string;
  archived?: boolean;
  img_url?: string;
  no_github?: boolean;
  description?: string;
  working_on?: boolean;
}

const GithubCard: React.FC<GithubCardProps> = ({
  name,
  link,
  language,
  archived,
  img_url,
  no_github,
  description,
  working_on,
}) => {
  const getLangColor = (lang: string) => {
    switch (lang) {
      case "TypeScript":
        return "#505090";

      case "JavaScript":
        return "#fff700";
      case "React":
        return "#5aafff";
      default:
        return "#555555";
    }
  };

  return (
    <div
      className={`w-full flex select-none flex-col items-start mt-1 mb-1 justify-between min-h-[120px] max-h-[320px] h-fit p-5 border ${archived ? `border-[#ffa600] hover:border-[#a77417]` : `border-[#323232] hover:border-purple-400`} transition-all ease-linear  rounded-md`}
    >
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex w-full gap-x-2 items-center">
          <a
            href={link}
            className="text-2xl text-purple-400 font-semibold hover:underline"
          >
            {name}
          </a>
          {working_on && (
            <p className="text-xs text-pink-500 p-2 pt-1 pb-1 ml-3 bg-transparent border-pink-500 rounded-full border">
              Working on right now
            </p>
          )}
          {no_github && (
            <p className="text-xs text-[#ffa600] p-2 pt-1 pb-1 ml-3 bg-transparent border-[#ffa600] rounded-full border">
              No github
            </p>
          )}
          <p
            className={`text-xs p-2 pt-1 pb-1 bg-transparent ${archived ? `border-blue-600 text-blue-600` : `border-[#323232] text-white/50`} rounded-full border`}
          >
            {archived ? "ARCHIVED" : "Repository"}
          </p>
        </div>
        <div className="opacity-50 flex items-center justify-center">
          <FaAngleRight size={20} />
        </div>
      </div>
      {img_url && (
        <img
          className="rounded-md object-cover overflow-hidden max-h-[100px] w-full mt-2 mb-2 border-[#323232] border"
          src={img_url}
        ></img>
      )}
      {description&& (
        <span className="mt-1 mb-2 text-white">{description}</span>
      )}
      <div className="flex flex-row gap-x-5">
        <div className="flex flex-row gap-x-1 items-center">
          <div
            className="w-[15px] h-[15px] rounded-full"
            style={{ backgroundColor: getLangColor(language) }}
          ></div>
          <span className="text-base text-white/50">{language}</span>
        </div>
        <span className="text-base text-white/50">LICENSE</span>
      </div>
    </div>
  );
};

export default GithubCard;
