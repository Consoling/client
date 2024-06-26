import React from 'react'
import Navbar from '../src/components/Navbar/navbar'
import MovieBanner from '../src/components/MovieBanner/movieBanner'
import Footer from '../src/components/Footer/footer'
import MovieDesc from '../src/components/MovieDesc/MovieDesc'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movie = () => {
  return (
    <div className='flex flex-col '>
        
        <MovieBanner/>
        <MovieDesc />
        
    </div>
  )
}

export default Movie