import React from 'react'
import Trending from '../trending/page'
import Popular from '../popular/page'
import TopRate from '../toprate/page'
import 'swiper/css';
import MainHome from '../_Components/MainHome/MainHome'
import SwiperHome from '../_Components/Swiper/SwiperHome'
import HeaderSwiper from '../_Components/HeaderSwiper/HeaderSwiper';
import HeaderConte from '../_Components/HeaderConte/HeaderConte';
export default async function HomeComponents() {

  const value = {
    id: 1
  };

  return (
    <>
        {/* <HeaderSwiper />
        <SwiperHome /> */}
        <HeaderConte />
      <div className="-mt-16 md:mt-0">

      <Popular params={value} />
      </div>
      <TopRate params={value} />
      <Trending />


    </>
  )
}
