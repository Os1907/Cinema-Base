'use client'
import { getToken, getUserFav, getUserInfo, myKey } from '@/app/Utilities/apiUser';
import { MovieData } from '@/app/Utilities/Interface/interfaces';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoIosHeart } from 'react-icons/io';
import { RiHeartAddFill } from "react-icons/ri";
interface Iprop {
    data: number
    type: string
}
export default function Btn_Fav(props: Iprop) {
    const [alert, setAlert] = useState("   Add to Favorite")
    const [active, setactive] = useState(false)
    const [status, setstatus] = useState(true)
    const router = useRouter();
    const detalisMovie = {
        media_type: props.type,
        media_id: props.data,
        favorite: status
    }

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjk4ZDg4NTVkNDBkNTY4MjBlNDA1ZDY3MjkxZTEzZCIsIm5iZiI6MTcyMjM2Nzc4Ni4xODA4MjQsInN1YiI6IjY1YzI1MDNhOGU4ZDMwMDE2Mjc4MjIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e9xUNvmJDxSfydLQ3v3of_uSIFAjW_GW5UYqeiAWqg8'
        },
        body: JSON.stringify(detalisMovie)
    }
    async function sendMovie(sesson: string | null) {
        const send = await fetch(`https://api.themoviedb.org/3/account/20971868/favorite?api_key=${myKey}&session_id=${sesson}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                 if(response.status_message === 'Success.'){
                 tost(response.status_message)
                } else {
                  setAlert("Add to Favorite")
            setstatus(!status)

                }
            })
            .catch(err => console.error(err));

    }
    const log = () => {
        if (localStorage.getItem('session_id')) {

            sendMovie(localStorage.getItem('session_id'))
        }
        else {

            (async function () {
                const tokenInfo = await getToken()
                    .then((token) => router.push(`https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=https://cinema-base.vercel.app/shows/${token.request_token}`)) // ===> First Step
            })()

        }

    }
    const tost = (status: string) => {

        setTimeout(() => {
            setAlert(`${status}`)
            setactive(true)
            setTimeout(() => {
                setAlert(" Remove from Favorite ")
                setactive(false)

            }, 3000)
        }, 200)
    }


    async function User_fav() {
        
        let types = props.type
        if(props.type == "movie"){
            types = 'movies'
        }
        const { results } = await getUserFav(localStorage.getItem('session_id'), `${types}`)
        const returns = results?.find((item: any) => item.id == props.data)
        if (returns?.id == props?.data) {
            setAlert("Remove from Favorite") 
            setstatus(false)
        }
    }
    // getUserFav
    useEffect(() => {
        if (localStorage.getItem('session_id')) {
            User_fav()
        }
    }, [])

    return (
        <>
<button onClick={() => log()} className={active ? ` flex flex-col gap-y-3 items-center    justify-center  mBlur  border mBlur  borderGlass  rounded-3xl py-3 px-5 lg:px-10 animate-pulse` : ` flex flex-col gap-y-3 items-center     justify-center  mBlur  border mBlur  borderGlass rounded-3xl py-3 px-5 lg:px-10  hover:shadow-black group hover:shadow-2xl transition-all hover:scale-105 scale-Btn-an`}>
                    <p className=' text-white text-[12px] lg:text-sm font-semibold   '>
                        <RiHeartAddFill className='text-green text-2xl inline  mx-1 ' />
                        {alert}
                    </p>
                </button>
            




        </>
    )
}
/**
 * 
        // https://api.themoviedb.org/3/account/20971868/favorite?session_id=68cd6c0e1555a7fc9777dba5c8b916e09b487557
 * 
 *   // router.push("https://www.google.com")
        // window.location.pathname="www.google.com" 

        // console.log(JSON.stringify(detalisMovie))

  // https://www.themoviedb.org/authenticate/1785554a657af123f8e13aeac0261824355a05e0/redirect_to=https://cinema-base.vercel.app
    //Create Season ID https://api.themoviedb.org/3/authentication/session/new?api_key=${myKey}&request_token=${token.request_token}
    // 1785554a657af123f8e13aeac0261824355a05e0
    // https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://www.yourapp.com/approved
    // https://www.themoviedb.org/authenticate/${token.request_token}
        // console.log(tokenInfo)
 */