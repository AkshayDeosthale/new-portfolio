import React from "react";
import { motion } from "framer-motion";
import { SiJavascript } from "react-icons/si";
import Image from "next/image";

const Variant = {
  hoverVariant: {
    borderRadius: 50,
    transition: {
      duration: 0.4,
    },
  },
};

const Hera = () => {
  return (
    <motion.div
      className=" w-full mt-20 md:mt-0 md:w-3/5 flex flex-col md:p-6 space-y-3 justify-center items-center text-orange-500 shadow-2xl backdrop-blur-lg cursor-default group"
      variants={Variant}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      // whileHover={"hoverVariant"}
      whileTap={{
        scale: 0.9,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <motion.div className="  w-full h-full flex justify-around md:justify-center items-center space-y-3  ">
        <motion.div
          className="rounded-full w-28 h-28  md:mx-auto   bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="flex flex-col justify-center items-center h-full bg-gradient-to-r from-red-500 to-green-500 text-white rounded-full p-2">
            <motion.img
              height="450px"
              width="450px"
              src="/akshay.webp"
              className="rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
        <div className="flex flex-col ">
          <p className=" text-2xl md:text-6xl font-bold">
            Hi this is Akshay 👋
          </p>
          <p className=" hidden md:inline-flex text-xl md:text-3xl font-semibold  space-x-3">
            <span>I am a</span>
            <span className="group-hover:text-purple-500 transition-all duration-300 flex space-x-3">
              <span>Full-Stack</span>
              <span className="group-hover:text-yellow-500 transition-all duration-300  ">
                <SiJavascript />
              </span>
              <span>Developer</span>
            </span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hera;
