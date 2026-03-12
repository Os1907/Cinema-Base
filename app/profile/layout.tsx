'use client';
import React, { useEffect, useState, useMemo, memo } from 'react'
import { getUserInfo } from '../Utilities/apiUser';
import { Iuser } from '../Utilities/Interface/interfaces';
import Image from 'next/image'
import Link from 'next/link';
import Button from '../_Components/Button/Button';
import { usePathname, useRouter } from 'next/navigation';

interface Iprop {
  children?: React.ReactNode;
}

const ProfileHeader = memo(({ info, pathname }: any) => {
  const btnCaption1: string = "Series"
  const btnCaption2: string = "Movies"

  return (
    <div className="pt-6 absolute top-5 lg:top-0 flex justify-center items-center flex-col z-50 w-full">
      {info ? (
        <>
          <Image
            src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${info?.username}`}
            alt={`${info?.username} Avatar`}
            width={50}
            height={50}
            className='rounded-full w-24 lg:w-36 p-3 mBlur borderGlass'
            loading="lazy"
          />
          <h2 className="mt-2 text-center text-white transition-all text-2xl md:text-4xl lg:text-7xl font-bold">
            {info?.username.toUpperCase()}
          </h2>
          <div className="mBlur borderGlass rounded-3xl flex justify-center text-[12px] lg:text-sm items-center text-green mt-4 gap-1 lg:gap-2">
            <p className="px-3 py-1"># {info?.id}</p>
            <p className="px-3 py-1">{info?.iso_3166_1}</p>
            <p className="px-3 py-1">{info?.iso_639_1}</p>
          </div>

          <div className='mt-2 lg:mt-4 lg:mx-24 mx-4 flex justify-around items-center mBlur borderGlass py-1 px-5 lg:px-20 rounded-full gap-x-3'>
            <Link href={'/profile/fav_movie'}>
              <button className={pathname === '/profile/fav_movie' ? 'mBlur text-white borderGlass rounded-full w-full px-10 py-2 hover:px-8 transition-all' : 'text-white w-full px-10 py-2 hover:px-8 transition-all'}>
                {btnCaption2}
              </button>
            </Link>
            <Link href={'/profile/fav_tv'}>
              <button className={pathname === '/profile/fav_tv' ? 'mBlur text-white borderGlass rounded-full w-full px-10 py-2 hover:px-8 transition-all' : 'text-white w-full px-10 py-2 hover:px-8 transition-all'}>
                {btnCaption1}
              </button>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
});

ProfileHeader.displayName = 'ProfileHeader';

export default function Layout({ children }: Iprop) {
  const pathname = usePathname()
  const router = useRouter();

  const [info, setInfo] = useState<Iuser | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchUserInfo = async () => {
      const sessionId = localStorage?.getItem('session_id')
      if (sessionId) {
        try {
          const userInfo = await getUserInfo(sessionId)
          setInfo(userInfo)
        } catch (error) {
          console.error('Failed to fetch user info:', error)
          router.push('/profile/no_account')
        }
      } else {
        router.push('/profile/no_account')
      }
    }

    if (mounted) {
      fetchUserInfo()
    }
  }, [mounted, router])

  if (!mounted) return null

  return (
    <>
      <div className='min-h-screen bg-main relative overflow-hidden'>
        <ProfileHeader info={info} pathname={pathname} />
        <div className="grid grid-cols-12">
          <div className="col-span-12 pb-16">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
