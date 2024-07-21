import React from 'react'
import Trending from '../trending/page'
import Popular from '../popular/page'
import TopRate from '../toprate/page'
import 'swiper/css';
import MainHome from '../_Components/MainHome/MainHome'
import SwiperHome from '../_Components/Swiper/SwiperHome'
export default async function HomeComponents() {

  const value = {
    id: 1
  };

  return (
    <>
      <MainHome />
    <SwiperHome/>
        <Popular params={value} />
        <TopRate params={value} />
        <Trending />


    </>
  )
}
