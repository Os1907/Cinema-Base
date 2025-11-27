"use client"
import React, { useEffect, useState, useMemo } from 'react'
import Sections from '@/app/_Components/Sections/Sections'
import { useFavoriteTv } from '@/app/Hooks/useFavorites'
import MainBack from '@/app/_Components/mainBack/mainBack'

export default function FavTv() {
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const nav: string = "shows"

  useEffect(() => {
    setMounted(true)
    setSessionId(localStorage.getItem('session_id'))
  }, [])

  const { data: movies, isLoading, error } = useFavoriteTv(sessionId)

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
          <p className='text-white text-center'>Error loading your favorite TV shows</p>
        </div>
      </MainBack>
    )
  }

  return (
    <>
      <MainBack background={background}>
        <div className='pt-72'>
          <Sections data={movies?.results} title='Series' nav={nav} favButton={true} />
        </div>
      </MainBack>
    </>
  )
}
