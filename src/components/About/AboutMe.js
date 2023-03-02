import React from "react";
import {
    SiCss3 as CSSlicon,
    SiHtml5 as Htmlicon,
    SiReact as Reacticon,
    SiJavascript as Jsicon,
    SiBootstrap as Bootstrapicon,
    SiTailwindcss as Tailwindicon,
} from "react-icons/si";
import {
    DiPhotoshop as Photoshopicon,
    DiSass as Sassicon,
    DiNodejsSmall as Nodeicon,
} from "react-icons/di";

const AboutMe = () => {
    return (
        <section
            className="pt-28 xl:pt-44 bg-zinc-200 dark:bg-zinc-800 "
            id="about"
        >
            <div className="flex flex-col justify-center items-center">
                <div className="mb-24  w-3/4">
                    <h1 className=" text-xl md:text-2xl xl:text-4xl font-bold text-blue-500 mb-6 xl:mb-14 text-shadow-[0_4px_10px_#3b82f6]">
                        About Me
                    </h1>
                    <div className=" text-zinc-600 dark:text-zinc-300 text-base xl:text-xl py-8 xl:pb-10 xl:pt-6">
                        <p className="mb-4">
                            I'm a Frontend Web Developer with a creative flair
                            for coding.
                        </p>
                        <p className="mb-4">
                            I have a background in Business Administration,
                            which has given me a keen eye for detail and a
                            problem-solving approach.
                        </p>
                        <p className="mb-4">
                            My passion for technology and design drives me to
                            create beautiful and functional websites that engage
                            users.
                            <br /> I'm constantly learning and experimenting
                            with new technologies to improve my skills and
                            deliver high-quality work.
                        </p>
                        <p className="mb-4">
                            I enjoy collaborating with others and am always up
                            for a challenge.
                        </p>
                    </div>
                </div>
                <div className="pb-12 w-3/4">
                    <h1 className="text-xl md:text-2xl xl:text-4xl font-bold text-blue-500 mb-6 xl:mb-14 text-shadow-[0_4px_10px_#3b82f6]">
                        Skills
                    </h1>
                    <div className="flex">
                        <div className="flex flex-col text-sm xl:text-base text-center shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] px-12 xl:px-12 py-8 xl:py-10">
                            <div>
                                <p className=" text-zinc-600 dark:text-zinc-300 mb-1">
                                    HTML 5
                                </p>
                                <div className="h-2.5 bg-gray-400 dark:bg-gray-700  rounded-lg mb-4">
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
                                <div className="h-2.5 bg-gray-400 dark:bg-gray-700  rounded-lg mb-4">
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
                                <div className="h-2.5 bg-gray-400 dark:bg-gray-700 rounded-lg mb-4">
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
                                <div className="h-2.5 bg-gray-400 dark:bg-gray-700 rounded-lg mb-4">
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
                        <div className="text-7xl flex">
                            <div>
                                <Htmlicon className=" m-5 hover:text-orange-600" />
                                <CSSlicon className=" m-5 hover:text-sky-600" />
                                <Nodeicon className=" m-5 hover:text-lime-400" />
                            </div>
                            <div>
                                <Jsicon className=" m-5  hover:text-yellow-400" />
                                <Bootstrapicon className=" m-5 hover:text-purple-700" />
                                <Reacticon className=" m-5 hover:text-cyan-300" />
                            </div>
                            <div>
                                <Tailwindicon className=" m-5 hover:text-sky-500" />
                                <Photoshopicon className=" m-5 hover:text-cyan-800" />
                                <Sassicon className=" m-5 hover:text-pink-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
