// 'use client'
// import 'swiper/css';
// import './headerSwiper.css'
// import 'swiper/css/effect-coverflow';
// import { Trend, TrendSeries } from '@/app/Utilities/apis';
// import { resultsMovie } from '@/app/Utilities/Interface/interfaces';
// import { EffectCoverflow, Pagination, Navigation, Autoplay , FreeMode, Thumbs } from 'swiper/modules';
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export default function HeaderSwiper() {
//   const [items, setItems] = useState<resultsMovie[]>([]);
//   const fetchData = async () => {
//     try {
//       const trendingMovies = await Trend();
//       const trendingSeries = await TrendSeries();
//       const combinedData = [...trendingMovies.results, ...trendingSeries.results];
//       setItems(combinedData.sort((a, b) => a.title > b.title ? 1 : -1));
//       // console.log(combinedData);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <>

//       <div className="   relative bg-main overflow-hidden   flex flex-col justify-center items-center">
//         <div>
//           <Swiper
//             autoplay={{
//               delay: 4000,
//             }}
            
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             initialSlide={20}
//             modules={[   Autoplay]}
//             className="mySwiper " 
//             >
//                   <div className=' absolute top-24 lg:top-52  left-0 w-full z-10 '>
//                     <div className=" flex flex-col justify-center items-center " >

//           <h1 className=' bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent cursor-pointer xl:text-9xl lg:text-8xl text-5xl md:text-7xl py-2 font-extrabold transition-all '> <span className=''>Cinema</span>  Base</h1>

//           <p className='shadow-green shadow-2xl text-white uppercase lg:text-base  text-[12px] font-medium'>
//             All information about your night movie
//           </p>
//                     </div>
         
//      </div>
//             {items?.map((item) => (
//               <SwiperSlide key={item.id} className='swiper-slide-header'>
//                 {({ isActive }) => (
//                       <div className={isActive ?  "active" : ""}>
//                         <div className='relative'>
//                           <Image src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={`${item.title}`} width={350} height={350} className=' w-full hi dden md : block ' />
                         
//                            <div className='absolute w-full h-full  top-0 bg-gradient-to-t from-main to-[#fff0] z-[3]  '>
//                            </div>
//                            <div className='absolute  w-1/2 lg:w-1/3 h-full top-0  bg-gradient-to-r from-main to-[#fff0] z-[3]  '>
//                            </div>
                           
//                         </div>
//                         </div>
//                 )}
//               </SwiperSlide>

//             ))}
//           </Swiper>
         
//         </div>
//       </div>











//       {/* // shadow-green shadow-2xl bg-green pb-4 scale-105 transition-all cursor-pointer rounded-2xl my-Hover */}











//     </>
//   )
// }
