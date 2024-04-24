import { Link } from 'next-view-transitions'
import { topShows } from '@/app/Utilities/apis'
import React from 'react'
import Sections from '../_Components/Sections/Sections'
import Button from '../_Components/Button/Button'


export default async function page({params}:any) {
    const data = await topShows(params?.id > 0 && !undefined ? params.id : 1)
    // console.log(data);
    const title: String = "Top Rated Series"
    const btnCaption :string= "All Top Rated Series"
    const nav : string ="shows"

  return (
    <>
    <section className='pb-10'>
                <Sections value={data} title={title} nav={nav} />
                <div className='flex justify-center relative z-50 lg:mt-[-50px] mt-[-20px]'>
                <Link href={`/shows/rated/${data.page}`}>
                <Button value={btnCaption}/>
                 </Link>
            </div>
            </section>
    
    
    </>
  )
}
