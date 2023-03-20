import React from "react";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

import waveEnd1 from "../../assets/wave-end1.svg";
import waveEnd from "../../assets/wave-end.svg";

const About = ({ darkMode }) => {
    return (
        <section className="pt-20 xl:pt-32 " id="about">
            <div className="flex flex-col justify-center items-center bg-zinc-300 dark:bg-zinc-900 ">
                <AboutMe />
                <Skills />
            </div>
            {darkMode === true ? (
                <img src={waveEnd1} alt="Dark Mode" className="w-full" />
            ) : (
                <img src={waveEnd} alt="Light Mode" className=" w-full " />
            )}
        </section>
    );
};

export default About;
