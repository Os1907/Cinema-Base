'use client'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import bg from '../../../public/Images/bg.png'
import Image from 'next/image'
import { multiBySearch } from '../../Utilities/apis'
import Sections from '../../_Components/Sections/Sections'
import Navbar from '@/app/_Components/Navbar/Navbar';
interface IId {
  params: {
    id: number
  }
}
export interface Movie {
  adult: boolean;
}
export default function Explore({ params }: IId) {
  // Delay function 
  
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // ========={...Dates}=============
  const { ref, inView } = useInView()
  const [data, setData] = useState<Movie[]>([]);

  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState("")
  const title = ""

  // ======={...Functions}====

  let userSearch = async (e: string) => {
    const response = await multiBySearch(e, pageNumber)
    setData(response.results)
    if (e === undefined) {
      setData([])
    }
  }

  useEffect(() => {
    async function userIncrement(e: string) {
      // await delay(3000);
      setPageNumber(pageNumber + 1)
      const response = await multiBySearch(e, pageNumber)
        .then(async (dataResponse) => {
          setData(data => [...data, ...dataResponse.results]);
        })
        .catch((err) => console.log(err))
    }
    if (inView) {
      userIncrement(search)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])



  return (
    <>
      <div className='lg:pt-20 pt-4 bg-main'>

        <section className=' min-h-screen overflow-y-hidden  bg-main lg:pt-10 pt-5  pb-2 relative z-10  '>
          <Image src={bg} alt='' className='absolute h-auto lg:top-[-30%] top-[50%] z-[2] opacity-10 -rotate-180  ' />
          <div className=' '>
            <div className=' flex justify-center my-5'>
              <p className='uppercase bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent cursor-pointer lg:text-3xl text-2xl font-extrabold transition-all text-center'>
                Explore your  Movie or Series
              </p>
            </div>
            <div className='lg:mx-28 mx-4 z-[100] relative'>
              <input onKeyUp={(e: any) => {
                userSearch(e.target.value)
                setSearch(e.target.value)
              }} type="text" placeholder="Search Movie or Series" className=" input border-green text-green text-sm lg:text-lg border-b border-t-0 border-l-0 border-r-0  w-full bg-transparent  rounded-none focus:outline-none focus:rounded-2xl  focus:border-green active:rounded-none focus-within:outline-none placeholder:text-[#09ff84b2]" />
            </div>
            <Sections data={data} title={title} />
            {data.length === 0 ? "" : <div ref={ref} className='flex justify-center items-center'>
              <svg className='w-[10%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#00DC82" stroke="#00DC82" stroke-width="2" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0"></animate></circle><circle fill="#00DC82" stroke="#00DC82" stroke-width="2" opacity=".8" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0.05"></animate></circle><circle fill="#00DC82" stroke="#00DC82" stroke-width="2" opacity=".6" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".1"></animate></circle><circle fill="#00DC82" stroke="#00DC82" stroke-width="2" opacity=".4" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".15"></animate></circle><circle fill="#00DC82" stroke="#00DC82" stroke-width="2" opacity=".2" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".2"></animate></circle></svg>
            </div>}
          </div>
        </section>
      </div>
    </>
  )
}
