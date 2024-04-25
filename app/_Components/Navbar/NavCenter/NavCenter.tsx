'use client'
import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"
import { FaHome } from "react-icons/fa"
import { MdTravelExplore } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import { useState } from "react"
export default function NavCenter() {
  let pathnName : string=usePathname()
  const [name, setname] = useState(pathnName)
  if(pathnName == '/'){
    pathnName = '/home'
  } 
  if(pathnName.includes('/shows')){
    pathnName = '/shows'
  }
  if(pathnName.includes('/tvshows/1')){
    pathnName = '/shows'
  }
  // console.log(pathnName)
  return (
    <>

<div className="navbar-center justify-center lg:w-[50%] hidden lg:flex relative z-50">
    <ul className="flex flex-row px-1 ">
      <li className={pathnName === "/home"  ? " font-semibold text-[15px]  transition-all hover:  rounded-xl px-5 py-1   mx-5 text-main shadow-green shadow-2xl  focus:text-green  hover:border-0 bg-gradient-to-r from-green to-yellow-200    " : " font-semibold text-[15px] transition-all rounded-xl px-5 py-1   mx-5     focus:text-green   bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent"}><Link scroll={true}   href='/home' className="rounded-3xl  hover:bg-transparent transition-all hover:border-0 group"> <FaHome  className={pathnName === "/home"  ? "text-main inline mb-1" :"text-green inline mb-1"}/> Home <div className="bg-gradient-to-r from-green to-yellow-200 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></Link></li>
      <li className={pathnName === "/explore/1" ? "font-semibold text-[15px]  transition-all  rounded-xl px-5 py-1   mx-5 text-main shadow-green shadow-2xl  focus:text-green  hover:border-0 bg-gradient-to-r from-green to-yellow-200    " : " font-semibold text-[15px] transition-all rounded-xl px-5 py-1   mx-5     focus:text-green group  bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent"}> <Link scroll={true} href='/explore/1' className="rounded-3xl hover:bg-transparent transition-all hover:border-0">  <MdTravelExplore  className={pathnName === "/explore/1"  ? "text-main inline mb-1" :"text-green inline mb-1"} /> Search <div className="bg-gradient-to-r from-green to-yellow-200 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></Link></li>
      <li className={pathnName === "/shows" ? "font-semibold text-[15px]  transition-all  rounded-xl px-5 py-1   mx-5 text-main shadow-green shadow-2xl  focus:text-green  hover:border-0 bg-gradient-to-r from-green to-yellow-200    " : " font-semibold text-[15px] transition-all rounded-xl px-5 py-1   mx-5     focus:text-green   bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent"}> <Link scroll={true} href='/shows' className="rounded-3xl hover:bg-transparent transition-all hover:border-0 group"> <IoTv  className={pathnName === "/shows"  ? "text-main inline mb-1 mx-1" :"text-green inline mb-1 mx-1"} />TV Shows <div className="bg-gradient-to-r from-green to-yellow-200 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div> </Link></li>
    </ul>
  </div>
    
    </>
  )
}
