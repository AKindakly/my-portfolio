import React from "react";

import Intro from "./Intro";
import ScrollDownIndicator from "./ScrollDownIndicator";

const Hero = ({ darkMode }) => {
    return (
        <section className="relative">
            <Intro darkMode={darkMode} />
            <ScrollDownIndicator />

            {/* {darkMode === true ? (
                <div id="hero-ocean">
                    <div id="hero-wave-dark"></div>
                    <div id="hero-wave-dark"></div>
                </div>
            ) : (
                <div id="hero-ocean">
                    <div id="hero-wave-light"></div>
                    <div id="hero-wave-light"></div>
                </div>
            )} */}
        </section>
    );
};

export default Hero;
