
'use client';
import { usePathname } from 'next/navigation';
import NavCenter from './NavCenter/NavCenter';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import SmallNav from './smallNav/SmallNav';

export default function Navbar() {
  const scrollRef = useRef<any>();
  const Remo = useRef<any>();
  const pathnName: string = usePathname();

  useEffect(() => {
    if (["m", "s"].includes(pathnName.slice(1, 2))) {
      scrollRef.current?.classList.remove("relative");
      scrollRef.current?.classList.add("fixed", "lg:top-2", "lg:right-[10%]", "lg:w-[80%]");
      Remo.current?.classList.add("w-full", "borderGlass");
    }

    const changeNav = () => {
      if (window.scrollY > 0) {
        scrollRef.current.classList.remove("relative");
        scrollRef.current.classList.add("fixed", "lg:top-2", "lg:right-[10%]", "lg:w-[80%]");
        Remo.current.classList.add("borderGlass");
      } else {
        Remo.current.classList.remove("borderGlass");
      }
    };

    window.addEventListener('scroll', changeNav);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, [pathnName]);

  return (
    <>
      <div ref={scrollRef} className="hidden lg:navbar lg:top-2 z-[99999999990] top-3 fixed w-full lg:w-[80%] lg:right-[10%]">
        <div ref={Remo} className="absolute top-0 h-full w-full rounded-full left-0 mBlur"></div>
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
  );
}
