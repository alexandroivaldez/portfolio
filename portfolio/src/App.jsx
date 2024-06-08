import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Icon } from "@iconify/react";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="flex justify-center h-screen w-screen">
        <div className="bg-white flex flex-col h-screen w-2/3">
          {/* Navigation bar */}
          <nav className="flex justify-between pt-2 pb-2 font-jetbrains items-center mb-[55px]">
            <NavLink
              to="/about"
              activeClassName="font-bold"
              className="hover:bg-yellow-200 transition-colors duration-200"
            >
              About
            </NavLink>
            <NavLink
              to="/work"
              activeClassName="font-bold"
              className="hover:bg-yellow-200 transition-colors duration-200"
            >
              Work
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="font-bold"
              className="hover:bg-yellow-200 transition-colors duration-200"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="font-bold"
              className="hover:bg-yellow-200 transition-colors duration-200"
            >
              Contact
            </NavLink>
            <Icon icon="iconamoon:mode-light" width="20" height="20" />
          </nav>

          {/* Main content */}
          <main className="font-jetbrains gap-5 flex-grow flex flex-col">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<About />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="flex justify-center items-center gap-1 pb-2 bt-2">
            <Icon icon="ph:copyright" width="12" height="12" />
            <p className="font-jetbrains text-xs">
              2024 • Alexandro Valdez - All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
