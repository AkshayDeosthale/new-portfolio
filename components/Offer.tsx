import React from 'react'
import { motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import {skillImages} from './constants/skills'

const Offer = () => {
  return (
    <motion.div className='md:h-96 md:w-96 h-72 w-72 backdrop-blur-md backdrop-sepia rounded-full flex justify-center items-center text-white font-bold'
    animate={{borderRadius:[200,50,200] , rotate:360}}
    transition={{duration:2 , repeat:Infinity}}
    >
     <motion.div className='md:h-80 md:w-80 h-60 w-60  rounded-full flex justify-center items-center'
    animate={{ rotate:-360}}
    transition={{duration:2 , repeat:Infinity}}
     >
        <Carousel
        className=' flex justify-center items-center md:h-72 md:w-72 h-52 w-52'
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        centerMode={true}
        showThumbs={false}
        >                
               {skillImages.map(()=>  <div className='w-[100%]'>
                    
                    </div> )}
               
            </Carousel>
     </motion.div>
    </motion.div>
  )
}

export default Offer
