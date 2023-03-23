import React from "react";
import {
    BsGithub as GithubIcon,
    BsInstagram as InstagramIcon,
    BsLinkedin as LinkedinIcon,
} from "react-icons/bs";

const ContactFollow = () => {
    return (
        <div>
            <div className="flex gap-28 md:gap-10 lg:gap-28 text-2xl xl:text-4xl md:text-2xl mt-5 lg:mt-10 mb-10 ml-2 md:ml-0 text-blue-500">
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

export default ContactFollow;
