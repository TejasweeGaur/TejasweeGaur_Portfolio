/** @format */

import React from "react";
import ProjectItems from "./ProjectItems";
import netflixImg from "../assets/netflix.jpg";
import cryptoImg from "../assets/crypto.jpg";
import propertyImg from "../assets/property.jpg";
import twitchImg from "../assets/twitch.jpg";

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 pb-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] py-2'>
        Projects
      </h1>
      <p className='text-center py-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum animi
        dignissimos aliquid fugiat. Quibusdam perspiciatis hic eos officia quos
        eum, assumenda iusto tenetur nostrum omnis deserunt commodi consequuntur
        alias sint.
      </p>
      <div className='grid sm:grid-cols-2 gap-12 px-4'>
        <ProjectItems img={cryptoImg} title='Crypto App' />
        <ProjectItems img={propertyImg} title='Property App' />
        <ProjectItems img={netflixImg} title='Netflix App' />
        <ProjectItems img={twitchImg} title='Twitch App' />
      </div>
    </div>
  );
};

export default Projects;
