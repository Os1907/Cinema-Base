import { topShows } from '@/app/Utilities/apis'
import Sections from '@/app/_Components/Sections/Sections'
import React, { useEffect } from 'react'
import ShowCounter from '../../Counter/ShowCounter'

export default async function page({params}:any) {
  const data = await topShows(params?.id > 0 && !undefined ? params.id : 1)
    const title :string = "Top Rated Series "
    const nav : string ="shows"

  return (
    <>
    <section className='lg:pt-10'>
            <Sections value={data} nav={nav}  title={title} component={<ShowCounter value={data.page}/>}  />
        </section>
    
    
    </>
  )
}
