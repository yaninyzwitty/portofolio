import React from 'react'
import { motion } from "framer-motion"

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft ? -200: 200,
            opacity:0
        }} 
        transition={{
            duration: 1
        }}
        whileInView={{
            opacity: 1, x:0
        }}
        className="rounded-full border-gray-500 object-cover h-20 w-20 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://avatars.githubusercontent.com/u/17177659?s=280&v=4" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 md:w-28 md:h-28 w-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full '>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>

  )
}

export default Skill