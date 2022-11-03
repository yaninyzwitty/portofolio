import React from 'react'
import { motion } from "framer-motion"

type Props = {}
const projects = [1,2,3,4,5]
function Projects({}: Props) {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{ opacity:1}} transition={{duration: 1.5}} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='relative w-full flex scrollbar-thin overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
           {projects.map((project, i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '><motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2}} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} 
            src="https://cdn.concreteplayground.com/content/uploads/2021/11/Netflix-Australia-games-1_supplied-1920x1440.jpg" alt="" />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>
                    Case study {i+1} of {projects.length}:
                    </span>{" "}
                     NETFLIX-CLONE
                    </h4>
                    <p className='text-lg text-center md:text-left '>
                        Netflix 2.0 is an app that you log in. Do Authentication with google. It has a beautiful homescreen with all the movies looking like netflix.
                        Netflix 2.0 is an app that you log in. Do Authentication with google. It has a beautiful homescreen with all the movies looking like netflix.
                        Netflix 2.0 is an app that you log in. Do Authentication with google. It has a beautiful homescreen with all the movies looking like netflix.


                    </p>
            </div>
            
            </div>

           ))} 
            {/* projects */}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12' />
        </motion.div>
 
  )
}

export default Projects



        {/* 
            {projects.map((project, i) => (
                <div className=> */}

                    {/* <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYbE8FnGeFAmTJ3Vxx4j3tLlnY4reu6pcdg&usqp=CAU" 
                    alt="" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'><span className='underline decoration-[]'>Case study of {i + 1} OF {projects.length}</span>{" "}: NETFLIX CLONE</h4>
                        <p className='text-lg text-center md:text-left'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,

                        </p>
                    </div>
                </div>
            ))} */}

        {/* </div> */}