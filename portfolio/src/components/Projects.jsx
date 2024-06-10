import React from "react";
import { Icon } from "@iconify/react";

const Projects = () => {
  return (
    <main className="font-jetbrains gap-5 flex-grow flex flex-col">
      <div className="font-bold text-3xl">
        <h1>Projects</h1>
      </div>
      <div className="border border-gray-500 rounded p-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Portfolio</h2>
          <div className="flex justify-end gap-2">
            <a
              href="https://www.alexandro-valdez.com"
              target="_blank"
              className="bg-black text-white rounded flex justify-center items-center p-2"
            >
              <Icon icon="ph:link-light" width="15" height="15" />
            </a>
            <a
              href="https://github.com/alexandroivaldez/portfolio"
              target="_blank"
              className="bg-black text-white rounded flex justify-center items-center p-2"
            >
              <Icon icon="mdi:github" width="15" height="15" />
            </a>
          </div>
        </div>
        <p className="text-gray-600">
          This web app is designed to seamlessly showcase my work and project
          experience.
        </p>
        <div className="flex gap-2">
          <div className="flex bg-gray-200 w-20 rounded p-1 gap-1 justify-center items-center">
            <Icon icon="logos:aws" width="24" height="24" />
            <p>AWS</p>
          </div>
          <div className="flex bg-gray-200 w-20 rounded p-1 gap-1 justify-center items-center">
            <Icon icon="logos:react" width="24" height="24" />
            <p>React</p>
          </div>
          <div className="flex bg-gray-200 rounded p-1 gap-1 justify-center items-center">
            <Icon icon="devicon:tailwindcss" width="24" height="24" />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-500 rounded p-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Spreading Seas</h2>
          <div className="flex justify-end gap-2">
            <a
              href="https://antennegg.itch.io/spreading-seas"
              target="_blank"
              className="bg-black text-white rounded flex justify-center items-center p-2"
            >
              <Icon icon="ph:link-light" width="15" height="15" />
            </a>
            <a
              href="https://github.com/alexandroivaldez/game-jam-14"
              target="_blank"
              className="bg-black text-white rounded flex justify-center items-center p-2"
            >
              <Icon icon="mdi:github" width="15" height="15" />
            </a>
          </div>
        </div>
        <p className="text-gray-600">
          I assembled an international team to develop a game for
          PirateSoftware's{" "}
          <span className="relative">
            <a
              target="_blank"
              href="https://itch.io/jam/pirate"
              className="hover:bg-yellow-200 transition-colors duration-200"
            >
              GameJam14
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-200"></span>
            </a>
          </span>
          . I led the team's operations and contributed to the game's
          development.
        </p>
        <div className="flex gap-2">
          <div className="flex bg-gray-200 rounded p-1 gap-1 justify-center items-center">
            <Icon icon="devicon:godot" width="24" height="24" />
            <p>Godot</p>
          </div>
          <div className="flex bg-gray-200 rounded p-1 gap-1 justify-center items-center">
            <Icon icon="skill-icons:discord" width="24" height="24" />
            <p>Discord</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-500 rounded p-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">StudySpace</h2>
          <div className="flex justify-end gap-2">
            <a
              href="https://study-space-av.netlify.app/"
              target="_blank"
              className="bg-black text-white rounded flex justify-center items-center p-2"
            >
              <Icon icon="ph:link-light" width="15" height="15" />
            </a>
            <a
              href="https://github.com/alexandroivaldez/study-space"
              target="_blank"
              className="bg-black text-white rounded flex justify-center items-center p-2"
            >
              <Icon icon="mdi:github" width="15" height="15" />
            </a>
          </div>
        </div>

        <p className="text-gray-600">
          A website I built to help my students avoid cramming and build healthy
          study habits.
        </p>
        <div className="flex gap-2">
          <div className="flex bg-gray-200 rounded p-1 gap-1 justify-center items-center">
            <Icon icon="logos:react" width="24" height="24" />
            <p>React</p>
          </div>
          <div className="flex bg-gray-200 rounded p-1 gap-1 justify-center items-center">
            <Icon icon="skill-icons:css" width="24" height="24" />
            <p>CSS</p>
          </div>
          <div className="flex bg-gray-200 rounded p-1 gap-1 justify-center items-center">
            <Icon icon="devicon:netlify" width="24" height="24" />
            <p>Netlify</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5 pb-5">
        <p className="italic">
          Click{" "}
          <span className="relative">
            <a
              target="_blank"
              href="https://github.com/alexandroivaldez"
              className="hover:bg-yellow-200 transition-colors duration-200"
            >
              here
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-200"></span>
            </a>
          </span>{" "}
          to see more projects.
        </p>
      </div>
    </main>
  );
};

export default Projects;
