import SkillsCard from "./SkillsCard";
// import { Marquee } from "./Marquee";

import { RiBracesFill } from "react-icons/ri";
import { FaRegCircleDot } from "react-icons/fa6";
import { BsHexagon } from "react-icons/bs";
import { LuCommand } from "react-icons/lu";
// const names = [
//   "HTML",
//   "CSS",
//   "Javascript ES6",
//   "Java",
//   "C++",
//   "Python",
//   "CSharp",
//   "Redux ToolKit",
//   "Bootstrap",
//   "CSS Modules",
//   "Styled Component",
//   "Framer Motion",
//   "GitHub",
//   "RESTful API",
//   "SQL Server",
//   "React",
//   "TypeScript",
//   "Tailwind CSS",
//   "Motion",
//   "Next.js",
//   "shadcn/ui",
//   "Vite",
  
// ];

const Languages = [
  "HTML",
  "CSS",
  "Javascript ES6",
  "Java",
  "C++",
  "Python",
  "CSharp",
];
const FrameWork = ["React", "Redux ToolKit"];
const Tools = ["GitHub", "RESTful API", "SQL Server"];
const Style = [
  "Tailwind CSS",
  "Bootstrap",
  "CSS Modules",
  "Styled Component",
  "Framer Motion",
];
const cards = [
  {
    id: 1,
    icon: <RiBracesFill className="skill-icon" />,
    title: "Languages",
    items: Languages,
    subtitle: "The foundation of everything I build.",
  },
  {
    id: 2,
    icon: <FaRegCircleDot className="skill-icon" />,

    title: "Framework",
    items: FrameWork,
    subtitle: "Ecosystems I navigate with confidence.",
  },
  {
    id: 3,
    icon: <LuCommand className="skill-icon" />,
    title: "Tools & Other",
    items: Tools,
    subtitle: "The workflow essentials that keep things running.",
  },
  {
    id: 4,
    icon: <BsHexagon className="skill-icon" />,
    title: "Style",
    items: Style,
    subtitle: "The foundation of everything I build.",
  },
];
const Skills = () => {
  return (
    <div id="skills" className="c-space section-spacing">
      <h1 className="text-heading">Skills</h1>
      <p className="text-center my-5 text-[#b3b3b3]">
        The tools and technologies I work with to bring ideas to life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
        {cards.map((card) => (
          <SkillsCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            items={card.items}
          />
        ))}
      </div>
      <div className="pt-5 w-[80%] mx-auto">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        {/* <Marquee
          className="flex items-center justify-center gap-4 overflow-hidden"
          velocityFactor={0.05}
          children={names.map((name) => (
            <span
              className=" text-[10px] font-bold  py-3 rounded-md gap-1.5 text-[#9e9e9e] "
              key={name}
            >
              <span className="mx-3 text-muted-foreground/30">•</span>
              {name}
            </span>
          ))}
        /> */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      </div>
    </div>
  );
};

export default Skills;
