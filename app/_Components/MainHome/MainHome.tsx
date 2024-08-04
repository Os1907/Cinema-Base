import { Link } from 'next-view-transitions'
import React from 'react'
import icon from '../../../public/Images/icon.png'
import Image from 'next/image'

export default function MainHome() {
  return (
    <>
    <header className=' relative li ner lg:pt-32 py-10    w-full overflow-hidden '>
        <div className='lg:mx-28 mx-4 relative z-50 flex justify-center items-center  flex-col  cover'>
          <h1 className=' bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent cursor-pointer xl:text-9xl lg:text-8xl text-5xl md:text-7xl py-2 font-extrabold transition-all '> <span className=''>Cinema</span>  Base</h1>

          <p className='shadow-green shadow-2xl text-white uppercase lg:text-base  text-[12px] font-medium'>
            All information about your night movie
          </p>
     {/* <Image src={icon} alt='texture2' className='absolute w-40 right-0   lg:top-[50%] top-10 z-[1] float ' />
                <Image src={icon} alt='texture2' className='absolute w-28 left-20  top-0 z-[1] float  rotate-[45deg]   ' />
          */}
     </div>

      </header>
    
    
    
    
    
    
    </>
  )
}
