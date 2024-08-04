'use client'
import { getToken, getUserInfo, myKey } from '@/app/Utilities/apiUser';
import { MovieData } from '@/app/Utilities/Interface/interfaces';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { IoIosHeartDislike } from 'react-icons/io';
import Alert from '../Alert/Alert';
import toast, { Toaster } from 'react-hot-toast';
interface Iprop{
    data:MovieData
}
export default function Btn_Fav(props : Iprop) {
    const [alert, setAlert] = useState("   Add to Favorite")
    const router = useRouter();
    const [active, setactive] = useState(false)
    const detalisMovie = {
        media_type:"movie",
        media_id: props.data.id,
        favorite: true
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
      async function sendMovie(sesson:string | null){
        const send=await fetch(`https://api.themoviedb.org/3/account/20971868/favorite?api_key=${myKey}&session_id=${sesson}`, options)
        // https://api.themoviedb.org/3/account/20971868/favorite?session_id=68cd6c0e1555a7fc9777dba5c8b916e09b487557
        .then(response => response.json())
        .then(response => {
            tost(response.status_message)
            console.log(response)
        })
         .catch(err => console.error(err));
        // console.log(JSON.stringify(detalisMovie))

       } 
const log= () => {
    if( localStorage.getItem('session_id')){
        sendMovie(localStorage.getItem('session_id'))
    }
    else{
        // window.location.pathname="www.google.com"
        (async function(){
    const tokenInfo = await getToken()
    .then((token)=> router.push(`https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=https://cinema-base.vercel.app/shows/${token.request_token}`)) // ===> First Step
    // https://www.themoviedb.org/authenticate/1785554a657af123f8e13aeac0261824355a05e0/redirect_to=https://cinema-base.vercel.app
    //Create Season ID https://api.themoviedb.org/3/authentication/session/new?api_key=${myKey}&request_token=${token.request_token}
    // 1785554a657af123f8e13aeac0261824355a05e0
    // https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://www.yourapp.com/approved
    // https://www.themoviedb.org/authenticate/${token.request_token}
        // console.log(tokenInfo)
        })()
        // router.push("https://www.google.com")

    }
    
}
const tost = (status:string)=> {
    // toast.success('Successfully toasted!')

    setTimeout(()=>{
        // console.log("movie add to your list")
        setAlert(`${status}`)
        setactive(true)
        setTimeout(()=>{
            setAlert(" Add to Favorite")
        setactive(false)


        },3000)
    },200)
}
// console.log(session)

// {"media_type":"movie","media_id": 566525,"favorite": true}

    return (
        <>


        {/* { alert ?   <Alert/> : null   } */}
        {/* <div><Toaster  position="bottom-center"
  reverseOrder={false}/></div> */}
      {/* <Alert/> */}
{/* tost */}
{/* <button onClick={()=> log()} className=' flex flex-col gap-y-3 items-center     justify-center '> */}

<button onClick={()=> log()} className={active ? ` flex flex-col gap-y-3 items-center    justify-center  mBlur  border mBlur  borderGlass  rounded-3xl py-3 px-10 animate-pulse`:` flex flex-col gap-y-3 items-center     justify-center  mBlur  border mBlur  borderGlass rounded-3xl py-3 px-10  hover:shadow-green group hover:shadow-2xl transition-all hover:scale-105 scale-Btn-an`}>
                    <p className=' bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent text-[12px] lg:text-sm font-semibold   '>
                        <IoIosHeartDislike className='text-green text-2xl inline  mx-2 ' />
                        {alert}
                    </p>
                </button>


        </>
    )
}
