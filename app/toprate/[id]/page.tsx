import  {  topRated } from '@/app/Utilities/apis'
import Sections from '@/app/_Components/Sections/Sections'
import React from 'react'
import CounterPopular from '../CounterPopular/CounterPopular'
import MainBack from '@/app/_Components/mainBack/mainBack'

export default async  function ChildRate({params}:any ) {
    const data = await topRated(params?.id > 0 && !undefined ? params.id : 1)
    const title :string = "Top Rated "
    const background = `https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path}`

    return (
        <>
        <MainBack background={background} >

        <section className='lg:py-10'>
            <Sections data={data?.results} title={title} component={<CounterPopular value={data.page}/>}  />
        </section>
        </MainBack>

        </>
    )
}
