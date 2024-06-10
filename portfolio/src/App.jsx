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
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="flex justify-center bg-yellow-300 p-2">
        <p>This website's under construction, but thanks for stopping by!</p>
      </div>
      <div className="flex justify-center h-screen w-screen">
        <div className="bg-white flex flex-col h-screen w-2/3">
          <Navbar />

          <main className="font-jetbrains gap-5 flex-grow flex flex-col">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<About />} />
            </Routes>
          </main>
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
