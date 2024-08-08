'use client'
import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"
import { FaHouseCrack } from "react-icons/fa6";
import { IoTv } from "react-icons/io5";
import { memo, useState } from "react"
import { CgProfile } from "react-icons/cg";
import Search from "../../Search/Search";
function NavCenter() {
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
  return (
    <>

<div className=" justify-center w-auto  hidden lg:flex relative items-center z-50 ">
    <ul className="flex flex-row px-1 font-semibold mt-2 gap-x-5">
      <li className="rounded-xl  py-1    text-white    hover:border-0 group"> <Link scroll={true}   href='/home' className="rounded-3xl  hover:bg-transparent transition-all hover:border-0 group"> <FaHouseCrack  className=" inline mb-1"/> HOME 
      <div  className={pathnName=== "/home"  ? "bg-white h-[2px] w-full transition-all duration-500" : "bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"}></div></Link></li>
      
      <li className="rounded-xl  py-1    text-white    hover:border-0 group"> <Link scroll={true}   href='/shows' className="rounded-3xl  hover:bg-transparent transition-all hover:border-0 group"> <IoTv  className=" inline mb-1"/> SERIES 
      <div  className={pathnName === "/shows"  ? "bg-white h-[2px] w-full transition-all duration-500 " : "bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"}></div>
      </Link>
      </li>
      <li className="rounded-xl py-1  mr-5   text-white    hover:border-0 group"> <Link scroll={true}   href='/profile/fav_movie' className="rounded-3xl  hover:bg-transparent transition-all hover:border-0 group"> <CgProfile  className=" inline mb-1 text-2xl"/>  
      <div  className={pathnName === "/profile"  ? "bg-white h-[2px] w-full transition-all duration-500 " : "bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"}></div>
      </Link>
      </li>
      {/* <CgProfile /> */}
    </ul>
    <Search/>
  </div>
    
    </>
  )
}
export default  memo(NavCenter)
