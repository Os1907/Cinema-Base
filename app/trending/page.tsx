import { Trend} from '@/app/Utilities/apis'
import React from 'react'
import Sections from '../_Components/Sections/Sections'


export default async function Trending() {
    const data = await Trend()
    const title :string = "Today Trending "
    
  return (
    <>
    <section>
            <Sections data={data?.results} title={title}  />
        </section>
    
    
    
    </>
  )
}
