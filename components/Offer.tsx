import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { skillImages } from "./constants/skills";
import {
  SiMongodb,
  SiReact,
  SiJavascript,
  SiRedux,
  SiGraphql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiJavascript } from "react-icons/di";

const Offer = () => {
  return (
    <>
      {/* PC view */}
      <motion.div
        className="md:h-96 md:w-96 hidden md:flex backdrop-blur-md backdrop-sepia rounded-full  justify-center items-center text-white font-bold"
        animate={{ borderRadius: [200, 50, 200], rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <motion.div
          className="md:h-80 md:w-80 h-60 w-60  rounded-full flex justify-center items-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Carousel
            className=" flex justify-center items-center md:h-64 md:w-64 h-52 w-52"
            autoPlay={true}
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            interval={1500}
          >
            <div className="text-center flex justify-center items-center flex-col space-y-3 group rounded-full">
              <SiMongodb className="h-32 w-32 text-green-600" />
              <p className="font-bold text-2xl group-hover:text-green-600 transition-all duration-200">
                MongoDB
              </p>
              <p className="text-lg font-semibold group-hover:text-green-600 transition-all duration-200">
                MongoBD database integration with NodeJs
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col space-y-3 group rounded-full">
              <SiReact className="h-32 w-32 text-blue-500" />
              <p className="font-bold text-2xl group-hover:text-blue-500 transition-all duration-200">
                ReactJS
              </p>
              <p className="text-lg font-semibold group-hover:text-blue-500 transition-all duration-200">
                Pixel perfect UI development of beautifull website.
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col space-y-3 group rounded-full">
              <TbBrandNextjs className="h-32 w-32" />
              <p className="font-bold text-2xl ">NextJS</p>
              <p className="text-lg font-semibold ">
                SEO friendly website with server side rendering and beautifully
                developed website
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col space-y-3 group rounded-full">
              <FaNode className="h-32 w-32 text-green-500" />
              <p className="font-bold text-2xl group-hover:text-green-600 transition-all duration-200">
                NodeJS
              </p>
              <p className="text-lg font-semibold group-hover:text-green-600 transition-all duration-200">
                Custom APIs endpoints
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col space-y-3 group rounded-full">
              <IoLogoJavascript className="h-32 w-32 text-black" />
              <p className="font-bold text-2xl group-hover:text-black transition-all duration-200">
                ExpressJS
              </p>
              <p className="text-lg font-semibold group-hover:text-black transition-all duration-200">
                Express JS to develop API endpoints
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col space-y-3 group rounded-full">
              <SiRedux className="h-32 w-32 text-purple-500" />
              <p className="font-bold text-2xl group-hover:text-purple-500 transition-all duration-200">
                ReduxJS
              </p>
              <p className="text-lg font-semibold group-hover:text-purple-500 transition-all duration-200">
                Redux for highly efficient state management
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col space-y-3 group rounded-full">
              <DiJavascript className="h-32 w-32 bg-clip-text text-pink-600" />
              <p className="font-bold text-2xl group-hover:text-pink-600 transition-all duration-200">
                RecoilJS
              </p>
              <p className="text-lg font-semibold group-hover:text-pink-600 transition-all duration-200">
                Recoil for high perfomance and development friendly state
                management
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col space-y-3 group rounded-full">
              <SiGraphql className="h-32 w-32 text-pink-600" />
              <p className="font-bold text-2xl group-hover:text-pink-600 transition-all duration-200">
                GraphQL
              </p>
              <p className="text-lg font-semibold group-hover:text-pink-600 transition-all duration-200">
                GraphQL for more efficient data fetching to reduce API costs
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col space-y-3 group rounded-full">
              <SiJavascript className="h-32 w-32 text-blue-500" />
              <p className="font-bold text-2xl group-hover:text-blue-500 transition-all duration-200">
                TypeScript
              </p>
              <p className="text-lg font-semibold group-hover:text-blue-500 transition-all duration-200">
                TS for big production ready website development
              </p>
            </div>
          </Carousel>
        </motion.div>
      </motion.div>

      {/* mobile view */}
      <motion.div
        className="md:hidden h-72 w-72 backdrop-blur-md backdrop-sepia rounded-full flex justify-center items-center text-white font-bold"
        animate={{ borderRadius: [200, 50, 200], rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="md:h-80 md:w-80 h-60 w-60  rounded-full flex justify-center items-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Carousel
            className=" flex justify-center items-center md:h-64 md:w-64 h-52 w-52 text-black mt-10"
            autoPlay={true}
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            interval={1500}
          >
            <div className="text-center flex justify-center items-center flex-col group space-y-2 rounded-full">
              <SiMongodb className="h-20 w-20 text-green-600" />
              <p className="font-bold text-xl group-hover:text-green-600 transition-all duration-200">
                MongoDB
              </p>
              <p className="text-md font-semibold group-hover:text-green-600 transition-all duration-200">
                MongoBD database integration with NodeJs
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col group space-y-2 rounded-full">
              <SiReact className="h-20 w-20 text-blue-500" />
              <p className="font-bold text-xl group-hover:text-blue-500 transition-all duration-200">
                ReactJS
              </p>
              <p className="text-md font-semibold group-hover:text-blue-500 transition-all duration-200">
                Pixel perfect UI development of beautifull website.
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col group space-y-2 rounded-full">
              <TbBrandNextjs className="h-20 w-20" />
              <p className="font-bold text-xl ">NextJS</p>
              <p className="text-sm font-semibold group-hover:text-blue-500 transition-all duration-200">
                SEO friendly website with server side rendering and beautifully
                developmd website
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col group space-y-2 rounded-full">
              <FaNode className="h-20 w-20 text-green-500" />
              <p className="font-bold text-xl 0 transition-all duration-200">
                NodeJS
              </p>
              <p className="text-md font-semibold 0 transition-all duration-200">
                Custom APIs endpoints
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col group space-y-2 rounded-full">
              <IoLogoJavascript className="h-20 w-20 text-black" />
              <p className="font-bold text-xl ansition-all duration-200">
                ExpressJS
              </p>
              <p className="text-md font-semibold ansition-all duration-200">
                Express JS to develop API endpoints
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col group space-y-2 rounded-full">
              <SiRedux className="h-20 w-20 text-purple-500" />
              <p className="font-bold text-xl 00 transition-all duration-200">
                ReduxJS
              </p>
              <p className="text-md font-semibold 00 transition-all duration-200">
                Redux for highly efficient state management
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col group space-y-2 rounded-full">
              <DiJavascript className="h-20 w-20 bg-clip-text text-pink-600" />
              <p className="font-bold text-xl  transition-all duration-200">
                RecoilJS
              </p>
              <p className="text-md font-semibold  transition-all duration-200">
                Recoil for high perfomance and development friendly state
                management
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col group space-y-2 rounded-full">
              <SiGraphql className="h-20 w-20 text-pink-600" />
              <p className="font-bold text-xl  transition-all duration-200">
                GraphQL
              </p>
              <p className="text-md font-semibold  transition-all duration-200">
                GraphQL for more efficient data fetching to reduce API costs
              </p>
            </div>
            <div className="text-center flex justify-center items-center flex-col group space-y-2 rounded-full">
              <SiJavascript className="h-20 w-20 text-blue-500" />
              <p className="font-bold text-xl  transition-all duration-200">
                TypeScript
              </p>
              <p className="text-md font-semibold  transition-all duration-200">
                TS for big production ready website development
              </p>
            </div>
          </Carousel>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Offer;
