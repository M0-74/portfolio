

const SkillsCard = ({ icon, title, subtitle, items = [] }) => {
  return (
    <div
      className="group border border-white/20 
       rounded-xl cursor-pointer hover:bg-white/[0.01]
      hover:border-indigo-200/40 
     hover:shadow-[0_0_20px_rgba(120,130,255,0.18)]"
    >
      <div className="flex items-center mb-4 ">
        <div
          className="flex items-center justify-center shrink-0 overflow-hidden text-3xl m-5 
          group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
             duration-500 rounded-md "
        >
          {icon}
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-[14px] font-semibold pb-1">{title}</h3>
          <p className="text-[10px] text-neutral-400">{subtitle}</p>
        </div>
      </div>
      <div
        className="h-px w-full bg-gradient-to-r from-transparent 
      via-neutral-700 to-transparent"
      />
      <div className="flex flex-wrap items-center gap-3 p-5">
        {items.map((item) => (
          <span
            key={item}
            className="text-[12px] font-bold flex items-center justify-center border border-[#3e3e3e] px-3 py-0.5 rounded-md gap-1.5 text-[#9e9e9e] "
          >
            <span className="w-1 h-1 rounded-full bg-gray-600  duration-300" />
            {item}
          </span>
        ))}
      </div>

     
    </div>
  );
};

export default SkillsCard;
