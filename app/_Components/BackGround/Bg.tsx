import Image from 'next/image'
import React from 'react'
import bg from '../../../public/Images/bg.png'
import blur from '../../../public/Images/bbblurry.svg'

type BgProps = {
    url?: string;
  }
  
  const Bg: React.FC<BgProps> = ({ url }) => {
    const cover = url
    return (
      <>
    
    <Image src={bg} alt='' className='absolute  top-60  z-[2] opacity-10  ' />
        <Image src={bg} alt='' className='absolute h-auto lg:top-[-15%] top-[50%] z-[2] opacity-10 -rotate-180 ' />
        <Image src={blur} alt='' className='absolute h-auto right-[-100%]  lg:right-[-35%] top-0 z-[2]  -rotate-180 ' />
        <div className='absolute w-full top-[-2%] bg-gradient-to-b from-main to-[#fff0] h-screen z-[1]  '>
        </div>
        <div className='w-full absolute lg:top-10 hidden   z-[0]  h-screen lg:flex justify-center'>
          <Image src={`https://image.tmdb.org/t/p/w1280/${cover}`} alt='movies' width={1000} height={350} className='w-full   blur-sm opacity-25 ' />
        </div>
        <div className='absolute w-full bottom-[-1%] bg-gradient-to-t from-main to-[#fff0] h-screen z-[1]  '>
        </div>
    
    </>
  )
}
export default Bg