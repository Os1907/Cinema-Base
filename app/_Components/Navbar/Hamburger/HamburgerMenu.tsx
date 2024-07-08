'use client'
import React, { memo, useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import bg from '../../../../public/Images/bg.png'
import neon from '../../../../public/Images/bbblurry.svg'

// import icon from './../../../../public/Images/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome } from 'react-icons/fa'
import { MdTravelExplore } from 'react-icons/md'
import { IoTv } from 'react-icons/io5'


 function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false)
    const [display, setdisplay] = useState(true)
    
    function hidePage() {
      setOpen(false)
    }
    let pathnName : string=usePathname()
    const [name, setname] = useState(pathnName)
    if(pathnName == '/'){
      pathnName = '/home'
    } 
    if(pathnName.includes('/shows')){
      pathnName = '/shows'
    }
    if(pathnName.includes('/tvshows/1')){
      pathnName = '/shows'
    }
    // console.log(pathnName)
  return (
    <>
<div className=''>


    <div onClick={()=>setdisplay(false)} className=' w-[50%]  flex justify-end lg:hidden z-[1223213]  fixed  right-0 top-5'>

    <Hamburger toggled={isOpen} toggle={setOpen}  size={20} color='#00dc82'  />
    </div>
   
    </div>
    
    {
        isOpen? 
        <div className=' lg:hidden rounded-full fixed top-14    w-full h-[10vh]   o left-0 z-[100] flex justify-center items-center slide-in-top flex-col  border-green'>
  <div className="absolute top-0  mx-4  borderGlass z-[40] h-full w-full rounded-full left-0 mBlur   "></div>

        <ul className="flex  justify-center  glas No  px-1 z-[100] w-full ">
      <li onClick={()=>{ hidePage()  }} className={pathnName === "/home"  ? "font-semibold text-[12px]   transition-all hover:  rounded-xl px-5    text-main shadow-green shadow-2xl  focus:text-green  hover:border-0 bg-gradient-to-r from-green to-yellow-200   " : "font-semibold text-[12px] transition-all rounded-xl px-5        focus:text-green   bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent"}><Link href='/home' className="rounded-3xl  hover:bg-transparent transition-all hover:border-0 group  " > <FaHome  className={pathnName === "/home"  ? "text-main inline mb-1" :"text-green inline mb-1"}/> Home <div className="bg-gradient-to-r from-green to-yellow-200 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></Link></li>
      <li onClick={()=>{ hidePage()  }} className={pathnName === "/explore/1" ? "font-semibold text-[12px]  transition-all  rounded-xl px-5    text-main shadow-green shadow-2xl  focus:text-green  hover:border-0 bg-gradient-to-r from-green to-yellow-200   " : "font-semibold text-[12px] transition-all rounded-xl px-5        focus:text-green group  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent"}> <Link href='/explore/1' className="rounded-3xl hover:bg-transparent transition-all hover:border-0 ">  <MdTravelExplore  className={pathnName === "/explore/1"  ? "text-main inline mb-1" :"text-green inline mb-1"} /> Search <div className="bg-gradient-to-r from-green to-yellow-200 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></Link></li>
      <li onClick={()=>{ hidePage()  }} className={pathnName === "/shows" ? "font-semibold text-[12px]  transition-all  rounded-xl px-5    text-main shadow-green shadow-2xl  focus:text-green  hover:border-0 bg-gradient-to-r from-green to-yellow-200   " : "font-semibold text-[12px] transition-all rounded-xl px-5        focus:text-green   bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent"}> <Link href='/shows' className="rounded-3xl hover:bg-transparent transition-all hover:border-0 group "> <IoTv  className={pathnName === "/shows"  ? "text-main inline mb-1 mx-1" :"text-green inline mb-1 mx-1"} />TV Shows <div className="bg-gradient-to-r from-green to-yellow-200 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div> </Link></li>
    </ul>
            
    </div> : <></>
    
    }
    
    </>
  )
}

export default memo(HamburgerMenu)