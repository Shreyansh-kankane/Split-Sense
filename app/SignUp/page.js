import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
        <div className='flex flex-col md:flex-row min-h-[92vh] items-center justify-evenly bg-slate-950'>
            <div className='flex flex-col mx-10 justify-center items-center text-white min-h-[92vh]'>
                <h1 className="text-5xl font-bold mb-5 min-w-max">Split Sense !</h1>
                <p className="text-slate-400">make your split more sensible</p>
                <div className='w-full flex justify-center'>
                    <button className='border inline-block border-slate-500 bg-sky-600 hover:bg-sky-500 rounded-lg p-3 m-3 font-semibold w-24 text-center'>login</button>
                    <Link href={'login'} className='border inline-block border-slate-500 bg-white text-gray-500 hover:bg-slate-300 rounded-lg p-3 m-3 font-semibold w-24 text-center'>Sign Up</Link>
                </div>
            </div>
            <div className='flex flex-col flex-wrap w-[80%]  md:max-w-[480px] md:mx-5 p-4 border border-slate-600 rounded-lg bg-slate-600 text-white'>
                <h3 className='text-bold font-semibold mb-4'>Sign Up</h3>
                <form className='text-white grid grid-col-2'>
                    <label className='col-span-1 mx-1' htmlFor="fname">First name</label>
                    <label className='col-span-1 mx-1' htmlFor='lname'>Last name</label>

                    <input className='bg-slate-300 p-2 rounded-md text-gray-600 col-span-1 mr-2' type="email" id='fname' placeholder='enter your name' />
                    <input className="bg-slate-300 p-2  rounded-md text-gray-600 col-span-1 mr-2" type="text" placeholder="Enter last name" />

                    <label className='col-span-2 mx-1' htmlFor='lname'>Email</label>
                    <input className="bg-slate-300 p-2  rounded-md text-gray-600 col-span-2 m-1" type="email" placeholder="Enter email" />

                    <label className='col-span-2 mx-1' htmlFor='lname'>Set password</label>
                    <input className="bg-slate-300 p-2 rounded-md text-gray-600 col-span-2 m-1" type="password" placeholder="enter password" />

                    <button className='col-span-2 bg-sky-600 hover:bg-sky-500 rounded-lg p-2 mt-3 font-semibold'>Sign In</button>
                </form>
            </div>
        </div>
  )
}

export default page