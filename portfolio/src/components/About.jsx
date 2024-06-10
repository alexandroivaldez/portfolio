import React from "react";

const About = () => {
  return (
    <main className="font-jetbrains gap-5 flex-grow flex flex-col">
      <div className="font-bold text-3xl">
        <h1>Hello.</h1>
        <h1>
          My name is <span className="">Alexandro Valdez.</span>
        </h1>
      </div>
      <div className="flex flex-col gap-5 text-xl">
        <p>
          I’m a professional software developer currently based in Houston,
          Texas. My day-to-day work involves full-stack development, automation,
          AI integration, and AWS architecture.
        </p>
        <p>
          I focus on creating elegant digital solutions with an emphasis on
          functionality and design.
        </p>
        <p>
          You can find me on{" "}
          <span className="relative">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alexandro-valdez/"
              className="hover:bg-yellow-200 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-200"></span>
          </span>
          ,{" "}
          <span className="relative">
            <a
              target="_blank"
              href="https://www.instagram.com/av.iex/"
              className="hover:bg-yellow-200 transition-colors duration-200"
            >
              Instagram
            </a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-200"></span>
          </span>{" "}
          or{" "}
          <span className="relative">
            <a
              target="_blank"
              href="https://github.com/alexandroivaldez"
              className="hover:bg-yellow-200 transition-colors duration-200"
            >
              GitHub
            </a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-200"></span>
          </span>
          .
        </p>
      </div>
    </main>
  );
};

export default About;
