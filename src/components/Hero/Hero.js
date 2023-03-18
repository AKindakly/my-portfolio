import React from "react";

import Intro from "./Intro";
import ScrollDownIndicator from "./ScrollDownIndicator";

const Hero = ({ darkMode }) => {
    return (
        <>
            <Intro darkMode={darkMode} />
            <ScrollDownIndicator />
        </>
    );
};

export default Hero;
