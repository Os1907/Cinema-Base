import { Link } from 'next-view-transitions'
import { TrendSeries, topShows } from '@/app/Utilities/apis'
import React from 'react'
import Sections from '../_Components/Sections/Sections'
import Button from '../_Components/Button/Button'


export default async function page({params}:any) {
    const data = await topShows(params?.id > 0 && !undefined ? params.id : 1)
    const Trend = await TrendSeries()
    // console.log(data);
    const title: String = "Top Rated Series"
    const btnCaption :string= "All Top Rated Series"
    const nav : string ="shows"
    const title2: String = "Trending Series"

  return (
    <>
        <Sections value={Trend} title={title2} nav={nav} />
    
    <section className='pb-10'>
                <Sections value={data} title={title} nav={nav} />
                <div className='flex justify-center relative z-50 lg:mt-[-50px] mt-[-20px]'>
                <Link href={`/shows/rated/${data.page}`} scroll={true}>
                <Button value={btnCaption}/>
                 </Link>
            </div>
          </section>
    
    
    </>
  )
}
