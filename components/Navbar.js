import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='w-full flex justify-between text-white p-5 '>
        <div className='text-xl font-extrabold ml-4'>
            <span>Split Sense</span>
        </div>
        <div className='mx-4 font-bold'>
            <Link className='mx-5' href={'/home'}>Home</Link>
            <Link className='mx-5' href={'/about'}>About</Link>
            <Link className='mx-5' href={'/friends'}>friends</Link>
        </div>
    </div>
  )
}

export default Navbar