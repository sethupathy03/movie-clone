import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="flex space-x-10 text-xl font-bold border items-center pl-10 py-5">
        
        <Link to="/" className='text-blue-500'>Movies</Link>
        <Link to="/watchlist" className='text-blue-500'>Watchlist</Link>
        
    </div>
  )
}

export default Navbar