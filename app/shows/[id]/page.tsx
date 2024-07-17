import { getSeries, image, locationNow, similar, videoLink, watchProvider } from '@/app/Utilities/apis'
import Image from 'next/image'
import React from 'react'
import { TiMediaFastForwardOutline } from 'react-icons/ti'
import Bg from '@/app/_Components/BackGround/Bg'
import Sections from '@/app/_Components/Sections/Sections'
import { BsGooglePlay } from 'react-icons/bs'

interface SeriesProps {
  params: {
    id: number

  }
}
const Series = async ({ params }:SeriesProps) => {
  const data = await getSeries(params?.id)
  const photos  = await image(params?.id ,"tv")
  const { results } = await videoLink(params?.id , "tv")

  const recommendations = await similar(params?.id , "tv")
  const title: string = "Recommendations"
  const nav : string ="shows"

  let poster = photos.logos.find((item: any) => item.iso_639_1 === "en" )
  
  const location = await locationNow()

  const provider: {results: string} = await watchProvider(params?.id, "tv")


  let value: any
  
  if (provider.results.hasOwnProperty(location?.country_code2)) {
    value = provider.results[location?.country_code2];
  }

return (
  <>
    <section className='    lg:p t-10  relative z-[70] h-auto lg:min-h-screen  '>
      <Bg url={photos} />
      <div className='lg:mx-24 mx-4 relative z-[999999] pt-80 lg:pt-16 '>


        <div className="w-full  h-auto flex flex-col justify-center mt-32 lg:mt-5 ">

          <div className='flex justify-center  relative items-start flex-col   '>
            <div className='items-center  lg:items-start w-full flex flex-col  '>
            <Image src={`https://image.tmdb.org/t/p/w500/${poster?.file_path}`} alt='movies' width={350} height={350} className=' mt-10 h-auto lg:w-[20%] w-[35%] lg:h-auto' />
              {/* {

                poster?.file_path ? <Image src={`https://image.tmdb.org/t/p/original/${poster?.file_path}`} alt='movies' width={350} height={350} className=' mt-10 h-auto lg:w-[20%] w-[35%] lg:h-auto' /> : <h2 className=' hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent transition-all cursor-pointer  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent  lg:text-6xl text-3xl font-extrabold relative z-10 text-center lg:text-start '>
                  {data?.title?.toUpperCase() || data?.name.toUpperCase()}
                </h2>
              } */}
          

            </div>
            {
              data?.tagline ? <div className="w-full lg:w-auto  my-3 text-center lg:text-start">

                <p className='text-[12px] lg:text-sm     mBlur  borderGlass rounded-3xl inline-block    px-3 text-green font-medium '>
                  {
                    data?.tagline
                  }
                </p>
              </div> : null
            }

            <div className="flex w-full flex-col lg:flex-row items-center justify-center lg:justify-start gap-y-2">

              <p className=' text-[12px] lg:text-sm lg:text-start text-center font-semibold text-green  mBlur  borderGlass rounded-3xl px-3 py-1 '>
                {
                  data?.release_date?.slice(0, 4) || data?.first_air_date?.slice(0, 4)
                }
              </p>

              <div className='flex justify-center mx-2  lg:justify-start items-center lg:items-start lg:flex-wrap flex-col my-1 xl:my-3  '>
                <div className='lg:flex hidden  w-full justify-center lg:justify-start  flex-wrap gap-y-2 '>
                  {
                    data?.genres.map((item: any) => <p key={item?.id+Math.random()} className='  font-medium mr-2 text-green   mBlur  borderGlass   p-1 px-3 rounded-3xl text-[10px] lg:text-[12px]  transition-all'>
                      {item?.name}
                    </p>)
                  }
                </div>
                <div className='flex lg:hidden  w-full  justify-center lg:justify-start mb-1 xl:mb-2 flex-wrap gap-y-2'>
                  {
                    data?.genres.map((item: any) => <p key={item?.id+item?.name+"212movie"} className='font-medium mx-1 text-green text-center   mBlur  borderGlass   p-1 px-3 rounded-3xl lg:text-[12px] text-[10px]  transition-all'>
                      {item?.name}
                    </p>)
                  }
                </div>

              </div>
            </div>
            <div className='flex items-center lg:items-start flex-col w-full  '>
              <div className='lg:w-[50%] w-full  mBlur  borderGlass rounded-3xl p-3'>

                <p className='text-[12px] lg:text-start text-center xl:text-base font-medium  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                  { 
                    data?.overview
                  }
                </p>
              </div>

              <div className='flex   w-full justify-center lg:justify-start   rounded-3xl mt-2'>
                <div className='flex  items-center   mBlur  borderGlass rounded-3xl px-3 py-1'>
                  <p className='text-green font-medium text-[12px] lg:text-sm'>
                    Status :
                  </p>
                  <p className='text-green ml-2 text-[12px] lg:text-sm'>
                    {
                      data?.status
                    }
                  </p>
                </div>
                <div className=' mBlur  borderGlass rounded-3xl mx-2  flex items-center px-3 py-1 justify-center '>
                  <p className='text-[12px] lg:text-sm  text-center lg:text-start font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    Country : {
                      data?.origin_country
                    }
                  </p>
                </div>
              </div>
              <div className=" mBlur  borderGlass rounded-3xl px-3 py-1 mt-2 flex items-center  ">

                <p className=' text-[12px] lg:text-sm text-center lg:text-start  font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                  Original language : {
                    data?.original_language
                  }
                </p>
              </div>
              <div className='flex gap-x-2 lg:flex-row flex-col items-center lg:justify-center  '>
                {
                  value?.flatrate? <div className=" mBlur  borderGlass rounded-3xl px-3 py-1 mt-2 flex items-center  ">

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
                </div> : <div className=" mBlur  borderGlass rounded-3xl px-3 py-1 mt-2 flex items-center  ">

<p className=' text-[10px] lg:text-sm text-center lg:text-start  font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent mr-1'>
there are no streaming services currently available for this in your country
</p>
</div>
                }
                {
                  value?.buy? <div className=" mBlur  borderGlass rounded-3xl px-3 py-1 mt-2 flex items-center  ">

                  <p className=' text-[12px] lg:text-sm text-center lg:text-start  font-medium bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent mr-1'>
                    Buy  
                  </p>
                  {
                    value?.buy?.map((item: any)=>{

                      return <>
                        
                      <Image key={item?.logo_path+ item?.id+"2122"} src={`https://image.tmdb.org/t/p/original${item?.logo_path}`}  width={50} height={50} alt="" className='size-5 lg:size-7 rounded-full mx-1' />
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
          
          <div className='w-full flex lg:hidden justify-center lg:justify-start mt-2 lg:ml-2  relative z-[999999999]  '>
            <div className=' rounded-circle hover:shadow-green shadow-green lg:shadow-2xl  transition-all hover:shadow-lg group '>

            <a target="_blank" href={`https://www.youtube.com/watch?v=${results[0]?.key}`}className=' flex items-center   group-hover:size-auto  px-3 py-2  mBlur  borderGlass rounded-3xl hover:scale-125   transition-all  justify-center hover:bg-green      '>
            <BsGooglePlay  className='text-green text-sm lg:text-lg group-hover:text-main  '/>
            <p className='text-green text-[12px] lg:text-sm font-semibold  group-hover:text-main mx-1'>
            Watch Trailer
            </p>
            </a>
            </div>
          </div>

          <div className="absolute bottom-5 mb-8 right-20 z-[999999] hidden lg:block ">
            <div className='relative mBlur  border mBlur  borderGlass rounded-3xl py-3 px-10 hover:shadow-green group hover:shadow-2xl transition-all hover:scale-105'>

            <a target="_blank" href={`https://www.youtube.com/watch?v=${results[0]?.key}`}className=' flex flex-col gap-y-3 items-center     justify-center '>
            <Image  src={`https://image.tmdb.org/t/p/original/${photos?.posters[0]?.file_path} `} width={50} height={50} alt="" className='w-28 rounded-3xl mb-3 group-hover:inline hidden transition-all  borderGlass ' />
            <p className='text-green text-[12px] lg:text-sm font-semibold   '>
            <BsGooglePlay  className=' text-2xl inline  mx-1 '/>
            Watch Trailer
            </p>
            </a>

            </div>
          </div>




        </div>






      </div>
      <div className='absolute w-full h-full  top-0 bg-gradient-to-t from-main to-[#ffffff00] z-[3]  '>
      </div>
    </section> 
    <div className="lg:mx-20 mx-4">

    
    {
            data?.seasons?.length === 1 ? "" : <> <div className=' mt-[-10px] lg:mt-5  '>
              <p className='font-extrabold text-4xl xl:text-6xl bg-gradient-to-r from-yellow-200 to-green bg-clip-text text-transparent  text-center my-4'>
                Seasons
              </p>
              <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 my-5  gap-x-4 gap-y-6">
                {
                  data?.seasons?.slice(1).map((item: any) => {
                    return <>
                    
                      <div key={item.id} className="col-span-1 relative hover:overflow-y-scroll Scroll-Edit  hover:shadow-green hover:shadow-2xl hover:bg-green hover:pb-4  hover:scale-105 transition-all cursor-pointer  hover:rounded-2xl group   myHover z-[99999]">
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


    {
        recommendations?.results?.length > 0 ? <Sections value={recommendations} title={title} nav={nav}  /> : null
      }


  </>
)
}
export default Series







