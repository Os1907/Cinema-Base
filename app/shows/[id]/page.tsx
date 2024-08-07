import { getSeries, image, locationNow, similar, translate, videoLink, watchProvider } from '@/app/Utilities/apis'
import Image from 'next/image'
import React from 'react'
import { TiMediaFastForwardOutline } from 'react-icons/ti'
import Bg from '@/app/_Components/BackGround/Bg'
import Sections from '@/app/_Components/Sections/Sections'
import { BsGooglePlay } from 'react-icons/bs'
import { IoIosStar } from 'react-icons/io'
import Btn_Tra from '@/app/_Components/Btn_Tra/Btn_Tra'
import Btn_Fav from '@/app/_Components/Btn_Fav/Btn_Fav'
import { Ivideo } from '@/app/movie/[ID]/page'

interface SeriesProps {
  params: {
    id: number

  }
}
const Series = async ({ params }: SeriesProps) => {
  const data = await getSeries(params?.id)

  const photos = await image(params?.id, "tv")
  const video: Ivideo = await videoLink(params?.id, "tv")
  const recommendations = await similar(params?.id, "tv")
  const Translate = await translate(params?.id, "tv")
  const arabic = Translate?.translations?.find((item: { iso_3166_1: string }) => item.iso_3166_1 == "SA")
  const title: string = "Recommendations"
  const nav: string = "shows"
  let background = `https://image.tmdb.org/t/p/original/${photos?.backdrops[0].file_path}`

  let poster = photos.logos.filter((item: any) => item.iso_639_1 != "he").sort((a: any, b: any) => {
    if (a.iso_639_1?.startsWith("en") && !b.iso_639_1?.startsWith("en")) {
      return -1;
    }
    if (b.iso_639_1?.startsWith("en") && !a.iso_639_1?.startsWith("en")) {
      return 1;
    }
    return 0;
  });
  const location = await locationNow()

  const provider: { results: string } = await watchProvider(params?.id, "tv")


  let value: any

  if (provider.results.hasOwnProperty(location?.country_code2)) {
    value = provider.results[location?.country_code2];
  }

  return (
    <>
      <section style={{ backgroundImage: `url(${background}) ` }} className=' lg:p t-10  relative z-[70] h-auto lg:min-h-screen bg-cover bg-center bg-fixed overflow-hidden '>
        <div className='lg:mx-24 mx-4 relative z-[999999] pt-80 lg:pt-16 '>


          <div className="w-full  h-auto flex flex-col justify-center mt-32 lg:mt-5 ">

            <div className='flex justify-center  relative items-start flex-col   '>
              <div className='items-center  lg:items-start w-full flex flex-col my-3 '>
                {
                  poster[0]?.file_path != undefined ? <Image src={`https://image.tmdb.org/t/p/w500/${poster[0].file_path}`} alt='movies' width={350} height={350} className=' mt-10 h-auto lg:w-[20%] w-[35%] lg:h-auto' /> : <p className='text-3xl lg:text-5xl pt-2 3 pb-4     mBlur  borderGlass rounded-3xl inline-block    px-3 text-white font-extrabold lg:mt-10 '>
                    {
                      data?.original_name
                    }
                  </p>
                }

              </div>
              {
                data?.tagline ? <div className="w-full lg:w-auto  mb-3 text-center lg:text-start">

                  <p className='text-[12px] lg:text-sm     mBlur  borderGlass rounded-3xl inline-block    px-3 text-white font-medium '>
                    {
                      data?.tagline
                    }
                  </p>
                </div> : null
              }

              <div className='flex  mb-2 w-full justify-center lg:justify-start  flex-wrap gap-y-2 '>
                <p className=' text-[12px] lg:text-sm lg:text-start text-center font-semibold text-white  mBlur  borderGlass rounded-3xl px-3 py-1 mr-2 '>
                  {
                    data?.release_date?.slice(0, 4) || data?.first_air_date?.slice(0, 4)
                  }
                </p>
                {
                  data?.genres.map((item: any) => <p key={item?.id} className='  font-medium mr-2 text-white   mBlur  borderGlass   p-1 px-3 rounded-3xl text-[10px] lg:text-[12px]  transition-all'>
                    {item?.name}
                  </p>)
                }
              </div>

              <div className='flex items-center lg:items-start flex-col w-full  '>

                <div className='lg:w-[50%] w-full  mBlur  borderGlass rounded-3xl p-3'>

                  <p className='text-[12px] lg:text-start text-center xl:text-base font-medium text-white'>
                    {
                      data?.overview
                    }

                  </p>


                </div>
                {
                  arabic?.data?.overview ? <div className='lg:w-[50%] w-full  mBlur mt-2  borderGlass rounded-3xl p-3'>

                    <p dir='rtl' className='text-[12px] ar lg:text-start text-center xl:text-base font-bold text-white'>
                      {
                        arabic?.data?.overview
                      }

                    </p>


                  </div> : null
                }
                <div className='flex   w-full justify-center lg:justify-start   rounded-3xl mt-2 flex-wrap gap-y-2'>
                  <div className='flex  items-center   mBlur  borderGlass rounded-3xl px-3 py-1'>
                    <p className='text-white font-medium text-[12px] lg:text-sm'>
                      Status :
                    </p>
                    <p className='text-white ml-2 text-[12px] lg:text-sm'>
                      {
                        data?.status
                      }
                    </p>
                  </div>
                  <div className=' mBlur  borderGlass rounded-3xl mx-2  flex items-center px-3 py-1 justify-center '>
                    <p className='text-[12px] lg:text-sm  text-center lg:text-start font-medium text-white'>
                      Country : {
                        data?.origin_country
                      }
                    </p>
                  </div>
                  <div className=' mBlur  borderGlass rounded-3xl mx-2  flex items-center px-3 py-1 justify-center '>
                    <p className='text-[12px] lg:text-sm  text-center lg:text-start font-medium text-white'>
                      Original language : {
                        data?.original_language
                      }
                    </p>
                  </div>

                </div>

                <div className='flex gap-x-2 lg:flex-row flex-col items-center lg:justify-center  '>
                  {
                    value?.flatrate ? <div className=" mBlur  borderGlass rounded-3xl px-3 py-1 mt-2 flex items-center  ">

                      <p className=' text-[12px] lg:text-sm text-center lg:text-start  font-medium text-white mr-1'>
                        Stream
                      </p>
                      {
                        value?.flatrate?.map((item: any) => {

                          return <>
                            <Image key={item?.logo_path} src={`https://image.tmdb.org/t/p/original${item?.logo_path}`} width={50} height={50} alt="" className='size-5 lg:size-7 rounded-full mx-1' />
                          </>
                        })
                      }
                    </div> : <div className=" mBlur  borderGlass rounded-3xl px-3 py-1 mt-2 flex items-center  ">

                      <p className=' text-[10px] lg:text-sm text-center lg:text-start  font-medium text-white mr-1'>
                        there are no streaming services currently available for this in your country
                      </p>
                    </div>
                  }
                  {
                    value?.buy ? <div className=" mBlur  borderGlass rounded-3xl px-3 py-1 mt-2 flex items-center  ">

                      <p className=' text-[12px] lg:text-sm text-center lg:text-start  font-medium text-white mr-1'>
                        Buy
                      </p>
                      {
                        value?.buy?.map((item: any) => {

                          return <>

                            <Image key={item?.logo_path + item?.id + "2122"} src={`https://image.tmdb.org/t/p/original${item?.logo_path}`} width={50} height={50} alt="" className='size-5 lg:size-7 rounded-full mx-1' />
                          </>
                        })
                      }
                    </div> : null
                  }
                </div>

                <div className='hidden lg:block  ml-2 mBlur borderGlass rounded-3xl px-3 py-1 mt-2 '>

                  <p className=' text-center lg:text-start text-3xl xl:text-4xl font-semibold text-white'>
                    {
                      data?.vote_average.toString().slice(0, 3)
                    } <span className='ml-[-3px]  text-base font-medium'>/10</span>
                  </p>
                </div>


              </div>


            </div>

            <div className=" w-auto lg:absolute bottom-0 right-20 z-[999999] block my-2">
              <div className='relative mBlur  border   borderGlass rounded-3xl p-3 lg:p-5 flex lg:flex-col flex-row items-center gap-y-3 justify-center gap-x-3  '>
                <Image src={`https://image.tmdb.org/t/p/original/${photos?.posters[0]?.file_path} `} width={50} height={50} alt="poster_Movie" className='w-32 lg:w-48 rounded-3xl block     borderGlass ' />
                <div className='flex flex-col gap-y-2'>
                  <Btn_Tra url={video?.results[0]} />
                  <Btn_Fav data={data?.id} type={"tv"} />
                  <div className='lg:hidden   ml-2 mBlur borderGlass rounded-3xl px-3 py-1 mt-2 '>

                    <p className=' text-center lg:text-start text-3xl xl:text-4xl font-semibold text-white'>
                      {
                        data?.vote_average.toString().slice(0, 3)
                      } <span className='ml-[-3px]  text-base font-medium'>/10</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>







        </div>
        <div className='lg:mx-24 mx-4 relative z-10 '>


          {
            data?.seasons?.length === 1 ? "" : <> <div className=' mt-[-10px] lg:mt-5 '>
              <p className='font-bold text-3xl xl:text-5xl  text-white  text-start  my-4'>
                | Seasons
              </p>
              <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 my-5  gap-x-4 gap-y-6">
                {
                  data?.seasons?.filter((item: any) => item.name != "Specials")?.map((item: any) => {
                    return <>
                      {
                        item?.poster_path != null ? <div key={item.id} className="col-span-1 relative hover:overflow-y-scroll Scroll-Edit  hover:shadow-green hover:shadow-2xl hover:bg-green hover:pb-4  hover:scale-105 transition-all cursor-pointer  hover:rounded-2xl group   myHover z-[99999]">
                          <div className='relative'>

                            {
                              item?.poster_path ? <Image
                                src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                                alt={item.original_name}
                                width={350} height={350}
                                className='md:min-h-[350px] group-hover:blur-2xl  skeleton bg-gradient-to-tr from-green to-yellow-200   shadow-2xl rounded-2xl w-full     hover:border-t-green hover:border-r-green hover:border-l-yellow-200  child-effect transition-all '
                              /> : <p className='md:min-h-[350px] group-hover:blur-2xl h-72 glass skeleton  shadow-2xl rounded-2xl w-full '
                              > </p>
                            }

                          </div>
                          <div>
                            <h3 className='mt-3 lg:ml-3 text-center lg:text-start text-white font-medium  lg:text-base text-sm '>
                              {item.name}
                            </h3>
                            <div className='flex gap-x-1 ml-3 mt-2'>
                              <IoIosStar className='text-yellow-400 text-xl mb-2' />
                              <p className='text-white  text-sm font-medium  '>
                                {item?.vote_average?.toString().slice(0, 3)}
                              </p>
                              <p className='text-white  text-sm font-medium  '>
                                |   {item?.air_date?.slice(0, 4)}
                              </p>
                            </div>
                          </div>
                          <div className='w-full bg-green    min-h-full top-0  slide-in-bottom  group-hover:flex  z-[100] absolute py-5 rounded-2xl hidden justify-center flex-col'>

                            <div className='w-full my-2 '>

                              <h3 className='  text-white font-bold  text-sm  lg:text-base text-center'>
                                {item.name}
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
                        </div> : null
                      }




                    </>
                  })
                }
              </div>

            </div>
            </>
          }

        </div>


        {
          recommendations?.results?.length > 0 ? <Sections data={recommendations?.results} title={title} nav={nav} /> : null
        }
        <div className='fixed top-full w-full h-full backdrop-blur-[5px]'>
        </div>
        <div className='fixed w-full h-full  top-0 bg-gradient-to-t from-main to-[#ffffff00] z-[3]  '>
        </div>
      </section>



    </>
  )
}
export default Series







