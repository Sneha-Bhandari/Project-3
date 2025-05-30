import React from "react";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="w-full h-screen  md:overflow-hidden opacity-60 bg-black">
      
      <div className="relative flex flex-col gap-5 items-center mx-auto top-1/2 text-white text-center z-10 ">
        <div className="text-2xl md:text-5xl font-medium tracking-wide font-sans  flex gap-2">
          <span>We Love To Build</span>
          <span className="">
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                delay: 50,
                deleteSpeed: 30,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(" Mobile Apps")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString(" WordPress")
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </div>

        <div className="text-xl font-thin">
          Free Web Template by <span className="text-[#1de9b6]">Colorlib</span>
        </div>

        <div className="mt-6">
          <button className="rounded-full px-7 py-4 bg-[#1de9b6] hover:bg-[#1cd2a5] transition">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="font-thin text-white">Watch Video</h1>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
