'use client'

import Image from 'next/image'
import React, { memo } from 'react'

interface Iprop {
  children?: React.ReactNode
  background?: string
}

function MainBack({ children, background }: Iprop) {
  return (
    <>
      <div className='relative pb-14 min-h-screen'>
        {background && (
          <Image
            src={background}
            alt="background"
            width={1920}
            height={1080}
            className='w-full h-full object-cover fixed'
            priority={false}
            loading="lazy"
          />
        )}
        <div className='absolute top-0 w-full h-full naVglass'></div>
        {children}
        <div className='fixed w-full h-full top-0 bg-gradient-to-t from-main to-[#ffffff00] z-3'></div>
      </div>
    </>
  )
}

export default memo(MainBack)
