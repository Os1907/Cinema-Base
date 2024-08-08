"use client"
import React, { useEffect, useState } from 'react'
import Sections from '@/app/_Components/Sections/Sections'
import { getUserFav } from '@/app/Utilities/apiUser'
import { MovieData } from '@/app/Utilities/Interface/interfaces'
import MainBack from '@/app/_Components/mainBack/mainBack'

export default function Favmovie() {
  
    const [movies, setMovies] = useState<MovieData>()
  let background = `https://image.tmdb.org/t/p/original/${movies?.results[0]?.backdrop_path}`

  async function User_fav(){
     const userMovies = await getUserFav(localStorage.getItem('session_id') ,"movies").then(data => setMovies(data))
  }
  // getUserFav
  useEffect(()=> {
    if( localStorage.getItem('session_id')){
      User_fav()
    }
  },[])
   
  return (
    <>
          <MainBack background={background}>
            <div className='pt-72'>

              <Sections data ={movies?.results} title=' Movies' favButton={true}/>

            </div>

    </MainBack>

        
    
    </>
  )
}
