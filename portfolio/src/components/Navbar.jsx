import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
    return (
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
    )
}

export default Navbar;