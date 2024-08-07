import React from 'react'
import Image from 'next/image'
// import { TiMediaFastForwardOutline } from "react-icons/ti";
import { crew, getMovie, similar, videoLink, image, locationNow, watchProvider, translate } from '@/app/Utilities/apis';
import Sections from '@/app/_Components/Sections/Sections';
import CastCarousel from '@/app/_Components/Carusol/CastCarousel';

// import { MdOutlinePlayDisabled } from "react-icons/md";
import { SiGradleplaypublisher } from "react-icons/si";
import Btn_Fav from '@/app/_Components/Btn_Fav/Btn_Fav';
import Btn_Tra from '@/app/_Components/Btn_Tra/Btn_Tra';
import { Itralier, MovieData } from '@/app/Utilities/Interface/interfaces';
import { Console } from 'console';
import { getUserFav } from '@/app/Utilities/apiUser';
interface MovieProps {
  params: {
    ID: number
  }
}

export interface Ivideo {
  id: number;
  results: Itralier[]
}
const Movie = async ({ params }: MovieProps) => {
  const data: MovieData = await getMovie(params?.ID)
  const video: Ivideo = await videoLink(params?.ID, "movie")
  const Translate = await translate(params?.ID, "movie")
  const arabic = Translate?.translations?.find((item : {iso_3166_1: string}) => item.iso_3166_1 == "SA")
  // console.log(data)

  const { cast } = await crew(params?.ID)
  const recommendations = await similar(params?.ID, "movie")
  const title: string = "Recommendations"

  const photos = await image(params?.ID, "movie")

  let background = `https://image.tmdb.org/t/p/original/${photos?.backdrops[0]?.file_path}`
  let poster = photos.logos.filter((item: any) => item.iso_639_1 != "he").sort((a: any, b: any) => {
    if (a.iso_639_1?.startsWith("en") && !b.iso_639_1?.startsWith("en")) {
      return -1;
    }
    if (b.iso_639_1?.startsWith("en") && !a.iso_639_1?.startsWith("en")) {
      return 1;
    }
    return 0;
  });
  // console.log(   poster[0]?.file_path)
  // const userMovies = await getUserFav(localStorage.getItem('session_id') ,"movies")
  // console.log(userMovies)

  const location = await locationNow()

  const provider: { results: string } = await watchProvider(params?.ID, "movie")

  let value: any

  if (provider.results.hasOwnProperty(location?.country_code2)) {
    value = provider.results[location?.country_code2];
  }




  return (
    <>
      <section style={{ backgroundImage: `url(${background}) ` }} className=' lg:p t-10  relative z-[70] h-auto lg:min-h-screen bg-cover bg-center bg-fixed overflow-hidden'>
        <div className='lg:mx-24 mx-4 relative z-[999999] pt-[15rem] md:pt-96 lg:pt-16 '>


          <div className="w-full  h-auto flex flex-col justify-center mt-32 lg:mt-5 ">

            <div className='flex justify-center  relative items-start flex-col  '>
              <div className='items-center  lg:items-start w-full flex flex-col my-3 '>
                {
                  poster[0]?.file_path !=undefined ? <Image src={`https://image.tmdb.org/t/p/w500/${poster[0].file_path}`} alt='movies' width={350} height={350} className=' mt-10 h-auto lg:w-[20%] w-[35%] lg:h-auto' /> : <p className='text-3xl lg:text-5xl pt-2 3 pb-4     mBlur  borderGlass rounded-3xl inline-block    px-3 text-white font-extrabold lg:mt-10 '>
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
                

                <div className='flex gap-x-2 flex-row flex-wrap  items-center justify-center  '>
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
                  <Btn_Fav data={data?.id} type={"movie"} />
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




        <CastCarousel data={cast} />
        {
          recommendations?.results?.length > 0 ? <Sections data={recommendations?.results} title={title} /> : "No Recommendations"
        }
        <div className='fixed top-full w-full h-full backdrop-blur-[5px]'>
        </div>
        <div className='fixed w-full h-full  top-0 bg-gradient-to-t from-main to-[#ffffff00] z-[3]  '>
        </div>
      </section>


    </>
  )
}
export default Movie