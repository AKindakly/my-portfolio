import React from "react";

import { BsGithub as GithubIcon } from "react-icons/bs";
import { FiExternalLink as ExlinkIcon } from "react-icons/fi";

const ProjectCard = ({ title, details, img, tech, link }) => {
    return (
        <div className="rounded-2xl mx-12 md:mx-44 bg-gradient-to-r from-blue-500 to-blue-800 p-1 hover:shadow-lg hover:shadow-blue-500/100">
            <div className="flex flex-col justify-center items-center rounded-xl bg-zinc-50 dark:bg-zinc-900 p-8 md:p-10 text-center">
                <img
                    src={require(`../../assets/${img}`)}
                    alt={title}
                    className="rounded-2xl object-cover md:w-4/5 md:h-96"
                />
                <h3 className="text-base md:text-lg text-blue-500 font-bold text-center mt-4 md:mt-10">
                    {title}
                </h3>
                <p className="mt-2 mx-4 text-sm md:text-base text-zinc-600 dark:text-zinc-300 pb-2">
                    {details}
                </p>
                <div className="mt-4">
                    <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-100 text-zinc-600 dark:bg-gray-700 dark:text-zinc-300 border border-blue-500">
                        {tech.tech1}
                    </span>
                    <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-100 text-zinc-600 dark:bg-gray-700 dark:text-zinc-300 border border-blue-500">
                        {tech.tech2}
                    </span>
                </div>
                <div className="mt-10 ml-2 flex gap-5">
                    <a
                        href={link}
                        className="text-zinc-600 dark:text-zinc-300 text-2xl "
                    >
                        <GithubIcon />
                    </a>
                    <a
                        href={link}
                        className="text-zinc-600 dark:text-zinc-300 text-2xl "
                    >
                        <ExlinkIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
