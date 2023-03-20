import React from "react";

import {
    SiCss3 as CSSicon,
    SiHtml5 as Htmlicon,
    SiReact as Reacticon,
    SiJavascript as Jsicon,
    SiBootstrap as Bootstrapicon,
    SiTailwindcss as Tailwindicon,
    SiPostgresql as Posticon,
    SiJest as Jesticon,
    SiGit as Giticon,
    SiVisualstudiocode as Vscodeicon,
    SiNpm as Npmicon,
} from "react-icons/si";
import {
    DiPhotoshop as Photoshopicon,
    DiSass as Sassicon,
    DiNodejsSmall as Nodeicon,
} from "react-icons/di";

import { FaVuejs as Vueicon, FaAws as Awsicon } from "react-icons/fa";
const Skills = () => {
    return (
        <div className="pb-12 w-3/4">
            <h1 className=" text-xl md:text-2xl xl:text-4xl font-bold text-blue-500 text-shadow-[0_4px_10px_#3b82f6]">
                Skills
            </h1>
            <p className="text-zinc-600 dark:text-zinc-300 text-base xl:text-2xl py-8 xl:pt-6 ">
                Here are technologies I’ve been working with:
            </p>
            <div className="flex justify-between items-center">
                <div className="flex flex-col basis-1/2 text-sm xl:text-xl text-center shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] px-12 xl:px-12 py-8 xl:py-10">
                    <div>
                        <p className=" text-zinc-600 dark:text-zinc-300 mb-1">
                            HTML 5
                        </p>
                        <div className="h-2.5 bg-gray-400 dark:bg-gray-700  rounded-lg mb-4 xl:mb-8">
                            <div
                                className="h-2.5 bg-blue-500 rounded-lg"
                                style={{ width: "90%" }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <p className=" text-zinc-600 dark:text-zinc-300 mb-1">
                            CSS3, Tailwind & Bootstrap
                        </p>
                        <div className="h-2.5 bg-gray-400 dark:bg-gray-700  rounded-lg mb-4 xl:mb-8">
                            <div
                                className="h-2.5 bg-blue-500 rounded-lg"
                                style={{ width: "90%" }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <p className=" text-zinc-600 dark:text-zinc-300 mb-1">
                            JavaScript
                        </p>
                        <div className="h-2.5 bg-gray-400 dark:bg-gray-700 rounded-lg mb-4 xl:mb-8">
                            <div
                                className="h-2.5 bg-blue-500 rounded-lg"
                                style={{ width: "60%" }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <p className=" text-zinc-600 dark:text-zinc-300 mb-1">
                            React
                        </p>
                        <div className="h-2.5 bg-gray-400 dark:bg-gray-700 rounded-lg mb-4 xl:mb-8">
                            <div
                                className="h-2.5 bg-blue-500 rounded-lg"
                                style={{ width: "75%" }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <p className=" text-zinc-600 dark:text-zinc-300 mb-1">
                            Photoshop
                        </p>
                        <div className="h-2.5 bg-gray-400 dark:bg-gray-700 rounded-lg mb-4">
                            <div
                                className="h-2.5 bg-blue-500 rounded-lg"
                                style={{ width: "35%" }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="text-zinc-600 text-7xl flex dark:text-zinc-300">
                    <div>
                        <Htmlicon
                            className=" m-5 hover:text-orange-600"
                            id="rotate-anim"
                        />
                        <Nodeicon
                            className=" m-5 hover:text-lime-400"
                            id="rotate-anim"
                        />
                        <Giticon
                            className=" m-5 hover:text-orange-600"
                            id="rotate-anim"
                        />
                        <Sassicon
                            className=" m-5 hover:text-pink-400"
                            id="rotate-anim"
                        />
                    </div>
                    <div>
                        <Awsicon
                            className=" m-5 hover:text-orange-400"
                            id="rotate-anim"
                        />
                        <Bootstrapicon
                            className=" m-5 hover:text-purple-700"
                            id="rotate-anim"
                        />
                        <Reacticon
                            className=" m-5 hover:text-cyan-300"
                            id="rotate-anim"
                        />
                        <Npmicon
                            className=" m-5 hover:text-red-500"
                            id="rotate-anim"
                        />
                    </div>
                    <div>
                        <Tailwindicon
                            className=" m-5 hover:text-sky-500"
                            id="rotate-anim"
                        />
                        <Vscodeicon
                            className=" m-5 hover:text-sky-500"
                            id="rotate-anim"
                        />
                        <Photoshopicon
                            className=" m-5 hover:text-cyan-800"
                            id="rotate-anim"
                        />
                        <Posticon
                            className=" m-5 hover:text-sky-800"
                            id="rotate-anim"
                        />
                    </div>
                    <div>
                        <CSSicon
                            className=" m-5 hover:text-sky-600"
                            id="rotate-anim"
                        />
                        <Vueicon
                            className=" m-5 hover:text-emerald-500"
                            id="rotate-anim"
                        />
                        <Jesticon
                            className=" m-5 hover:text-orange-700"
                            id="rotate-anim"
                        />
                        <Jsicon
                            className=" m-5  hover:text-yellow-400"
                            id="rotate-anim"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
