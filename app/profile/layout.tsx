'use client'
import React, {  useEffect, useState } from 'react'
import { getToken, getUserFav, getUserInfo } from '../Utilities/apiUser';
import MainHome from '../_Components/MainHome/MainHome';
import { usePathname , useRouter , useSearchParams } from 'next/navigation'
import Sections from '../_Components/Sections/Sections';
import { Iuser, MovieData, resultsMovie } from '../Utilities/Interface/interfaces';
import { Movie } from '../explore/[id]/page';
import Link from 'next/link';
import Button from '../_Components/Button/Button';
interface Iprop {
  children?: React.ReactNode;
}
export default function Layout({ children }:Iprop) {
  let pathnName : string=usePathname()
  let token = pathnName.slice(9)
  // console.log(token)
    const [info, setInfo] = useState<Iuser>()
    // const [movies, setMovies] = useState<MovieData>()
  async function User_Info(){
    const userInfo = await getUserInfo(localStorage.getItem('session_id')).then(data => setInfo(data))
    //  const userMovies = await getUserFav(localStorage.getItem('session_id') ,"movies").then(data => setMovies(data))
    
  }
  
  const btnCaption1 :string= "Favorite Series"
  const btnCaption2 :string= "Favorite Movies"
 
  useEffect(()=> {
    if( localStorage.getItem('session_id')){
      User_Info()
    }
  },[])

  return (
    <>
    <div className='min-h-screen bg-main relative  overflow-hidden '>
      
      {
      info ? <> <div className="pt-10 absolute top-0  z-50 w-full">
        <h2 className="text-center text-white transition-all text-4xl lg:text-7xl font-bold">
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

        <div className='mt-4 lg:mx-24 mx-4 flex justify-center items-center  gap-x-3'>
          <Link href={'/profile/fav_movie'}>
          <div className=' '>
          <Button value={btnCaption2}/>
             
          </div>
          </Link>
          <Link href={'/profile/fav_tv'}>
          <div className=' '>
          <Button value={btnCaption1}/>
             
          </div>
          </Link>

        </div>
        </div>

          <div className="grid grid-cols-12 ">

            <div className="col-span-12 pb-16">
             {children}
            </div>

          </div>

      </> : <span className="loader mt-20"></span>
      }
      
        
    </div>
    
    
    </>
  )
}
