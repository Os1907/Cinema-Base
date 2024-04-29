import React from 'react'
import bg from '../../../public/Images/bg.png'
import Image from 'next/image'
import { TiMediaFastForwardOutline } from "react-icons/ti";
import { Link } from "next-view-transitions"
import Button from '@/app/_Components/Button/Button';
import { crew, getMovie, similar, videoLink } from '@/app/Utilities/apis';
import Sections from '@/app/_Components/Sections/Sections';
import CastCarousel from '@/app/_Components/Carusol/CastCarousel';
interface MovieProps {
  params: {
    ID: number
    
  }
}
const Movie: React.FC<MovieProps> =  async ({params}) => {
 const data = await getMovie(params?.ID)
const {results} = await videoLink(params?.ID)
const {cast} = await crew(params?.ID)
let director = cast?.find((item: any) => item.known_for_department === "Directing")
const recommendations = await similar(params?.ID)
// console.log(cast)
  const btnCaption: string = "Watch Trailer"
  const title :string = "Recommendations"

  

  return (
    <>
      <section className='  overflow-y-hidden bg-green  lg:pt-10 pt-5  pb-2 relative z-10  '>
        <Image src={bg} alt='' className='absolute  top-20  z-[2] opacity-10  ' />
        <Image src={bg} alt='' className='absolute h-auto lg:top-[-35%] top-[50%] z-[2] opacity-10 -rotate-180  ' />
        <div className='absolute w-full top-[-2%] bg-gradient-to-b from-main to-[#fff0] h-screen z-[1]  '>
        </div>
        <div className='w-full absolute lg:top-0 hidden   z-[0]  h-screen lg:flex justify-center'>
          <Image src={`https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`} alt='movies' width={1000} height={350} className='w-full   blur-sm opacity-25' />
        </div>
        <div className='absolute w-full bottom-[-1%] bg-gradient-to-t from-main to-[#fff0] h-screen z-[1]  '>
        </div>
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
            
                  <div className='flex justify-center relative items-start flex-col   '>
                <div className='text-center lg:text-start w-full flex flex-col '>

                  <h2 className=' hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent transition-all cursor-pointer  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent  lg:text-5xl text-4xl font-extrabold relative z-10 '>
                    {data?.title?.toUpperCase() || data?.name.toUpperCase()}
                  </h2>
                </div>
                {
                  data?.tagline ? <div className="w-full my-3 text-center lg:text-start">

                    <p className='text-[12px] lg:text-sm  rounded-3xl   inline  bg-gradient-to-r from-green to-yellow-200 px-3 text-main font-medium '>
                      {
                        data?.tagline
                      }
                    </p>
                </div> : null 
                }
                
                  
                  <p className='text-base lg:text-start text-center font-bold  w-full  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    {
                      data?.release_date || data?.first_air_date
                    }
                  </p>
                  <p className='text-base lg:text-start text-center w-full  font-bold  my-3 bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    <TiMediaFastForwardOutline className='inline mb-1 text-green mr-1 text-xl' />
                    {
                    data?.runtime
                   }M
                  </p>
                <div className='flex justify-center  lg:justify-start items-center lg:items-start lg:flex-wrap flex-col  my-3  w-full'>
                  <div className='lg:flex hidden  w-full justify-center lg:justify-start  '>
                    {
                      data?.genres.map((item: any) => <p key={item?.id} className='  font-medium mr-2 text-main  bg-gradient-to-r from-green to-yellow-200 p-1 px-3 rounded-3xl text-[10px] lg:text-[12px]  transition-all'>
                        {item?.name}
                      </p>)
                    }
                  </div>
                  <div className='flex lg:hidden  w-full  justify-center lg:justify-start mb-3 '>
                    {
                      data?.genres.map((item: any) => <p key={item?.id} className='font-medium mx-1 text-main text-center  bg-gradient-to-r from-green to-yellow-200 p-1 px-3 rounded-3xl lg:text-[12px] text-[10px]  transition-all'>
                        {item?.name}
                      </p>)
                    }
                  </div>

                </div>
                <div className='flex items-center lg:items-start flex-col w-full  '>
                  <div className='w-full '>

                  <p className='text-sm lg:text-start text-center lg:text-base font-medium  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    {
                      data?.overview
                    }
                  </p>
                  </div>
                  <div className='w-full'>

                  <p className='text-sm lg:text-base text-center lg:text-start font-medium mt-3 bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    Country : {
                      data?.origin_country
                    }
                  </p>
                  </div>
                  <div className='flex justify-center bg-gradient-to-r from-green to-yellow-200  px-2  rounded-3xl mt-3'>
                    <div className='flex  items-center w-full'>
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
                  <div className="w-full ">

                  <p className=' text-[12px] lg:text-sm text-center lg:text-start  font-medium mt-3 bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
                    Original language : {
                      data?.original_language
                    }
                  </p>
                  </div>
                  <div className='w-full '>

                  <p className='mt-3 text-center lg:text-start text-4xl font-semibold bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent'>
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
      </section>
        <div className='w-full z-50 '>
        <h3 className='text-center bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent font-extrabold  text-3xl lg:text-5xl  my-3'>
       Movie Cast
        </h3>
        </div>
        <CastCarousel data={cast} />
        {
          recommendations.total_results > 0? <Sections value={recommendations} title={title}  /> : ""
        }
      

    </>
  )
}
export default  Movie