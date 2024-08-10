import React from 'react'
import Trending from '../trending/page'
import Popular from '../popular/page'
import TopRate from '../toprate/page'
import 'swiper/css';
import MainHome from '../_Components/MainHome/MainHome'
import SwiperHome from '../_Components/Swiper/SwiperHome'
import { Trend } from '../Utilities/apis';
import MainBack from '../_Components/mainBack/mainBack';
import Search from '../_Components/Search/Search';
import Explore from '../explore/page';


export default async function HomeComponents() {
  const data = await Trend()
  const value = {
    id: 1
  };
  let randomNumber = Math.floor(Math.random() * 20);
  let background = `https://image.tmdb.org/t/p/original/${data?.results[randomNumber].backdrop_path}`
 
  return (
    <>
      <MainBack background={background}>
      <div className='w-full flex justify-center py-4 lg:hidden '>
        <div className='w-2/3 relative z-[51] '>
        <Search/>
        </div>
        </div>
        <MainHome />
        <div className='relative z-4'>
          <SwiperHome />
        </div>
       <Explore type="Movies"/>
        <div className="">

          <Popular params={value} />
        </div>
        <TopRate params={value} />
        <Trending />

      </MainBack>

    </>
  )
}
