import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const myProjects = [
        {
            title: "Moltress a Social Network",
            details:
                "Moltress is a SPA application built with React.js and Redux. The app includes user authentication, friend requests, and a real-time chatroom.",
            img: "project1.png",
            link: "https://github.com/AKindakly/Moltres_Social-Network-App",
            tech: {
                t1: "React/Redux",
                t2: "Node.Js/Express",
                t3: "PostgreSQL",
            },
        },
        {
            title: "Galaxy Hotel a Website Template ",
            details:
                "Galaxy Hotel is a React-based hotel website template with intuitive room search, contact and about us pages, also detailed descriptions of hotel features like the restaurant, pool, and spa.",
            img: "project3.png",
            link: "https://github.com/AKindakly/Galaxy-Hotel_Website-Template",
            tech: {
                t1: "React",
                t2: "CSS3",
                t3: "React Context",
            },
        },
        {
            title: "Special Scenes an Image Board",
            details:
                "Special Scenes is a dynamic single-page application built with Vue.js, AWS, and Node.js. It allows users to upload their photos and view them in real-time, with the option to enlarge photos and leave comments. ",
            img: "project2.png",
            link: "https://github.com/AKindakly/Spiced_Academy_ImageBoard",
            tech: {
                t1: "Vue.js",
                t2: "AWS S3",
                t3: "Node.Js/Express",
            },
        },
        {
            title: "Pearly Whites a Dental Praxis Template",
            details:
                "This is a responsive Praxis website templates using react and bootstrap.",
            img: "project4.jpg",
            link: "https://github.com/AKindakly/final-project",
            tech: {
                t1: "React",
                t2: "Bootstrap",
                t3: "PSQL",
            },
        },
    ];

    return (
        <section
            className="pt-10 md:pt-0 bg-zinc-100 dark:bg-zinc-800"
            id="projects"
        >
            <div className="flex justify-center">
                <div className="w-3/4">
                    <h1 className="text-xl md:text-2xl xl:text-4xl font-bold text-blue-500 text-shadow-[0_4px_10px_#3b82f6]">
                        Projects
                    </h1>
                    <div className="flex flex-col xl:pt-16 xl:pb-16 py-8">
                        {myProjects.map((project, index) => (
                            <div key={index}>
                                <ProjectCard
                                    title={project.title}
                                    details={project.details}
                                    img={project.img}
                                    tech={project.tech}
                                    link={project.link}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
