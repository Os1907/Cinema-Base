import Link from 'next/link'
import { TrendSeries, topShows } from '@/app/Utilities/apis'
import React from 'react'
import Sections from '../_Components/Sections/Sections'
import Button from '../_Components/Button/Button'
import Navbar from '../_Components/Navbar/Navbar'
import MainBack from '../_Components/mainBack/mainBack'
import ExploreGenre from '../_Components/ExploreGen/Exploregen'


export default async function page({params}:any) {
    const data = await topShows(params?.id > 0 && !undefined ? params.id : 1)
    const Trend = await TrendSeries()
    // console.log(Trend);
    const title: string = "Top Rated Series"
    const btnCaption :string= "All Top Rated Series"
    const nav : string ="shows"
    const title2: string = "Trending Series"
  let randomNumber = Math.floor(Math.random() * 20);
    let background = `https://image.tmdb.org/t/p/original/${Trend?.results[randomNumber].backdrop_path}`

  return (
    <>
      <MainBack background={background}>

    <div className="lg:pt-10">
      <div className="pt-10">

    <ExploreGenre type="tv"/>
      </div>

        <Sections data={Trend?.results} title={title2} nav={nav} />
    
    <section className='pb-10'>
                <Sections data={data?.results} title={title} nav={nav} />
                <div className='flex justify-center relative z-50 '>
                <Link href={`/shows/rated/${data.page}`} scroll={true}>
                <Button value={btnCaption}/>
                 </Link>
            </div>
          </section>
    </div>
    </MainBack>
    
    </>
  )
}
