'use client'
import UseTop from '@/app/Hooks/UseTop'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx'

export default function ShowCounter(props:any) {
    let pageCount: number = props?.value
    const [rateCount, setrateCount] = useState(pageCount+1)
    const [decress, setdecress] = useState(pageCount-1)
 const top = UseTop()

  return (
    <>
    <div className='flex justify-center items-center  w-full  relative z-50  py-5 '>
     {
            decress >= 1 ? <Link  href={`/shows/rated/${decress}`} className='glass px-3 py-1'>
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

                <Link  href={`/shows/rated/${rateCount}`} className='glass px-3 py-1'>
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
