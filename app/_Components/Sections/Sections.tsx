'use client'

import Image from 'next/image'
import React, { memo, useMemo } from 'react'
import bg from '../../../public/Images/bg.png'
import Link from 'next/link';
import { prop } from '@/app/Utilities/Interface/interfaces'
import { IoIosStar } from "react-icons/io";
import Btn_Fav from '../Btn_Fav/Btn_Fav';

const MovieCard = memo(({ item, nav, favButton, UrlImages }: any) => {
  if (!item?.poster_path) return null;

  const link = nav
    ? `/${nav}/${item.id}`
    : item.media_type === "tv"
      ? `/shows/${item.id}`
      : `/movie/${item.id}`;

  const title = item.title || item.name;
  const releaseYear = (item?.release_date || item?.first_air_date)?.toString().slice(0, 4) || 'N/A';
  const rating = item?.vote_average?.toString().slice(0, 3) || 'N/A';

  return (
    <div className="col-span-1 group hover:scale-105 transition-all cursor-pointer relative hover:z-[999999999999] duration-300">
      <Link href={link}>
        <div className="relative group">
          <Image
            src={UrlImages + item?.poster_path}
            alt={title}
            width={350}
            height={350}
            className="md:min-h-[350px] skeleton rounded-3xl backdrop-blur-3xl group-hover:shadow-2xl group-hover:shadow-black duration-300"
            loading="lazy"
            priority={false}
          />
        </div>
        <div>
          <h3 className="mt-3 ml-3 text-start text-white font-medium lg:text-base text-sm line-clamp-2">
            {title}
          </h3>
          <div className="flex gap-x-1 ml-3 mt-2">
            <IoIosStar className="text-yellow-400 text-xl mb-2 flex-shrink-0" />
            <p className="text-white text-sm font-medium">
              {rating}
            </p>
            <p className="text-white text-sm font-medium">
              | {releaseYear}
            </p>
          </div>
        </div>
      </Link>
      {favButton && (
        <Btn_Fav
          data={item.id}
          type={nav ? 'tv' : item.media_type === 'tv' ? 'tv' : 'movie'}
        />
      )}
    </div>
  );
});

MovieCard.displayName = 'MovieCard';

function Sections(props: prop) {
  const { value, title, nav, component, data, favButton } = props;
  const UrlImages: string = "https://image.tmdb.org/t/p/w500/";

  const memoizedCards = useMemo(() => {
    return data?.map((item: any) => (
      <MovieCard
        key={item.id}
        item={item}
        nav={nav}
        favButton={favButton}
        UrlImages={UrlImages}
      />
    )) || [];
  }, [data, nav, favButton]);

  return (
    <>
      <section className='min-h-screen lg:pt-10 pt-5 relative z-10'>
        <Image
          src={bg}
          alt='texture2'
          className='absolute sm:hidden lg:block opacity-15 top-[30%] z-[1] -rotate-180'
          loading="lazy"
        />

        <div className='lg:mx-24 mx-4 relative z-10'>
          <div className='flex justify-start relative items-center font-semibold lg:font-bold'>
            {title && (
              <h3 className='text-start text-white text-2xl md:text-3xl lg:text-5xl my-3'>
                <span className='text-4xl lg:text-6xl'>|</span> {title?.toUpperCase()}
              </h3>
            )}
          </div>

          <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 my-5 gap-x-4 gap-y-6">
            {memoizedCards}
          </div>

          {component && component}
        </div>
      </section>
    </>
  );
}

export default memo(Sections);
