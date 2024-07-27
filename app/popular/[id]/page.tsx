import  { popular, urlImage } from '@/app/Utilities/apis'
import Sections from '@/app/_Components/Sections/Sections'
import React from 'react'
import CounterPopular from '../CounterPopular/CounterPopular'
import Navbar from '@/app/_Components/Navbar/Navbar'

export default async  function ChildPopular({params}:any ) {
    
    const data = await popular(params?.id > 0 && !undefined ? params.id : 1)
    const UrlImages= urlImage
    const title :string = "What's Popular "
    return (
        <>
    <Navbar/>
        <section className='lg:py-10'>
            <Sections data={data.results} title={title} component={<CounterPopular value={data.page}/>}  />
        </section>

        </>
    )
}
