import  { popular, urlImage } from '@/app/Utilities/apis'
import React from 'react'
import Sections from '../_Components/Sections/Sections'
import Button from '../_Components/Button/Button'
import { Link } from "next-view-transitions"
interface IId {
    params: {
      id: number
    }
  }
export default async function Popular({params}:IId ) {
    
    const data = await popular(params?.id > 0 && !undefined ? params.id : 1)
    const title :string = "What's Popular "
    const btnCaption :string= "All Popular Movies"

    return (
        <>

        <section>
            <Sections data={data?.results} title={title}  />
            <div className='flex justify-center relative z-50 '>
                <Link href={`/popular/${data?.page}`} scroll={true}>
                 <Button value={btnCaption} component={<></>}/>
                 </Link>
            </div>
        </section>

        </>
    )
}
