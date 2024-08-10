'use client'
import React, { useEffect, useState } from 'react';
import { genre } from '../Utilities/apis';
import Link from 'next/link';
import { Igenre } from '../Utilities/Interface/interfaces';


interface Igen{
    id: number ,
        name: string
}
interface Result {
    genres:Igen[]
}

export default  function ExploreParent(props: Igenre) {
    const [media, setmedia] = useState<Result>();
    const fetchGenre =  async() => {
       const data = await genre(`${props.type === "Movies" ? "movie" : "tv"}`);
       setmedia(data)
    }
    useEffect(() => {
        fetchGenre()
    },[])

    return (
        <>
            <h3 className='lg:mx-24 mx-4 text-start text-white uppercase text-3xl lg:text-5xl font-semibold lg:font-bold mb-5 lg:my-10 relative z-50'>
                <span className='text-4xl lg:text-6xl'>|</span> Choose your type
            </h3>
            <div className='relative z-50 flex mx-4 lg:mx-24 items-center gap-x-2 overflow-scroll scrollbar-hide'>
                {media?.genres?.map((item:Igen) => (
                    <div key={item.id} className='bg-white borderGlass rounded-full flex items-center px-4 lg:px-10 py-1 min-w-max'>
                        <Link href={`explore/${item?.id}-${item?.name?.replace(/ /g, '-')}-${props.type === "Movies" ? "movie" : "tv"}`}>
                            <p className='text-black text-center text-sm lg:text-lg'>
                                {item?.name}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
