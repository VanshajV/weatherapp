import React from 'react'

export default function InfoCard(props) {
  return (
    <div>

      <div className='text-black mt-3 space-y-2'>
        <div className='flex justify-center items-center'><img className=' mr-1 w-6 h-6' src="17736.png" alt="" /><h1 className='text-2xl'>{props.title}</h1></div>
        <div className='flex px-6 justify-center space-x-10'>
          <span className='text-left w-[60%] '>Current Temp</span>
          <p className=' text-right w-[40%]'>{props.CurrentTemp} &#176;C</p>
        </div>
        <div className='flex  px-6 justify-center space-x-10'>
          <span className='text-left w-[60%] '>Feels Like</span>
          <p className='text-right w-[40%]'>{props.feelslike} &#176;C</p>
        </div>
        <div className='flex  px-6 justify-center space-x-10'>
          <span className='  w-[60%] text-left'>Wind Speed</span>
          <p className=' w-[40%] text-right'>{props.speed} m/s</p>
        </div>


      </div>




    </div>
  )
}
