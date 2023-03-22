import React from "react";

import { BsGithub as GithubIcon } from "react-icons/bs";
import { FiExternalLink as ExlinkIcon } from "react-icons/fi";

const ProjectCard = ({ title, details, img, tech, link }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between mb-28">
            <div className="md:w-2/5">
                <h3 className="text-lg md:text-xl xl:text-3xl text-blue-500 font-bold mb-5">
                    {title}
                </h3>
                <p className="text-base md:text-lg xl:text-2xl text-zinc-600 dark:text-zinc-300 mb-12">
                    {details}
                </p>
                <div className="mb-7">
                    <span className="text-xs md:text-sm xl:text-base font-medium mr-2 px-2.5 py-1 rounded bg-blue-100 text-zinc-600 dark:bg-gray-700 dark:text-zinc-300 border border-blue-500">
                        {tech.t1}
                    </span>
                    <span className="text-xs md:text-sm xl:text-base font-medium mr-2 px-2.5 py-1 rounded bg-blue-100 text-zinc-600 dark:bg-gray-700 dark:text-zinc-300 border border-blue-500">
                        {tech.t2}
                    </span>
                    <span className="text-xs md:text-sm xl:text-base font-medium mr-2 px-2.5 py-1 rounded bg-blue-100 text-zinc-600 dark:bg-gray-700 dark:text-zinc-300 border border-blue-500">
                        {tech.t3}
                    </span>
                </div>
                <div className="flex gap-5">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-zinc-300 text-3xl"
                    >
                        <GithubIcon />
                    </a>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-zinc-300 text-3xl"
                    >
                        <ExlinkIcon />
                    </a>
                </div>
            </div>

            <img
                src={require(`../../assets/${img}`)}
                alt={title}
                className="rounded-2xl object-cover w-80 h-72 lg:w-1/3 lg:h-1/3 md:w-72  mt-7 md:mt-0 xl:mr-5"
            />
        </div>
    );
};

export default ProjectCard;
