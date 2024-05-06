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
    Autoplay({ playOnInit: true, delay: 3000 })
  ])
  return (
    <div  className="embla overflow-hidden   relative z-50" ref={emblaRef}>
      <div className="embla__container flex   ">
        
        
        {
          data?.map((item: {})=> <div key={ typeof item === 'string' ? item : (item as any).id} className="embla__slide  flex-[0_0_15%] sm:flex-[0_0_13%] lg:flex-[0_0_8%] mx-2 hover:pb-2     hover:scale-105 transition-all  hover:rounded-2xl "><div className='flex-col items-center flex justify-center'>
        {
          typeof item === 'string' ? item : (item as any).profile_path ? <Image src={`https://image.tmdb.org/t/p/w500//${typeof item === 'string' ? item : (item as any).profile_path}`} alt={ typeof item === 'string' ? item : (item as any).name} width={100} height={150} className='  border-2   bg-gradient-to-l from-green to-yellow-300   w-full  h-[5%] border-green  lg:h-[2%]  glass  my-2'/> : <div className='glass w-full skeleton my-2  h-20  lg:h-40 flex items-center xl:h-44  justify-center '>
          </div>
        }
        
            <div className='flex flex-col items-center w-full  '>
              <p className='text-green font-semibold text-[10px]  lg:text-[12px] text-center  transition-all'>
                  {typeof item === 'string' ? item : (item as any).name}
              </p>
              <p className='text-green font-normal text-[10px]  lg:text-[12px] text-center  transition-all'>
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
