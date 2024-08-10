'use client'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { genreItem, genre } from '../../Utilities/apis'
import Sections from '../../_Components/Sections/Sections'
import { MovieData, resultsMovie } from '@/app/Utilities/Interface/interfaces';
import MainBack from '@/app/_Components/mainBack/mainBack';
import { useRouter, usePathname } from 'next/navigation'
import Dropdown from '@/app/_Components/Dropdown/Dropdown';

interface Iprop {
  params: {
    id: number
  }
}
export interface Movie {
  adult: boolean;
}
export default function Explore({ params }: Iprop) {

  const pathName = usePathname();
  const path = pathName.slice(9).split("-")
  const typeOfMedia = path[path.length - 1]
  const title = path[path.length - 2]
  // const media = await genre(typeOfMedia)
  // ========={...Dates}=============
  const { ref, inView } = useInView()
  const [data, setData] = useState<resultsMovie[]>([]);
  const [pageNumber, setPageNumber] = useState(1)
  const nav: string = "shows"

  // console.log(data)

  // let randomNumber = Math.floor(Math.random() * data.length);
  let background = `https://image.tmdb.org/t/p/original/${data[4]?.backdrop_path}`

  // ======={...Functions}====

  let generic = async () => {
    // genreItem
    const response = await genreItem(typeOfMedia, params.id, pageNumber)
    setData(response.results)
  }


  async function incrementData() {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + 1;
      genreItem(typeOfMedia, params.id, newPageNumber)
        .then((dataResponse) => {
          setData(data.concat(dataResponse.results));
        })
        .catch((err) => console.log(err));
      return newPageNumber;
    });
  }
  useEffect(() => {

    if (inView) {
      incrementData();
    }

  }, [inView]);

  useEffect(() => {
    generic()
  }, [])


  return (
    <>
      <MainBack background={background}>
        <div className="pt-12 lg:pt-8">
          <Dropdown type={typeOfMedia}/>
          <Sections data={data} title={title} nav={typeOfMedia === "tv" ? nav : undefined} />
        </div>
        {data?.length === 0 ? "" : <div ref={ref} className='flex justify-center items-center relative z-50'>
          <svg className='w-[10%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#fffff" stroke="#fffff" strokeWidth="2" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0"></animate></circle><circle fill="#ffffff" stroke="#ffffff" strokeWidth="2" opacity=".8" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0.05"></animate></circle><circle fill="#ffffff" stroke="#ffffff" strokeWidth="2" opacity=".6" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".1"></animate></circle><circle fill="#ffffff" stroke="#ffffff" strokeWidth="2" opacity=".4" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".15"></animate></circle><circle fill="#ffffff" stroke="#ffffff" strokeWidth="2" opacity=".2" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".2"></animate></circle></svg>
        </div>}


      </MainBack>



    </>
  )
}


{/* <div className='bg-main relative lg:pt-20 pt-4    '>
        <section className=' min-h-screen overflow-y-hidden  lg:pt-10 pt-5  pb-2 relative z-10  '>
          <div className=' '>
            <div className=' flex justify-start my-5 lg:mx-24 mx-4'>
              <p className='uppercase text-white lg:text-5xl text-2xl font-extrabold transition-all '>
               | Explore your  Movie or Series
              </p>
            </div>
            <div className='lg:mx-28 mx-4 z-[100] relative'>
              <input onKeyUp={(e: any) => {
                userSearch(e.target.value)
                setSearch(e.target.value)
              }} type="text" placeholder="Search Movie or Series" className=" input border-white text-white text-sm lg:text-lg border-b border-t-0 border-l-0 border-r-0  w-full bg-transparent  rounded-none focus:outline-none focus:rounded-2xl  focus:border-white active:rounded-none focus-within:outline-none placeholder:text-white" />
            </div>
            <Sections data={data} title={title} />
            {data.length === 0 ? "" : <div ref={ref} className='flex justify-center items-center'>
              <svg className='w-[10%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#ffffff" stroke="#00DC82" stroke-width="2" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0"></animate></circle><circle fill="#00DC82" stroke="#00DC82" stroke-width="2" opacity=".8" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0.05"></animate></circle><circle fill="#00DC82" stroke="#00DC82" stroke-width="2" opacity=".6" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".1"></animate></circle><circle fill="#00DC82" stroke="#00DC82" stroke-width="2" opacity=".4" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".15"></animate></circle><circle fill="#00DC82" stroke="#00DC82" stroke-width="2" opacity=".2" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".2"></animate></circle></svg>
            </div>}
          </div>
        </section>
      </div> */}