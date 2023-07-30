import React from 'react'

export default function InfoCard(props) {
  return (
    <div>

      <div className='text-black mt-3 space-y-2'>
        <div className='flex w-24  mx-auto justify-around items-center'><img className='w-6 h-6 mr-1' src="17736.png" alt="" /><h1 className='text-2xl'>{props.title}</h1></div>
        <div className='flex px-6 justify-center space-x-20'>
          <span className='w-40'>CurrentTemp</span>
          <p className='w-40'>{props.CurrentTemp}&#176; C</p>
        </div>
        <div className='flex  px-6 justify-center space-x-20'>
          <span className='w-40'>Feels Like</span>
          <p className='w-40'>{props.feelslike}&#176; C</p>
        </div>
        <div className='flex  px-6 justify-center space-x-20'>
          <span className='w-52'>Wind Speed</span>
          <p className='w-52'>{props.speed}m/s</p>
        </div>


      </div>




    </div>
  )
}
