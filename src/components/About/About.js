import React from "react";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
const About = () => {
    return (
        <section
            className="pt-28 xl:pt-44 bg-zinc-100 dark:bg-zinc-800 "
            id="about"
        >
            <div className="flex flex-col justify-center items-center">
                <AboutMe />
                <Skills />
            </div>
        </section>
    );
};

export default About;
