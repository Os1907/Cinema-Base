import  { popular, urlImage } from '@/app/Utilities/apis'
import Sections from '@/app/_Components/Sections/Sections'
import React from 'react'
import CounterPopular from '../CounterPopular/CounterPopular'
import Navbar from '@/app/_Components/Navbar/Navbar'
import MainBack from '@/app/_Components/mainBack/mainBack'

export default async  function ChildPopular({params}:any ) {
    
    const data = await popular(params?.id > 0 && !undefined ? params.id : 1)
    // console.log(data.results[0].backdrop_path)
    const UrlImages= urlImage
    const title :string = "What's Popular "
  let randomNumber = Math.floor(Math.random() * 20);
    
    const background = `https://image.tmdb.org/t/p/original/${data.results[randomNumber].backdrop_path}`
   
    return (
        <>
        <MainBack background={background} >

        <section className='lg:py-10'>
            <Sections data={data.results} title={title} component={<CounterPopular value={data.page}/>}  />
        </section>
      </MainBack>

        </>
    )
}
