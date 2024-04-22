'use client'
import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import bg from '../../../../public/Images/bg.png'

// import icon from './../../../../public/Images/Logo.png'
import Image from 'next/image'
import Link from 'next/link'

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
        <div className='bg-gradient-to-t from-green to-main w-full  h-screen fixed top-0 left-0 z-[100] flex justify-center items-center slideInLeft flex-col'>
        <Image src={bg} alt='' className='absolute h-full top-0  z-[0] opacity-45 child w-full '/>

            <ul className="menu menu-vertical px-1 text-xl text-center mt-24">
      <li 
      onClick={()=>{
        hidePage()
      }}
       className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link href='home'>Home</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }}
       className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'> <Link href='news'>News</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link href='podcasts'>Podcasts</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link href='resources'>Resources</Link></li>
            <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link href='contact'>Contact Us</Link></li>
            </ul>
    <div className=' flex items-end mt-28 '>

    {/* <Image src={icon} alt="" className='w-28' /> */}
    </div>

    </div> : <div className={display ? 'hidden':'bg-gradient-to-t duration-1000 from-green to-main transition-all w-[0%] h-screen absolute top-0 left-[-50px] z-40  justify-center items-center flex slide-out-right flex-col'}>
            {/* <ul className="menu menu-vertical px-1 text-xl text-center transition-all duration-75  mt-28">
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-[#141414] focus:text-white   hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg' } ><Link href='home'>Home</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg' }> <Link href='news'>News</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg' }><Link href='podcasts'>Podcasts</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg' }><Link href='resources'>Resources</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg' }><Link href='contact'>Contact Us</Link></li>
    </ul> */}
    <div className=' flex items-end mt-28 '>
    {/* <Image src={icon} alt="" className='w-28 ' /> */}
    </div>

    </div> 
    }
    </div>
    
    
    
    </>
  )
}
