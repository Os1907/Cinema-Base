'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { ItemType } from '@/app/Utilities/Interface/interfaces'



const CastCarousel = (props: { data: ItemType[] }) => {
  const {data} = props
  const [emblaRef] = useEmblaCarousel({ loop: true } ,[
    Autoplay({ playOnInit: true, delay: 3000 })
  ])
  return (
    <>
    <div className='w-full relative font-semibold lg:font-bold z-10 lg:mx-24 mx-4 mt-5  '>
        <h3 className='text-start text-white   text-3xl lg:text-5xl  my-3 uppercase'>
          <span className=' text-4xl lg:text-6xl'>|</span>  Movie Cast
        </h3>
      </div>
    <div  className="embla overflow-hidden   relative z-50" ref={emblaRef}>
      <div className={data.length > 15 ? "embla__container flex    " : "embla__container flex  lg:justify-center  "}>
        
        
        {
          data?.map((item: ItemType)=> item.profile_path === null ? null :   <div key={ typeof item === 'string' ? item : (item as any).id } className="embla__slide  flex-[0_0_12%] sm:flex-[0_0_12%] lg:flex-[0_0_6%] mx-2 justify-center items-center ">
            <div className='flex-col items-center flex justify-center  '>
        {
          typeof item === 'string' ? item : (item as any).profile_path ? <Image src={`https://image.tmdb.org/t/p/w500//${typeof item === 'string' ? item : (item as any).profile_path}`} alt={ typeof item === 'string' ? item : (item as any).name} width={80} height={130} className='  border-2 rounded-3xl    w-full  h-[3%] border-green  lg:h-[1%]  glass  my-2'/> : <div className='glass w-full skeleton my-2  h-20  lg:h-40 flex items-center xl:h-44  justify-center '>
          </div>
        }
        
            <div className='flex flex-col items-center w-full'>
              <p className='text-green font-semibold text-[9px]  lg:text-[12px] text-center  transition-all'>
                  {typeof item === 'string' ? item : (item as any).name}
              </p>
              <p className='text-green font-normal text-[8px]  lg:text-[10px] text-center  transition-all'>
                  {typeof item === 'string' ? item : (item as any).character}
              </p>
            </div>
            </div>
         </div>
         )
        }
        



       
       
        
       
      </div>
    </div>
    </>
  )
}
export default CastCarousel
