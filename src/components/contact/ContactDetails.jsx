import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineShareLocation } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import {FaWhatsapp } from "react-icons/fa"

const ContactDetails = () => {
  return (
    <div className="">
      <p>
        i'm available for freelance work and full time positions. However, if
        you have any other requests or questions, don't hesitate to contact me.
      </p>

      {/* Email */}
      <div
        className="group flex justify-between items-center border border-white/10
       rounded-2xl p-5 mt-6 hover:bg-white/5 duration-500 cursor-pointer"
      >
        <div className="flex justify-between items-center gap-3">
          <MdOutlineEmail className="text-neutral-500 group-hover:scale-[1.2] duration-300" />
          <div className="flex flex-col">
            <span className="text-sm text-[#575757] text-[10px] font-bold tracking-[2px]">Email</span>
            <a
              href="moosalah839@gmailcom"
              target="_blank"
              rel="noopener"
              className="text-[#818181] group-hover:text-white duration-300"
            >
              Moosalah839@gmail.com
            </a>
          </div>
        </div>
        <FaArrowTrendUp className="text-neutral-500" />
      </div>
      {/* Phone */}
      <div
        className="group flex justify-between items-center border border-white/10
       rounded-2xl p-5 mt-6 hover:bg-white/5 duration-500 cursor-pointer"
      >
        <div className="flex justify-between items-center gap-3">
          <FaWhatsapp  className="text-neutral-500 group-hover:scale-[1.2] duration-300" />
          <div className="flex flex-col">
            <span className="text-sm text-[#575757] text-[10px] font-bold tracking-[2px]">Phone</span>
            <a
              href="https://wa.me/201149296490"
              target="_blank"
              rel="noopener"
              className="text-[#818181] group-hover:text-white duration-300"
            >
              +20 1149296490
            </a>
          </div>
        </div>
        <FaArrowTrendUp className="text-neutral-500" />
      </div>

      {/* Github */}
      <div
        className="group flex justify-between items-center border border-white/10
       rounded-2xl p-5 mt-6 hover:bg-white/5 duration-500 cursor-pointer"
      >
        <div className="flex justify-between items-center gap-3">
          <CiLink className="text-neutral-500 group-hover:scale-[1.2] duration-300" />
          <div className="flex flex-col">
            <span className="text-sm text-[#575757] text-[10px] font-bold tracking-[2px]">Github</span>
            <a
               href="https://github.com/M0-74"
              target="_blank"
              rel="noopener"
              className="text-[#818181] group-hover:text-white duration-300"
            >
              M0-74
            </a>
          </div>
        </div>
        <FaArrowTrendUp className="text-neutral-500" />
      </div>

      {/* Location */}
      <div
        className="group flex justify-between items-center border border-white/10
       rounded-2xl p-5 mt-6 hover:bg-white/5 duration-500 cursor-pointer"
      >
        <div className="flex justify-between items-center gap-3">
          <MdOutlineShareLocation className="text-neutral-500 group-hover:scale-[1.2] duration-300" />
          <div className="flex flex-col">
            <span className="text-sm text-[#575757] text-[10px] font-bold tracking-[2px]">Location</span>
            <a
              href=" "
              className="text-[#818181] group-hover:text-white duration-300"
            >
              Beni Suef, Egypt
            </a>
          </div>
        </div>
        <FaArrowTrendUp className="text-neutral-500" />
      </div>

      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      <p className="uppercase text-[10px] font-bold text-center flex items-center justify-center gap-2 text-[#2f8d51] tracking-widest">
        <span className="w-1 h-1 rounded-full bg-green-500 animate-ping duration-200"></span>
        AVAlable For New Project
      </p>
    </div>
  );
};

export default ContactDetails;
