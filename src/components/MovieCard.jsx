import React from 'react'

const MovieCard = ({ watchlist,movieObj, poster_path, original_title, handleAddtoWatchlist, handleRemoveFromWatchlist }) => {
  function doesContain(movieObj) {
    for(let i=0; i<watchlist.length; i++) {
      if(watchlist[i].id === movieObj.id) return true;
    }
    return false;
  }

  return (
    <div className="h-[40vh] w-[160px] hover:cursor-pointer hover:scale-110 duration-300 flex justify-between items-end flex flex-col rounded-xl bg-center bg-cover" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`}}>
        {doesContain(movieObj) ?
          <div onClick={() => handleRemoveFromWatchlist(movieObj)} className='rounded-lg flex items-center justify-center bg-gray-900/60 h-8 w-8 m-2'>
            &#10060;
          </div> : 
          <div onClick={() => handleAddtoWatchlist(movieObj)} className='rounded-lg flex items-center justify-center bg-gray-900/60 h-8 w-8 m-2'>
            &#128525;
          </div>
        }
        <div className='text-sm text-white text-center w-full bg-gray-900/60 p-2' >
          {original_title}
        </div>
    </div>
  )
}

export default MovieCard