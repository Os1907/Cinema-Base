import { Itralier } from '@/app/Utilities/Interface/interfaces'
import React from 'react'
import { SiGradleplaypublisher } from 'react-icons/si'
interface Iprop{
    url: Itralier
}
export default function Btn_Tra({url}:Iprop) {
  return (
    <>
    <div className=' mBlur  border mBlur  borderGlass rounded-3xl py-3 px-10  hover:shadow-green group hover:shadow-2xl transition-all hover:scale-105'>

                  <a target="_blank" href={`https://www.youtube.com/watch?v=${url?.key}`} className=' flex flex-col gap-y-3 items-center     justify-center '>
                    <p className=' bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent text-[12px] lg:text-sm font-semibold   '>
                      <SiGradleplaypublisher className='text-green text-2xl inline  mx-2 ' />
                      Watch Trailer
                    </p>
                  </a>

                </div>
    
    </>
  )
}
