"use client"
import React, { useState } from 'react'
// import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
const page = () => {

  const [friends,setFriend] = useState([]);
  const [name,setName] = useState('');
  const [tripName,setTripName] = useState('');
  const AddFriend = ()=>{
    friends.append(name);
    setFriend(friends);
  }
  const SetTrip = ()=>{
    // redirect('/About');
    const router = useRouter();
    router.push('/about');
    // console.log(error)
  }

  return (
    <>
        <div className='flex flex-col md:flex-row min-h-[92vh] items-center justify-evenly bg-slate-950'>
          <div className='flex flex-col mx-10 justify-center items-center text-white min-h-[92vh]'>
              <h1 className="text-5xl font-bold mb-5 min-w-max">Split Sense !</h1>
              <p className="text-slate-400">make your split more sensible</p>
              <div className='flex justify-center w-full'>
                <button className='border inline-block border-slate-500 bg-sky-600 hover:bg-sky-500 rounded-lg p-3 m-3 font-semibold'>Create Trip</button>
                <button className='border inline-block border-slate-500 bg-white text-gray-500 hover:bg-slate-300 rounded-lg p-3 m-3 font-semibold'>Join Trip</button> 
              </div>
          </div>
          <div className='flex flex-col flex-wrap w-[80%]  md:max-w-[480px] md:mx-5 p-4 border border-slate-600 rounded-lg bg-slate-600 text-white'>
              <h3 className='text-bold font-semibold mb-4'>Create your Trip</h3>
              <form className='text-white'>
                <label className='block'  htmlFor="trip">Trip name:</label>
                <input onChange={(e)=>{setTripName(e.target.value)}} className='bg-slate-300 p-2 mb-3 rounded-md text-gray-600 w-full' type="text" id='trip' placeholder='enter your trip name' />
                <label className='block' htmlFor='friends'>Add Your Friend:</label>
                <input onChange={(e)=>{setName(e.target.value)}} className="bg-slate-300 p-2 border border-slate-800 rounded-xl text-gray-600 w-full" type="text" placeholder="enter name" />
                <button onClick={AddFriend} className='p-2 mt-3 w-full flex font-medium text-xl border border-slate-500 bg-slate-800 rounded-md items-center justify-center'>Add</button>
                <button onClick={SetTrip} className='w-full border border-slate-500 bg-sky-600 hover:bg-sky-500 rounded-lg p-2 mt-3 font-semibold'>Create Trip</button>
              </form>
          </div>
        </div>
    </>
  )
}

export default page