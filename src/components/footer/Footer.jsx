import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

const Upper=()=>{
  window.scrollTo({ top: 0, behavior: "smooth" });
  
}
const Footer = () => {
  return (
    <div className="relative my-10 px-10 md:px-0" id="footer">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      <div className="my-10 flex  items-center justify-center gap-2">
        <a href="#home" className="text-[10px] uppercase font-bold tracking-[1.5px] text-neutral-400 hover:text-white duration-200">Home</a>
        <a href="#about" className="text-[10px] uppercase font-bold tracking-[1.5px] text-neutral-400 hover:text-white duration-200">About</a>
        <a href="#projects" className="text-[10px] uppercase font-bold tracking-[1.5px] text-neutral-400 hover:text-white duration-200">projects</a>
        <a href="#contact" className="text-[10px] uppercase font-bold tracking-[1.5px] text-neutral-400 hover:text-white duration-200">Contact</a>
      </div>
      <div className="h-[1px] w-[400px] mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      <div className="mt-10 flex  items-center justify-center gap-2">
        <a
          href="https://github.com/M0-74"
          target="_blank"
          className="border hover:-translate-y-1.5 border-neutral-800 p-3 rounded-md hover:bg-white/20 hover: duration-300  "
        >
          <IoLogoGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mosalah74/"
          target="_blank"
          className="border hover:-translate-y-1.5 border-neutral-800 p-3 rounded-md hover:bg-white/20 hover: duration-300  "
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:moosalah839@gmail.com"
          className="border hover:-translate-y-1.5 border-neutral-800 p-3 rounded-md hover:bg-white/20 hover: duration-300  "
        >
          <AiOutlineMail />
        </a>
      </div>

      <div className="flex items-center justify-between mt-10 text-[10px] font-bold tracking-[1.5px]">
        <p className="text-neutral-500">
          2026 Mohamed Salah, All rights reserved
        </p>
        <button onClick={Upper} className="border border-neutral-500 rounded-md p-3 hover:bg-white/20 duration-200 cursor-pointer">
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default Footer;
