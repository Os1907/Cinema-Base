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

    
        <div className='w-full absolute lg:top-0    z-[1]  h-screen flex justify-center'>
        <div  className="embla overflow-hidden w-full  relative z-50" ref={emblaRef}>
      <div className="embla__container md:flex  hidden  ">
        {
          cover?.backdrops?.map((item: any) => <div key={item?.file_path} className="embla__slide  flex-[0_0_100%]">
          <Image src={`https://image.tmdb.org/t/p/original/${item?.file_path}`} alt='movies' width={1000} height={350} className='w-full   ' />
          <div className='absolute w-full bottom-0 bg-gradient-to-t from-main  to-[#fff0] h-20 z-[51]  '>
          </div>
          </div>


        )}
      </div>
       <div className="embla__container flex  md:hidden  ">
        {
          cover?.posters?.map((item: any) => <div key={item?.file_path} className="embla__slide   flex-[100%_0_0]">
          <Image src={`https://image.tmdb.org/t/p/original/${item?.file_path}`} alt='movies' width={1000} height={350} className='w-full  ' />
          <div className='absolute w-full bottom-0 bg-gradient-to-t from-main via-main  to-[#fff0] h-[50%] z-[55]  '>
          </div>
          </div>


        )}
      </div>
      </div>
      

        </div>
        
     
        </div>
    
    </>
  )
}
export default Bg