'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Link } from 'next-view-transitions'

interface PropType  {
  data : []
}

const CastCarousel: React.FC<PropType> = (props,{params}:any) => {
  const {data} = props
  const [emblaRef] = useEmblaCarousel({ loop: true } ,[
    Autoplay({ playOnInit: true, delay: 2000 })
  ])
  return (
    <div  className="embla overflow-hidden  relative z-50" ref={emblaRef}>
      <div className="embla__container flex pb-20  pt-5 ">
        
        
        {
          data?.map((item: {})=> <div key={ typeof item === 'string' ? item : (item as any).id} className="embla__slide  flex-[0_0_25%] md:flex-[0_0_20%] lg:flex-[0_0_13%] mx-4 hover:shadow-green hover:shadow-xl hover:bg-green hover:pb-2 hover-Cast group  rounded-3xl hover:scale-105 transition-all  hover:rounded-2xl "><div className='flex-col items-center flex justify-center'>
        
          <Image src={`https://image.tmdb.org/t/p/w500//${typeof item === 'string' ? item : (item as any).profile_path}`} alt={ typeof item === 'string' ? item : (item as any).name} width={100} height={150} className='skeleton rounded-full border-2  border-green  bg-gradient-to-l from-green to-yellow-300  w-16 h-24 lg:w-28 lg:h-44'/>
            <div className='flex flex-col items-center w-full  '>
              <p className='text-green font-semibold text-[10px]  lg:text-sm text-center group-hover:text-main transition-all'>
                  {typeof item === 'string' ? item : (item as any).name}
              </p>
              <p className='text-green font-normal text-[10px]  lg:text-sm text-center group-hover:text-main transition-all'>
                  {typeof item === 'string' ? item : (item as any).character}
              </p>
            </div>
            </div>
         </div>)
        }
        



        {/* {
          data?.genres.map((item: string | object)=> <div key={ typeof item === 'string' ? item : (item as any).id} className="embla__slide  mx-1">
          <Link href={`/explore/1-${typeof item === 'string' ? item : (item as any).name}`}>
          <div className='shadow-green  shadow-lg bg-gradient-to-r from-green cursor-pointer to-yellow-200 lg:px-10 px-5 py-4 lg:h-16 h-10 items-center rounded-2xl flex justify-center transition-all   hover:bg-gradient-to-r hover:from-green hover:to-yellow-200'>
            <p className='text-main font-semibold lg:text-xl text-sm'>
            {typeof item === 'string' ? item : (item as any).name}
            </p>
          </div>
          </Link>
        </div> )
        } */}
       
       
        
       
      </div>
    </div>
  )
}
export default CastCarousel
