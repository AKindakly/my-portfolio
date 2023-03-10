import React from "react";

import avatar from "../../assets/avatar.png";
import avatar1 from "../../assets/avatar1.png";
import ScrollDownIndicator from "./ScrollDownIndicator";

const Home = ({ darkMode }) => {
    return (
        <>
            <div className="flex justify-center items-center h-[calc(100vh-190px)] md:h-[calc(100vh-200px)] xl:h-[calc(100vh-210px)] mb-4  bg-zinc-200 dark:bg-zinc-800 ">
                <div className="flex flex-col md:flex-row md:gap-12 xl:gap-24 2xl:gap-56 items-center ">
                    <div className="2xl:w-3/4">
                        <span className=" text-sm xl:text-lg text-zinc-600 dark:text-zinc-300">
                            Hey, my name is
                        </span>
                        <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl text-blue-500 mb-4 md:mb-10 leading-tight xl:leading-snug 2xl:leading-normal text-shadow-[0_4px_8px_#3b82f6]">
                            Ayham <br /> Kindakly
                        </h1>
                        <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl xl:mb-2 tracking-wider text-zinc-900 dark:text-zinc-500">
                            Front-End Web Developer
                        </h3>
                        <h4 className="text-base md:text-xl xl:text-2xl  text-zinc-600 dark:text-zinc-300">
                            based in Berlin, Germany
                        </h4>
                    </div>

                    {darkMode === true ? (
                        <img
                            src={avatar}
                            alt="Light Mode"
                            className=" w-72 mt-6 md:w-80 xl:w-2/4"
                        />
                    ) : (
                        <img
                            src={avatar1}
                            alt="Dark Mode"
                            className=" w-72 mt-6 md:w-80 xl:w-2/4"
                        />
                    )}
                </div>
            </div>
            <ScrollDownIndicator />
        </>
    );
};

export default Home;
