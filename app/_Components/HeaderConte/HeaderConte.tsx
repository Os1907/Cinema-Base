import React from 'react'
import HeaderSwiper from '../HeaderSwiper/HeaderSwiper'
import SwiperHome from '../Swiper/SwiperHome'
import { FaTruckLoading } from 'react-icons/fa'
import MainHome from '../MainHome/MainHome'

export default function HeaderConte() {
  return (
    <>
    {
        <HeaderSwiper /> && < SwiperHome /> ? <>
        <HeaderSwiper />
       <SwiperHome /> 
       </>  : <MainHome/> 
    }
    
    
    
    
    
    
    
    </>
  )
}
