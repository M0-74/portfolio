// import React, { useRef } from "react";
import { GoArrowDown } from "react-icons/go";
import { LuOctagon } from "react-icons/lu";
import { BiLogoVisualStudio } from "react-icons/bi";
import { CgShapeRhombus } from "react-icons/cg";
import { FaRegDotCircle } from "react-icons/fa";
import BreifTitle from "../../Additions/BreifTitle";

const DetailsInfo = [
  ["ROLE", "Front-End Developer"],
  ["EDUCATION", "Bachelor of Science"],
  ["University", "Beni Suef University"],
  ["Location", "Beni Suef, Egypt"],
];
const cardDetails = [
  {
    id: 1,
    icon: <LuOctagon />,
    title: "Clean Code",
    subtitle: "Readable, maintainable code with a focus on structure and best practices."
  },
  {
    id: 2,
    icon: <FaRegDotCircle />,
    title: "Eye for Design",
    subtitle: "Every pixel and interaction matters — spacing, motion, and consistency."
  },
  {
    id: 3,
    icon: <CgShapeRhombus />,
    title: "Fast Learner",
    subtitle: "Quick to adapt to new tools and frameworks, turning challenges into growth."
  },
  {
    id: 4,
    icon: <BiLogoVisualStudio />,
    title: "Problem Solver",
    subtitle: "Breaking down complex problems and building practical, elegant solutions."
  },
]
const About = () => {
  return (
    <div className="c-space section-spacing " id="about">
      <div>
      <BreifTitle title="About Me"/>
      </div>
      <h2 className="text-heading mb-10 uppercase" >About <span className="text-blue-500">Me</span></h2>

      <p className="text-[#5e5e5e] text-center min-w-2 mb-10">
        A front-end developer who turns ideas into polished digital
        <br /> experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 my-20">

        <div className="space-y-5 text-left">
          <p className="text-[#5e5e5e]">
            Hey, I'm<span className="text-white mx-2"> Mohamed Salah  — </span>  a
            front-end developer based in Beni Suef, Egypt. I'm graduated in
            2024 from fculty of  Science at Beni Suef University.
          </p>
          <p className="text-[#5e5e5e]">
            I specialise in building fast, interactive interfaces with{" "}
            <span className="text-white mx-2">React.</span> Clean code and
            thoughtful design go hand in hand for me —   every detail matters.
          </p>
          <p className="text-[#3e3e3e]">
            Always learning and expanding my skill set, I'm a self-motivated
          </p>
        </div>


        <div className='relative'>
          <div className="overflow-hidden md:mt-0 rounded-xl">
            <div className="w-full mt-10 md:mt-0 shrink-0">
              <div className="overflow-hidden h-fit rounded-3xl border border-white/10 ">
                {DetailsInfo.map(([l, v]) => (
                  <div key={l} className="group relative flex justify-between items-center
                                    py-4 border-b border-white/5 hover:bg-[#223250]
                                    px-3 md:px-8 transition-colors cursor-pointer
                                    duration-200">
                    <span className="absolute inset-y-0 left-0 w-1 opacity-0 bg-blue-500 transition-opacity group-hover:opacity-100" />
                    <span className="text-[8px] font-bold uppercase tracking-[1.5px] text-slate-600">{l}</span>
                    <span className="text-[14px] text-slate-300 transition-colors group-hover:text-white">{v}</span>
                  </div>
                ))}
                <div className="group relative flex py-5 items-center justify-between
                                px-3 md:px-8 transition-colors hover:bg-[#223250]">
                  <span className="absolute inset-y-0 left-0 w-1 bg-blue-500 opacity-0
                                   transition-opacity group-hover:opacity-100 duration-200" />
                  <span className="text-[8px] font-bold uppercase tracking-[1.5px] text-slate-600">Status</span>
                  <span className="flex items-center gap-2 text-[10px] tracking-[1.2px] uppercase text-emerald-400">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-ping" />
                    Available for Projects
                  </span>
                </div>
              </div>
            </div>
            <button
              className="flex justify-center items-center mt-5 p-3 w-full 
              text-[#5e5e5e] border border-[#1e1e1e]
              cursor-pointer hover:bg-whirte/20 duration-300 group
             rounded-md text-[15px] font-bold uppercase gap-2 tracking-[1.5px]
             hover:text-white hover:scale-[1.01]
            "
            >
              Resume
              <span className="border border-[#1e1e1e] rounded-md p-1 group-hover:-translate-y-1 duration-300">
                <GoArrowDown className="group-hover:text-white" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 my-10" />

      <div className="my-20">
        {/* 1box */}
        <p className="text-[10px] uppercase tracking-[1.5px] text-[#5e5e5e] font-semibold ">
          What defines my work
        </p>
        <div className="mt-5">
          {/* 1box */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardDetails.map((card) => (
              <div key={card.title} className="group relative rounded-2xl border border-white/10  p-6 duration-300
                 hover:border-white/20 shrink-0">
                <div className="mb-4 grid size-10 place-items-center rounded-lg border border-white/20  group-hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
                   ">
                  {card.icon}
                </div>
                <h3 className="font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/60">{card.subtitle}
                </p>
              </div>
            ))}
          </div>


        </div>




      </div>

    </div>
  );
};

export default About;
