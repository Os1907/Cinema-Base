import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <section className='  overflow-hidden  lg:pt-10 pt-5  pb-2 relative z-10 h-auto min-h-screen  '>
        <div className='lg:mx-24 mx-4 relative z-10 flex mt-52 justify-center   gap-y-4'>

        <div className='lg:mx-28 mx-4 relative z-50 flex justify-center items-center  flex-col  cover'>
          <h1 className=' bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent cursor-pointer xl:text-9xl lg:text-8xl text-5xl md:text-7xl py-2 font-extrabold transition-all '> <span className=''>Cinema</span>  Base</h1>

     
     </div>
          <p className='shadow-green shadow-2xl bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent uppercase lg:text-2xl  text-[12px] font-medium'>
            Loading......
          </p>
         </div>

      </section>
  )
}

export default loading