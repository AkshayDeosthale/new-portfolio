import React from "react";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      className=" w-full  md:w-3/5 flex text-xl font-bold flex-col p-6 space-y-3 justify-center items-center text-orange-800 shadow-2xl backdrop-blur-lg cursor-default group"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileDrag={{ color: "yellow" }}
      whileHover={{ x: [0, 30, 0, -30, 0] }}
    >
      <p className="">About me :</p>
      <p className="text-center">
        Full-stack web developer with the ability to learn and collaborate in
        rapidly changing environments and compositions. Worked through 100+
        hours of boot camp structure, learning full-stack Web Application
        development. Eager to tackle Web Development/design challenges to
        achieve lasting impacts on user experience.
      </p>
    </motion.div>
  );
};

export default Description;
