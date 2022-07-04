import React from "react";
import { motion } from "framer-motion";
import {projects} from './constants/constants'
import Image from "next/image";

const Projects = () => {  
  return <>
  {/* pc view */}
  <motion.div className=" hidden md:grid md:grid-col-2 lg:grid-cols-3 md:gap-5 lg:gap-24 " data-aos="zoom-out-down">
   { projects.map((pro,key)=> <motion.div key={key} className='h-[450px] w-96  backdrop-blur-md backdrop-contrast-150 group' 
   drag
   dragConstraints={{left:0,right:0,top:0,bottom:0}}
   whileHover={{x:[0,10,0,10,0]}}
   >
      <div className="w-full h-1/2 ">
          <Image src={pro.image} height='225px' width='382px' layout="intrinsic"  className="  hover:scale-105 transition-all duration-300 " />
      </div>
      <div className="p-3 flex flex-col space-y-4">
        <p className="text-xl text-center text-white font-bold">{pro.title}</p>
        <p className="text-sm text-center text-white font-semibold" >{pro.description}</p>
        <div className="text-center text-white group-hover:text-red-600 ">
          {pro.tags.map((tag,key)=> <span key={key} className='transition-all duration-300 ' > {tag} </span> )}
        </div>
        <div className="flex space-x-2 ">
        <button className=" py-2 flex-1 backdrop-sepia bg-blue-500 hover:bg-blue-600 text-white font-semibold active:scale-95 transition-all duration-150">Visit</button>
        <button className=" py-2 flex-1 backdrop-sepia bg-purple-500 hover:bg-purple-600 text-white font-semibold active:scale-95 transition-all duration-150">Contact</button>
        </div>
      </div>
     
    </motion.div> ) }
  </motion.div>

  {/* mobile view */}
  <motion.div className=" md:hidden grid grid-col-1 gap-5 " data-aos="zoom-out-down">
   { projects.map((pro,key)=> <motion.div key={key} className='h-[450px] group w-96  backdrop-blur-md backdrop-contrast-150'>
      <div className="w-full h-1/2 ">
          <Image src={pro.image} height='225px' width='382px' layout="intrinsic"  className="  hover:scale-105 transition-all duration-300 " />
      </div>
      <div>
      Description
      image
      </div>
     
    </motion.div> ) }
  </motion.div>
  </>;
};

export default Projects;
