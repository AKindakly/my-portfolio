import React, { useState } from "react";
import {
    BsFillMoonFill as MoonIcon,
    BsFillSunFill as SunIcon,
    BsDownload as DownloadIcon,
} from "react-icons/bs";

const Navbar = (props) => {
    const [isDark, setDark] = useState(false);

    const toggleDark = () => {
        setDark(!isDark);
    };

    const someFunc = () => {
        toggleDark();
        props.toggleDarkMode();
    };

    return (
        <nav className="sticky top-0 z-50 flex justify-around xl:justify-between xl:pr-10 xl:pl-32 items-center py-4 xl:py-6 bg-zinc-300 dark:bg-zinc-900 ">
            <div className="text-sm md:text-base xl:text-lg text-blue-500">
                <a
                    href="#about"
                    className="font-medium hover:text-shadow-[0_4px_10px_#3b82f6] mr-2 xl:mr-10 xl:text-2xl"
                >
                    About
                </a>
                <a
                    href="#projects"
                    className="font-medium hover:text-shadow-[0_4px_10px_#3b82f6] mr-2 xl:mr-10 xl:text-2xl"
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className="font-medium hover:text-shadow-[0_4px_10px_#3b82f6] xl:text-2xl"
                >
                    Contact
                </a>
            </div>
            <div className="flex text-sm md:text-base">
                <button className="flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 bg-gradient-to-r from-blue-500 to-Blue-800 px-3 md:px-4 py-2 rounded-md shadow-lg shadow-blue-500/50 xl:text-lg ">
                    Resume &nbsp;
                    <DownloadIcon />
                </button>
                <button
                    className="text-blue-500 hover:text-blue-300 ml-4 md:ml-10 xl:text-2xl xl:mr-20"
                    onClick={someFunc}
                >
                    {isDark ? <MoonIcon /> : <SunIcon />}
                </button>
            </div>
        </nav>
    );
};
export default Navbar;
