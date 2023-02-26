/** @format */

import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaCodepen,
  FaCss3,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left'
        src='https://images.unsplash.com/photo-1487009805257-5ed2eb9f10a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'
        alt='Cover Image'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>
            Hi ! <br /> I'm Tejaswee Gaur
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 font-semibold font-serif text-gray-800'>
            I'm a
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Web Developer",
                2000,
                "Business Analyst",
                2000,
                "Tech Enthusiast !!!!!!!",
                2000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a
              href='https://www.linkedin.com/in/tejaswee-gaur/'
              title='Linked In'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href='https://github.com/TejasweeGaur'
              title='Git Hub'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub size={30} />
            </a>
            <a
              href='https://codepen.io/TejasweeGaur'
              title='Code Pen'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaCodepen size={30} />
            </a>
            <a
              href='https://cssbattle.dev/player/tejaswee_gaur'
              title='CSS Battle'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaCss3 size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
