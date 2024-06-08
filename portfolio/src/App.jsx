import { Icon } from "@iconify/react";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center h-screen w-screen ">
      <div className="bg-white flex flex-col h-screen  w-2/3">
        <nav className="flex justify-between  pt-2 pb-2 font-jetbrains items-center mb-[55px]">
          <h1 className="font-bold">About</h1>
          <h1>Work</h1>
          <h1>Projects</h1>
          <h1>Contact</h1>
          <Icon icon="iconamoon:mode-light" width="20" height="20" />
        </nav>

        <main className="font-jetbrains gap-5 flex-grow flex flex-col ">
          <div className="font-bold text-3xl">
            <h1>Hello.</h1>
            <h1>My name is <span className="">Alexandro Valdez.</span></h1>
          </div>
          <div className="flex flex-col gap-5 text-xl">
            <p>
            I’m a professional software developer currently based in Houston, Texas. My day-to-day work involves full-stack development, automation, AI integration, and AWS architecture.
            </p>
            <p>
              I focus on creating elegant digital solutions with an emphasis on
              functionality and design.
            </p>
            <p>
              You can find me on{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alexandro-valdez/"
                className="font-bold hover:bg-yellow-200 transition-colors duration-200"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/av.iex/"
                className="font-bold hover:bg-yellow-200 transition-colors duration-200"
              >
                Instagram
              </a>{" "}
              or{" "}
              <a
                target="_blank"
                href="https://github.com/alexandroivaldez"
                className="font-bold hover:bg-yellow-200 transition-colors duration-200"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </main>
        <footer className="flex justify-center items-center gap-1 p-2">
          <Icon icon="ph:copyright" />
          <p className="font-jetbrains text-xs">
            2024 - Alexandro Valdez, all rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
