import React, { useState } from 'react'
import {findvelocity,findivelocity,findacceleration,finddisplacment,findtime} from './store'
import {useDispatch, useSelector} from 'react-redux'
export default function Calculator() {
  const [find,setFind]=useState("velocity")
  const [velocity,setVelocity]=useState("")
  const [ivelocity,setIvelocity]=useState("")
  const [displacement,setDisplacment]=useState("")
  const [acceleration,setAccleration]=useState("")
  const [time,setTime]=useState("")

  const dispatch=useDispatch()
  const answer=useSelector((state)=>state.formula.value.answer)
  const formula=useSelector((state)=>state.formula.value.formula)
  function handlsubmit(e){
    e.preventDefault();
    const values={find,velocity,ivelocity,displacement,acceleration,time}
    if(values.find == "ivelocity"){
      dispatch(findivelocity(values))
    }
    else if(values.find == "velocity"){
      dispatch(findvelocity(values))
    }
    else if(values.find == "displacemnet"){
      dispatch(finddisplacment(values))
    }
    else if(values.find =="acceleration"){
      dispatch(findacceleration(values))
    }
    else if(values.find =="time"){
      dispatch(findtime(values))
    }

  }

  return (
    <div  >
      <h1 className='text-3xl font-extrabold text-center italic'> Motion in one dymention calculator</h1>
   
      <div className='flex justify-around items-center flex-wrap h-[80vh]'>
        <form onSubmit={handlsubmit} >
        <div className='text-xl'>
            <div className='flex justify-between m-3 font-bold'><p>velocity</p> <input value={velocity} onChange={(e)=>setVelocity(Number(e.target.value))} placeholder='m/s'  className='px-1 w-[50%] text-xl ml-1 rounded-md bg-slate-200'/> </div>
            <div className='flex justify-between m-3 font-bold'> <p>inital v </p><input value={ivelocity} onChange={(e)=>setIvelocity(Number(e.target.value))}  placeholder='m/s'  className='px-1 w-[50%] text-xl ml-1 rounded-md bg-slate-200'/> </div>
            <div className='flex justify-between m-3 font-bold' ><p>displacemnt </p><input value={displacement} onChange={(e)=>setDisplacment(Number(e.target.value))} placeholder='m' className='px-1 w-[50%] text-xl ml-1 rounded-md bg-slate-200'/> </div>
            <div className='flex justify-between m-3 font-bold'><p>acceleration</p> <input value={acceleration} onChange={(e)=>setAccleration(Number(e.target.value))} placeholder='m/s^2' className='px-1 w-[50%] text-xl ml-1 rounded-md bg-slate-200'/> </div>
            <div className='flex justify-between m-3 font-bold'><p>time</p> <input value={time} onChange={(e)=>setTime(Number(e.target.value))} placeholder='t' className='px-1 w-[50%]  text-xl ml-1 rounded-md bg-slate-200'/> </div>
        </div>
        <div className='flex flex-col h-3/6 justify-around items-center' >
            <div>
              <div className='text-xl font-bold mb-2 '>Find</div>
              <select  value={find} onChange={(e)=>setFind(e.target.value)} className='rounded-md '>
                <option name="velocity" id="">velocity</option>
                <option name="ivelocity" id="">ivelocity</option>
                <option name="displacemnet" id="">displacemnet</option>
                <option name="acceleration" id="">acceleration</option>
                <option name="time" id="">time</option>
              </select>
              <button className='text-lg font-semibold ml-2 bg-blue-200 px-3 rounded-md '>calculate</button>
            </div>

   
            {formula && answer ? <div className='flex flex-col'>
              <div className='mb-2 mt-2 font-semibold text-lg'>formula: {formula}</div>
              <div className='mt-2 font-extrabold text-xl'>answer={answer}</div>
            </div>:<></>}
           </div>
        </form>
      </div>
    </div>
  )
}
