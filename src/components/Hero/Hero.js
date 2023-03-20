import React from "react";

import Intro from "./Intro";
import ScrollDownIndicator from "./ScrollDownIndicator";

// import shape from "../../assets/hero-shape.png";
// import shape1 from "../../assets/hero-shape1.png";

const Hero = ({ darkMode }) => {
    return (
        <section className="relative">
            {/* {darkMode === true ? (
                <img
                    src={shape1}
                    alt="Dark Mode"
                    className="absolute w-full xl:w-7/12"
                />
            ) : (
                <img
                    src={shape}
                    alt="Light Mode"
                    className="absolute w-full xl:w-7/12"
                />
            )} */}
            <Intro darkMode={darkMode} />
            <ScrollDownIndicator />

            {darkMode === true ? (
                <div id="hero-ocean">
                    <div id="hero-wave-dark"></div>
                    <div id="hero-wave-dark"></div>
                </div>
            ) : (
                <div id="hero-ocean">
                    <div id="hero-wave-light"></div>
                    <div id="hero-wave-light"></div>
                </div>
            )}
        </section>
    );
};

export default Hero;
