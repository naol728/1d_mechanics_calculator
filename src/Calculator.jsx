import React from 'react'

export default function Calculator() {
  return (
    <div  >
      <h1 className='text-3xl font-extrabold text-center italic'> Motion in one dymention calculator</h1>

      <div className='flex justify-around items-center flex-wrap h-[80vh]'>
        <div className='text-xl'>
            <div className='flex justify-between m-3 font-bold'><p>velocity</p> <input placeholder='m/s'  className='p-1 w-[50%] text-xl ml-1 rounded-md bg-slate-200'/> </div>
            <div className='flex justify-between m-3 font-bold'> <p>inital v </p><input placeholder='m/s'  className='p-1 w-[50%] text-xl ml-1 rounded-md bg-slate-200'/> </div>
            <div className='flex justify-between m-3 font-bold' ><p>displacemnt </p><input placeholder='m' className='p-1 w-[50%] text-xl ml-1 rounded-md bg-slate-200'/> </div>
            <div className='flex justify-between m-3 font-bold'><p>acceleration</p> <input placeholder='m/s^2' className='p-1 w-[50%] text-xl ml-1 rounded-md bg-slate-200'/> </div>
            <div className='flex justify-between m-3 font-bold'><p>time</p> <input placeholder='t' className='p-1 w-[50%]  text-xl ml-1 rounded-md bg-slate-200'/> </div>
        </div>
        <div className='flex flex-col h-3/6 justify-around items-center' >
            <div>
              <div className='text-xl font-bold mb-2 '>Find </div>
              <select value="" className='rounded-md '>
                <option name="velocity" id="">velocity</option>
                <option name="inital velocity" id="">inital velocity</option>
                <option name="displacemnet" id="">displacemnet</option>
                <option name="acceleration" id="">acceleration</option>
                <option name="time" id="">time</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <div className='mb-2 font-semibold text-lg'>formula=v=u+at</div>
              <div className='mt-2 font-extrabold text-xl'>answer=2.3m/s</div>
            </div>
        </div>
      </div>
    </div>
  )
}
