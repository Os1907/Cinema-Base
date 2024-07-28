import React from 'react'
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md';
import { IoTv } from 'react-icons/io5';
import { TbSmartHome } from 'react-icons/tb';
export default function SmallNav() {
  return (
    <>
    <div className="fixed  -translate-x-1/2 left-1/2  lg:hidden bottom-4 w-2/3 z-[999999] ">
        <ul className="flex gap-x-2 justify-center  shad ow-2xl shad ow-green rounded-full text-[12px] font-semibold uppercase ">
          <div className="absolute top-0 h-full w-full rounded-full  bg-green"></div>
          <li className="relative  rounded-full  ">
            <Link href="/">
              <p className="p-3  font-semibold text-main z-50 relative">
                <TbSmartHome className="inline mb-1" /> Home
              </p>
            </Link>
          </li>
          <li className="relative  rounded-full">
            <Link href="/explore/1">
              <p className="p-3  font-semibold text-main z-50 relative">
                <MdTravelExplore className="inline mb-1" />  Search
              </p>
            </Link>
          </li>
          <li className="relative  rounded-full">
            <Link href="/shows">
              <p className="p-3  font-semibold text-main z-50 relative">
                <IoTv className="inline mb-1" /> Series 
              </p>
            </Link>
          </li>
        </ul>
      </div>
    
    
    
    
    
    
    </>
  )
}
