'use client'
import { Link } from "next-view-transitions"

import React, { useEffect, useState } from 'react'
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx"
import { TbArrowBigLeftLinesFilled, TbArrowBigRightLinesFilled } from 'react-icons/tb' 

export default function CounterPopular(props:any) {
    let pageCount: number = props?.value
  const [rateCount, setrateCount] = useState(pageCount+1)
  const [decress, setdecress] = useState(pageCount-1)
  useEffect(()=>{
    window.scrollTo({top: 0});
},[pageCount])
    
  return (
    <>
    <div className='flex justify-center items-center  w-full  relative z-50   '>
     {
            decress >= 1 ? <Link   href={`/toprate/${decress}`}  scroll={true} className='glass px-3 py-1' >
                     <RxDoubleArrowLeft 
                    className='text-green text-2xl cursor-pointer animate-pulse inline'/>
            <p className='text-sm cursor-pointer inline  mx-1 font-bold text-white '>
            Perv 
                    </p>
                    </Link>
                    : ""
        }             <p className='text-base lg:text-3xl mx-3 font-bold text-white '>
        {pageCount}
        </p>

                <Link  href={`/toprate/${rateCount}`}  scroll={true} className='glass px-3 py-1'>
                <p className='text-sm cursor-pointer inline  mx-1 font-bold text-white '>
                            Next 
                        </p>
                        <RxDoubleArrowRight 
                        className='text-green text-2xl cursor-pointer animate-pulse inline'/>
                        </Link>
                        </div>
    </>
  )
}

