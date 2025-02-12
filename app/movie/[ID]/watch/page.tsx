
import Webtor from '@/app/_Components/WebtorWatch/Webtor';
import { getReview, image } from '@/app/Utilities/apis'
import { MovieData } from '@/app/Utilities/Interface/interfaces';
import Image from 'next/image';
import React from 'react'

interface Ipage  {
  params:{
    ID:number
  },
  searchParams: {
    source_link: string;
  }
}
const page =async (url: Ipage) => {
const photos = await image(url.params?.ID, "movie")
  const data: MovieData = await getReview(url.params?.ID)

  return (
    <>
    <section  className='  relative z-[70] lg:min-h-screen overflow-hidden flex justify-center items-center flex-col '>
      <Image src={`https://image.tmdb.org/t/p/original/${photos?.backdrops[0]?.file_path}`} alt="" width={1920} height={1080} className='w-full h-full object-cover blur-md  absolute inset-0 hidden lg:block' />
      <Image src={`https://image.tmdb.org/t/p/original/${photos?.posters[0]?.file_path}`} alt="" width={1920} height={1080} className='w-full h-full object-cover blur-md  absolute inset-0  lg:hidden' />
      <div className='lg:mx-24 mx-4 relative z-[999999] lg:min-h-screen  flex items-center pt-20  '>
      <Webtor comments={data?.results} posterImage={`https://image.tmdb.org/t/p/original/${photos?.backdrops[0]?.file_path}`} sourceLink={url?.searchParams?.source_link}/>
      </div>
      <div className='fixed top-full w-full h-full backdrop-blur-[5px]'/>
        <div className='fixed w-full h-full  top-0 bg-gradient-to-t from-main to-[#ffffff00] z-[3]  '/>
      </section>

    </>
  )
}

export default page