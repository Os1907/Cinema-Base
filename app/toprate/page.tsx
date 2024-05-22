import { topRated, urlImage } from '@/app/Utilities/apis'
import React from 'react'
import Sections from '../_Components/Sections/Sections'
import Button from '../_Components/Button/Button';
import { Link } from "next-view-transitions"


interface id {
    params: {
      id: number
  
    }
  }

export default async function TopRate({params}:id) {
    const data = await topRated(params?.id > 0 && !undefined ? params.id : 1)
    const title: string = "Top Rated"
    const btnCaption :string= "All Top Rated Movies"

    return (
        <>
            <section className='pb-10'>
                <Sections value={data} title={title}  />
                <div className='flex justify-center relative z-50 lg:mt-[-50px] mt-[-20px]'>
                <Link href={`/toprate/${data.page}`} scroll={true}>
                 <Button value={btnCaption}/>
                 </Link>
            </div>
            </section>
        </>
    )
}
