import  {  topRated } from '@/app/Utilities/apis'
import Sections from '@/app/_Components/Sections/Sections'
import React from 'react'
import CounterPopular from '../CounterPopular/CounterPopular'

export default async  function ChildRate({params}:any ) {
    const data = await topRated(params?.id > 0 && !undefined ? params.id : 1)
    const title :string = "Top Rated "
    return (
        <>
        <section className='lg:pt-10'>
            <Sections value={data} title={title} component={<CounterPopular value={data.page}/>}  />
        </section>

        </>
    )
}
