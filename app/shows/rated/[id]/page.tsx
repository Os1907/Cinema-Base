import { topShows } from '@/app/Utilities/apis'
import Sections from '@/app/_Components/Sections/Sections'
import React, { useEffect } from 'react'
import ShowCounter from '../../Counter/ShowCounter'
import Navbar from '@/app/_Components/Navbar/Navbar'
import MainBack from '@/app/_Components/mainBack/mainBack'

export default async function page({params}:any) {
  const data = await topShows(params?.id > 0 && !undefined ? params.id : 1)
  let background = `https://image.tmdb.org/t/p/original/${data?.results[0].backdrop_path}`
    const title :string = "Top Rated Series "
    const nav : string ="shows"

  return (
    <>
      <MainBack background={background}>

    <section className='lg:pt-10'>
            <Sections data={data.results} nav={nav}  title={title} component={<ShowCounter value={data.page}/>}  />
        </section>
        </MainBack>
    
    </>
  )
}
