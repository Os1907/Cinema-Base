'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { memo, useState } from 'react'
import { IoTv } from "react-icons/io5";
import { BiSolidMovie } from "react-icons/bi";


 function SearchPaig() {
    let pathnName : string =usePathname()
  const [name, setname] = useState(pathnName)
  return (

    <>
    <div className='lg:mx-24 mx-4 bg-green p-1  rounded-3xl flex justify-center flex-[50%,50%] gap-4 mt-6  z-[100]'>

      <div className={pathnName === "/explore/1" ? "transition-all duration-1000 bg-gradient-to-r from-main to-main2 rounded-3xl  w-full py-3 hover:from-main2 hover:to-main group cursor-pointer":"group cursor-pointer bg-gradient-to-r from-green to-green rounded-3xl  w-full py-3 hover:from-main2 hover:to-main"}>
      <Link href={'/explore/1'} scroll={true} >
        <p className={pathnName === "/explore/1" ?'transition-all text-center text-sm md:text-base lg:text-xl font-bold text-green ':"text-center text-sm md:text-base lg:text-xl font-bold text-main group-hover:text-green"}><BiSolidMovie className='inline mb-1' />Movies</p>
      </Link>
      </div>
      <div className={pathnName === "/tvshows/1" ? "transition-all duration-1000 bg-gradient-to-r from-main to-main2 rounded-3xl  w-full py-3 hover:from-main2 hover:to-main group cursor-pointer":"group cursor-pointer bg-gradient-to-r from-green to-green rounded-3xl  w-full py-3 hover:from-main2 hover:to-main"}>
      <Link href={'/tvshows/1'} scroll={true}>
        <p className={pathnName === "/tvshows/1" ?'transition-all   text-center text-sm md:text-base lg:text-xl font-bold text-green ':"text-center text-sm md:text-base lg:text-xl font-bold text-main group-hover:text-green"}> <IoTv className='inline mb-1'/> TV Shows</p>
      </Link>
      </div> 
    </div>
    
    
    </>
  )
}

export default memo(SearchPaig)