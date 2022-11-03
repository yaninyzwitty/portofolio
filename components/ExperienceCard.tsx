import React from 'react'
// https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img
        initial={{ y: -100, opacity: 0}}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{once: true }}
        src="https://scontent.fnbo13-1.fna.fbcdn.net/v/t1.6435-9/86671199_616498839148541_4102848864774520832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeErWcvXTEBVSdNI-uWnNG6wbxz3QuPGhsVvHPdC48aGxdAKj7Xz3PIMcl_NqKCeLJcJ776llV2MKJnO9NYk5Mdv&_nc_ohc=9FT_zTBc2P0AX9nTO5T&_nc_ht=scontent.fnbo13-1.fna&oh=00_AfDF07_Ti_TG0kFyWYGNdMZReU7MrnV0UdapNvuCQ_DNbw&oe=6383BC41"
        alt=''
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" 
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light '>CEO of Witty clan</h4>
            <p className='font-bold text-2xl mt-1'>WItty fam</p>
            <div className='flex space-x-2 my-2'>
                <img
                className='h-10 rounded-full items-center' 
                src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" 
                alt="" />
                <img
                className='h-10 w-10 rounded-full' 
                src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" 
                alt="" />
                <img
                className='h-10 rounded-full' 
                src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" 
                alt="" />
            </div>
        
        <p className='uppercase py-5 text-gray-300'>Started work on ... - Ended ..</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
        </ul>
        </div>
    </article>
  )
}

export default ExperienceCard