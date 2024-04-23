'use client'
import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import bg from '../../../../public/Images/bg.png'

// import icon from './../../../../public/Images/Logo.png'
import Image from 'next/image'
import { Link } from "next-view-transitions"


export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false)
    const [display, setdisplay] = useState(true)
    
    function hidePage() {
      setOpen(false)
    }
  return (
    <>
<div className=''>


    <div onClick={()=>setdisplay(false)} className=' w-[50%]  flex justify-end lg:hidden z-[1223213]  fixed  right-0 top-2'>

    <Hamburger toggled={isOpen} toggle={setOpen}  size={20} color='#00dc82'  />
    </div>
    {
        isOpen? 
        <div className='bg-main w-full  h-screen fixed top-0 left-0 z-[100] flex justify-center items-center slideInLeft flex-col'>
        <Image src={bg} alt='' className='absolute h-full top-0  z-[0] opacity-15  child w-full '/>

            <ul className="menu menu-vertical px-1 text-xl text-center mt-24 ">
      <li onClick={()=>{ hidePage()  }} className='font-medium  transition-all  rounded-full mt-2    text-green      text-xl '><Link href='/'>Home</Link></li>
      <li onClick={()=>{ hidePage()  }} className='font-medium  transition-all  rounded-full mt-2    text-green      text-xl '><Link href='/explore/1'>Search</Link></li>
      <li onClick={()=>{ hidePage()  }} className='font-medium  transition-all  rounded-full mt-2    text-green      text-xl '><Link href='/series'>Series</Link></li>
      
            </ul>
    </div> : <div className={display ? 'hidden':'bg-main duration-1000 transition-all w-[0%] h-screen absolute top-0 left-[-50px] z-40  justify-center items-center flex slide-out-right flex-col'}>
            
    <div className=' flex items-end mt-28 '>
    {/* <Image src={icon} alt="" className='w-28 ' /> */}
    </div>

    </div> 
    }
    </div>
    
    
    
    </>
  )
}
