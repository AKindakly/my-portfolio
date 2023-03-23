import React from "react";

import ContactForm from "./ContactForm";
import ContactFollow from "./ContactFollow";
import contactWave1 from "../../assets/contact-wave1.png";
import contactWave from "../../assets/contact-wave.png";

const Contact = ({ darkMode }) => {
    return (
        <section className="bg-zinc-100 dark:bg-zinc-800" id="contact">
            {darkMode === true ? (
                <div
                    className="lg:h-[calc(100vh-180px)] flex justify-center "
                    style={{
                        backgroundImage: `url(${contactWave1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="md:pt-10 xl:pt-20 w-3/4 ">
                        <h1 className=" text-xl md:text-2xl xl:text-4xl font-bold text-blue-500 text-shadow-[0_4px_10px_#3b82f6] pb-8 xl:pb-10">
                            Get in Touch!
                        </h1>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="md:w-1/3 lg:w-1/2">
                                <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg xl:text-2xl pb-4 xl:pb-5">
                                    Have any question or want to work together?
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg xl:text-2xl pb-4 xl:pb-5">
                                    I'm available to grab a coffee and chat!
                                    Drop a comment, question, or concern, and
                                    thanks for stopping by!
                                </p>
                                <ContactFollow />
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className="lg:h-[calc(100vh-180px)] flex justify-center "
                    style={{
                        backgroundImage: `url(${contactWave})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="md:pt-10 xl:pt-20 w-3/4 ">
                        <h1 className=" text-xl md:text-2xl xl:text-4xl font-bold text-blue-500 text-shadow-[0_4px_10px_#3b82f6] pb-8 xl:pb-10">
                            Get in Touch!
                        </h1>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="md:w-1/3 lg:w-1/2">
                                <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg xl:text-2xl pb-4 xl:pb-5">
                                    Have any question or want to work together?
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg xl:text-2xl pb-4 xl:pb-5">
                                    I'm available to grab a coffee and chat!
                                    Drop a comment, question, or concern, and
                                    thanks for stopping by!
                                </p>
                                <ContactFollow />
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
export default Contact;
