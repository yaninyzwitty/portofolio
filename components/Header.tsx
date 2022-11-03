import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
import { Social } from '../typings';
// r({socials}: Props) {
//     return (

type Props = {
    socials: Social[]
}

function Header({ socials}: Props) {
  return (
    <header className='sticky top-0 p-2 flex items-start justify-between max-w-3xl mx-auto z-20 xl:items-center'>
        
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,

        }} 
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
           {/* Social icons */}
           {/* {socials.map((social) => console.log(social._id))} */}
             <SocialIcon url="https://www.quora.com/profile/Ian-Mwangi-85"
            
            fgColor='grey' 
            bgColor='transparent'
            /> 
            {/* https://web.facebook.com/ianinyz.witty */}
            <SocialIcon url="https://twitter.com/yaninyzwitty" 
            fgColor='grey' 
            bgColor='transparent'
            />
             <SocialIcon url="https://web.facebook.com/ianinyz.witty" 
            fgColor='grey' 
            bgColor='transparent'
            />
           
          
        
            
        </motion.div>
   
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{ duration: 1.5 }}
         className='flex flex-row items-center text-gray-300 cursor-pointer'>
            
      
            
          {/* <Link href="#contact">   */}
        <SocialIcon
        className='cursor-pointer'
         network='email' 
        fgColor='grey' 
        bgColor='transparent'
        />
        {/* </Link> */}
        <Link href="#contact">
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </Link>
        </motion.div>
        
    </header>
  )
}

export default Header