import React from 'react'
import Trending from '../trending/page'
import Popular from '../popular/page'
import TopRate from '../toprate/page'
import 'swiper/css';
import MainHome from '../_Components/MainHome/MainHome'
import SwiperHome from '../_Components/Swiper/SwiperHome'
import Navbar from '../_Components/Navbar/Navbar';
import { popular } from '../Utilities/apis';
import bg from '../../public/Images/b.png'

// import HeaderSwiper from '../_Components/HeaderSwiper/HeaderSwiper';
// import HeaderConte from '../_Components/HeaderConte/HeaderConte';
export default async function HomeComponents() {
  const data = await popular(1)
  // console.log(data.results[0].backdrop_path) //backdrop_path
let background = `https://image.tmdb.org/t/p/original/${data?.results[0].backdrop_path}`
console.log(background)
  const value = {
    id: 1
  };

  return (
    <>
        {/* <HeaderSwiper /> // */}
        {/* <HeaderConte /> */}
        {/* (${background}) */}
        {/* style={{ backgroundImage: `url('../../public/Images/b.jpg')` }} */}
        <div   className='bg-blur  backdrop-blur-2xl w-full bg-cover bg-center bg-fixed relative'>
{/* <div className='absolute top-0 w-full h-full backdrop-blur-[50px]'>
</div> */}
        <MainHome/>
        <SwiperHome /> 
      <div className="-mt-16 md:mt-0">

      <Popular params={value} />
      </div>
      <TopRate params={value} />
      <Trending />
        </div>


    </>
  )
}
