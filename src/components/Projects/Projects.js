import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const myProjects = [
        {
            title: "PizzaNow - Pizza Order Website:",
            details:
                "Crafted with Next.js and MongoDB, PizzaNow boasts seamless pizza ordering. Its intuitive admin panel ensures easy site management, making it the perfect blend of technology and gastronomy.",
            img: "project5.png",
            link: {
                l1: "https://github.com/AKindakly/pizza-ordering",
                l2: "https://pizza-now-now.vercel.app/",
            },
            tech: {
                t1: "Next.js",
                t2: "Tailwind CSS",
                t3: "MongoDB",
            },
        },
        {
            title: "Pearly Whites - Dental Praxis Template",
            details:
                "Pearly Whites is a responsive Praxis website templates built with react and bootstrap with admin page for controlling the site and adding infos.",
            img: "project4.png",
            link: {
                l1: "https://github.com/AKindakly/Praxis-Website-Templates",
                l2: "https://pearlywhites.netlify.app/",
            },
            tech: {
                t1: "React",
                t2: "Bootstrap",
                t3: "PostgreSQL",
            },
        },
        {
            title: "Moltress - Social Network Website",
            details:
                "Moltress is a SPA application built with React.js and Redux. The app includes user authentication, friend requests, and a real-time chatroom.",
            img: "project1.png",
            link: {
                l1: "https://github.com/AKindakly/Moltres_Social-Network-App",
                l2: "https://moltres.fly.dev/",
            },
            tech: {
                t1: "React/Redux",
                t2: "Node.Js/Express",
                t3: "PostgreSQL",
            },
        },
        {
            title: "Galaxy Hotel - Hotel Website Template ",
            details:
                "Galaxy Hotel is a React-based hotel website template with intuitive room search, contact and about us pages, also detailed descriptions of hotel features like the restaurant, pool, and spa.",
            img: "project3.png",
            link: {
                l1: "https://github.com/AKindakly/Galaxy-Hotel_Website-Template",
                l2: "https://galaxy-hotel.netlify.app/",
            },
            tech: {
                t1: "React",
                t2: "CSS3",
                t3: "React Context",
            },
        },
        {
            title: "Special Scenes - Image Board",
            details:
                "Special Scenes is a dynamic single-page application built with Vue.js, AWS, and Node.js. It allows users to upload their photos and view them in real-time, with the option to enlarge photos and leave comments. ",
            img: "project2.png",
            link: {
                l1: "https://github.com/AKindakly/Spiced_Academy_ImageBoard",
                l2: "https://github.com/AKindakly/Spiced_Academy_ImageBoard",
            },
            tech: {
                t1: "Vue.js",
                t2: "AWS S3",
                t3: "Node.Js/Express",
            },
        },
    ];

    return (
        <section
            className=" md:pt-10 md:pt-0 bg-zinc-100 dark:bg-zinc-800"
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
