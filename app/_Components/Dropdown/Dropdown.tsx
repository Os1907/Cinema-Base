'use client'

import { genre } from '@/app/Utilities/apis'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Iprop {
    type: string
}
interface Igen{
    id: number ,
        name: string
}
interface Result {
    genres:Igen[]
}

export default function Dropdown(props: Iprop) {
    const [genres, setGenres] = useState<Result>()

    const media = async () => {
        try {
            const data = await genre(`${props.type === "movie" ? "movie" : "tv"}`)
            setGenres(data)
        } catch (error) {
            console.error("Error fetching genres:", error)
        }
    }

    useEffect(() => {
        media()
    }, [])

    return (
        <div className='absolute top-6 lg:top-10 xl:top-12 right-0 z-50 flex justify-end lg:mx-24 mx-4'>
            <details className="dropdown mt-14">
                <summary className="backdrop-blur-3xl borderGlass uppercase cursor-pointer  bg-[#00000023] font-medium rounded-full px-2 md:px-5 lg:px-10 py-2 text-white text-[10px]">
                    Choose your type
                </summary>
                <ul className="menu dropdown-content mBlur borderGlass font-medium bg-[#00000023] uppercase rounded-3xl w-full px-2 md:px-5 lg:px-10 py-1 mt-[3px] z-[1] shadow text-white  overflow-scroll scrollbar-hide ">
                    {genres?.genres?.map((item: Igen) => (
                        <li key={item.id} className='min-w-max  '>
                            <Link href={`${item.id}-${item.name.replace(/ /g, '-')}-${props.type === "movie" ? "movie" : "tv"}`}>
                                <p className='text-white hover:scale-110 transition-all text-center text-[10px] '>
                                    {item.name}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    )
}
