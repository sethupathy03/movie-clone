import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movie from './components/Movie'
import Watchlist from './components/Watchlist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Movie />} />
          <Route path='/watchlist' element={<Watchlist />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
