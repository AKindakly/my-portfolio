import React, { useState, useEffect } from "react";
import Follow from "./Follow";

import { motion } from "framer-motion";

const Footer = () => {
    const [isAtEnd, setIsAtEnd] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled =
                document.documentElement.scrollTop + window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;

            setIsAtEnd(scrolled === scrollHeight);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="pb-6 ">
            <motion.footer
                className="flex flex-col justify-center items-center h-16 bg-zinc-200 dark:bg-zinc-800 pt-32 pb-24"
                initial={{ y: 80, opacity: 0 }}
                animate={isAtEnd ? { y: 0, opacity: 2 } : {}}
                transition={{ duration: 1.5 }}
            >
                <Follow />
            </motion.footer>

            <div className="flex justify-center items-center mt-6 text-sm">
                <p className=" text-zinc-500 ">Designed & Built by &nbsp;</p>
                <span className=" text-blue-500 text-shadow-[0_4px_10px_#3b82f6]">
                    Ayham Kindakly
                </span>
            </div>
        </div>
    );
};

export default Footer;
