import React, { useState } from "react";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    return (
        <div className={`${darkMode ? "dark" : ""} `}>
            <div className=" bg-zinc-100 dark:bg-zinc-800 ">
                <>
                    <Navbar
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                    <Hero darkMode={darkMode} />
                    <About />
                    <Projects />
                    <Contact />
                    <Footer />
                </>
            </div>
        </div>
    );
}

export default App;
