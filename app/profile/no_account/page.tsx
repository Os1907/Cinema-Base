'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import bg from '../../../public/Images/bg.jpg'
import { getToken } from '@/app/Utilities/apiUser'
import { useRouter } from 'next/navigation';


export default function No_Account() {
    const router = useRouter();
    const log = async () => {
        const tokenInfo = await getToken().then((token) => router.push(`https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=https://cinema-base.vercel.app/profile/${token.request_token}`)) // ===> First Step
    }
    useEffect(() => {
        if (localStorage?.getItem('session_id')) {
            router.push('/profile/fav_movie')
        }

    }, [])

    return (
        <>
            <div className='bg-[url(/Images/bg.jpg)] ] bg-cover bg-center bg-fixed w-full min-h-screen flex justify-center items-center flex-col  relative'>
                <h4 className='text-white text-xl lg:text-3xl'>
                    Please log in first to use this feature
                </h4>
                <div className=' relative z-20'>
                    <button onClick={() => log()} className='bg-white text-black rounded-full px-4 py-2 mt-4 hover:px-8 transition-all'>
                        Create Account
                    </button>
                </div>
            </div>





        </>
    )
}
