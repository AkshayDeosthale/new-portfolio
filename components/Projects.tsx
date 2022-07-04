import React from "react";
import { motion } from "framer-motion";
import {projects} from './constants/constants'

const Projects = () => {  
  return <motion.div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 lg:gap-24" data-aos="zoom-out-down">
   { projects.map((pro,key)=> <motion.div key={key} className='h-72 w-96 border backdrop-blur-md rounded-lg'>
      title
      Description
      image
    </motion.div> ) }
  </motion.div>;
};

export default Projects;
