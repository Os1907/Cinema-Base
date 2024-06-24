'use client'
import HamburgerMenu from './Hamburger/HamburgerMenu'
import NavCenter from './NavCenter/NavCenter'
import Link from 'next/link'
import {  useCallback, useEffect, useRef, useState } from 'react'

export default function Navbar() {
  
  const [scrollPosition, setScrollPosition] = useState(0);


  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  },[setScrollPosition])
  const scrollRef=useRef<any>() 

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

      if (scrollPosition > 0) {
        scrollRef.current.classList.remove("relative")
        scrollRef.current.classList.add("fixed" , "top-0"   , "non-Round" , "green-bottom" )
    }
    if (scrollPosition == 0){
        scrollRef.current.classList.remove("fixed" , "top-0"  , "green-bottom" )
    
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[scrollPosition])
  
  return (
    <>
<div ref={scrollRef}  className="navbar bg-main  z-[100] fixed ">
  <div className="navbar-start w-full lg:w-[50%] justify-between ">
    <div className='flex justify-start  '>
   <Link href={'/'} className='z-50' scroll={true}>
     <p className='hover:shadow-green hover:shadow-2xl  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent font-extrabold text-2xl lg:ml-28  ml-5'>
      Cinema Base
    </p>
    </Link> 
    </div>
    <HamburgerMenu/>
  </div>
  <NavCenter/>
</div>








    
    
    
    
    </>
  )
}
