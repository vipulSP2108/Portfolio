import React, { useRef, useState } from "react";
import Cards from './Cards';
import { sampleDataSkills } from "../Data/sampleDataSkills";
import { motion } from "framer-motion";

function Skills(props) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const [visibleType, setVisibleType] = useState(null);

  const handleTypeClick = (type) => {
    setVisibleType(visibleType === type ? null : type);
  };

  const uniqueTypes = [...new Set(sampleDataSkills.map(item => item.type))];

  return (
    <div className='relative  h-screen w-full cursor-grab'>
      {/* Background */}
      <div className='h-full w-full'>
        <div className='p-[100px] w-full font-bold flex justify-center text-zinc-600 text-2xl'>Proficiencies.</div>
        <h1 className='absolute font-extrabold text-[220px] text-zinc-900 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Savvy</h1>
      </div>

      {/* Upper Background */}
      <div className='p-10 absolute top-0 left-0 h-full w-full overflow-hidden gap-5'>
        {/* <div className="p-10 flex h-full w-full align-middle justify-center flex-wrap gap-5"> */}
          <div ref={ref1} className="p-10 w-full h-1/2 flex flex-wrap mb-3 justify-center">
            {uniqueTypes.map((type, index) => (
              <motion.div
                drag
                dragConstraints={ref1}
                dragElastic={0.2}
                whileHover={{ zIndex: 10, opacity: 100, scale: 1.1 }}
                key={index}
                onClick={() => handleTypeClick(type)}
                className="absolute overflow-hidden h-[260px] w-[195px] rounded-xl backdrop-blur-lg bg-black/80 border border-white/40 text-white flex items-center cursor-pointer"
                style={{
                  // top: `calc(130px)`,
                  zIndex: uniqueTypes.length - index, // Set z-index dynamically
                  left: `${index * 70}px`, // Set left position dynamically
                }}
              >
                <div className="w-0 mb-1 absolute transform -rotate-90 origin-bottom-left bottom-0 right-[18%] font-extrabold text-3xl uppercase">{type}</div>
                <div className="absolute flex flex-col h-full w-[18%] right-0">
                  {sampleDataSkills.filter(item => item.type === type).map((item, index) => (
                    <div key={index} className={`${item.bgColor} flex-grow flex items-center justify-center`}>
                      <img src={item.logo} alt="Logo" className="h-20 w-20 object-contain mx-auto select-none pointer-events-none" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div ref={ref2} className="p-10 w-full h-1/2 flex flex-wrap gap-3 justify-center cursor-grab">
            {sampleDataSkills.filter(item => item.type === visibleType).map((item, index) => (
              <Cards key={index} index={index} data={item} reference={ref2} />
            ))}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Skills;

