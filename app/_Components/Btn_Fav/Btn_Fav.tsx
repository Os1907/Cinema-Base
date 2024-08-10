'use client'
import { getToken, getUserFav, getUserInfo, myKey } from '@/app/Utilities/apiUser';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { RiHeartAddFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
interface Iprop {
    data: number
    type: string
}
export default function Btn_Fav(props: Iprop) {
    const [alert, setAlert] = useState("   Add to Favorite")
    const [available, setAvilable] = useState(true)
    const router = useRouter();
    const detalisMovie = {
        media_type: props.type,
        media_id: props.data,
        favorite: available
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
    //first step if avilable 
    async function User_fav() {
        
        let types = props.type
        if(props.type == "movie"){
            types = 'movies'
        }
        const { results } = await getUserFav(localStorage.getItem('session_id'), `${types}`)
        const returns = results?.find((item: any) => item.id == props.data)
        // console.log(results)
        if (returns?.id == props?.data) {
            setAlert("Remove from Favorite") 
            setAvilable(false)
        }
    }

    // step two if not avilable to add movie or tv
    const log = () => {
        if (localStorage.getItem('session_id')) {
            sendMovie(localStorage.getItem('session_id'))
        }
        else {
            (async function () {
                const tokenInfo = await getToken()
                    .then((token) => router.push(`https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=https://cinema-base.vercel.app/profile/${token.request_token}`)) // ===> First Step
            })()

        }

    }
    //step three 
    async function sendMovie(sesson: string | null) {
        const send = await fetch(`https://api.themoviedb.org/3/account/20971868/favorite?api_key=${myKey}&session_id=${sesson}`, options)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                //step four if response true 
                 if(response.status_message === 'Success.'){
                 tost(response.status_message)
                } else {
                  setAlert("Add to Favorite")
                  setAvilable(true)
                //   router.refresh()

                }
            })
            .catch(err => console.error(err));

    }
    
    const tost = (status: string) => {

        setTimeout(() => {
            //step five to change button text 
            setAlert(`${status}`)
            // set Avilalbe with false to delete with another click  
            setAvilable(false)
            setTimeout(() => {
                setAlert(" Remove from Favorite ")
            }, 1000)
        }, 200)
    }


 
    useEffect(() => {
        if (localStorage.getItem('session_id')) {
            User_fav()
        }
    }, [])

    return (
        <>
<button onClick={() => log()} className=' flex flex-col gap-y-3 items-center    justify-center  mBlur  border mBlur  borderGlass  rounded-3xl py-3 px-5 lg:px-8 hover:scale-105 transition-all'>
                    <p className=' text-white text-[12px] lg:text-sm font-semibold   '>
                       
                        {
                           available ?   <RiHeartAddFill className='text-white text-sm lg:text-2xl inline  mx-1 ' /> :<MdDeleteForever className='text-white text-base lg:text-2xl inline  mx-1 ' />
                        }
                        {alert}
                    </p>
                </button>
            




        </>
    )
}
