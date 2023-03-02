import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const myProjects = [
        {
            title: "SocialNetwork Moltress",
            details:
                "This App is a single page application using Socket.io and Redux with a real-time chatroom which keeps live track of who is actively chatting.",
            img: "project1.jpg",
            link: "https://github.com/AKindakly/Spiced_Academy_SocialNetwork",
            tech: {
                tech1: "React/Redux",
                tech2: "Node.Js/ Express.Js",
                tech3: "PSQL",
            },
        },
        {
            title: "ImageBoard Special Scenes",
            details:
                "This app built in Vue.js where the user can upload his photos to the App and leaving a comment",
            img: "project2.jpg",
            link: "https://github.com/AKindakly/Spiced_Academy_ImageBoard",
            tech: {
                tech1: "Vue.js",
                tech2: "AWS S3",
            },
        },
        {
            title: "WebsiteTemplates Galaxy Hotel",
            details:
                "This is a responsive hotel website templates using react and bootstrap.",
            img: "project3.jpg",
            link: "https://github.com/AKindakly/final-project",
            tech: {
                tech1: "React",
                tech2: "Bootstrap",
                tech3: "PSQL",
            },
        },
    ];

    return (
        <section className="pt-28 bg-zinc-200 dark:bg-zinc-800" id="projects">
            <h1 className=" text-xl md:text-2xl font-bold text-blue-500 mb-6 text-center text-shadow-[0_4px_10px_#3b82f6]">
                Projects
            </h1>
            <div className="flex flex-col  gap-10 ">
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
        </section>
    );
};

export default Projects;
