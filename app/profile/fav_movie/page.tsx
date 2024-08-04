"use client"
import React, { useEffect, useState } from 'react'
import Sections from '@/app/_Components/Sections/Sections'
import { getUserFav } from '@/app/Utilities/apiUser'
import { MovieData } from '@/app/Utilities/Interface/interfaces'

export default function Favmovie() {
  
  const [info, setInfo] = useState()
    const [movies, setMovies] = useState<MovieData>()
  async function User_fav(){
     const userMovies = await getUserFav(localStorage.getItem('session_id')).then(data => setMovies(data))
  }
  // getUserFav
  useEffect(()=> {
    if( localStorage.getItem('session_id')){
      User_fav()
    }
  },[])
   
  return (
    <>
    <div>

              <Sections data ={movies?.results} title='Favortie movie' />
    </div>

        
    
    </>
  )
}
