import React from "react";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <main className="font-jetbrains gap-5 flex-grow flex flex-col">
      <div className="font-bold text-3xl">
        <h1>Work Experience</h1>
      </div>
      <div className=" flex flex-col gap-8">
        <div className="">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Developer Advocate</h2>
            <p>May 2024 - Present</p>
          </div>
          <h3 className="italic">
            <a target="_blank" href="https://mimo.org/">
              Mimo
            </a>
          </h3>
          <div>
            <p className="text-gray-600">
              Hosts engaging live coding sessions for the Mimo Max community, a
              select group from the 25+ million users of the Mimo coding app,
              educating attendees on React, JavaScript and advanced CSS.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Software Developer</h2>
            <p>December 2023 - Present</p>
          </div>
          <h3 className="italic">Meneses Law</h3>
          <div>
            <p className="text-gray-600">
              Develop and support in-house applications using a variety of
              languages and technologies, including but not limited to React,
              MongoDB, AWS, Tailwind, PowerShell, and Python.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Full Stack Instructor</h2>
            <p>July 2023 - November 2023</p>
          </div>
          <h3 className="italic">
            <a target="_blank" href="https://devmountain.com/">
              DevMountain
            </a>
          </h3>
          <div>
            <p className="text-gray-600">
              Led interactive in-class exercises, offering hands-on guidance and
              fostering engaging lecture discussions to enhance the learning
              experience.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Front End Instructor 2</h2>
            <p>January 2023 - July 2023</p>
          </div>
          <h3 className="italic">
            <a target="_blank" href="https://mimo.org/">
              Mimo
            </a>
          </h3>
          <div>
            <p className="text-gray-600">
              Guided and managed multiple cohorts/teams, providing
              individualized mentorship for each student to track and enhance
              personal growth and development within the unit.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5 pb-5">
        <p className="italic">
          Curious on the details? Let's{" "}
          <span className="relative">
          <NavLink
            to="/contact"
            className="hover:bg-yellow-200 transition-colors duration-200"
          >
            talk
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-200"></span>
          </NavLink>
          </span>
          {" "}
          about it.
        </p>
      </div>
    </main>
  );
};

export default Work;
