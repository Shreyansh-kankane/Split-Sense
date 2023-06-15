'use client'
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from './Firebase';
import AddFriend from "@/components/AddFriend";

export default function Home() {

  const [total,setTotal] = useState(0);
  const [newTransc, setnewTransc] = useState({ person: '', desc: '', amount: 0 })
  const [transc, setTransc] = useState([
    // { person: 'john', desc: 'Coffee', amount: 4.95 },
    // { person: 'linda', desc: 'Movie', amount: 24.95 },
    // { person: 'casey', desc: 'candy', amount: 7.95 },
  ]);

  //add 
  const addTransc = async (e) => {
    e.preventDefault();
    if (newTransc.person !== '' && newTransc.amount !== 0 && newTransc.desc !== '') {
      await addDoc(collection(db, 'transactions'), {
        person: newTransc.person.trim().toLowerCase(),
        amount: newTransc.amount,
        desc: newTransc.desc
      });
      setnewTransc({person:'',desc:'',amount:0});
    }
  };
  //read
  useEffect(() => {
    const q = query(collection(db, 'transactions'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let transcArr = [];

      querySnapshot.forEach((transc) => {
        transcArr.push({ ...transc.data(), id: transc.id })
      })
      setTransc(transcArr);

      // total amount
      const calctotal = ()=>{
        const totalAmount = transcArr.reduce((sum,transc)=>sum + parseFloat(transc.amount),0);
        setTotal(totalAmount);
      }
      calctotal();
      return () => unsubscribe();
    });
  },[]);

  //delete
  const deleteTransc = async (id)=>{
    await deleteDoc(doc(db,'transactions',id));
  }
  
  return (
    <main className="bg-slate-950 min-h-screen">
      <div className='text-center w-full text-white'>
        <h1 className="text-5xl font-bold mb-5">Split Sense !</h1>
        <p className="text-slate-400">make your split more sensible</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center">
        {/* add expenses*/}
        <div className="p-4 mt-4 z-10 w-full max-w-4xl flex-col items-center justify-between font-mono text-sm">
          <div className="bg-slate-600 p-4 rounded-xl">
            <form className="grid grid-col-1 sm:grid-cols-7 items-center text-black">
              <input onChange={(e) => { setnewTransc({ ...newTransc, person: e.target.value }) }} className="col-span-1 sm:col-span-2 p-4 border border-slate-800 rounded-lg  " type="text" placeholder="Payed by" />
              <input onChange={(e) => { setnewTransc({ ...newTransc, desc: e.target.value }) }} className="col-span-1 sm:col-span-2 p-4 border border-slate-800 rounded-lg" type="text"  placeholder="Description" />
              <input onChange={(e) => { setnewTransc({ ...newTransc, amount: e.target.value }) }} className="col-span-1 sm:col-span-2 p-4 border border-slate-800 rounded-lg" type="text" placeholder="Enter Amount" />
              <button onClick={addTransc}
                className="p-3 col-span-1 mt-2 bg-slate-900 hover:bg-slate-800 border border-slate-500 rounded-lg text-white text-xl ">
                Add
              </button>
            </form>
            <ul>
              {transc.map((item, id) => {
                return (
                  <li key={id} className="my-2 w-full flex justify-between text-white">
                    <div className="p-3 w-full flex justify-between items-center mr-3 bg-slate-950 border border-slate-400 rounded-md">
                      <span className="capitalize">{item.person}</span>
                      <span className="capitalize">{item.desc}</span>
                      <span>${item.amount}</span>
                    </div>
                    <button onClick={() => deleteTransc(item.id)}
                      className="bg-slate-900 hover:bg-slate-800 p-3 border border-slate-500 rounded-lg text-white text-md">X</button>
                  </li>
                )
              })}
            </ul>
            {transc.length < 1 ? ('') : (
              <div className="w-full flex justify-between p-2 text-white">
                <span>Totol Expenses</span>
                <span className="mr-10">${total}</span>
              </div>
            )}
          </div>
        </div>
        {/* add friends */}
        <AddFriend />
      </div>
    </main>
  )
}
