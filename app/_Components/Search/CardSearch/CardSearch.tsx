import { prop, resultsMovie } from '@/app/Utilities/Interface/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosStar } from 'react-icons/io'


export default function CardSearch({data}: prop) {

    return (
        <>
      <div className='    absolute top-[55px] z-[51] rounded-3xl  '>
      <div className="absolute top-0 h-full w-full   maxBlur rounded-3xl   borderGlass"></div>

            {
               data?.slice(0, 5)?.map((item) =>  <> 
               {
                      item.poster_path != null ?
                      <Link href={item.media_type === "tv" ? `/shows/${item.id}` : `/movie/${item.id}`}>
                    <div className=' flex gap-x-2 px-3 rounded-b-3xl border-b border-[#ffffff1f] py-2 items-center relative z-[55] '>
                        <Image src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} width={50} height={50} alt={`${item?.original_title || item?.name}`} className='rounded-lg z-[55]   ' />
                        <div className="flex flex-col justify-center items-start flex-wrap gap-x-2 z-[55] ">
                            <p className='text-white text-[12px]'> {item?.original_title || item?.name}</p>
                            <div className="flex items-center justify-center gap-x-1">
                                <p className='text-white text-[12px] '><IoIosStar className='text-yellow-400  mb-1 inline' />  {item?.vote_average?.toString().slice(0, 3)}</p>
                                <p className='text-white text-[12px] '> | {item?.release_date?.toString().slice(0, 4) || item?.first_air_date?.toString().slice(0, 4)} </p>
                            </div>
                        </div>
                    </div> </Link>
                    : null } </>
                )
            }

           </div> 

        </>
    )
}
