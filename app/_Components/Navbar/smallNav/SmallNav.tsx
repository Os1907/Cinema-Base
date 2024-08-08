import React from 'react'
import Link from 'next/link';
import { IoTv } from 'react-icons/io5';
import { FaHouseCrack } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
export default function SmallNav() {
  return (
    <>
    <div className="fixed  -translate-x-1/2 left-1/2  lg:hidden bottom-4 w-[80%] md:w-[70%] z-[999999] ">
        <ul className="flex gap-x-2 justify-around   rounded-full text-[12px] font-semibold uppercase ">
          <div className="absolute top-0 h-full w-full rounded-full  backdrop-blur-3xl  borderGlass"></div>
          <li className="relative  rounded-full  ">
            <Link href="/">
              <p className="p-3  font-semibold text-white z-50 relative">
                <FaHouseCrack className="inline mb-1" /> Home
              </p>
            </Link>
          </li>
          <li className="relative  rounded-full">
            <Link href="/shows">
              <p className="p-3  font-semibold text-white z-50 relative">
                <IoTv className="inline " /> Series 
              </p>
            </Link>
          </li>
          <li className="relative  rounded-full">
            <Link href="/profile/fav_movie">
              <p className="p-3  font-semibold text-white z-50 relative">
                <CgProfile className="inline " /> Profile 
              </p>
            </Link>
          </li>
        </ul>
      </div>
    
    
    
    
    
    
    </>
  )
}
