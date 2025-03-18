import React from 'react'
import Link from 'next/link'
import Logo from '../../public/Nav-assets/logo'
export const Header = () => {
  return (
    <nav className='w-full z-50 px-10 py-3 bg-white text-black flex justify-between'>
        <div id="left">
            <Link className='flex items-center gap-2' href={"/"}>
                <Logo />
                <h3 className='text-[20px] font-light text-black'>Bookshelf</h3>
            </Link>
            
        </div>
        <div id="right">
            <ul className='flex gap-5'>
                <li className='px-2.5 py-1 border-2 border-[#1570EF] rounded'>Sign In</li>
                <li className='px-2.5 py-1 border-none bg-[#1570EF] text-white rounded'>Contact</li>
            </ul>
        </div>
    </nav>
  )
}
