import React from "react";

const AboutMe = () => {
    return (
        <div className="mb-24 w-3/4">
            <h1 className=" text-xl md:text-2xl xl:text-4xl font-bold text-blue-500 mb-6 xl:mb-14 text-shadow-[0_4px_10px_#3b82f6]">
                About Me
            </h1>
            <div className=" text-zinc-600 dark:text-zinc-300 text-base xl:text-2xl py-8 xl:pb-10 xl:pt-6">
                <p className="mb-4">
                    I'm a Frontend Web Developer with a creative flair for
                    coding.
                </p>
                <p className="mb-4">
                    I have a background in Business Administration, which has
                    given me a keen eye for detail and a problem-solving
                    approach.
                </p>
                <p className="mb-4">
                    My passion for technology and design drives me to create
                    beautiful and functional websites that engage users.
                    <br /> I'm constantly learning and experimenting with new
                    technologies to improve my skills and deliver high-quality
                    work.
                </p>
                <p className="mb-4">
                    I enjoy collaborating with others and am always up for a
                    challenge.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
