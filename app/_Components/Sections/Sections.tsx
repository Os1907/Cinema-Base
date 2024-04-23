import { urlImage } from '@/app/Utilities/apis'
import Image from 'next/image'
import React from 'react'
import bg from '../../../public/Images/bg.png'
import { Link } from "next-view-transitions"



export default function Sections(props: any) {
    const data = props.value
    const title = props.title
    const UrlImages = urlImage
    return (
        <>
            <section  className=' min-h-screen   lg:pt-10 pt-5 lg:pb-10 pb-5  relative z-10  overflow-y-hidden '>
                <Image src={bg} alt='' className='absolute  lg:top-[-8%] top-20 z-[0] opacity-10  ' />
                <Image src={bg} alt='' className='absolute  lg:top-[50%] top-20 z-[0] opacity-10 -rotate-180  ' />
                <div className='lg:mx-24 mx-4 relative z-10 '>
                    <div className='flex justify-center relative items-center'>

                        <h2 className=' text-center hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent transition-all cursor-pointer border-b  pb-3 border-green bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent  lg:text-5xl text-2xl md:text-3xl font-extrabold relative z-10 '>
                            {title?.toUpperCase()}
                        </h2>

                    </div>
                   
                    <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 my-5 gap-x-4 gap-y-6">
                        { 
                        data?.results? 
                            data?.results.map((item: any) => <>
                            <Link href={`/movie/${item.id}`}>
                                <div key={item.id} className="col-span-1  hover:shadow-green hover:shadow-2xl hover:bg-green hover:pb-4  hover:scale-105 transition-all cursor-pointer  hover:rounded-2xl   myHover">
                                    <div className='relative'>
                                        <div className="bg-gradient-to-r from-green to-yellow-200 rounded-full lg:px-3 lg:py-3 p-1 md:p-2 absolute md:bottom-[-3%] lg:bottom-[-5%] bottom-[-5%] right-[5%] md:border-4 border-2  border-main2 child2 transition-all ">
                                            <p className='text-main text-[10px] font-bold  '>
                                                {item?.vote_average?.toString().slice(0, 3)}
                                            </p>
                                        </div>

                                        <Image src={UrlImages + item?.poster_path} alt={item.original_title} width={350} height={350} className='md:min-h-[350px] skeleton   shadow-2xl rounded-2xl w-full     hover:border-t-green hover:border-r-green hover:border-l-yellow-200  child-effect transition-all ' />
                                    </div>
                                    <div>
                                        <h3 className='mt-3 lg:ml-3 text-center lg:text-start text-white font-medium  lg:text-base text-sm '>
                                            {
                                                item.original_title
                                            }
                                        </h3>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='hoverChanger lg:text-start text-center  ml-4 text-[9px] font-semibold'>

                                        {item?.release_date?.toString().slice(0, 4)}
                                        </p>
                                        <p className='hoverChanger mr-4 text-center   text-[9px] font-semibold'>
                                            {item?.adult === false ? "+13" : "+18"}
                                        </p>
                                    </div>
                                </div>
                                </Link>
                            </>
                            ) : data?.map((item: any) => <>
                            <Link href={`/movie/${item.id}`}>
                                <div key={item.id} className="col-span-1 hover:shadow-green hover:shadow-2xl hover:bg-green hover:pb-4  hover:scale-105 transition-all cursor-pointer  hover:rounded-2xl   myHover">
                                    <div className='relative'>
                                        <div className="bg-gradient-to-r from-green to-yellow-200 rounded-full lg:px-3 lg:py-3 p-1 md:p-2 absolute md:bottom-[-3%] lg:bottom-[-5%] bottom-[-5%] right-[5%] md:border-4 border-2  border-main2 child2 transition-all ">
                                            <p className='text-main text-[10px] font-bold  '>
                                                {item?.vote_average?.toString().slice(0, 3)}
                                            </p>
                                        </div>

                                        <Image src={UrlImages + item?.poster_path} alt={item.original_title} width={350} height={350} className='md:min-h-[350px] skeleton  shadow-2xl rounded-2xl w-full   hover:border-t-green hover:border-r-green hover:border-l-yellow-200  child-effect transition-all ' />
                                    </div>
                                    <div>
                                        <h3 className='mt-3 lg:ml-3 text-center lg:text-start text-white font-medium  lg:text-base text-sm '>
                                            {
                                                item.original_title
                                            }
                                        </h3>
                                    </div>
                                    <div className='flex justify-between items-center '>
                                        <p className='hoverChanger lg:text-start text-center  ml-4 text-[9px] font-semibold'>

                                        {item?.release_date?.toString().slice(0, 4)}
                                        </p>
                                        <p className='hoverChanger mr-4 text-center   text-[9px] font-semibold'>
                                            {item?.adult === false ? "+13" : "+18"}
                                        </p>
                                    </div>
                                </div>
                                </Link>
                            </>
                            ) 
                        }

                    </div>
                         {
                        props?.component
                    }
                </div>
            </section>
        </>
    )
}
