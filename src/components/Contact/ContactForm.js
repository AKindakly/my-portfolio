import React, { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // TODO: Send form data to server or email service
    };

    return (
        <form
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center gap-6 lg:w-2/5"
        >
            <div className=" flex flex-col ">
                <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
                    className="px-3 py-2 text-zinc-600 dark:text-zinc-300 text-sm md:text-base xl:text-xl bg-zinc-50 dark:bg-zinc-900 rounded border border-blue-500"
                    required
                />
            </div>
            <div className=" flex flex-col">
                <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="px-3 py-2 text-zinc-600 dark:text-zinc-300 text-sm md:text-base xl:text-xl bg-zinc-50 dark:bg-zinc-900 rounded border border-blue-500"
                    required
                />
            </div>
            <div className=" flex flex-col">
                <textarea
                    id="message"
                    value={message}
                    placeholder="Your Message"
                    onChange={handleMessageChange}
                    className="px-3 pt-2 pb-28 text-zinc-600 dark:text-zinc-300 text-sm md:text-base xl:text-xl bg-zinc-50 dark:bg-zinc-900 rounded border border-blue-500"
                    required
                ></textarea>
            </div>
            <div className="flex justify-center items-center mb-14">
                <button
                    type="submit"
                    className=" lg:w-2/4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 bg-gradient-to-r from-blue-500 to-Blue-800 px-4 py-2 rounded-md shadow-lg shadow-blue-500/50"
                >
                    Send message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;