'use client';
import React, { useEffect, useState } from 'react'
import {  getUserInfo } from '../Utilities/apiUser';
import { Iuser} from '../Utilities/Interface/interfaces';
import Image from 'next/image'
import Link from 'next/link';
import Button from '../_Components/Button/Button';
import { usePathname, useRouter } from 'next/navigation';
interface Iprop {
  children?: React.ReactNode;
}
export default function Layout({ children }: Iprop) {
  let pathnName : string=usePathname()
const router = useRouter();

  const [info, setInfo] = useState<Iuser>()
  async function User_Info() {
    const userInfo = await getUserInfo(localStorage?.getItem('session_id')).then(data => setInfo(data))
  }

  const btnCaption1: string = " Series"
  const btnCaption2: string = " Movies"

  useEffect(() => {
    if (localStorage?.getItem('session_id')) {
      User_Info()
    }
    else{
      router.push('/profile/no_account')
    }
  }, [pathnName])

  return (
    <>
      <div className='min-h-screen bg-main relative  overflow-hidden '>
        <div className="pt-6  absolute top-5 lg:top-0 flex justify-center items-center flex-col  z-50 w-full">
        {
        
        info ? <>  <Image src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${info?.username}`} alt={`${info?.username} Avatar`} width={50} height={50} className='rounded-full w-24 lg:w-36 p-3  backdrop-blur-3xl borderGlass ' />
          <h2 className="  mt-2 text-center text-white transition-all text-2xl md:text-4xl lg:text-7xl font-bold">
            {info?.username.toUpperCase()}
          </h2>
        <div className="backdrop-blur-3xl borderGlass rounded-3xl flex justify-center text-[12px] lg:text-sm items-center  text-green mt-4 gap-1  lg:gap-2">
             <p className="  px-3 py-1" >  # {info?.id} </p>
                <p className=" px-3 py-1">  {info?.iso_3166_1} </p>
                <p className=" px-3 py-1">   {info?.iso_639_1}   </p>
          </div>  </>: null
      }
         


          <div className='mt-2 lg:mt-4 lg:mx-24 mx-4 flex justify-around items-center backdrop-blur-3xl borderGlass py-1 px-20 rounded-full  gap-x-3'>

            {
              info ? <> <Link href={'/profile/fav_movie'}>
                <div className=' '>
                <button  className={pathnName === '/profile/fav_movie' ? 'backdrop-blur-3xl text-white borderGlass rounded-full w-full px-10 py-2 hover:px-8 transition-all active:outline-none focus-within:outline-none focus:outline-none active:border-0 focus-within:border-0 focus:border-0' :' text-white w-full px-10 py-2 hover:px-8 transition-all active:outline-none focus-within:outline-none focus:outline-none active:border-0 focus-within:border-0 focus:border-0'}>
                {btnCaption2}
                    </button>

                </div>
              </Link>
                <Link href={'/profile/fav_tv'}>
                  <div className=' '>
                    <button  className={pathnName === '/profile/fav_tv' ? 'backdrop-blur-3xl text-white borderGlass rounded-full w-full px-10 py-2 hover:px-8 transition-all active:outline-none focus-within:outline-none focus:outline-none active:border-0 focus-within:border-0 focus:border-0' :' text-white w-full px-10 py-2 hover:px-8 transition-all active:outline-none focus-within:outline-none focus:outline-none active:border-0 focus-within:border-0 focus:border-0'}>
                    {btnCaption1}
                    </button>

                  </div>
                </Link></> : null
            }


          </div>
        </div>
        <div className="grid grid-cols-12 ">

          <div className="col-span-12 pb-16">
            {children}
          </div>

        </div>
       ء

        







      </div>


    </>
  )
}
