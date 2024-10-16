import Image from 'next/image'
import React from 'react'
import bg from '../../../public/Images/bg.png'
import Link from 'next/link';
import { prop } from '@/app/Utilities/Interface/interfaces'
import { IoIosStar } from "react-icons/io";
import Btn_Fav from '../Btn_Fav/Btn_Fav';



export default function Sections(props: prop) {
    const { value, title, nav, component, data , favButton} = props;
    const UrlImages: string = "https://image.tmdb.org/t/p/w500/";
    return (
        <>
            <section className=' min-h-screen     lg:pt-10 pt-5   relative z-10   '>
      <Image src={bg} alt='texture2' className='absolute sm:hidden lg:block opacity-15 top-[30%] z-[1] -rotate-180' />

                <div className='lg:mx-24 mx-4 relative z-10 '>
                    <div className='flex justify-start relative items-center font-semibold lg:font-bold'>

                        {
                            title? <h3 className='text-start text-white text-2xl  md:text-3xl lg:text-5xl  my-3'>
                            <span className=' text-4xl lg:text-6xl'>|</span>  {title?.toUpperCase()}
                        </h3> : null

                        }
                       

                    </div>
                    <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 my-5 gap-x-4 gap-y-6">
                    {
  data?.map((item: any) => (
    item.poster_path != null ? (
      nav ? (
        <div
          key={item.id}
          className="col-span-1  group hover:scale-105 transition-all cursor-pointer relative hover:z-[999999999999] duration-300"
        >
          <Link href={nav ? `/${nav}/${item.id}` : `/movie/${item.id}`}>
            <div className="relative group">
              <Image
                src={UrlImages + item?.poster_path}
                alt={item.original_title || item.original_name}
                width={350}
                height={350}
                className="md:min-h-[350px] skeleton rounded-3xl backdrop-blur-3xl group-hover:shadow-2xl group-hover:shadow-black duration-300"
              />
            </div>
            <div>
              <h3 className="mt-3 ml-3 text-start text-white font-medium lg:text-base text-sm ">
                {item.title || item.name}
              </h3>
              <div className="flex gap-x-1 ml-3 mt-2">
                <IoIosStar className="text-yellow-400 text-xl mb-2" />
                <p className="text-white text-sm font-medium">
                  {item?.vote_average?.toString().slice(0, 3)}
                </p>
                <p className="text-white text-sm font-medium">
                  | {item?.release_date?.toString().slice(0, 4) || item?.first_air_date?.toString().slice(0, 4)}
                </p>
              </div>
            </div>
          </Link>
          {favButton ? <Btn_Fav data={item.id} type="tv" /> : null}
        </div>
      ) : (
        <div
          key={item.id}
          className="col-span-1 group hover:scale-105 transition-all cursor-pointer relative hover:z-[999999999999] duration-300"
        >
          <Link href={item.media_type === "tv" ? `/shows/${item.id}` : `/movie/${item.id}`}>
            <div className="relative">
              <Image
                src={UrlImages + item?.poster_path}
                alt={item.original_title || item.original_name}
                width={350}
                height={350}
                className="md:min-h-[350px] skeleton rounded-3xl backdrop-blur-3xl"
              />
            </div>
            <div>
              <h3 className="mt-3 ml-3 text-start text-white font-medium lg:text-base text-sm ">
                {item.title || item.name}
              </h3>
              <div className="flex gap-x-1 ml-3 mt-2">
                <IoIosStar className="text-yellow-400 text-xl mb-2" />
                <p className="text-white text-sm font-medium">
                  {item?.vote_average?.toString().slice(0, 3)}
                </p>
                <p className="text-white text-sm font-medium">
                  | {item?.release_date?.toString().slice(0, 4) || item?.first_air_date?.toString().slice(0, 4)}
                </p>
              </div>
            </div>
          </Link>
          {favButton ? <Btn_Fav data={item.id} type="movie" /> : null}
        </div>
      )
    ) : null
  ))
}


                    </div>
                    {
                        props?.component
                    }
                </div>
                
            </section>
        </>
    )
}
