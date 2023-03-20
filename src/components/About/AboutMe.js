import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 2.5,
                staggerChildren: 1,
                ease: "easeInOut",
            },
        },
    };
    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="mb-24 w-3/4 z-10" ref={ref}>
            <h1 className=" text-xl md:text-2xl xl:text-4xl font-bold text-blue-500 text-shadow-[0_4px_10px_#3b82f6]">
                About Me
            </h1>
            {inView && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className=" text-zinc-600 dark:text-zinc-300 text-base xl:text-2xl py-8 xl:pb-10 xl:pt-6"
                >
                    <motion.p variants={childVariants} className="mb-4">
                        I'm a Frontend Web Developer with a creative flair for
                        coding.
                    </motion.p>
                    <motion.p variants={childVariants} className="mb-4">
                        I have a background in Business Administration, which
                        has given me a keen eye for detail and a problem-solving
                        approach.
                    </motion.p>
                    <motion.p variants={childVariants} className="mb-4">
                        My passion for technology and design drives me to create
                        beautiful and functional websites that engage users. I'm
                        constantly learning and experimenting with new
                        technologies to improve my skills and deliver
                        high-quality work.
                    </motion.p>
                    <motion.p variants={childVariants}>
                        I enjoy collaborating with others and am always up for a
                        challenge.
                    </motion.p>
                </motion.div>
            )}
        </div>
    );
};

export default AboutMe;
