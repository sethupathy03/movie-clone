import React from 'react'

const Banner = () => {
  return (
    <>
        <div className="bg-cover bg-center h-[20vh] md:h-[75vh] flex items-end" style={{backgroundImage: 'url(https://i.pinimg.com/1200x/0b/ac/89/0bac898999f616d08e0208933bfed909.jpg)'}}>
            <div className='text-white text-2xl bg-blue-900/60 text-center p-4 w-full'>Avengers Endgame</div>
        </div>
    </>
    
  )
}

export default Banner