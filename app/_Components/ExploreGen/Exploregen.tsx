
import React from 'react'
import Link from 'next/link'
import { genre } from '@/app/Utilities/apis'
interface Iprop{
        type: string
}
export default async function ExploreGenre( props:Iprop) {
    const media = await genre(`${props.type === "Movies" ? "movie" : "tv"}`)

    return (
        <>

            <h3 className='lg:mx-24 mx-4 text-start text-white uppercase   text-3xl lg:text-5xl font-semibold lg:font-bold  mb-5 lg:my-10 relative z-50 '>
                <span className=' text-4xl lg:text-6xl'>|</span>  Choose your type
            </h3>
            <div className='relative z-50 flex mx-4 lg:mx-24   items-center gap-x-2 overflow-scroll scrollbar-hide'>
                {media?.genres.map((item:{id:number , name :string}) => <>
                    <div className='bg-white borderGlass rounded-full flex  items-center px-4 lg:px-10 py-1 min-w-max '>
                        <Link href={`explore/${item?.id}-${item?.name?.replace(/ /g, '-')}-${props.type === "Movies" ? "movie" : "tv"}`}>
                            <p className='text-black text-center text-sm lg:text-lg '>
                                {item?.name}
                            </p>
                        </Link>
                    </div>
                </>
                )}
            </div>
            





        </>
    )
}
