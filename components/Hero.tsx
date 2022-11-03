import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from "../components/Background"
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
          `Hi, the names: IAN"," Guy who loves coffee.tsx", "${pageInfo?.name} `
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt=''
        className="relative rounded-full w-32 h-32 mx-auto object-cover" 
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{ text }</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href="#about">
          <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
          <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
          <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
          <button className='heroButton'>Projects</button>
          </Link>
        </div>
        </div>

    </div>
  )
}

export default Hero