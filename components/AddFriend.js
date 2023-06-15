'use-client'
import React, { useState } from 'react'

const AddFriend = () => {

    const [friend,setFriend] = useState('');
    const [trip,setTrip] = useState('');

  return (
    <div className='mt-8 bg-slate-600 m-4 border border-slate-400 rounded-lg p-4'>
        <div className='text-bold text-white font-medium text-3xl lg:text-xl text-center'>
            <span>Add Friends</span>
        </div>
        <form className='flex mt-4 justify-center items-center max-w-xl'>
            <input onChange={(e) => { setFriend(e.target.value) }} className="p-3 border border-slate-800 rounded-xl mx-2  text-black" type="text" placeholder="enter name" />
            <button className='p-3 flex font-medium text-xl text-white border border-slate-500 bg-slate-800 rounded-md w-10 h-10 items-center'>+</button>
        </form>
    </div>
  )
}

export default AddFriend