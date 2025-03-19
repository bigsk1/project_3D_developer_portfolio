import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { bigsk1 } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Website = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Visit my</p>
        <h2 className={`${styles.sectionHeadText}`}>Website</h2>
      </motion.div>

      <div className='w-full flex flex-col items-center mt-10'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mb-8'
        >
          Check out my personal website for AI | Tech | HomeLab | Crypto | Docker and more 🚀
        </motion.p>
        
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className='bg-tertiary p-5 rounded-2xl w-full md:w-4/5 lg:w-3/4 xl:w-2/3'
        >
          <div className='relative w-full h-[350px] overflow-hidden rounded-lg'>
            <img
              src={bigsk1}
              alt='bigsk1.com website'
              className='w-full h-full object-cover rounded-2xl'
            />
            <div className='absolute inset-0 flex flex-col justify-end items-center p-8 bg-gradient-to-t from-black/70 to-transparent'>
              <h3 className='text-white font-bold text-[24px] mb-2'>bigsk1.com</h3>
              <a 
                href="https://bigsk1.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-tertiary px-5 py-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              >
                Visit Website
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Website, "website"); 