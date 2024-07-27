import React from 'react'
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md';
import { IoTv } from 'react-icons/io5';
export default function SmallNav() {
  return (
    <>
    <div className="fixed _tran slate -translate-x-1/2 left-1/2  lg:hidden bottom-2 w-2/3 z-[999999] ">
        <ul className="flex gap-x-2 justify-center mBlur borderGlass  rounded-full text-[12px] ">
          <li className="relative  rounded-full  ">
            <Link href="/">
              <p className="p-3  font-semibold text-green z-50 relative">
                <FaHome className="inline mb-1" /> Home
              </p>
            </Link>
          </li>
          <li className="relative  rounded-full">
            <Link href="/explore/1">
              <p className="p-3  font-semibold text-green z-50 relative">
                <MdTravelExplore className="inline mb-1" />  Search
              </p>
            </Link>
          </li>
          <li className="relative  rounded-full">
            <Link href="/shows">
              <p className="p-3  font-semibold text-green z-50 relative">
                <IoTv className="inline mb-1" /> Series 
              </p>
            </Link>
          </li>
        </ul>
      </div>
    
    
    
    
    
    
    </>
  )
}
