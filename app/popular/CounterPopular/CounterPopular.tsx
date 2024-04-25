'use client'
import { Link } from "next-view-transitions"

import React, { useState } from 'react'
import { TbArrowBigLeftLinesFilled, TbArrowBigRightLinesFilled } from 'react-icons/tb' 

export default function CounterPopular(props:any) {
    let pageCount: number = props?.value
  const [rateCount, setrateCount] = useState(pageCount+1)
  const [decress, setdecress] = useState(pageCount-1)
     
    
  return (
    <>
    <div className='flex justify-center items-center  w-full  relative z-50   '>
     {
            decress >= 1 ? <Link  href={`/popular/${decress}`}  scroll={true}>
                    <TbArrowBigLeftLinesFilled 
                    className='text-green text-2xl cursor-pointer animate-pulse inline'/>
            <p className='text-sm cursor-pointer inline  mx-2 font-bold bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent '>
            Perv 
                    </p>
                    </Link>
                    : ""
        } 
                        <p className='text-base lg:text-2xl mx-2 font-bold bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent '>
                        {pageCount}
                        </p>
                <Link  href={`/popular/${rateCount}`}  scroll={true}>
                <p className='text-sm cursor-pointer inline  mx-2 font-bold bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent '>
                            Next 
                        </p>
                        <TbArrowBigRightLinesFilled 
                        className='text-green text-2xl cursor-pointer animate-pulse inline'/>
                        </Link>
                        </div>
    </>
  )
}

