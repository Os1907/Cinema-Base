import { StaticImageData } from 'next/image';
import React, { Children } from 'react'
import f from '../../../public/Images/b2.png'
interface Iprop {
    children?: React.ReactNode;
    background?:string 
  }
export default function MainBack({children ,background }:Iprop , ) {
    return (
        <>
            <div style={{ backgroundImage: `url(${background}) ` }} className='w-full bg-cover bg-center bg-fixed relative pb-14 min-h-screen'>
                <div className='absolute top-0 w-full h-full backdrop-blur-[8px]'>
                </div>
                {children}
                <div className='fixed w-full h-full  top-0 bg-gradient-to-t from-main to-[#ffffff00] z-3  '>
                </div>
            </div>















        </>
    )
}
