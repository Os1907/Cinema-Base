"use client"
import React, { useEffect, useState, useMemo } from 'react'
import Sections from '@/app/_Components/Sections/Sections'
import { useFavoriteMovies } from '@/app/Hooks/useFavorites'
import MainBack from '@/app/_Components/mainBack/mainBack'
import { resultsMovie } from '@/app/Utilities/Interface/interfaces'

export default function Favmovie() {
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setSessionId(localStorage.getItem('session_id'))
  }, [])

  const { data: movies, isLoading, error } = useFavoriteMovies(sessionId)

  const background = useMemo(() => {
    if (movies?.results?.[0]?.backdrop_path) {
      return `https://image.tmdb.org/t/p/original/${movies.results[0].backdrop_path}`
    }
    return ''
  }, [movies])

  if (!mounted) return null

  if (isLoading) {
    return (
      <MainBack background={background}>
        <div className='pt-72 flex items-center justify-center'>
          <span className="loader mt-20 lg:mt-10"></span>
        </div>
      </MainBack>
    )
  }

  if (error) {
    return (
      <MainBack background={background}>
        <div className='pt-72'>
          <p className='text-white text-center'>Error loading your favorite movies</p>
        </div>
      </MainBack>
    )
  }

  return (
    <>
      <MainBack background={background}>
        <div className='pt-72'>
          <Sections data={movies?.results} title='Movies' favButton={true} />
        </div>
      </MainBack>
    </>
  )
}
