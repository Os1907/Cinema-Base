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

function SwiperHome() {
  const [items, setItems] = useState<resultsMovie[]>([]);
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
    fetchData();
  }, []);

  return (

    <div className="   relative overflow-hidden -m t-24 md:-m t-64  t op_up lg:p t-24 flex flex-col justify-center items-center">
      <Image src={bg} alt='texture' className='absolute opacity-15 top-0 md:top-[-10%] z-[1]' />
      <Image src={bg} alt='texture2' className='absolute sm:hidden block opacity-15 top-[50%] z-[1] -rotate-180' />
      <div>
       
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            scale: 1,
            modifier: 3.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className=" padding " >
          {items?.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                
                <Link href={item.media_type === "tv" ? `/shows/${item.id}` : `/movie/${item.id}`}>
                  <div className={isActive ? "shadow-green shadow-2xl bg-green pb-4  cursor-pointer rounded-2xl " : 'cursor-pointer'}>
                    <div className='relative'>
                  {
                         isActive ?    <div className="bg-gradient-to-r from-green to-yellow-200 rounded-full lg:px-3 lg:py-3 p-1 md:p-2 absolute md:bottom-[-3%] lg:bottom-[-5%] bottom-[-5%] right-[5%] border-4 border-green ">
                        <p className='text-main text-[10px] font-bold'>
                          {item?.vote_average?.toString().slice(0, 3)}
                        </p>
                      </div>: null}

                  <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={`${item.title}`} width={350} height={350} className={isActive ? 'md:min-h-[350px]  rounded-2xl w-full  border-4 border-green  ' : 'md:min-h-[350px]  rounded-2xl w-full  '} />
                    </div>

                    {
                         isActive ?    <>
                    <div>
                      <h3 className='py-3 lg:ml-3 text-center lg:text-start font-semibold lg:text-base text-main text-sm '>
                            {item.title || item.name }

                      </h3>
                    </div>
                    <div className='flex justify-between items-center'>
                      <p className='hoverChanger lg:text-start text-center text-main2 ml-4 text-[9px] font-semibold'>
                        {item?.release_date?.toString().slice(0, 4) || item?.first_air_date?.toString().slice(0, 4)}
                      </p>
                      <p className='hoverChanger mr-4 text-center text-main2 text-[9px] font-semibold'>
                        {item?.adult === false ? "+13" : "+18"}
                      </p>
                    </div>
                    </>: null}
                  </div>
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperHome;