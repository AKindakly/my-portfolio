import React from "react";

import Intro from "./Intro";
import ScrollDownIndicator from "./ScrollDownIndicator";
import waveStart from "../../assets/wave-start.png";
import waveStart1 from "../../assets/wave-start1.png";

const Hero = ({ darkMode }) => {
    return (
        <section className="relative">
            <Intro darkMode={darkMode} />
            <ScrollDownIndicator />

            {darkMode === true ? (
                <img src={waveStart1} alt="Dark Mode" className="w-full" />
            ) : (
                <img src={waveStart} alt="Light Mode" className="w-full" />
            )}
        </section>
    );
};

export default Hero;
