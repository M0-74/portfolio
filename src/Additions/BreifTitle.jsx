import React from 'react'

const BreifTitle = ({title}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="relative group mb-10 text-center border bg-[#131f3a] border-[#1e293b] tracking-[1.5px]
                      px-5.5 py-1.25 rounded-full w-fit uppercase font-bold text-[#68768d] 
                      text-[9px] hover:border-blue-400 hover:shadow-[0_0_10px_rgba(77,163,255,0.1)]transition  duration-300">
                <span className="absolute top-1/2 left-3 -translate-y-1/2 bg-blue-500
                         h-1 w-1 rounded-full text-[10px] animate-ping transition-all duration-300"/>
                {title}
            </div>
        </div>
    )
}

export default BreifTitle