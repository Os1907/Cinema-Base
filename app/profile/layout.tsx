'use client'
import React, {  useEffect, useState } from 'react'
import { getToken, getUserFav, getUserInfo } from '../Utilities/apiUser';
import MainHome from '../_Components/MainHome/MainHome';
import { usePathname , useRouter , useSearchParams } from 'next/navigation'
import Sections from '../_Components/Sections/Sections';
import { Iuser, MovieData, resultsMovie } from '../Utilities/Interface/interfaces';
import { Movie } from '../explore/[id]/page';
import Link from 'next/link';
interface Iprop {
  children?: React.ReactNode;
}
export default function Layout({ children }:Iprop) {
  let pathnName : string=usePathname()
  let token = pathnName.slice(9)
  // console.log(token)
    const [info, setInfo] = useState<Iuser>()
    const [movies, setMovies] = useState<MovieData>()
  async function User_Info(){
    const userInfo = await getUserInfo(localStorage.getItem('session_id')).then(data => setInfo(data))
     const userMovies = await getUserFav(localStorage.getItem('session_id')).then(data => setMovies(data))
    
  }
  
  
  // getUserFav
  // console.log(info)
  useEffect(()=> {
    if( localStorage.getItem('session_id')){
      User_Info()
    }
  },[])

  return (
    <>
    <div className='min-h-screen bg-main  overflow-hidden '>
        {/* <MainHome/> */}
        <div className="pt-24">
{/* iso_639_1: "ar"
iso_3166_1: "EG" */}
        <h2 className="text-center bg-gradient-to-r from-yellow-200 to-green bg-clip-text text-transparent transition-all  text-7xl font-bold">
        {info?.username.toUpperCase()}
        </h2>
        <div className="flex justify-center items-center  text-green mt-4  gap-2">

        <p className=" glass px-3 py-1" >
        # {info?.id}
        </p> 
        <p className=" glass px-3 py-1">
         {info?.iso_3166_1}
        </p>
        <p className=" glass px-3 py-1">
         {info?.iso_639_1}
        </p>
       
        </div>
        </div>
        <div className='mt-4 lg:mx-24 mx-4 flex justify-center items-center  gap-x-3'>
          <Link href={'/profile/fav_movie'}>
          <div className=' '>
             
             <button className=" text-xl rounded-full py-2 px-20 font-medium bg-green text-main hover:bg-main hover:text-green transition-all hover:border-green  hover:border">Movies</button>
          </div>
          </Link>
          <Link href={'/fav_movie'}>
          <div className=' '>
             
             <button className="text-xl rounded-full py-2 px-20 font-medium bg-green text-main hover:bg-main hover:text-green transition-all hover:border-green  hover:border">Series</button>
          </div>
          </Link>

        </div>
          <div className="grid grid-cols-12 ">

            <div className="col-span-12">
             {children}
              {/* <Sections data ={movies?.results} title='Favortie movie' /> */}
            </div>

          </div>
    </div>
    
    
    </>
  )
}
