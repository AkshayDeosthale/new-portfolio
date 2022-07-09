import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Offer from "../components/Offer";
import { useState } from "react";

const Home: NextPage = () => {
  const [location, setlocation] = useState("");
  console.log(location);

  return (
    <motion.div className="min-h-screen w-full md:w-screen flex flex-col space-y-10 justify-center items-center bg-cover bg-[url('/wp2.webp')] bg-fixed">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full ">
        <Header location={location} />
      </div>

      <div
        className=" h-auto md:h-screen w-full flex flex-col space-y-6  md:justify-center md:items-center"
        id="about"
        onFocus={() => setlocation("about")}
      >
        <Hero />
        <Description />
      </div>
      <div
        className="  w-full h-auto md:h-screen flex flex-col space-y-6 justify-center "
        id="projects"
        onFocus={() => setlocation("projects")}
      >
        <Projects />
      </div>
      <div
        className=" h-auto md:h-screen flex  w-full justify-center items-center"
        id="offer"
        onFocus={() => setlocation("offer")}
      >
        <Offer />
      </div>
      <div
        className=" h-auto md:h-screen flex flex-col space-y-6 justify-center items-center"
        id="contact"
      >
        contact
      </div>
    </motion.div>
  );
};

export default Home;
