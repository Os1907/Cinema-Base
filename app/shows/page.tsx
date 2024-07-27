import Link from 'next/link'
import { TrendSeries, topShows } from '@/app/Utilities/apis'
import React from 'react'
import Sections from '../_Components/Sections/Sections'
import Button from '../_Components/Button/Button'


export default async function page({params}:any) {
    const data = await topShows(params?.id > 0 && !undefined ? params.id : 1)
    const Trend = await TrendSeries()
    // console.log(data);
    const title: string = "Top Rated Series"
    const btnCaption :string= "All Top Rated Series"
    const nav : string ="shows"
    const title2: string = "Trending Series"

  return (
    <>
    <div className="lg:pt-10">

        <Sections data={Trend?.results} title={title2} nav={nav} />
    
    <section className='pb-10'>
                <Sections data={data?.results} title={title} nav={nav} />
                <div className='flex justify-center relative z-50 lg:mt-[-50px] mt-[-20px]'>
                <Link href={`/shows/rated/${data.page}`} scroll={true}>
                <Button value={btnCaption}/>
                 </Link>
            </div>
          </section>
    </div>
    
    
    </>
  )
}
