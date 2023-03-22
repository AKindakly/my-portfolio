import React from "react";

const ScrollDownIndicator = () => {
    return (
        <div
            id="scroll-wrapper-inner"
            className="flex flex-col justify-center items-center bg-zinc-100 dark:bg-zinc-800 xl:text-lg pb-18"
        >
            <div id="scroll-down" className="pt-16 "></div>
            <span className=" text-blue-500 text-shadow-[0_4px_10px_#3b82f6] ">
                Scroll Down
            </span>
        </div>
    );
};

export default ScrollDownIndicator;
