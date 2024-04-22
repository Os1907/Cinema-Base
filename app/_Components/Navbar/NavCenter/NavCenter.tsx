'use client'
import { Link } from "next-view-transitions"

export default function NavCenter() {
  return (
    <>

<div className="navbar-center justify-center lg:w-[50%] hidden lg:flex relative z-50">
    <ul className="menu menu-horizontal px-1 ">
      <li className='font-semibold text-[15px]  transition-all  rounded-3xl mr-3 hover:shadow-green hover:shadow-2xl focus:bg-green focus:text-green  hover:px-6  hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent  hover:border-0 bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent   '><Link href='/home' className="rounded-3xl  hover:bg-transparent transition-all hover:border-0">Home</Link></li>
      <li className='font-semibold text-[15px] transition-all rounded-3xl mr-3  hover:shadow-green hover:shadow-2xl focus:bg-green focus:text-green  hover:px-6   hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent hover:border-0 bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent '> <Link href='/explore/1' className="rounded-3xl hover:bg-transparent transition-all hover:border-0">Search</Link></li>
      <li className='font-semibold text-[15px] transition-all rounded-3xl mr-3  hover:shadow-green hover:shadow-2xl focus:bg-green focus:text-green  hover:px-6   hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent hover:border-0 bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent '> <Link href='/tv-shows' className="rounded-3xl hover:bg-transparent transition-all hover:border-0">TV Shows</Link></li>
    </ul>
  </div>
    
    </>
  )
}
