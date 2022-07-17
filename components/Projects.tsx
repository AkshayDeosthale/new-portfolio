import React from "react";
import { motion } from "framer-motion";
import { projects } from "./constants/constants";
import Image from "next/image";
import { Link } from "react-scroll";
import { Button } from "@mui/material";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* modals */}
      <ProjectModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />

      {/* pc view */}
      <motion.div
        className=" mx-auto hidden md:grid md:grid-col-2 lg:grid-cols-3  lg:gap-16 "
        data-aos="zoom-out-down"
      >
        {projects.map((pro, key) => (
          <motion.div
            key={key}
            className="h-[450px] w-96  backdrop-blur-md backdrop-contrast-150 group"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileHover={{ x: [0, 10, 0, 10, 0] }}
          >
            <div className="w-full h-1/2 ">
              <Image
                src={pro.image}
                height="225px"
                width="382px"
                layout="intrinsic"
                className="  hover:scale-105 transition-all duration-300 "
              />
            </div>
            <div className="p-3 flex flex-col space-y-4">
              <p className="text-xl text-center text-white font-bold">
                {pro.title}
              </p>
              <p className="text-sm text-center text-white font-semibold">
                {pro.description}
              </p>
              <div className="text-center text-white group-hover:text-red-600 ">
                {pro.tags.map((tag, key) => (
                  <span key={key} className="transition-all duration-300 ">
                    {" "}
                    {tag}{" "}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2 ">
                <Button
                  variant="contained"
                  className="flex-1 bg-blue-500"
                  onClick={handleOpen}
                >
                  Visit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="flex-1 bg-purple-500"
                >
                  <Link to="contact" smooth={true}>
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* mobile view */}
      <motion.div className=" mt-64 md:hidden grid grid-col-1 gap-5 ">
        {projects.map((pro, key) => (
          <motion.div
            key={key}
            className="h-[450px] group w-full  backdrop-blur-md backdrop-contrast-150 active:scale-95 transition-all duration-300 "
          >
            <div className="w-full h-1/2 ">
              <img src={pro.image} className=" h-full w-full " />
            </div>
            <div className="p-3 flex flex-col space-y-4">
              <p className="text-xl text-center text-white font-bold">
                {pro.title}
              </p>
              <p className="text-sm text-center text-white font-semibold">
                {pro.description}
              </p>
              <div className="text-center text-white group-hover:text-red-600 ">
                {pro.tags.map((tag, key) => (
                  <span key={key} className="transition-all duration-300 ">
                    {" "}
                    {tag}{" "}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2 ">
                <button
                  onClick={handleOpen}
                  className=" py-2 flex-1 backdrop-sepia bg-blue-500 hover:bg-blue-600 text-white font-semibold active:scale-95 transition-all duration-150"
                >
                  Visit
                </button>
                <button className=" py-2 flex-1 backdrop-sepia bg-purple-500 hover:bg-purple-600 text-white font-semibold active:scale-95 transition-all duration-150">
                  <Link to="contact" smooth={true}>
                    Contact
                  </Link>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
