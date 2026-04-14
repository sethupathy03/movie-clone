import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";

const Watchlist = ({ watchlist, setWatchlist, handleRemoveFromWatchlist }) => {

  const [search, setSearch] = useState("");
  const [genrelist, setGenrelist] = useState(['All Genres']);
  const [currentGenre, setCurrentGenre] = useState('All Genres');


  let sortIncreasing = () => {
    let sortedAsc = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedAsc])
  };

  let sortDecreasing = () => {
    let sortedDesc = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDesc])
  }

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {return genreids[movieObj.genre_ids[0]]});
    setGenrelist(['All Genres', ... new Set(temp)]);
  }, [watchlist]);

  return (
    <>

      <div className="flex justify-center flex-wrap m-4">
        {genrelist.map((genre) => {
          return (
            <div onClick={() => setCurrentGenre(genre)} className={currentGenre === genre ? "rounded-lg cursor-pointer bg-blue-400 text-white font-bold items-center text-md w-[9rem] h-[3rem] flex justify-center ml-4" : "rounded-lg cursor-pointer bg-gray-400 text-white font-bold items-center text-md w-[9rem] h-[3rem] flex justify-center ml-4"}>
              {genre}
            </div>
          )
        })}
      </div>

      <div className="flex justify-center my-4">
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} className="p-4 bg-slate-200 w-[18rem] h-[3rem] rounded-lg outline-none" placeholder="Search for movies..."/>
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-200 m-4">
        <table className="w-full text-center text-gray-500">
          <thead className="border-b-2">
            <th>Movie Name</th>
            <div className="flex justify-center">
              <div onClick={sortIncreasing} className="p-2 cursor-pointer"><i class="fa-solid fa-arrow-up"></i></div>
              <div className="p-2">Rating</div>
              <div onClick={sortDecreasing} className="p-2 cursor-pointer"><i class="fa-solid fa-arrow-down"></i></div>
            
            </div>
            <th>Release Date</th>
            <th>Genre</th>
          </thead>
          <tbody>
            {watchlist.filter((movieObj) => {
              if(currentGenre === 'All Genres') {
                return true;
              }
              return genreids[movieObj.genre_ids[0]] === currentGenre;
            })
            .filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((movieObj) => {
              return (
                <tr className="border-b-2">
                <td className="flex items-center px-6 py-4">
                  <img src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} className="h-[8rem] w-[6rem]"/>
                  <div className="mx-7">{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.release_date}</td>
                <td>{genreids[movieObj.genre_ids[0]]}</td>
                <td onClick={() => handleRemoveFromWatchlist(movieObj)} className=" cursor-pointer text-red-800">Delete</td>
            </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    </>
  );
};

export default Watchlist;
