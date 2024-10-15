/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import 'swiper/css';
import '../../Swiperx.css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Trend, TrendSeries } from '@/app/Utilities/apis';
import Image from 'next/image';
import Link from 'next/link';
import { resultsMovie } from '@/app/Utilities/Interface/interfaces';
import bg from '../../../public/Images/bg.png'
import { IoIosStar } from 'react-icons/io';

function SwiperHome() {
  const [items, setItems] = useState<resultsMovie[]>([]);
  const [swiperInitialized, setSwiperInitialized] = useState(false);
  const fetchData = async () => {
    try {
      const trendingMovies = await Trend();
      const trendingSeries = await TrendSeries();
      const combinedData = [...trendingMovies.results, ...trendingSeries.results];
      setItems(combinedData.sort((a, b) => a.title > b.title ? 1 : -1));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData().then(()=> setSwiperInitialized(true) );
  }, []);


  return (

    <div className="  relative overflow-hidden  flex flex-col justify-center items-center min-h-[50vh] lg:h-[90vh]">
      <Image src={bg} alt='texture' className='absolute opacity-15 top-0 md:top-[-25%] z-[1]' />
      <Image src={bg} alt='texture2' className='absolute sm:hidden block opacity-15 top-[30%] z-[1] -rotate-180' />
      <div>
       {
        swiperInitialized ?     <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            scale: 1,
            modifier: 2,
            slideShadows: false,
           
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className=" padding" >
          {items?.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                
                <Link href={item.media_type === "tv" ? `/shows/${item.id}` : `/movie/${item.id}`}>
                  <div className='cursor-pointer  '>
                    <div className='relative'>

                  <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={`${item.title}`} width={350} height={350} className={isActive ? 'md:min-h-[350px]  rounded-2xl w-full  ' : 'md:min-h-[350px]  rounded-2xl w-full  backdrop-blur-2xl'} />
                    </div>

                    {
                         isActive ?    <>
                            {/* <div className='h-28 lg:h-32' >
                                                        <h3 className='mt-3 ml-3 text-start text-white font-medium  lg:text-base text-sm '>

                                                            {item.title || item.name}
                                                        </h3>
                                                        <div className='flex gap-x-1 ml-3 mt-2'>
                                                            <IoIosStar className='text-yellow-400 text-xl mb-2' />
                                                            <p className='text-white  text-sm font-medium  '>
                                                                {item?.vote_average?.toString().slice(0, 3)}
                                                            </p>
                                                            <p className='text-white  text-sm font-medium  '>
                                                                | {item?.release_date?.toString().slice(0, 4)
                                                                    || item?.first_air_date?.toString().slice(0, 4)}
                                                            </p>
                                                        </div>
                                                    </div> */}
                    </>: null}
                  </div>
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper> : <span className="loader"></span>
        }
      </div>
    </div>
  );
}

export default SwiperHome;