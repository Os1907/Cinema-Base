
'use client';
import { usePathname } from 'next/navigation';
import NavCenter from './NavCenter/NavCenter';
import Link from 'next/link';
import {useEffect, useRef } from 'react';
import SmallNav from './smallNav/SmallNav';
import { TfiControlBackward } from "react-icons/tfi";
import { useRouter } from 'next/navigation'
import { FaHouseCrack } from 'react-icons/fa6';
export default function Navbar() {
  const router = useRouter();
  const scrollRef = useRef<any>();
  const Remo = useRef<any>();
  const pathnName: string | undefined = usePathname();
  
const logo = useRef<any>()
 
  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 20) {
        scrollRef?.current?.classList.remove("borderGlass","lg:w-[90%]" ,"xl-w-[80%]");
        scrollRef?.current?.classList.add("fixed", "lg:top-2","lg:w-[50%]");
        logo?.current?.classList.add("hidden")
        Remo.current?.classList.add("borderGlass","backdrop-blur-3xl", "bg-[#00000013]" , "rounded-4xl");
      } else {
        Remo.current?.classList.remove("borderGlass","backdrop-blur-3xl" ,"bg-[#00000013]" , "rounded-4xl");
        scrollRef?.current?.classList.remove("lg:w-[50%]");
        scrollRef?.current?.classList.add("lg:w-[90%]" );
        logo?.current?.classList.remove("hidden")


      }
    };
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, [pathnName]);


  if (pathnName.length > 7 && pathnName.includes("/rated/") != true && pathnName.includes("/popular/") != true  && pathnName.includes("/toprate/") != true && pathnName.includes("/explore/123?") != true|| pathnName.includes("/movie/")  ) {
    return   <>
    <div onClick={() => router.back()} className=' naVglass size-auto p-3 absolute top-5 text-green z-[99999999990] left-4 lg:left-24 rounded-3xl transition-all hover:shadow-black hover:shadow-2xl hover:scale-105 cursor-pointer '>
   
  <TfiControlBackward className='text-2xl inline mb-1 mr-1'/> 
  <span className="hidden lg:inline font-bold text-white uppercase">Back</span>


    </div>
    <div className='naVglass size-auto  p-3 absolute top-5 text-green z-[99999999990] right-4 lg:right-24 rounded-3xl transition-all hover:shadow-black hover:shadow-2xl hover:scale-105'>
      <Link href={'/'} className="flex items-center gap-x-1 " scroll={true}>
    <FaHouseCrack className='text-2xl inline mb-1  '/> 
    <span className="hidden lg:inline font-bold text-white uppercase">Home</span>
      </Link>

    </div>
  </>
    }else {
      return   <>
          <div ref={scrollRef} className="hidden lg:navbar justify-center lg:top-2 z-[99999999990] top-3 fixed w-full lg:w-[90%]  -translate-x-1/2 left-1/2  ">
            <div ref={Remo} className="absolute top-0 h-full w-full rounded-full left-0  "></div>
            <div ref={logo} className="navbar-start w-full lg:w-[50%] justify-between">
              <div className="flex justify-start">
                <Link href={'/'} className="z-50" scroll={true}>
                  <p className="text-white font-extrabold text-2xl lg:ml-28 ml-5">
                    Cinema Base
                  </p>
                </Link>
              </div>
            </div>
    
            <NavCenter />
          </div>
        <SmallNav/>
        </>
     
  
    }
  
}
