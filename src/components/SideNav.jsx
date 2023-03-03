/** @format */

import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineAppstore,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import "./Sidebar.css";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer'
      />
      {nav ? (
        <div className='navbarExpanded fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            onClick={handleNav}
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer  hover:text-neutral-50  hover:scale-110 ease-in duration-200 hover:bg-gradient-to-r from-cyan-500 to-blue-500 ...'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            onClick={handleNav}
            href='#work'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer  hover:text-neutral-50  hover:scale-110 ease-in duration-200 hover:bg-gradient-to-r from-cyan-500 to-blue-500 ...'
          >
            <AiOutlineAppstore size={20} />
            <span className='pl-4'>Work</span>
          </a>
          <a
            onClick={handleNav}
            href='#projects'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer  hover:text-neutral-50  hover:scale-110 ease-in duration-200 hover:bg-gradient-to-r from-cyan-500 to-blue-500 ...'
          >
            <AiOutlineProject size={20} />
            <span className='pl-4'>Projects</span>
          </a>
          <a
            onClick={handleNav}
            href='#resume'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer  hover:text-neutral-50  hover:scale-110 ease-in duration-200 hover:bg-gradient-to-r from-cyan-500 to-blue-500 ...'
          >
            <BsPerson size={20} />
            <span className='pl-4'>Resume</span>
          </a>
          <a
            onClick={handleNav}
            href='#contact'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer  hover:text-neutral-50  hover:scale-110 ease-in duration-200 hover:bg-gradient-to-r from-cyan-500 to-blue-500 ...'
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
        </div>
      ) : undefined}
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a
            href='#main'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300  hover:text-neutral-50  hover:bg-gradient-to-r from-cyan-500 to-blue-500 ...'
            title='Homepage'
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href='#work'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300  hover:text-neutral-50  hover:bg-gradient-to-r from-cyan-500 to-blue-500 ...'
            title='Work'
          >
            <AiOutlineAppstore size={20} />
          </a>
          <a
            href='#projects'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300  hover:text-neutral-50  hover:bg-gradient-to-r from-cyan-500 to-blue-500 ...'
            title='Projects'
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href='#resume'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300  hover:text-neutral-50  hover:bg-gradient-to-r from-cyan-500 to-blue-500 ...'
            title='Resume'
          >
            <BsPerson size={20} />
          </a>
          <a
            href='#contact'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300  hover:text-neutral-50  hover:bg-gradient-to-r from-cyan-500 to-blue-500 ...'
            title='Contact'
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
