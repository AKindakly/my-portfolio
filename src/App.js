import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/About/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    return (
        <div className={`${darkMode ? "dark" : ""} `}>
            <div className=" bg-zinc-200 dark:bg-zinc-800 ">
                <BrowserRouter>
                    <Routes>
                        <Route
                            excat
                            path="/"
                            element={
                                <>
                                    <Home darkMode={darkMode} />
                                    <Navbar
                                        darkMode={darkMode}
                                        toggleDarkMode={toggleDarkMode}
                                    />
                                    <AboutMe />
                                    <Projects />
                                    <Contact />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="/aboutme"
                            element={
                                <>
                                    <AboutMe />
                                </>
                            }
                        />
                        <Route
                            path="/projects"
                            element={
                                <>
                                    <Projects />
                                </>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <>
                                    <Contact />
                                </>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
