import React from 'react'
import { SiThemoviedatabase } from "react-icons/si";

export default function Footer() {
  return (
    <>
    
<footer className="bg-gradient-to-b from-main to-main2  w-full border-green border-t ">
  <div className="lg:mx-24  py-8 mx-4">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center sm:items-start flex-col">
      <p className=' bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent font-extrabold text-2xl '>
      Cinema Base
    </p>
   
      </div>
      <div className=' flex flex-col items-center '>

      <p className=" text-center font-medium lg:text-sm text-[12px] text-green mt-0 lg:text-right">
      Developed by : Osama Mohamed. 
      </p>
      <p className='text-green my-1 font-semibold lg:text-sm text-[12px]'>
        Thanks for  <SiThemoviedatabase  className="inline mb-1 "/>
    </p>
      </div>
    </div>
  </div>
</footer>

    
    
    </>
  )
}
