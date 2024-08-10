import Image, { StaticImageData } from 'next/image';
import React, { Children } from 'react'
import f from '../../../public/Images/b2.png'
interface Iprop {
    children?: React.ReactNode;
    background?:string 
  }
export default function MainBack({children ,background }:Iprop , ) {
    return (
        <>
            <div  className='relative pb-14 min-h-screen'>
                <Image src={`${background}`} alt="" width={1920} height={1080} className='w-full h-full object-cover fixed' />
                <div className='absolute top-0 w-full h-full naVglass'>
                </div>
                {children}
                <div className='fixed w-full h-full  top-0 bg-gradient-to-t from-main to-[#ffffff00] z-3  '>
                </div>
            </div>















        </>
    )
}
