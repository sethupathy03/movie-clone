import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';

const Movie = ({ handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist }) => {

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const handlePre = () => {
    if(pageNo === 1) setPageNo(1);
    else setPageNo((pageNo) => pageNo-1)
  }
  const handleNext = () => {
    setPageNo((pageNo) => pageNo+1)
  }
  useEffect(() =>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e3eceafabcaf6f95bec28c8e1f703eb2&language=en-US&page=${pageNo}`)
      .then((res) => setMovies(res.data.results));
  }, [pageNo]);

  return (
    <div className='p-4'>
        <div className='text-2xl text-center font-bold m-5'>
            Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around gap-4'>
            {movies.map((movieObj) => {
              return <MovieCard watchlist={watchlist} key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} original_title={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
            })}
        </div>
        <Pagination pageNo={pageNo} handlePre={handlePre} handleNext={handleNext} />
    </div>
  )
}

export default Movie

// https://api.themoviedb.org/3/movie/popular?api_key=e3eceafabcaf6f95bec28c8e1f703eb2&language=en-US&page=1