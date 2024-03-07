import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });

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
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="pt-5 xl:pt-16 mb-20 xl:mb-40 w-3/4 z-10">
            <h1
                className=" text-xl md:text-2xl xl:text-4xl font-bold text-blue-500 text-shadow-[0_4px_10px_#3b82f6]"
                ref={ref}
            >
                About Me
            </h1>
            {inView && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className=" text-zinc-600 dark:text-zinc-300 text-base md:text-lg xl:text-2xl py-8 xl:py-10 lg:w-3/4"
                >
                    <motion.p variants={childVariants} className="mb-6">
                        I'm a Frontend Web Developer with a creative flair for
                        coding and a strong passion for technology and design.
                    </motion.p>
                    <motion.p variants={childVariants} className="mb-6">
                        I have a background in Business Administration, which
                        has given me a keen eye for detail, a problem-solving
                        approach and understanding the project goals.
                    </motion.p>
                    <motion.p variants={childVariants} className="mb-6">
                        My passion for technology and design drives me to create
                        beautiful and functional websites that engage users. I'm
                        constantly learning and experimenting with new
                        technologies to improve my skills and deliver
                        high-quality work.
                    </motion.p>
                    <motion.p variants={childVariants} className="mb-6">
                        Beyond my technical skills, you can find me exploring
                        the outdoors or trying out new recipes in the kitchen. I
                        believe that a well-rounded life helps to keep me
                        grounded and creative in my work.
                    </motion.p>
                    <motion.p variants={childVariants}>
                        If you're interested in learning more about my
                        experience or discussing potential projects, please
                        don't hesitate to contact me."
                    </motion.p>
                </motion.div>
            )}
        </div>
    );
};

export default AboutMe;
