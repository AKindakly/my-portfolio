import React from "react";

import Intro from "./Intro";
import ScrollDownIndicator from "./ScrollDownIndicator";

import shape from "../../assets/hero-shape.png";
import shape1 from "../../assets/hero-shape1.png";
import wave from "../../assets/hero-wave.png";
import wave1 from "../../assets/hero-wave1.png";

const Hero = ({ darkMode }) => {
    return (
        <section className="relative">
            {darkMode === true ? (
                <img
                    src={shape1}
                    alt="Dark Mode"
                    className="absolute w-full xl:w-11/12"
                />
            ) : (
                <img
                    src={shape}
                    alt="Light Mode"
                    className="absolute w-full xl:w-11/12"
                />
            )}

            <Intro darkMode={darkMode} />

            <ScrollDownIndicator />

            {darkMode === true ? (
                <img
                    src={wave1}
                    alt="Dark Mode"
                    className="absolute w-full xl:top-0 bottom-0"
                />
            ) : (
                <img
                    src={wave}
                    alt="Light Mode"
                    className="absolute w-full xl:top-0 bottom-0"
                />
            )}
        </section>
    );
};

export default Hero;
