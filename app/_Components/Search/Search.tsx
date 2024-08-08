'use client'
import React, {  useState } from 'react'
import { multiBySearch } from '../../Utilities/apis'
import {  resultsMovie } from '@/app/Utilities/Interface/interfaces';
import { FaSearch } from 'react-icons/fa';
import CardSearch from './CardSearch/CardSearch';
export interface Movie {
  adult: boolean;
}
export default function Search() {
  // Delay function 


  // ========={...Dates}=============
  const [data, setData] = useState<resultsMovie[]>([]);
  const [pageNumber, setPageNumber] = useState(1)

  // ======={...Functions}====

  let userSearch = async (e: string) => {
    const response = await multiBySearch(e, pageNumber)
    setData(response.results)
    if (e === undefined) {
      setData([])
    }
  }




  return (
    <>
    <div className='relative'>

      <label className="glass borderGlass  rounded-4xl flex items-center  px-3 relative z-50">
        <FaSearch className=" inline  text-white" />
        <input onKeyUp={(e: any) => {
          userSearch(e.target.value)
        }} type="text"
          placeholder="Search Movie or Series"
          className=" p-2 bg-transparent   rounded-4xl text-white text-sm placeholder:text-sm placeholder:font-semibold back-drop-2xl  focus:outline-none active:outline-none  active:rounded-none focus-within:outline-none placeholder:text-white" />
      </label>
              <CardSearch  data={data} />
    </div>
    
  

    </>
  )
}
