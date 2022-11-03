import React from 'react'
// https://scontent.fnbo13-1.fna.fbcdn.net/v/t1.6435-9/86671199_616498839148541_4102848864774520832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeErWcvXTEBVSdNI-uWnNG6wbxz3QuPGhsVvHPdC48aGxdAKj7Xz3PIMcl_NqKCeLJcJ776llV2MKJnO9NYk5Mdv&_nc_ohc=9FT_zTBc2P0AX9nTO5T&_nc_ht=scontent.fnbo13-1.fna&oh=00_AfDF07_Ti_TG0kFyWYGNdMZReU7MrnV0UdapNvuCQ_DNbw&oe=6383BC41
// https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80
import { motion } from "framer-motion"


type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }} 
    whileInView={{
        opacity: 1,
    }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:px-6'>
            About
        </h3>


        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x:0 }}
        viewport={{ once: true }}
        src="https://scontent.fnbo13-1.fna.fbcdn.net/v/t1.6435-9/86671199_616498839148541_4102848864774520832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeErWcvXTEBVSdNI-uWnNG6wbxz3QuPGhsVvHPdC48aGxdAKj7Xz3PIMcl_NqKCeLJcJ776llV2MKJnO9NYk5Mdv&_nc_ohc=9FT_zTBc2P0AX9nTO5T&_nc_ht=scontent.fnbo13-1.fna&oh=00_AfDF07_Ti_TG0kFyWYGNdMZReU7MrnV0UdapNvuCQ_DNbw&oe=6383BC41"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'

        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a 
            <span className='underline decoration-[#F7AB0A]/40'> little</span>{" "} background</h4>
            <p className='text-base'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                
            </p>

        </div>


    </motion.div>
  )
}

export default About