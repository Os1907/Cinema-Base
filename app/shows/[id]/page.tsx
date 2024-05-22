import { getSeries, image, locationNow, similar, watchProvider } from '@/app/Utilities/apis'
import Image from 'next/image'
import React from 'react'
import { TiMediaFastForwardOutline } from 'react-icons/ti'
import Bg from '@/app/_Components/BackGround/Bg'
import Sections from '@/app/_Components/Sections/Sections'

interface SeriesProps {
  params: {
    id: number

  }
}
const Series = async ({ params }:SeriesProps) => {
  const data = await getSeries(params?.id)
  const photos  = await image(params?.id ,"tv")
  const recommendations = await similar(params?.id , "tv")
  const title: string = "Recommendations"
  const nav : string ="shows"

  let poster = photos.logos.find((item: any) => item.iso_639_1 === "en" && item.width <= 780)
  
  const location = await locationNow()
  // console.log(location.country_code2)

  const provider: {results: string} = await watchProvider(params?.id, "tv")

let value: any

if (provider.results.hasOwnProperty(location?.country_code2)) {
  // console.log(`The object has its own property 'EG'.`);
  value = provider.results[location?.country_code2];
} 

  return (
    <>
      <section className='  overflow-hidden bg-main  lg:pt-10 pt-5  pb-2 relative z-10  lg:min-h-screen  '>
        <Bg url={photos} />
        <div className='lg:mx-24 mx-4 relative z-10 '>
          <div>


<div className="w-full  h-auto flex flex-col justify-center mt-32 lg:mt-5 ">

  <div className='flex justify-center  relative items-start flex-col   '>
    <div className='items-center  lg:items-start w-full flex flex-col  '>
      {

        poster?.file_path ? <Image src={`https://image.tmdb.org/t/p/w500/${poster?.file_path}`} alt='movies' width={350} height={350} className=' mt-10 h-auto lg:w-[20%] w-[35%] lg:h-auto' /> : <h2 className=' hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent transition-all cursor-pointer  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent  lg:text-6xl text-3xl font-extrabold relative z-10 text-center lg:text-start '>
          {data?.title?.toUpperCase() || data?.name.toUpperCase()}
        </h2>
      }
  

    </div>
    {
      data?.tagline ? <div className="w-full my-1 xl:my-3  text-center lg:text-start">

        <p className='text-[12px] lg:text-sm  rounded-3xl  glass  inline   px-3 text-green font-medium '>
          {
            data?.tagline
          }
        </p>
      </div> : null
    }

    <div className="flex w-full flex-col lg:flex-row items-center mt-2 justify-center lg:justify-start gap-y-2">

      <p className=' text-[12px] lg:text-sm lg:text-start text-center font-semibold text-green glass px-3 py-1 '>
        {
          data?.release_date?.slice(0, 4) || data?.first_air_date.slice(0, 4)
        }
      </p>

      <div className='flex justify-center mx-2  lg:justify-start items-center lg:items-start lg:flex-wrap flex-col my-1 xl:my-3  '>
        <div className='lg:flex hidden  w-full justify-center lg:justify-start  flex-wrap gap-y-2 '>
          {
            data?.genres.map((item: any) => <p key={item?.id} className='  font-medium mr-2 text-green  glass bg- gradient-to-r from-green to-yellow-200 p-1 px-3 rounded-3xl text-[10px] lg:text-[12px]  transition-all'>
              {item?.name}
            </p>)
          }
        </div>
        <div className='flex lg:hidden  w-full  justify-center lg:justify-start mb-1 xl:mb-2 flex-wrap gap-y-2'>
          {
            data?.genres.map((item: any) => <p key={item?.id} className='font-medium mx-1 text-green text-center  glass bg -gradient-to-r from-green to-yellow-200 p-1 px-3 rounded-3xl lg:text-[12px] text-[10px]  transition-all'>
              {item?.name}
            </p>)
          }
        </div>

      </div>
    </div>
    <div className='flex items-center lg:items-start flex-col w-full  '>
      <div className='lg:w-[50%] w-full glass p-3'>

        <p className='text-[12px] lg:text-start text-center xl:text-base font-medium  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
          { 
            data?.overview
          }
        </p>
      </div>

      <div className='flex   w-full justify-center lg:justify-start   rounded-3xl mt-2'>
        <div className='flex  items-center  glass px-3 py-1'>
          <p className='text-green font-medium text-[12px] lg:text-sm'>
            Status :
          </p>
          <p className='text-green ml-2 text-[12px] lg:text-sm'>
            {
              data?.status
            }
          </p>
        </div>
        <div className='glass mx-2  flex items-center px-3 py-1 justify-center '>
          <p className='text-[12px] lg:text-sm  text-center lg:text-start font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
            Country : {
              data?.origin_country
            }
          </p>
        </div>
      </div>
      <div className="glass px-3 py-1 mt-2 flex items-center  ">

        <p className=' text-[12px] lg:text-sm text-center lg:text-start  font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
          Original language : {
            data?.original_language
          }
        </p>
      </div>
      <div className='flex gap-x-2 lg:flex-row flex-col items-center lg:justify-center  '>

      {
        value?.flatrate? <div className="glass px-3 py-1 mt-2 flex items-center  ">

        <p className=' text-[12px] lg:text-sm text-center lg:text-start  font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent mr-1'>
        Stream 
        </p>
        {
          value?.flatrate?.map((item: any)=>{

            return <>
            <Image key={item?.logo_path} src={`https://image.tmdb.org/t/p/original${item?.logo_path}`}  width={50} height={50} alt="" className='size-5 lg:size-7 rounded-full mx-1' />
            </>
          })
        }
      </div> : <div className="glass px-3 py-1 mt-2 flex items-center  ">

<p className=' text-[10px] lg:text-sm text-center lg:text-start  font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent mr-1'>
there are no streaming services currently available for this in your country
</p>
</div>
      }
      {
        value?.buy? <div className="glass px-3 py-1 mt-2 flex items-center  ">

        <p className=' text-[12px] lg:text-sm text-center lg:text-start  font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent mr-1'>
          Buy  
        </p>
        {
          value?.buy?.map((item: any)=>{

            return <>
              
            <Image key={item?.logo_path} src={`https://image.tmdb.org/t/p/original${item?.logo_path}`}  width={50} height={50} alt="" className='size-5 lg:size-7 rounded-full mx-1' />
            </>
          })
        }
      </div> : null
      }
      </div>
     
      <div className='w-full ml-2 '>

        <p className='mt-3 text-center lg:text-start text-3xl xl:text-4xl font-semibold bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
          {
            data?.vote_average.toString().slice(0, 3)
          } <span className='ml-[-3px]  text-base font-medium'>/10</span>
        </p>
      </div>
      
      

    </div>
    
    
  </div>
</div>
</div>

          {
            data?.seasons?.length === 1 ? "" : <> <div className=' mt-[-10px] lg:mt-5  '>
              <p className='font-extrabold text-4xl xl:text-6xl bg-gradient-to-r from-yellow-200 to-green bg-clip-text text-transparent  text-center my-4'>
                Seasons
              </p>
              <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 my-5  gap-x-4 gap-y-6">
                {
                  data?.seasons?.slice(1).map((item: any) => {
                    return <>
                    
                      <div key={item.id} className="col-span-1 relative hover:overflow-y-scroll Scroll-Edit  hover:shadow-green hover:shadow-2xl hover:bg-green hover:pb-4  hover:scale-105 transition-all cursor-pointer  hover:rounded-2xl group   myHover">
                                    <div className='relative'>
                                        <div className="bg-gradient-to-r z-50 from-green to-yellow-200 rounded-full lg:px-3 lg:py-3 p-1 md:p-2 absolute md:bottom-[-3%] lg:bottom-[-5%] bottom-[-5%] right-[5%] md:border-4 border-2  border-main2 child2 transition-all ">
                                            <p className='text-main text-[10px] font-bold  '>
                                                {item?.vote_average?.toString().slice(0, 3)}
                                            </p>
                                        </div>
                                        {
                                          item?.poster_path ? <Image 
                                          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} 
                                          alt={item.original_name }
                                           width={350} height={350} 
                                           className='md:min-h-[350px] group-hover:blur-2xl  skeleton bg-gradient-to-tr from-green to-yellow-200   shadow-2xl rounded-2xl w-full     hover:border-t-green hover:border-r-green hover:border-l-yellow-200  child-effect transition-all ' 
                                           /> : <p className='md:min-h-[350px] group-hover:blur-2xl h-72 glass skeleton  shadow-2xl rounded-2xl w-full ' 
                                            > </p>
                                        }
                                        
                                    </div>
                                    <div>
                                        <h3 className='mt-3 lg:ml-3 text-center lg:text-start text-white font-medium  lg:text-base text-sm '>
                            {       item.name  }
                                        </h3>
                                    </div>
                          <div className='w-full bg-green    min-h-full top-0  slide-in-bottom  group-hover:flex  z-[100] absolute py-5 rounded-2xl hidden justify-center flex-col'>
                            
                                        <div className='w-full my-2 '>

                                        <h3 className='  text-white font-bold  text-sm  lg:text-base text-center'>
                            {       item.name  }
                                        </h3>
                                        </div>
                                        <div className='w-full flex justify-between items-center'>

                                        <p className='hoverChanger lg:text-start text-center  ml-4 text-[12px] lg:text-sm  font-bold'>
                                        {item?.air_date?.slice(0, 4)}
                                        </p>
                                        <p className='hoverChanger mr-4 text-center   text-[12px] lg:text-sm  font-bold'>
                                            {item?.adult === false ? "+13" : "+18"}
                                        </p>
                                        </div>
                              <p className='text-main font-bold my-2 text-center'>
                            Overview
                            </p>
                            <p className='text-main xl:text-sm text-[12px] mx-2 text-center '>
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
      {
        recommendations.total_results > 0 ? <Sections value={recommendations} title={title} nav={nav}  /> : ""
      }

    </>
  )
}

export default Series







