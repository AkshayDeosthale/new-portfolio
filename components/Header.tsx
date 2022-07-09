import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface Props {
  location: string;
}

const Header = ({ location }: Props) => {
  const [active, setactive] = useState<string>(location);
  return (
    <motion.div className=" cursor-pointer fixed z-10 h-16 backdrop-blur-lg w-full flex justify-evenly items-center  text-white font-bold">
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
        to="offer"
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
