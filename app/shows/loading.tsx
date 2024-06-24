import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <section className='  overflow-hidden  lg:pt-10 pt-5  pb-2 relative z-10 h-auto min-h-screen  '>
        <div className='lg:mx-24 mx-4 relative z-10 flex items-center flex-col  gap-y-4'>

              <span className="loader mt-20 "></span> 
            
         </div>

      </section>
  )
}

export default loading