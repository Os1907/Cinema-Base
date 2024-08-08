'use client';
import React, { useEffect } from 'react'
import { usePathname , useRouter , useSearchParams } from 'next/navigation'
import {  myKey } from '@/app/Utilities/apiUser';
import { setTimeout } from 'timers';

export default function Page() {
  let pathnName : string=usePathname()
let token = pathnName.slice(9)
const router = useRouter();
if(token){
    localStorage?.setItem('request_token',token);
    request_Seasion(token)
}
async function request_Seasion(tokeen:string){
  
    const data = await fetch (`https://api.themoviedb.org/3/authentication/session/new?api_key=${myKey}&request_token=${tokeen}`)
    const finalData = await data.json()
    .then((finalData)=> {
        if(finalData.session_id){
            localStorage?.setItem('session_id',finalData?.session_id)
        }else{
            console.log("Faild_Create_Seasion")
        }
    }).then(()=>
        setTimeout(()=>router.push('/profile/fav_movie') ,500)
        )
    
} 



  return (
    <>
      <section className=' bg-black overflow-hidden  lg:pt-10 pt-5  pb-2 relative z-10 h-auto min-h-screen  '>
        <div className='lg:mx-24 mx-4 relative z-10 flex items-center flex-col  gap-y-4'>
        <span className="loader mt-64 lg:mt-52 "></span>
        <span className="loaderwORD text-2xl lg:text-4xl"></span>
       
         </div>

      </section>
    
    </>
  )
}
