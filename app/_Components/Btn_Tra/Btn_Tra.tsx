import { Itralier } from '@/app/Utilities/Interface/interfaces'
import React from 'react'
import { MdSlowMotionVideo } from 'react-icons/md'
interface Iprop{
    url: Itralier
}
export default function Btn_Tra({url}:Iprop) {
  // console.log(url)
  return (
    <>
    <div className=' mBlur  border mBlur  borderGlass rounded-3xl py-3 px-5 lg:px-10  hover:shadow-black group hover:shadow-2xl transition-all hover:scale-105'>

                  <a target="_blank" href={`https://www.youtube.com/watch?v=${url?.key}`} className=' flex flex-col gap-y-3 items-center     justify-center '>
                    <p className='  text-white text-[12px] lg:text-sm font-semibold   '>
                      <MdSlowMotionVideo className='text-green text-2xl inline  mx-1 ' />
                      Watch Trailer
                    </p>
                  </a>

                </div>
    
    </>
  )
}
