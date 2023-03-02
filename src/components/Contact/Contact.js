import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        );
        // TODO: Send form data to server or email service
    };

    return (
        <section className="pt-28 bg-zinc-200 dark:bg-zinc-800" id="contact">
            <h1 className=" text-xl md:text-2xl font-bold text-blue-500 mb-6 text-center text-shadow-[0_4px_10px_#3b82f6]">
                Get in Touch!
            </h1>
            <p className="text-center mb-10 mx-10 text-zinc-600 dark:text-zinc-300">
                Have a question or want to work together?
            </p>
            <form
                onSubmit={handleSubmit}
                className=" flex flex-col justify-center gap-6 md:mx-20"
            >
                <div className=" flex flex-col items-center relative">
                    <label
                        htmlFor="name"
                        className=" text-blue-500 absolute bottom-9 left-16 md:left-32 rounded bg-zinc-50 dark:bg-zinc-900 px-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className=" text-zinc-600 dark:text-zinc-300 text-sm bg-zinc-50 dark:bg-zinc-900 px-8 md:px-12 py-3 w-3/4 rounded border border-blue-500"
                        required
                    />
                </div>
                <div className=" flex flex-col items-center relative">
                    <label
                        htmlFor="email"
                        className=" text-blue-500 absolute bottom-9 left-16 md:left-32 rounded bg-zinc-50 dark:bg-zinc-900 px-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className=" text-zinc-600 dark:text-zinc-300 text-sm bg-zinc-50 dark:bg-zinc-900 px-8 md:px-12 py-3 w-3/4 rounded border border-blue-500"
                        required
                    />
                </div>
                <div className=" flex flex-col items-center relative">
                    <label
                        htmlFor="subject"
                        className=" text-blue-500 absolute bottom-9 left-16 md:left-32 rounded bg-zinc-50 dark:bg-zinc-900 px-2"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={handleSubjectChange}
                        className=" text-zinc-600 dark:text-zinc-300 text-sm bg-zinc-50 dark:bg-zinc-900 px-8 md:px-12 py-3 w-3/4 rounded border border-blue-500"
                        required
                    />
                </div>
                <div className=" flex flex-col items-center relative">
                    <label
                        htmlFor="message"
                        className=" text-blue-500 absolute bottom-44 left-16 md:left-32 rounded bg-zinc-50 dark:bg-zinc-900 px-2 pb-1"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        className=" text-zinc-600 dark:text-zinc-300 text-sm bg-zinc-50 dark:bg-zinc-900 px-8 md:px-12 py-3 w-3/4 h-48 rounded border border-blue-500"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center items-center mb-14">
                    <button
                        type="submit"
                        className=" w-3/4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 bg-gradient-to-r from-blue-500 to-Blue-800 px-4 py-2 rounded-md shadow-lg shadow-blue-500/50"
                    >
                        Send message
                    </button>
                </div>
            </form>
        </section>
    );
};
export default Contact;
