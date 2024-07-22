import React from 'react'
import Trending from '../trending/page'
import Popular from '../popular/page'
import TopRate from '../toprate/page'
import 'swiper/css';
import MainHome from '../_Components/MainHome/MainHome'
import SwiperHome from '../_Components/Swiper/SwiperHome'
import HeaderSwiper from '../_Components/HeaderSwiper/HeaderSwiper';
export default async function HomeComponents() {

  const value = {
    id: 1
  };

  return (
    <>
      <div className="min-h-screen">
        <HeaderSwiper />
        <SwiperHome />
      </div>
      <div className="-mt-32 sm:-mt-12 md:mt-0">

      <Popular params={value} />
      </div>
      <TopRate params={value} />
      <Trending />


    </>
  )
}
