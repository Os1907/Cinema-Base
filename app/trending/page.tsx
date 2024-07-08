import { Trend} from '@/app/Utilities/apis'
import React from 'react'
import Sections from '../_Components/Sections/Sections'


export default async function Trending() {
    const data = await Trend()
    const title :string = "Today Trending "
    
  return (
    <>
    <section className='lg:pt-10'>
            <Sections value={data} title={title}  />
        </section>
    
    
    
    </>
  )
}
