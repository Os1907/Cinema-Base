import { getSeries, similar, videoLink } from '@/app/Utilities/apis'
import CastCarousel from '@/app/_Components/Carusol/CastCarousel'
import Sections from '@/app/_Components/Sections/Sections'
import Image from 'next/image'
import React from 'react'
import bg from '../../../public/Images/bg.png'
import { TiMediaFastForwardOutline } from 'react-icons/ti'
import Button from '@/app/_Components/Button/Button'
import Bg from '@/app/_Components/BackGround/Bg'
import blur from '../../../public/Images/bbblurry.svg'

interface SeriesProps {
  params: {
    id: number

  }
}
const Series: React.FC<SeriesProps> = async ({ params }) => {
  const data = await getSeries(params?.id)
  const btnCaption: string = "Watch Trailer"
  const title: string = "Recommendations"

  return (
    <>
      <section className='  overflow-hidden bg-main  lg:pt-10 pt-5  pb-2 relative z-10  min-h-screen  '>
        <Bg url={data?.backdrop_path} />
        <div className='lg:mx-24 mx-4 relative z-10 '>
          <div className="grid grid-cols-6  lg:mb-32 gap-10">
            <div className="lg:col-span-2 col-span-6 ">
              <div className='relative rounded-2xl flex flex-col items-center '>
                <Image src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt='movies' width={1000} height={750} className='lg:min-h-[650px] md:h-[500px] md:w-[350px] h-[450px] w-[300px] skeleton shadow-green shadow-2xl rounded-2xl lg:w-full   hover:border-t-green hover:border-r-green hover:border-l-yellow-200   transition-all ' />
                <div className='absolute  bottom-[-1%] bg-gradient-to-t from-main to-[#fff0] h-[300px] lg:h-screen lg:w-full  md:w-[350px] w-[300px] z-[5]  rounded-2xl '>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-6 flex items-center  ">

              <div className='flex justify-center relative items-start flex-col '>
                <div className='text-center lg:text-start w-full flex flex-col'>

                  <h2 className=' hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent transition-all cursor-pointer  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent  lg:text-5xl text-4xl font-extrabold relative z-10 '>
                    {data?.title?.toUpperCase() || data?.name.toUpperCase()}
                  </h2>
                </div>
                <div className='flex justify-center lg:justify-start w-full'>
                  <div className='bg-gradient-to-r from-green to-yellow-200    px-3  mb-3 rounded-3xl my-3 '>

                    <p className='text-[12px] lg:text-sm lg:text-start text-center  text-main font-medium '>
                      {
                        data?.tagline
                      }
                    </p>
                  </div>
                </div>
                  
                <div className='flex justify-center  lg:justify-start items-center flex-wrap  w-full'>
                  <p className='text-[12px] lg:text-sm  font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    {
                      data?.release_date || data?.first_air_date
                    }
                  </p>
                  <div className='lg:flex hidden  w-full justify-center lg:justify-start my-3 '>
                    {
                      data?.genres.map((item: any) => <p key={item?.id} className='  font-medium mr-2 text-main  bg-gradient-to-r from-green to-yellow-200 p-1 px-3 rounded-3xl text-[10px] lg:text-[12px]  transition-all'>
                        {item?.name}
                      </p>)
                    }
                  </div>
                  <div className='flex lg:hidden  w-full  justify-center lg:justify-start '>
                    {
                      data?.genres.map((item: any) => <button key={item?.id} className='font-medium mx-1 text-main  bg-gradient-to-r from-green to-yellow-200 p-1 px-3 rounded-3xl text-[12px]  transition-all'>
                        {item?.name}
                      </button>)
                    }
                  </div>

                </div>
                <div className='flex items-center lg:items-start flex-col w-full  '>
                  
                  <p className='text-sm lg:text-start text-center lg:text-base font-medium  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    {
                      data?.overview
                    }
                  </p>
                  <p className='text-sm lg:text-base font-medium mt-3 bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    Country : {
                      data?.origin_country
                    }
                  </p>
                  <div className='flex justify-center bg-gradient-to-r from-green to-yellow-200  px-2  rounded-3xl mt-3'>
                    <div className='flex  items-center'>
                      <p className='text-main font-medium text-[12px] lg:text-sm'>
                        Status :
                      </p>
                      <p className='text-main ml-2 text-[12px] lg:text-sm'>
                        {
                          data?.status
                        }
                      </p>
                    </div>
                  </div>
                  <p className=' text-[12px] lg:text-sm  font-medium mt-3 bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    Original language : {
                      data?.original_language
                    }
                  </p>
                  <p className='mt-3 text-4xl font-semibold bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    {
                      data?.vote_average.toString().slice(0, 3)
                    } <span className='ml-[-3px]  text-base font-medium'>/10</span>
                  </p>

                </div>

              </div>
            </div>

          </div>
          {
            data?.seasons?.length === 1 ? "" : <> <div className='w-full '>
              <p className='font-extrabold text-6xl bg-gradient-to-r from-yellow-200 to-green bg-clip-text text-transparent  text-center my-4'>
                Seasons
              </p>
              <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 my-5 gap-x-4 gap-y-6">
                {
                  data?.seasons?.slice(1).map((item: any) => {
                    return <>
                    
                      <div key={item.id} className="col-span-1 relative hover:overflow-y-scroll Scroll-Edit  hover:shadow-green hover:shadow-2xl hover:bg-green hover:pb-4  hover:scale-105 transition-all cursor-pointer  hover:rounded-2xl group   myHover">
                                    <div className='relative'>
                                        <div className="bg-gradient-to-r from-green to-yellow-200 rounded-full lg:px-3 lg:py-3 p-1 md:p-2 absolute md:bottom-[-3%] lg:bottom-[-5%] bottom-[-5%] right-[5%] md:border-4 border-2  border-main2 child2 transition-all ">
                                            <p className='text-main text-[10px] font-bold  '>
                                                {item?.vote_average?.toString().slice(0, 3)}
                                            </p>
                                        </div>

                                        <Image src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt={item.original_title || item.original_name } width={350} height={350} className='md:min-h-[350px] group-hover:blur-2xl  skeleton bg-gradient-to-tr from-green to-yellow-200   shadow-2xl rounded-2xl w-full     hover:border-t-green hover:border-r-green hover:border-l-yellow-200  child-effect transition-all ' />
                                    </div>
                                    <div>
                                        <h3 className='mt-3 lg:ml-3 text-center lg:text-start text-white font-medium  lg:text-base text-sm '>
                            {       item.name  }
                                        </h3>
                                    </div>
                          <div className='w-full bg-green    min-h-full top-0  slide-in-bottom  group-hover:flex  z-[100] absolute py-5 rounded-2xl hidden justify-center flex-col'>
                            
                                    <div className='flex justify-between items-center'>
                                        <p className='hoverChanger lg:text-start text-center  ml-4 text-sm font-bold'>
                                        {item?.air_date?.slice(0, 4)}
                                        </p>
                                        <h3 className='  text-white font-bold   text-base '>
                            {       item.name  }
                                        </h3>
                                        <p className='hoverChanger mr-4 text-center   text-sm font-bold'>
                                            {item?.adult === false ? "+13" : "+18"}
                                        </p>
                                    </div>
                              <p className='text-main font-bold my-2 text-center'>
                            Overview
                            </p>
                            <p className='text-main text-sm mx-2 text-center'>
                              {
                                item.overview
                              }
                            </p>

                          </div>
                                </div>



                    </>
                  })
                }
              </div>

            </div>
            </>
          }

        </div>
      </section>
    </>
  )
}

export default Series







