'use client'
import React, { useEffect } from 'react'

export default function UseTop() {
    const windowTop= ()=>{
        window.scrollTo(0, 0);
      }
      useEffect(()=>{
        
        windowTop()
      },[])
      return windowTop
}
