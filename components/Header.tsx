import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const [active, setactive] = useState<string>("about");
  return (
    <motion.div className="fixed z-10 h-16 backdrop-blur-lg w-full flex justify-evenly items-center cursor-default text-white font-bold">
      <Link
        to="about"
        smooth={true}
        onClick={() => setactive("about")}
        className={` flex-1 p-4 transition-colors duration-300 text-center ${
          active === "about" ? "border-b-8 border-purple-500 " : ""
        } `}
      >
        About me
      </Link>

      <Link
        to="projects"
        smooth={true}
        onClick={() => setactive("projects")}
        className={` flex-1 p-4 transition-colors duration-300 text-center ${
          active === "projects" ? "border-b-8 border-orange-500 " : ""
        } `}
      >
        My projects
      </Link>

      <Link
        to="projects"
        smooth={true}
        onClick={() => setactive("offer")}
        className={` flex-1 p-4 transition-colors duration-300 text-sm text-center md:text-lg ${
          active === "offer" ? "border-b-8 border-yellow-500 " : ""
        } `}
      >
        What I can offer
      </Link>
    </motion.div>
  );
};

export default Header;
