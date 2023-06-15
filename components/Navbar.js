import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='bg-slate-950 w-full flex justify-between text-white p-5 h-[8vh]'>
        <div className='text-xl font-extrabold ml-4'>
            <span>Split Sense</span>
        </div>
        <div className='mx-4 font-bold'>
            <Link className='mx-5' href={'/Home'}>Home</Link>
            <Link className='mx-5' href={'/About'}>About</Link>
            <Link className='mx-5' href={'/Friends'}>friends</Link>
            <Link className='mx-5' href={'/SignUp'}>Sign Up</Link>
        </div>
    </div>
  )
}

export default Navbar