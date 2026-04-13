import React from 'react'

function Pagination({ pageNo, handlePre, handleNext}) {
  return (
    <div className='p-4 mt-8 flex justify-center space-x-8'>
        <div onClick={handlePre} className='hover:cursor-pointer'><i className="fa-solid fa-angle-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className='hover:cursor-pointer'><i className="fa-solid fa-angle-right"></i></div>
    </div>
  )
}

export default Pagination