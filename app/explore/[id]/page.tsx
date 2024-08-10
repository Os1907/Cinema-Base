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
