import Image from 'next/image'
import React from 'react'
import bg from '../../public/Images/ffflurry.svg'
import blur from '../../public/Images/bbblurry.svg'
import neon from '../../public/Images/neon.svg'
import { urlImage } from '../Utilities/apis'
import Trending from '../trending/page'
import Popular from '../popular/page'
import TopRate from '../toprate/page'
import { Link } from 'next-view-transitions'
export default async function HomeComponents() {

    const UrlImages= urlImage
  return (
    <>
      <header className='lg:min-h-[80vh] relative bg-main  overflow-x-hidden '>
        <div className='lg:mx-28 mx-4 relative z-50 flex justify-center items-center  flex-col lg:h-[90vh] h-[50vh] '>
          <h1 className=' bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent cursor-pointer lg:text-9xl text-5xl md:text-7xl font-extrabold transition-all '> <span className=''>Cinema</span>  Base</h1>
          <p className='shadow-green shadow-2xl text-white lg:font-semibold lg:text-base  text-[12px] font-medium'>
            All information about your movie night
          </p>
          <button className=' shadow-green shadow-2xl bg-green text-[12px] py-2 px-3 lg:text-sm lg:py-2 lg:px-3 text-main font-semibold mt-3 rounded-3xl hover:px-6 transition-all   hover:bg-gradient-to-r hover:from-green hover:to-yellow-200 '> 
          <Link href='/explore/1' className="rounded-3xl hover:bg-transparent transition-all hover:border-0">Find Now </Link>
          </button>
     {/* <Image src={neon} alt='' className='absolute h-full top-0 left-[-40%] z-[1] -rotate-[160]  child  '/>
     <Image src={neon} alt='' className='absolute h-full top-0 right-[-40%] z-[1] -rotate-180  child '/> */}
     </div>
        <Image src={bg} alt='' className='absolute   w-full top-0 h-full  z-[0] opacity-70 child my-Ainme   '/>
        {/* <Image src={bg} alt='' className='absolute h-full w-full top-0  z-[0] opacity-70 child my-Ainme  '/> */}










        {/* <div className='absolute top-0 bg-main  z-[2]  h-screen w-full my-Ainme '></div> */}
      </header>
      <Trending/>
      <Popular/>
      <TopRate/>
     

    </>
  )
}
