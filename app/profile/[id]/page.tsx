'use client'
import React, { useEffect } from 'react'
import { usePathname , useRouter , useSearchParams } from 'next/navigation'
import {  myKey } from '@/app/Utilities/apiUser';

export default function Page() {
  let pathnName : string=usePathname()
let token = pathnName.slice(9)
const router = useRouter();
if(token){
    localStorage.setItem('request_token',token);
    request_Seasion(token)
}

async function request_Seasion(tokeen:string){
  
    const data = await fetch (`https://api.themoviedb.org/3/authentication/session/new?api_key=${myKey}&request_token=${tokeen}`)
    const finalData = await data.json()
    .then((finalData)=> {
        if(finalData.session_id){
            localStorage.setItem('session_id',finalData?.session_id)
        }else{
            console.log("Faild_Create_Seasion")
        }
    }).then(()=> router.push('/profile/fav_movie'))
} 



  return (
    <>
    <div className='bg-main text-green min-h-screen flex items-center justify-center'>

        {/* <h1 className='text-2xl '> {token} </h1> */}
    </div>
    
    </>
  )
}
