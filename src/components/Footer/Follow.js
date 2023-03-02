import React from "react";
import {
    BsGithub as GithubIcon,
    BsInstagram as InstagramIcon,
    BsLinkedin as LinkedinIcon,
} from "react-icons/bs";

const Follow = () => {
    return (
        <div>
            <h1 className=" text-xl md:text-2xl font-bold text-blue-500 mb-10 text-center text-shadow-[0_4px_10px_#3b82f6]">
                Follow Me
            </h1>
            <div className="flex gap-10 justify-center text-xl md:text-2xl pb-10 text-blue-500">
                <a
                    href="https://github.com/AKindakly"
                    target="blank"
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                    <GithubIcon />
                </a>
                <a
                    href="https://www.instagram.com/omgitscrow/"
                    target="blank"
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                    <InstagramIcon />
                </a>
                <a
                    href="https://www.linkedin.com/in/akindakly/"
                    target="blank"
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                    <LinkedinIcon />
                </a>
            </div>
        </div>
    );
};

export default Follow;
