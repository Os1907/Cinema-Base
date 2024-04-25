import { getSeries, similar, videoLink } from '@/app/Utilities/apis'
import CastCarousel from '@/app/_Components/Carusol/CastCarousel'
import Sections from '@/app/_Components/Sections/Sections'
import Image from 'next/image'
import React from 'react'
import bg from '../../../public/Images/bg.png'
import { TiMediaFastForwardOutline } from 'react-icons/ti'
import Button from '@/app/_Components/Button/Button'
import Bg from '@/app/_Components/BackGround/Bg'

interface SeriesProps {
  params: {
    id: number

  }
}
const Series: React.FC<SeriesProps> = async ({ params }) => {
  const data = await getSeries(params?.id)
  // const {results} = await videoLink(params?.ID)
  // console.log(data , params.id)
  // const {cast} = await crew(params?.ID)
  // let director = cast.find((item: any) => item.known_for_department === "Directing")
  // const recommendations = await similar(params?.id)
  // console.log(recommendations.total_results)
  const btnCaption: string = "Watch Trailer"
  const title: string = "Recommendations"

  return (
    <>
      <section className='  overflow-y-hidden bg-main  lg:pt-10 pt-5  pb-2 relative z-10  '>
        <Bg url={data?.backdrop_path}/>
        <div className='lg:mx-24 mx-4 relative z-10 '>

          <div className="grid grid-cols-6  lg:mb-32 gap-10">
            <div className="lg:col-span-2 col-span-6 ">
              <div className='relative rounded-2xl flex flex-col items-center '>
                <Image src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt='movies' width={1000} height={750} className='lg:min-h-[650px] md:h-[500px] md:w-[350px] h-[450px] w-[300px] skeleton shadow-green shadow-2xl rounded-2xl lg:w-full   hover:border-t-green hover:border-r-green hover:border-l-yellow-200   transition-all ' />
                <div className='absolute  bottom-[-1%] bg-gradient-to-t from-main to-[#fff0] h-screen lg:w-full  md:w-[350px] w-[300px] z-[5]  rounded-2xl '>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-6 flex items-center  ">

              <div className='flex justify-center relative items-start flex-col '>
                <div className='text-center lg:text-start w-full'>

                  <h2 className=' hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent transition-all cursor-pointer  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent  lg:text-5xl text-4xl font-extrabold relative z-10 '>
                    {data?.title?.toUpperCase() || data?.name.toUpperCase()}
                  </h2>
                </div>
                <div className='flex justify-center my-3 lg:justify-start items-center flex-wrap  w-full'>
                  <p className='text-[12px] lg:text-sm  font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    {
                      data?.release_date || data?.first_air_date
                    }
                  </p>
                  <div className='lg:flex hidden  '>
                    {
                      data?.genres.map((item: any) => <p key={item?.id} className='  font-medium mx-1 text-main  bg-gradient-to-r from-green to-yellow-200 p-1 px-3 rounded-3xl text-[10px] lg:text-[12px]  transition-all'>
                        {item?.name}
                      </p>)
                    }
                  </div>
                  {/*                   
                  <p className='text-[12px] lg:text-sm  font-medium mx-3 lg:mx-0 my-3 bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    <TiMediaFastForwardOutline className='inline mb-1 text-green mr-1' />
                    {
                    data?.runtime
                   }M
                  </p> */}
                  <div className='flex lg:hidden '>
                    {
                      data?.genres.map((item: any) => <button key={item?.id} className='font-medium mx-1 text-main  bg-gradient-to-r from-green to-yellow-200 p-1 px-3 rounded-3xl text-[12px]  transition-all'>
                        {item?.name}
                      </button>)
                    }
                  </div>

                </div>
                <div className='flex items-center lg:items-start flex-col'>
                  <div className='bg-gradient-to-r from-green to-yellow-200  px-3  mb-3 rounded-3xl '>

                    <p className='text-[12px] lg:text-sm lg:text-start text-center  text-main font-medium '>
                      {
                        data?.tagline
                      }
                    </p>
                  </div>
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
                  {/* {
                    data?.created_by[0]?.name ? <p className='text-base mt-3 font-medium  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                      Director :  <span className='text-sm font-semibold'>   {
                        data?.created_by[0]?.name
                      }</span>
                    </p> : ""
                  } */}

                </div>
                {/* <div className='w-full flex justify-center lg:justify-start'>

                <a target="_blank" href={`https://www.youtube.com/watch?v=${results[0]?.key}`} className='my-3 '>
                  <Button value={btnCaption} component={<TiMediaFastForwardOutline className='inline mb-1 text-main text-xl ' />} />
                </a>
                </div>*/}


              </div>
            </div>

          </div>

        </div>
      </section>
      <div className='w-full z-50 '>
        <h3 className='text-center bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent font-extrabold  text-3xl lg:text-5xl  my-3'>
          Movie Cast
        </h3>
      </div>
      {/* <CastCarousel data={cast} />
        {
          recommendations.total_results > 0? <Sections value={recommendations} title={title}  /> : ""
        } */}





    </>
  )
}

export default Series