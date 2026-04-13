import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movie from './components/Movie'
import Banner from './components/Banner'
import Watchlist from './components/Watchlist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  let [watchlist, setWatchlist] = useState([]);
  function handleAddtoWatchlist(movieObj) {
    let newWatchList = [...watchlist, movieObj]
    setWatchlist(newWatchList)
    console.log(newWatchList)
  }
  let handleRemoveFromWatchlist = (movieObj) => {
    let filtered = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(filtered);
  };
  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<> <Banner /> <Movie watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /> </>} />
          <Route path='/watchlist' element={<Watchlist />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
