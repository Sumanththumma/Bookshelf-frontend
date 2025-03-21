import React from 'react'
import Reader from '../../public/Home-assets/Reader'
const Banner = () => {
  return (
    <>
       <div className='px-20 flex items-center gap-20 w-full'>
       <Reader
        height="600px"
        width="500px"
        />
        <div id="text-box"
        className='w-1/2'>
        <h1
        className='text-6xl tracking-tighter leading-14 text-black'
        >It was never this satisfying to access the classics/Fan favourites
        </h1>
        <h3 
        className=' tracking-normal text-right text-2xl text-slate-700'
        >- Beloved readers.</h3>
        </div>

       </div>
    </>
  )
}

export default Banner