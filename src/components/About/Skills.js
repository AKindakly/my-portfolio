import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });

    const firstVariants = {
        hidden: { x: -300, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2.5 } },
    };

    const secondVariants = {
        hidden: { x: 300, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2.5 } },
    };

    return (
        <div className="mb-32 xl:mb-48 w-3/4">
            <h1 className=" text-xl md:text-2xl xl:text-4xl font-bold text-blue-500 text-shadow-[0_4px_10px_#3b82f6]">
                Skills
            </h1>
            <p
                ref={ref}
                className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg xl:text-2xl py-8 xl:pt-10 xl:pb-16"
            >
                Here are technologies I’ve been working with:
            </p>
            <div className="flex flex-col gap-10 lg:flex-row md:justify-center items-center lg:justify-between ">
                {inView && (
                    <motion.div
                        className="flex flex-col w-11/12 rounded-md basis-1/2 text-sm md:text-base xl:text-xl text-center shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] px-8 xl:px-12 py-6 xl:py-10"
                        initial="hidden"
                        animate="visible"
                        variants={firstVariants}
                    >
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
                                CSS3
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
                                    style={{ width: "70%" }}
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
                                    style={{ width: "83%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <p className=" text-zinc-600 dark:text-zinc-300 mb-1">
                                Photoshop, Figma
                            </p>
                            <div className="h-2.5 bg-gray-400 dark:bg-gray-700 rounded-lg mb-4">
                                <div
                                    className="h-2.5 bg-blue-500 rounded-lg"
                                    style={{ width: "35%" }}
                                ></div>
                            </div>
                        </div>
                    </motion.div>
                )}
                {inView && (
                    <motion.div
                        className="text-zinc-600 text-4xl md:text-6xl lg:text-6xl xl:text-7xl flex dark:text-zinc-300"
                        initial="hidden"
                        animate="visible"
                        variants={secondVariants}
                    >
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
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Skills;
