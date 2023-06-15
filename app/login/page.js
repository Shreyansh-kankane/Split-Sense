'use client'
import React from 'react'
// import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    const redirectTo = ()=>{
        router.push('/SignUp');
    }

    return (<>
      <div className='flex flex-col md:flex-row min-h-[92vh] items-center justify-evenly bg-slate-950'>
          <div className='flex flex-col mx-10 justify-center items-center text-white min-h-[92vh]'>
              <h1 className="text-5xl font-bold mb-5 min-w-max">Split Sense !</h1>
              <p className="text-slate-400">make your split more sensible</p>
              <div className='w-full flex justify-center'>
                  <button className='border inline-block border-slate-500 bg-sky-600 hover:bg-sky-500 rounded-lg p-3 m-3 font-semibold w-24'>login</button>
                  <button onClick={redirectTo} className='border inline-block border-slate-500 bg-white text-gray-500 hover:bg-slate-300 rounded-lg p-3 m-3 font-semibold'>Sign Up</button>
              </div>
          </div>
          <div className='flex flex-col flex-wrap w-[80%]  md:max-w-[480px] md:mx-5 p-4 border border-slate-600 rounded-lg bg-slate-600 text-white'>
              <h3 className='text-bold font-semibold mb-4'>Login</h3>
              <form className='text-white'>
                  <label className='block' htmlFor="email">Email</label>
                  <input className='bg-slate-300 p-2 mb-3 rounded-md text-gray-600 w-full' type="email" id='email' placeholder='Enter email' />
                  <label className='block' htmlFor='pass'>Password</label>
                  <input className="bg-slate-300 p-2 border border-slate-800 rounded-xl text-gray-600 w-full"  id='pass' type="password" placeholder="Enter password" />
                  <button className='w-full border border-slate-500 bg-sky-600 hover:bg-sky-500 rounded-lg p-2 mt-3 font-semibold'>Login</button>
              </form>
          </div>
      </div>
    </>
  )
}

export default page