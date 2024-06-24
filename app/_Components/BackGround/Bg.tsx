'use client'
import Image from 'next/image'
import React from 'react'
import bg from '../../../public/Images/bg.png'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type BgProps = {
    url?: any ;
  }
  
  const Bg: React.FC<BgProps> = ({ url }) => {
    const cover  = url
    
    const [emblaRef] = useEmblaCarousel({ loop: true } ,[
      Autoplay({ playOnInit: true, delay: 5000 })
    ])
    return (
      <>
      <div className="absolute w-full h-screen">

    <Image src={bg} alt='' className='absolute  top-20  z-[3] opacity-10  ' />
        <div className='absolute w-full top-0 bg-gradient-to-b from-main red-700  to-[#fff0] h-20 z-[2]  '>
        </div>
        <div className='absolute w-full bottom-[2%] md:bottom-0  bg-gradient-to-t from-main  to-[#fff0] h-20 md:h-44 z-[5]  '>
        </div>
        
        <div className='w-full absolute lg:top-0    z-[1]  h-screen flex justify-center'>
        <div  className="embla overflow-hidden w-full  relative z-50" ref={emblaRef}>
      <div className="embla__container md:flex  hidden  ">
        {
          cover?.backdrops?.map((item: any) => <div key={item?.file_path} className="embla__slide  flex-[0_0_100%]">
          <Image src={`https://image.tmdb.org/t/p/w1280/${item?.file_path}`} alt='movies' width={1000} height={350} className='w-full   blr opacity- 25' />
          <div className='absolute w-full bottom-0 bg-gradient-to-t from-main  to-[#fff0] h-20 z-[51]  '>
          </div>
          </div>


        )}
      </div>
       <div className="embla__container flex  md:hidden  ">
        {
          cover?.posters?.map((item: any) => <div key={item?.file_path} className="embla__slide relative  flex-[100%_0_0]">
          <Image src={`https://image.tmdb.org/t/p/w1280/${item?.file_path}`} alt='movies' width={1000} height={350} className='w-full   blr opacity- 25' />
          <div className='absolute w-full bottom-0 bg-gradient-to-t from-main via-main  to-[#fff0] h-[50%] z-[55]  '>
          </div>
          <div className='absolute w-full bottom-[2%] sm:bottom-[35%] bg-gradient-to-t from-main via-main to-[#fff0] h-64 z-[60]  '>
        </div>
          </div>


        )}
      </div>
      </div>
      

        </div>
        
        <div className='absolute w-full bottom-[0%] bg-gradient-to-t from-main to-[#fff0] h-screen z-[3]  '>
        </div>
        <div className='absolute w-full left-[-25%] bg-gradient-to-r from-main to-[#fff0] h-screen z-[2]  '>
        </div>
      
        </div>
    
    </>
  )
}
export default Bg