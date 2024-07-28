
'use client';
import { usePathname } from 'next/navigation';
import NavCenter from './NavCenter/NavCenter';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import SmallNav from './smallNav/SmallNav';
import { TbSmartHome } from "react-icons/tb";
import { PiArrowBendDoubleUpLeftBold } from "react-icons/pi";
import { useRouter } from 'next/navigation'
export default function Navbar() {
  const router = useRouter();
  const scrollRef = useRef<any>();
  const Remo = useRef<any>();
  const pathnName: string = usePathname();
  
  console.log(pathnName);

 
  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 20) {
        scrollRef?.current?.classList.remove("borderGlass");
        scrollRef?.current?.classList.add("fixed", "lg:top-2", "lg:right-[10%]", "lg:w-[80%]");
        Remo.current?.classList.add("borderGlass","mBlur");
      } else {
        Remo.current?.classList.remove("borderGlass","mBlur");
      }
    };

    window.addEventListener('scroll', changeNav);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, [pathnName]);


  if (pathnName.length > 7 && pathnName.includes("/rated/") != true && pathnName.includes("/popular/") != true  && pathnName.includes("/toprate/") != true && pathnName.includes("/explore/") != true|| pathnName.includes("/movie/")  ) {
    return   <>
    <div onClick={() => router.back()} className=' naVglass size-auto p-3 absolute top-5 text-green z-[99999999990] left-4 lg:left-24 rounded-2xl transition-all hover:shadow-green hover:shadow-xl hover:scale-110'>
   
  <PiArrowBendDoubleUpLeftBold className='text-2xl'/>


    {/* <Image src="https://ovtv.me/media/svg/Broken/Arrow%20-%20Left%202.svg" alt="logo" width={30} height={30} className='text-green' /> */}
    </div>
    <div className='naVglass size-auto  p-3 absolute top-5 text-green z-[99999999990] right-4 lg:right-24 rounded-2xl transition-all hover:shadow-green hover:shadow-xl hover:scale-110'>
      <Link href={'/'} className="flex items-center gap-x-1 " scroll={true}>
    <TbSmartHome className='text-2xl inline  '/> 
    <span className="hidden lg:inline font-bold bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent uppercase">Home</span>
      </Link>

    </div>
  </>
    }else {
      return   <>
          <div ref={scrollRef} className="hidden lg:navbar lg:top-2 z-[99999999990] top-3 fixed w-full lg:w-[80%] lg:right-[10%]">
            <div ref={Remo} className="absolute top-0 h-full w-full rounded-full left-0 "></div>
            <div className="navbar-start w-full lg:w-[50%] justify-between">
              <div className="flex justify-start">
                <Link href={'/'} className="z-50" scroll={true}>
                  <p className="bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent font-extrabold text-2xl lg:ml-28 ml-5">
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
