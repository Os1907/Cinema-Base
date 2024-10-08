import  {  topRated } from '@/app/Utilities/apis'
import Sections from '@/app/_Components/Sections/Sections'
import React from 'react'
import CounterPopular from '../CounterPopular/CounterPopular'
import MainBack from '@/app/_Components/mainBack/mainBack'

export default async  function ChildRate({params}:any ) {
    const data = await topRated(params?.id > 0 && !undefined ? params.id : 1)
    const title :string = "Top Rated "
   let randomNumber = Math.floor(Math.random() * 20);
    const background = `https://image.tmdb.org/t/p/original/${data.results[randomNumber].backdrop_path}`

    return (
        <>
        <MainBack background={background} >

        <section className='pb-10 lg:py-10'>
            <Sections data={data?.results} title={title} component={<CounterPopular value={data.page}/>}  />
        </section>
        </MainBack>

        </>
    )
}
