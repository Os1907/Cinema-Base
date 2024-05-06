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
    
    // console.log(cover.backdrops)
    const [emblaRef] = useEmblaCarousel({ loop: true } ,[
      Autoplay({ playOnInit: true, delay: 5000 })
    ])
    return (
      <>
      <div className="absolute w-full h-screen">

    <Image src={bg} alt='' className='absolute  top-20  z-[3] opacity-10  ' />
        {/* <Image src={bg} alt='' className='absolute h-auto lg:top-[-35%] top-[50%] z-[3] opacity-10 -rotate-180  ' /> */}
        <div className='absolute w-full top-0 bg-gradient-to-b from-main red-700  to-[#fff0] h-20 z-[2]  '>
        </div>
        <div className='absolute w-full bottom-[2%] bg-gradient-to-t from-main red-700  to-[#fff0] h-20 z-[2]  '>
        </div>
        
        <div className='w-full absolute lg:top-0    z-[1]  h-screen flex justify-center'>
        <div  className="embla overflow-hidden w-full  relative z-50" ref={emblaRef}>
      <div className="embla__container lg:flex  hidden  ">
        {
          cover?.backdrops?.map((item: any) => <div key={item?.file_path} className="embla__slide  flex-[0_0_100%]">
          <Image src={`https://image.tmdb.org/t/p/w1280/${item?.file_path}`} alt='movies' width={1000} height={350} className='w-full   blr opacity- 25' />
          <div className='absolute w-full bottom-0 bg-gradient-to-t from-main  to-[#fff0] h-20 z-[51]  '>
          </div>
          </div>


        )}
      </div>
       <div className="embla__container flex  lg:hidden  ">
        {
          cover?.posters?.map((item: any) => <div key={item?.file_path} className="embla__slide relative  flex-[100%_0_0]">
          <Image src={`https://image.tmdb.org/t/p/w1280/${item?.file_path}`} alt='movies' width={1000} height={350} className='w-full   blr opacity- 25' />
          <div className='absolute w-full bottom-0 bg-gradient-to-t from-main via-main  to-[#fff0] h-[50%] z-[55]  '>
          </div>
          </div>


        )}
      </div>
      </div>
      

          {/* <Image src={`https://image.tmdb.org/t/p/w1280/${cover}`} alt='movies' width={1000} height={350} className='w-full   blr opacity- 25' /> */}
        </div>
        
        <div className='absolute w-full bottom-[0%] bg-gradient-to-t from-main to-[#fff0] h-screen z-[3]  '>
        </div>
        <div className='absolute w-full left-[-25%] bg-gradient-to-r from-main to-[#fff0] h-screen z-[2]  '>
        </div>
        {/* <div className='absolute w-full bottom-[50%] bg-gradient-to-t from-main via-red-600 to-[#fff0] h-screen z-[2]  '>
        </div>
        <div className='absolute w-full bottom-[-1%] bg-gradient-to-t from-main to-[#fff0] h-screen z-[2]  '>
      </div> */}
        </div>
    
    </>
  )
}
export default Bg