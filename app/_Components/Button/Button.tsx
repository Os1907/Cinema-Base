'use client'
import UseTop from '@/app/Hooks/UseTop';
import React, { useEffect } from 'react';


interface ButtonProps {
  value?: string;
  component?: JSX.Element;
}


const Button: React.FC<ButtonProps> = ({ value , component } ) => {
 
 const top = UseTop()
  //<button formTarget="_blank" className={component ? 'z-[200] shadow-2xl lg:shadow-green cursor-pointer bg-green text-[12px] py-2 px-5 lg:text-sm lg:py-3  text-main font-semibold rounded-3xl hover:px-8 transition-all hover:bg-gradient-to-r hover:from-green hover:to-yellow-200' : 'z-[100] cursor-pointer bg-green text-[12px] py-2 px-5 lg:text-sm lg:py-3  text-main font-semibold rounded-3xl hover:px-8 transition-all hover:bg-gradient-to-r hover:from-green hover:to-yellow-200'}>
 
  return (
    <button formTarget="_blank" className={component ? 'z-[200] shadow-2xl cursor-pointer glass text-[12px] py-2 px-5 lg:text-sm lg:py-3  text-white font-semibold rounded-3xl hover:px-8 transition-all ' : 'z-[200] shadow-2xl cursor-pointer glass text-[12px] py-2 px-5 lg:text-sm lg:py-3  text-white font-semibold rounded-3xl hover:px-8 transition-all '}>
    {component}  {value}
    </button>
  );
};

export default Button;



